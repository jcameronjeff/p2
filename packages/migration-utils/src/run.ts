import fs from 'fs';
import path from 'path';
import { capitalizeFirstLetter, convertLine, convertSlugToIconComponent, migrateFile, onlyUnique } from './'






var walk = function(dir:string, done:any) {
  var results:any[] = [];
  fs.readdir(dir, function(err, list) {
    if (err) return done(err);
    var pending = list.length;
    if (!pending) return done(null, results);
    list.forEach(function(file) {
      file = path.resolve(dir, file);
      fs.stat(file, function(err, stat) {
        if (stat && stat.isDirectory()) {
          walk(file, function(err:Error, res:unknown) {
            results = results.concat(res);
            if (!--pending) done(null, results);
          });
        } else {
          results.push(file);
          if (!--pending) done(null, results);
        }
      });
    });
  });
  return;
};





// let pathToDoc = path.resolve(__dirname, '../../../../prism/docs-next/docs/components/icons.mdx')
// let outputDoc = path.resolve(__dirname, '../../../../prism/docs-next/docs/components/icons-2.mdx')

let pathToDocs = path.resolve(__dirname, '../../../../prism/docs-next/docs/components')
function main() {
  let mdxFiles:string[] = []
  let pathToDocs = path.resolve(__dirname, '../test')
  walk(pathToDocs, (err:Error, res:string[]) => {
    if (err) {
      console.log(err);
      return;
    }
    let items = res.filter(r => r.endsWith('.mdx'))
    items.forEach(item => {
      console.log(item)
      console.log(item + '.mod')
      migrateFile(item, item + '-new.mdx')
    })

  })


  // migrateFile(
  //   path.resolve(__dirname, '../test/doc.mdx'),
  //   path.resolve(__dirname, '../test/doc-mod.mdx')
  // )
  let capitalized = capitalizeFirstLetter('Hello') //?
  let unique = ['a','a','b','c','c','d'].filter(onlyUnique) //?
  let icon = convertSlugToIconComponent('360-interior') //?
  let converted = convertLine(`<div><Icon glyph='arrow-up' /></div>`) //?
  // console.log(capitalized, unique, icon, converted)
}

main()
