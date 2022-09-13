import { migrateFile, migrateIconMarkup, convertLine } from '../src';
import { describe, test, expect, beforeAll } from 'vitest';
import path from 'path'

const complexStr =
`<div className="d-flex justify-content-center">
  <i className="icon prism-icon-checkmark-circle text-success display-4" />
  <Icon glyph="checkmark-circle" color="success" className="display-4 mx-3" />
  <IconSvg glyph="checkmark-circle" color="success" height="35px" />
</div>`

const targetStr =
`import { CheckmarkCircleIcon } from '@prism2/icons-react/prism'

<div className="d-flex justify-content-center">
  <CheckmarkCircleIcon className="h-4" />
  <CheckmarkCircleIcon className="h-4" />
  <CheckmarkCircleIcon className="h-4" />
</div>`

const iMarkup = `<i className="icon prism-icon-checkmark-circle text-success display-4" />`
const iconMarkup = `<Icon glyph="checkmark-circle" color="success" className="display-4 mx-3" />`
const threeSixtyMarkup = `<Icon glyph="360-interior" color="success" className="display-4 mx-3" />`
const svgMarkup = `<IconSvg glyph="checkmark-circle" color="success" height="35px" />`
const spanMarkup = `<span className="icon prism-icon-checkmark-circle text-success display-4" />`
const targetMarkup = `<CheckmarkCircleIcon className="h-4" />`
const target360 = `<ThreeSixtyInteriorIcon className="h-4" />`



describe('Icon migration utility', () => {
  test('converts span tags as expected', () => {
    expect(convertLine(spanMarkup)).toEqual(targetMarkup)
  })
  test('converts i tags as expected', () => {
    expect(convertLine(iMarkup)).toEqual(targetMarkup)
  })
  test('converts <Icon/> tags as expected', () => {
    expect(convertLine(iconMarkup)).toEqual(targetMarkup)
  })
  test('converts <IconSVG /> tags as expected', () => {
    expect(convertLine(svgMarkup)).toEqual(targetMarkup)
  })
  test('converts "360-*" glyphs to ThreeSixty*', () => {
    expect(convertLine(threeSixtyMarkup)).toEqual(target360)
  });
})
describe('File manipulation', () => {
  beforeAll(() => {
    migrateFile(
      path.resolve(__dirname, 'doc.mdx'),
      path.resolve(__dirname, 'doc-new.mdx')
    )
  })
  test('converts blocks of code with multiple usage variations', () => {
    expect(migrateIconMarkup(complexStr)).toEqual(targetStr)
  });
  test('prepends the necessary imports', () => {

  })
  test('converts a file', () => {

  })
})
