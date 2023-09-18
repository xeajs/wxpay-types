import Crawler from 'crawler'
import fs from 'fs-extra'
import path from 'node:path'
import { domToJson, getCheerio, getDesc } from './utils'
import { writeTypes } from './write'
import { ymls } from './yml'

fs.emptyDirSync(path.resolve(process.cwd(), 'types'))

for (const yml of ymls) {
  new Crawler({
    callback: (error, res, done) => {
      if (error) throw error
      const $ = res.$
      const uri = res.request.uri.path!
      const desc = getDesc($, uri)
      const types: IType[] = []
      // 请求参数
      const $req = $('#请求参数').next().eq(0).find('.left > .fields')
      //   应答参数
      const $res = $('#应答参数').next().eq(0).find('.left > .fields')

      // fill
      const fillObject = yml.actions.find((d) => d.href === res.request.uri.href)?.fills || {}
      for (const fill of Object.keys(fillObject)) {
        const root = getCheerio(fillObject[fill])
        const description = ''
        const required = true
        const type = 'object'

        const children = domToJson($, root.find('.field-list').eq(0).find('> .field'))
        types.push({ name: fill, description, required, type, children })
      }

      $req.each(function (index, ele) {
        const name = $(ele).find('.req-header>span').text()
        const description = $(ele).find('.req-header-desc').text()
        const required = true
        const type = 'object'
        if (name === 'Header') return
        const children = domToJson($, $(ele).find('.field-list .field'))
        types.push({ name: `${desc.pathName}Req${name}`, description, required, type, children })
      })

      $res.each(function (index, ele) {
        const description = '接口响应'
        const required = true
        const type = 'object'
        const children = domToJson($, $(ele).find('.field-list .field'))
        types.push({ name: `${desc.pathName}Res`, description, required, type, children })
      })

      writeTypes(yml.outDir, desc, types)
      done()
    },
  }).queue(yml.actions.map((d) => d.href))

  new Crawler({
    callback: async (error, res, done) => {
      if (error) throw error
      const $ = res.$
      const uri = res.request.uri.path!
      const desc = getDesc($, uri)
      const types: IType[] = []

      // fill
      const fillObject = yml.notices.find((d) => d.href === res.request.uri.href)?.fills || {}
      for (const fill of Object.keys(fillObject)) {
        const root = getCheerio(fillObject[fill])
        const description = ''
        const required = true
        const type = 'object'
        const children = domToJson($, root.find('.field-list').eq(0).find('> .field'))
        types.push({ name: fill, description, required, type, children })
      }
      ;(() => {
        // 通知参数请求参数
        const $ctxBodyFields = $('#字段说明~.columns').eq(0).find('.left .fields')
        const name = 'BodyFields'
        const description = '通知参数'
        const required = true
        const type = 'object'
        const children = domToJson($, $ctxBodyFields.find('.field-list .field'))
        types.push({ name, description, required, type, children })
      })()
      ;(() => {
        // 通知请求参数解密
        const $ctxBodyDecryptFields = $('#字段说明~.columns').eq(1).find('.left > .fields')
        const name = 'BodyDecryptFields'
        const description = 'resource解密后字段'
        const required = true
        const type = 'object'
        const children = domToJson($, $ctxBodyDecryptFields.find('.field-list > .field'))
        types.push({ name, description, required, type, children })
      })()
      writeTypes(yml.outDir, desc, types)
      done()
    },
  }).queue(yml.notices.map((d) => d.href))
}
