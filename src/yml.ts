import fs from 'fs'
import path from 'path'
import YAML from 'yaml'

const actionsPath = path.resolve(process.cwd(), 'actions.yml')
const noticesPath = path.resolve(process.cwd(), 'notices.yml')
const actions = YAML.parse(fs.readFileSync(actionsPath, 'utf8'))
const notices = YAML.parse(fs.readFileSync(noticesPath, 'utf8'))
export const yml = {
  actions: actions as { href: string; fills: string }[],
  notices: notices as { href: string; fills: string }[],
}
