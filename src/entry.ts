import fs from 'fs-extra'
import path from 'node:path'
import { toFirstUpperCase } from './utils'

const typesPath = path.resolve(process.cwd(), 'types')
const entryPath = path.resolve(process.cwd(), 'index.ts')

let imports = ''
const exportsObject = {}
fs.readdirSync(typesPath).forEach((file) => {
  let name = file.replace('.ts', '')
  name = name.split('-').map(toFirstUpperCase).join('')
  imports += `import ${name} from './types/${file}';\n`
  exportsObject[name] = name
})

console.log(imports)
console.log(exportsObject)
