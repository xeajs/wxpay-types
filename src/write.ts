import fs from 'node:fs'
import path from 'node:path'

export function getType(type: string) {
  if (type === 'integer') return 'number'
  if (/string\(/.test(type)) return 'string'
  if (type === 'array') return 'any[]'
  if (/array\[/.test(type)) return `${type.replace(/array|\[|\]/g, '')}[]`
  return type
}

export function writeTypes(dir: string, desc: IDesc, types: IType[]) {
  const fileDesc = `/**
 * @title ${desc.title}
 * @subTitle ${desc.subTitle}
 * @支持的商户 ${desc.supportMerch}
 * @path ${desc.path}
 */\n\n`
  let typeString = fileDesc

  for (const item of types) {
    if (item.description) {
      typeString += `/** @description ${item.description} */\n`
    }
    if (item.children?.length) {
      typeString += `export type ${item.name} = {\n`
      for (const { name, description, type, required } of item.children) {
        if (description) typeString += `  /** ${description} */\n`
        typeString += `  ${name}${required ? '' : '?'}: ${getType(type)}\n`
      }
      typeString += '}\n'
    } else {
      typeString += `export type ${item.name} = ${item.type}\n`
    }
  }
  fs.mkdirSync(dir, { recursive: true })
  fs.writeFileSync(path.resolve(dir, desc.fileName), typeString, 'utf-8')
}
