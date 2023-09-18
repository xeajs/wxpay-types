/**
 * @title 申请交易账单
 * @subTitle 微信支付按天提供交易账单文件，商户可以通过该接口获取账单文件的下载地址。文件内包含交易相关的金额、时间、营销等信息，供商户核对订单、退款、银行到账等情况。注意：
 * @支持的商户 
 * @path 
 */

/** @description 查询参数 */
export type GetTradeBillReqQuery = {
  /** 【账单日期】 账单日期，格式yyyy-MM-DD，仅支持三个月内的账单下载申请。 */
  bill_date: string
  /** 【账单类型】 账单类型，不填则默认是ALL可选取值：ALL: 返回当日所有订单信息（不含充值退款订单）SUCCESS: 返回当日成功支付的订单（不含充值退款订单）REFUND: 返回当日退款订单（不含充值退款订单）RECHARGE_REFUND: 返回当日充值退款订单ALL_SPECIAL: 返回个性化账单当日所有订单信息SUC_SPECIAL: 返回个性化账单当日成功支付的订单REF_SPECIAL: 返回个性化账单当日退款订单 */
  bill_type?: string
  /** 【压缩类型】 压缩类型，不填则以不压缩的方式返回数据流可选取值：GZIP: GZIP格式压缩，返回格式为.gzip的压缩包账单 */
  tar_type?: string
}
/** @description 接口响应 */
export type GetTradeBillRes = {
  /** 【哈希类型】 哈希类型可选取值：SHA1: Secure Hash Algorithm 1 */
  hash_type: string
  /** 【哈希值】 原始账单（gzip需要解压缩）的摘要值，用于校验文件的完整性 */
  hash_value: string
  /** 【下载地址】 供下一步请求账单文件的下载地址，该地址5min内有效。 */
  download_url: string
}
