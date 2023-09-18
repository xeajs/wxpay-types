/**
 * @title 关闭订单
 * @subTitle 关闭订单，以下情况需要调用关单接口：
 * @支持的商户 
 * @path 
 */

/** @description 路径参数 */
export type CloseOrderReqPath = {
  /** 【商户订单号】 商户系统内部订单号，可以是数字、大小写字母_-*的任意组合，且在同一个商户号下唯一 */
  out_trade_no: string
}
/** @description 包体参数 */
export type CloseOrderReqBody = {
  /** 【直连商户号】 直连商户号 */
  mchid: string
}
