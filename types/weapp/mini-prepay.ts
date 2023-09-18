/**
 * @title 小程序下单
 * @subTitle 商户系统先调用该接口在微信支付服务后台生成预支付交易单，返回正确的预支付交易会话标识后再按Native、JSAPI、APP等不同场景生成交易串调起支付。
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
  /** 【是否指定分账】 是否指定分账，枚举值%3Atrue：是false：否 */
  profit_sharing?: boolean
}
/** @description 包体参数 */
export type MiniPrepayReqBody = {
  /** 【公众号ID】 公众号ID */
  appid: string
  /** 【直连商户号】 直连商户号 */
  mchid: string
  /** 【商品描述】 商品描述 */
  description: string
  /** 【商户订单号】 商户系统内部订单号，只能是数字、大小写字母_-*且在同一个商户号下唯一。 */
  out_trade_no: string
  /** 【交易结束时间】 订单失效时间，遵循rfc3339标准格式，格式为yyyy-MM-DDTHH:mm:ss+TIMEZONE，yyyy-MM-DD表示年月日，T出现在字符串中，表示time元素的开头，HH:mm:ss表示时分秒，TIMEZONE表示时区（+08:00表示东八区时间，领先UTC8小时，即北京时间）。例如：2015-05-20T13:29:35+08:00表示，北京时间2015年5月20日13点29分35秒。 */
  time_expire?: string
  /** 【附加数据】 附加数据，在查询API和支付通知中原样返回，可作为自定义参数使用，实际情况下只有支付完成状态才会返回该字段。 */
  attach?: string
  /** 【通知地址】 异步接收微信支付结果通知的回调地址，通知URL必须为外网可访问的URL，不能携带参数。 公网域名必须为HTTPS，如果是走专线接入，使用专线NAT IP或者私有回调域名可使用HTTP */
  notify_url: string
  /** 【订单优惠标记】 订单优惠标记 */
  goods_tag?: string
  /** 【电子发票入口开放标识】 传入true时，支付成功消息和支付详情页将出现开票入口。需要在微信支付商户平台或微信公众平台开通电子发票功能，传此字段才可生效。true：是false：否 */
  support_fapiao?: boolean
  /** 【订单金额】 订单金额信息 */
  amount: CommReqAmountInfo
  /** 【支付者】 支付者信息。 */
  payer: JsapiReqPayerInfo
  /** 【优惠功能】 优惠功能 */
  detail?: OrderDetail
  /** 【场景信息】 支付场景描述 */
  scene_info?: CommReqSceneInfo
  /** 【结算信息】 结算信息 */
  settle_info?: SettleInfo
}
/** @description 接口响应 */
export type MiniPrepayRes = {
  /** 【预支付交易会话标识】 预支付交易会话标识。用于后续接口调用中使用，该值有效期为2小时 */
  prepay_id: string
}
