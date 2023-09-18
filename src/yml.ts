import fs from 'fs-extra'
import path from 'path'
import YAML from 'yaml'

export const ymls = fs.readdirSync(path.resolve(process.cwd(), 'conf')).map((fp) => {
  const dir = path.resolve(process.cwd(), 'conf', fp)
  const actionsPath = path.resolve(dir, 'actions.yml')
  const noticesPath = path.resolve(dir, 'notices.yml')
  const actions = YAML.parse(fs.readFileSync(actionsPath, 'utf8')) as { href: string; fills: string }[]
  const notices = YAML.parse(fs.readFileSync(noticesPath, 'utf8')) as { href: string; fills: string }[]
  return { actions, notices, outDir: path.resolve(process.cwd(), 'types', fp) }
})
