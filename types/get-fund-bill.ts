/**
 * @title 申请资金账单
 * @subTitle 微信支付按天提供微信支付账户的资金流水账单文件，商户可以通过该接口获取账单文件的下载地址。文件内包含该账户资金操作相关的业务单号、收支金额、记账时间等信息，供商户进行核对。注意：账单文件包括明细数据和汇总数据两部分，每一部分都包含一行表头和若干行具体数据。
明细数据每一行对应一笔资金操作，同时每一个数据前加入了字符`，以避免数据被Excel按科学计数法处理。如需汇总金额等数据，可以批量替换掉该字符。
 * @支持的商户 
 * @path 
 */

/** @description 查询参数 */
export type GetFundBillReqQuery = {
  /** 【账单日期】 账单日期，格式yyyy-MM-DD，仅支持三个月内的账单下载申请。 */
  bill_date: string
  /** 【资金账户类型】 资金账户类型，不填默认是BASIC可选取值：BASIC: 基本账户OPERATION: 运营账户FEES: 手续费账户ALL: 所有账户（该枚举值只限电商平台下载二级商户资金流水账单场景使用） */
  account_type?: string
  /** 【压缩格式】 压缩格式，不填则以不压缩的方式返回数据流可选取值：GZIP: GZIP格式压缩，返回格式为.gzip的压缩包账单 */
  tar_type?: string
}
/** @description 接口响应 */
export type GetFundBillRes = {
  /** 【哈希类型】 哈希类型可选取值：SHA1: Secure Hash Algorithm 1 */
  hash_type: string
  /** 【哈希值】 原始账单（gzip需要解压缩）的摘要值，用于校验文件的完整性 */
  hash_value: string
  /** 【下载地址】 供下一步请求账单文件的下载地址，该地址5min内有效。 */
  download_url: string
}
