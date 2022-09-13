const {readFile, writeFile} = require('fs');
export type StringCallback<T = string> = (arg0: T) => void

// returns a given string with the first letter capitalized
export const capitalizeFirstLetter = (string:string) => string.charAt(0).toUpperCase() + string.slice(1)

// remove any duplciate values from an array
export const onlyUnique = <T = string>(value:T, index:number, self:T[]) => self.indexOf(value) === index

// separate parts by '-', capitalize each part and then smoosh them back together.
// Then do gross hard rewrite of '360' to 'ThreeSixty' to keep node happy and finally
// append 'Icon' to match naming convention
export const convertSlugToIconComponent = (capture:string) => {
  return capture.split('-').map(capitalizeFirstLetter).join('').replace('360', 'ThreeSixty') + 'Icon';
}

// accepts a string, generally markup for a single JSX element. Returns the
// original string but with instances of prism 1.0 implementations of icons
// replaces with their 2.0 counterpart.
export function convertLine(str:string, callback:StringCallback<string[]> = () => {}) {
  const iconComponentMatcher = /<(Icon|IconSVG)([a-zA-z|\s|\S]*)(?:glyph=)["|']([a-zA-z0-9|-]*)["|'][^\/>]*(\/>)/gms
  const iconSpanMatcher = /<(span|i)[\s|\S|a-zA-Z]*(className="icon prism-icon-)([a-zA-Z0-9|-]*)[^\/>]*(\/>)/g
  const replacer = (match:string, __:string, ___:string, glyph:string) => {
    let Component = convertSlugToIconComponent(glyph);
    callback([Component, match]);
    return `<${Component} className="h-4" />`
  }
  return str
    .replace(iconComponentMatcher, replacer)
    .replace(iconSpanMatcher, replacer)
}

// iterate through every tag in a file and run our migration method, then return
// the modified file with a generated import statement prepended.
export function migrateIconMarkup(inputData:string, callback:StringCallback<string[][]> = () => {}) {
  let imports:string[] = [];
  let diffs:string[][] = []
  const addModuleToImports:StringCallback<string[]> = (x) => {
    imports.push(x[0])
    diffs.push(x)
  }
  const getModulesListFrom:StringCallback<string[]> = (x) => x.filter(onlyUnique).join(',')
  // This is a bit of a hack but works. Here we create an array that includes
  // each JSX tag from the input delineated by `>`.
  const elements = inputData.split('>').map(i => `${i}>`).slice(0,-1) //?
  // Below we map over each JSX tag and convert any P1 icons before putting
  // them back together as a single string.
  const convertedContents = elements.map(i => convertLine(i, addModuleToImports)) //?
  callback(diffs)
  return [
    `import { ${getModulesListFrom(imports)} } from '@prism2/icons-react/prism'\n`,
    `\n`,
    ...convertedContents
  ].join('') //?
}

type IMigrateFile = (filename:string, outFile:string|null)  => void;
export const migrateFile:IMigrateFile = (filename, outFile) => {
  // Handler function allows us to pass an input and output file to
  // pass through our migration function as well as pass along
  // some basic error handling
  const transformCallback = (res:string[][]) => res.forEach(((r,i) => console.log(i, ...r)))
  const handleError = (err:Error) => {
    if (err) {
      console.log(err);
      throw new Error('Problem reading file')
    }
  }
  readFile(filename, 'utf-8', function (err:Error, contents:string) {
    handleError(err) // this will throw for us, everything else is safe
    writeFile(outFile || filename, migrateIconMarkup(contents, transformCallback), 'utf-8', handleError);
  })
  return;
}



