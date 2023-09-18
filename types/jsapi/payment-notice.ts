/**
 * @title 支付通知
 * @subTitle 微信支付通过支付通知接口将用户支付成功消息通知给商户。支持商户： 【普通商户】请求方式： 【POST】回调URL： 该链接是通过基础下单接口中的请求参数“notify_url”来设置的，要求必须为HTTPS地址。请确保回调URL是外部可正常访问的，且不能携带后缀参数，否则可能导致商户无法接收到微信的回调通知信息。回调URL示例："https://pay.weixin.qq.com/wxpay/pay.action"用户支付完成后，微信会把相关支付结果和用户信息发送给商户，商户需要接收处理该消息，并返回应答。对后台通知交互时，如果微信收到商户的应答不符合规范或超时，微信认为通知失败，微信会通过一定的策略定期重新发起通知，尽可能提高通知的成功率，但微信不保证通知最终能成功。（通知频率为15s/15s/30s/3m/10m/20m/30m/30m/30m/60m/3h/3h/3h/6h/6h - 总计 24h4m）支付结果通知是以POST 方法访问商户设置的通知URL，通知的数据以JSON 格式通过请求主体（BODY）传输。通知的数据包括了加密的支付结果详情。微信支付会对发送给商户的通知进行签名，并将签名值放在通知的HTTP头Wechatpay-Signature。商户应当验证签名，以确认请求来自微信，而不是其他的第三方。签名验证的算法请参考 《微信支付API v3签名验证》。为了保证安全性，微信支付在回调通知，对关键信息进行了AES-256-GCM加密。商户应当按照以下的流程进行解密关键信息，解密的流程：
 * @支持的商户 
 * @path 
 */

export type CommReqAmountInfo = {
  /** 【总金额】 订单总金额，单位为分。 */
  total: number
  /** 【货币类型】 CNY：人民币，境内商户号仅支持人民币。 */
  currency?: string
}
export type JsapiReqPayerInfo = {
  /** 【用户标识】 用户在普通商户AppID下的唯一标识。 下单前需获取到用户的OpenID，详见OpenID获取 */
  openid: string
}
export type OrderDetail = {
  /** 【订单原价】 1、商户侧一张小票订单可能被分多次支付，订单原价用于记录整张小票的交易金额。2、当订单原价与支付金额不相等，则不享受优惠。3、该字段主要用于防止同一张小票分多次支付，以享受多次优惠的情况，正常支付订单不必上传此参数。 */
  cost_price?: number
  /** 【商品小票ID】 商家小票ID */
  invoice_id?: string
  /** 【单品列表】 单品列表信息条目个数限制：【1，6000】 */
  goods_detail: GoodsDetail[]
}
export type GoodsDetail = {
  /** 【商户侧商品编码】 由半角的大小写字母、数字、中划线、下划线中的一种或几种组成。 */
  merchant_goods_id: string
  /** 【微信支付商品编码】 微信支付定义的统一商品编号（没有可不传） */
  wechatpay_goods_id?: string
  /** 【商品名称】 商品的实际名称 */
  goods_name?: string
  /** 【商品数量】 用户购买的数量 */
  quantity: number
  /** 【商品单价】 单位为：分。如果商户有优惠，需传输商户优惠后的单价(例如：用户对一笔100元的订单使用了商场发的纸质优惠券100-50，则活动商品的单价应为原单价-50) */
  unit_price: number
}
export type CommReqSceneInfo = {
  /** 【用户终端IP】 用户的客户端IP，支持IPv4和IPv6两种格式的IP地址。 */
  payer_client_ip: string
  /** 【商户端设备号】 商户端设备号（门店号或收银设备ID）。 */
  device_id?: string
  /** 【商户门店信息】 商户门店信息 */
  store_info?: StoreInfo
}
export type StoreInfo = {
  /** 【门店编号】 商户侧门店编号 */
  id: string
  /** 【门店名称】 商户侧门店名称 */
  name?: string
  /** 【地区编码】 地区编码，详细请见省市区编号对照表。 */
  area_code?: string
  /** 【详细地址】 详细的商户门店地址 */
  address?: string
}
export type SettleInfo = {
  /** 【是否指定分账】 是否指定分账，枚举值:true：是false：否 */
  profit_sharing?: boolean
}
