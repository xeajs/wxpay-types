import cheerio from 'cheerio'

export function toFirstUpperCase(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export function getDesc($: cheerio.CheerioAPI, uri: string) {
  // 标题
  const title = '.content-title'
  // 子标题
  const subTitle = '#main-content > p'
  // 支持商户
  const supportMerch = '#接口说明 .intro-row:nth-child(1) .intro-content'
  // 请求方式
  const method = '#接口说明 .intro-row:nth-child(2) .intro-content > span:nth-child(1)'
  // 请求地址
  const path = '#接口说明 .intro-row:nth-child(2) .intro-content > span:nth-child(2)'
  // 域名
  const domain = '#接口说明 .intro-row:nth-child(3) .intro-domain-inner-container:nth-child(1) .intro-domain .code'
  const pathName = uri.split('/').at(-1)?.split('.')[0].split('-').map(toFirstUpperCase).join('') || ''
  const fileName = uri.split('/').at(-1)?.replace('html', 'ts') || 'index copy.ts'
  return {
    title: $(title).text(),
    subTitle: $(subTitle).text(),
    supportMerch: $(supportMerch).text(),
    method: $(method).text(),
    path: $(path).text(),
    pathName,
    fileName,
    domain: $(domain).text(),
  }
}

export function getCheerio(html: string) {
  return cheerio.load(html).root()
}

export function domToJson($: cheerio.CheerioAPI, fieldDomList: cheerio.Cheerio) {
  const dJson: IType[] = []
  fieldDomList.each(function (index, ele) {
    const name = $(ele).find('> .field-title .field-name').text()
    const required = $(ele).find('> .field-title .field-required').text()
    const type = $(ele).find('> .field-title .field-tags').text()
    const description = $(ele).find('> .field-desc').text()
    dJson.push({ name, required: required === '必填', type, description })
  })
  return dJson
}
