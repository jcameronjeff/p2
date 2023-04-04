const fs = require('fs').promises
const camelcase = require('camelcase')
const { promisify } = require('util')
const rimraf = promisify(require('rimraf'))
const svgr = require('@svgr/core').default
const babel = require('@babel/core')
const { compile: compileVue } = require('@vue/compiler-dom')
const { dirname } = require('path')

let transform = {
  react: async (svg, componentName, format) => {
    let component = await svgr(svg, { ref: true, titleProp: true }, { componentName })
    let { code } = await babel.transformAsync(component, {
      plugins: [[require('@babel/plugin-transform-react-jsx'), { useBuiltIns: true }]],
    })

    if (format === 'esm') {
      return code
    }

    return code
      .replace('import * as React from "react"', 'const React = require("react")')
      .replace('export default', 'module.exports =')
  },
  vue: (svg, componentName, format) => {
    let { code } = compileVue(svg, {
      mode: 'module',
    })

    if (format === 'esm') {
      return code.replace('export function', 'export default function')
    }

    return code
      .replace(
        /import\s+\{\s*([^}]+)\s*\}\s+from\s+(['"])(.*?)\2/,
        (_match, imports, _quote, mod) => {
          let newImports = imports
            .split(',')
            .map((i) => i.trim().replace(/\s+as\s+/, ': '))
            .join(', ')

          return `const { ${newImports} } = require("${mod}")`
        }
      )
      .replace('export function render', 'module.exports = function render')
  },
}

async function getIcons(style) {
  let files = await fs.readdir(`./optimized/${style}`)
  return Promise.all(
    files.map(async (file) => ({
      svg: await fs.readFile(`./optimized/${style}/${file}`, 'utf8'),
      componentName: `${camelcase(file.replace(/\.svg$/, ''), {
        pascalCase: true,
      })}Icon`,
    }))
  )
}

function exportAll(icons, format, includeExtension = true) {
  return icons
    .map(({ componentName }) => {
      let extension = includeExtension ? '.js' : ''
      if (format === 'esm') {
        return `export { default as ${componentName} } from './${componentName}${extension}'`
      }
      return `module.exports.${componentName} = require("./${componentName}${extension}")`
    })
    .join('\n')
}

async function ensureWrite(file, text) {
  await fs.mkdir(dirname(file), { recursive: true })
  await fs.writeFile(file, text, 'utf8')
}

async function ensureWriteJson(file, json) {
  await ensureWrite(file, JSON.stringify(json, null, 2))
}

async function buildIcons(package, style, format) {
  let outDir = `./${package}/${style}`
  if (format === 'esm') {
    outDir += '/esm'
  }

  let icons = await getIcons(style)

  await Promise.all(
    icons.flatMap(async ({ componentName, svg }) => {
      let content = await transform[package](svg, componentName, format)
      let types =
        package === 'react'
          ? `import * as React from 'react';\ndeclare function ${componentName}(props: React.ComponentProps<'svg'>): JSX.Element;\nexport default ${componentName};\n`
          : `import type { FunctionalComponent, HTMLAttributes, VNodeProps } from 'vue';\ndeclare const ${componentName}: FunctionalComponent<HTMLAttributes & VNodeProps>;\nexport default ${componentName};\n`

      return [
        ensureWrite(`${outDir}/${componentName}.js`, content),
        ...(types ? [ensureWrite(`${outDir}/${componentName}.d.ts`, types)] : []),
      ]
    })
  )

  await ensureWrite(`${outDir}/index.js`, exportAll(icons, format))

  await ensureWrite(`${outDir}/index.d.ts`, exportAll(icons, 'esm', false))
}

async function main(package) {
  const cjsPackageJson = { module: './esm/index.js', sideEffects: false }
  const esmPackageJson = { type: 'module', sideEffects: false }

  console.log(`Building ${package} package...`)

  await Promise.all([
    rimraf(`./${package}/20/solid/*`),
    rimraf(`./${package}/prism/*`),
    rimraf(`./${package}/interstate/*`),
    rimraf(`./${package}/24/outline/*`),
    rimraf(`./${package}/24/solid/*`),
  ])

  await Promise.all([
    buildIcons(package, '20/solid', 'cjs'),
    buildIcons(package, '20/solid', 'esm'),
    buildIcons(package, 'prism', 'cjs'),
    buildIcons(package, 'prism', 'esm'),
    buildIcons(package, 'interstate', 'cjs'),
    buildIcons(package, 'interstate', 'esm'),
    buildIcons(package, '24/outline', 'cjs'),
    buildIcons(package, '24/outline', 'esm'),
    buildIcons(package, '24/solid', 'cjs'),
    buildIcons(package, '24/solid', 'esm'),
    ensureWriteJson(`./${package}/20/solid/esm/package.json`, esmPackageJson),
    ensureWriteJson(`./${package}/20/solid/package.json`, cjsPackageJson),
    ensureWriteJson(`./${package}/prism/esm/package.json`, esmPackageJson),
    ensureWriteJson(`./${package}/prism/package.json`, cjsPackageJson),
    ensureWriteJson(`./${package}/interstate/esm/package.json`, esmPackageJson),
    ensureWriteJson(`./${package}/interstate/package.json`, cjsPackageJson),
    ensureWriteJson(`./${package}/24/outline/esm/package.json`, esmPackageJson),
    ensureWriteJson(`./${package}/24/outline/package.json`, cjsPackageJson),
    ensureWriteJson(`./${package}/24/solid/esm/package.json`, esmPackageJson),
    ensureWriteJson(`./${package}/24/solid/package.json`, cjsPackageJson),
  ])

  return console.log(`Finished building ${package} package.`)
}

let [package] = process.argv.slice(2)

if (!package) {
  throw new Error('Please specify a package')
}

main(package)

/* This code builds a package of icons in various formats, such as React and Vue, in two sizes (20px and 24px) and two styles (Solid and Outline).

 It uses the fs module to read directories and files, the camelcase module to convert a file name into camelCase format, the rimraf module to remove files from a directory, the svgr module to convert SVG into React components, the babel module to transform JSX into JavaScript, the @vue/compiler-dom module to compile Vue components, the path module to get file names, and the promisify utility from util. It defines an object with two functions that transform SVG into React or Vue components.
 
 It defines an asynchronous function getIcons() which reads a given style's directory of optimized files and returns an array of icons. It defines a function exportAll() which exports all icons in either CommonJS or ES modules format. 
 
 Lastly it defines an asynchronous function buildIcons() which builds all icons for a package in both CommonJs and ES modules format. Additionally it writes out package.json for each folder in both formats with sideEffects set to false. Lastly it defines an asynchronous function main() which calls buildIcons() on a given package passed as an argument when running the code.
*/

/* > rimraf ./interstate ./optimized/interstate && svgo --config=svgo.interstate.yaml -f ./src/interstate -o ./optimized/interstate --pretty --indent=2 && mkdir -p ./interstate && cp -R ./optimized/interstate ./interstate

TypeError: Cannot set properties of undefined (setting '__DIR')
    at Cmd.<anonymous> (/Users/jefestudio/Code/prism2/node_modules/.pnpm/svgo@1.3.2/node_modules/svgo/lib/svgo/coa.js:194:34)
    at /Users/jefestudio/Code/prism2/node_modules/.pnpm/coa@2.0.2/node_modules/coa/lib/cmd.js:417:45
    at _fulfilled (/Users/jefestudio/Code/prism2/node_modules/.pnpm/q@1.5.1/node_modules/q/q.js:854:54)
    at /Users/jefestudio/Code/prism2/node_modules/.pnpm/q@1.5.1/node_modules/q/q.js:883:30
    at Promise.promise.promiseDispatch (/Users/jefestudio/Code/prism2/node_modules/.pnpm/q@1.5.1/node_modules/q/q.js:816:13)
    at /Users/jefestudio/Code/prism2/node_modules/.pnpm/q@1.5.1/node_modules/q/q.js:624:44
    at runSingle (/Users/jefestudio/Code/prism2/node_modules/.pnpm/q@1.5.1/node_modules/q/q.js:137:13)
    at flush (/Users/jefestudio/Code/prism2/node_modules/.pnpm/q@1.5.1/node_modules/q/q.js:125:13)
    at processTicksAndRejections (node:internal/process/task_queues:78:11)
 ELIFECYCLE  Command failed with exit code 1. 
*/
