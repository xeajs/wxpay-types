import fs from 'fs-extra'
import path from 'node:path'
import { toFirstUpperCase } from './utils'

let typesImports = ''
const typesExportsObject = {}
fs.readdirSync(path.resolve(process.cwd(), 'types'))
  .map((dir) => {
    const entryDirPath = path.resolve(process.cwd(), 'types', dir)
    const entryFilePath = path.resolve(entryDirPath, 'index.ts')

    let imports = ''
    const exportsObject = {}
    fs.readdirSync(entryDirPath).forEach((file) => {
      let name = file.replace('.ts', '')
      name = name.split('-').map(toFirstUpperCase).join('')
      imports += `import * as ${name} from './${file.replace('.ts', '')}'\n`
      exportsObject[name] = name
    })
    fs.writeFileSync(entryFilePath, imports, 'utf-8')
    fs.appendFileSync(entryFilePath, `\nexport type { ${Object.keys(exportsObject).join(', ')} }\n`, 'utf-8')
    return dir
  })
  .map((name) => {
    typesImports += `import * as ${name} from './${name}'\n`
    typesExportsObject[name] = name
  })
fs.writeFileSync(path.resolve(process.cwd(), 'types/index.ts'), typesImports, 'utf-8')
fs.appendFileSync(path.resolve(process.cwd(), 'types/index.ts'), `\nexport type { ${Object.keys(typesExportsObject).join(', ')} }\n`, 'utf-8')
