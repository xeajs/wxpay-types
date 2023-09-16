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
  /** 【门店编号】 商户侧门店编号 */
  id: string
  /** 【门店名称】 商户侧门店名称 */
  name?: string
  /** 【地区编码】 地区编码，详细请见省市区编号对照表。 */
  area_code?: string
  /** 【详细地址】 详细的商户门店地址 */
  address?: string
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
export type CommRespPayerInfo = {
  /** 【用户标识】 用户标识 */
  openid?: string
}
export type CommRespAmountInfo = {
  /** 【总金额】 订单总金额，单位为分 */
  total?: number
  /** 【用户支付金额】 用户支付金额，单位为分。（指使用优惠券的情况下，这里等于总金额-优惠券金额） */
  payer_total?: number
  /** 【货币类型】 CNY：人民币，境内商户号仅支持人民币。 */
  currency?: string
  /** 【用户支付币种】 用户支付币种 */
  payer_currency?: string
}
export type CommRespSceneInfo = {
  /** 【商户端设备号】 商户端设备号 */
  device_id?: string
}
export type PromotionDetail = {
  /** 【券ID】 券ID */
  coupon_id: string
  /** 【优惠名称】 优惠名称 */
  name?: string
  /** 【优惠范围】 优惠范围，枚举值：GLOBAL：全场代金券SINGLE：单品优惠 */
  scope?: string
  /** 【优惠类型】 优惠类型，枚举值：CASH：充值型代金券NOCASH：免充值型代金券 */
  type?: string
  /** 【优惠券面额】 优惠券面额 */
  amount: number
  /** 【活动ID】 活动ID，批次ID */
  stock_id?: string
  /** 【微信出资】 微信出资，单位为分 */
  wechatpay_contribute?: number
  /** 【商户出资】 商户出资，单位为分 */
  merchant_contribute?: number
  /** 【其他出资】 其他出资，单位为分 */
  other_contribute?: number
  /** 【优惠币种】 CNY：人民币，境内商户号仅支持人民币。 */
  currency?: string
  /** 【单品列表】 */
  goods_detail?: GoodsDetailInPromotion[]
  /** 【商品编码】 商品编码 */
  goods_id: string
  /** 【商品数量】 商品数量 */
  quantity: number
  /** 【商品单价】 商品单价，单位为分 */
  unit_price: number
  /** 【商品优惠金额】 商品优惠金额 */
  discount_amount: number
  /** 【商品备注】 商品备注 */
  goods_remark?: string
}
export type GoodsDetailInPromotion = {
  /** 【商品编码】 商品编码 */
  goods_id: string
  /** 【商品数量】 商品数量 */
  quantity: number
  /** 【商品单价】 商品单价，单位为分 */
  unit_price: number
  /** 【商品优惠金额】 商品优惠金额 */
  discount_amount: number
  /** 【商品备注】 商品备注 */
  goods_remark?: string
}



/**
 * @title 微信支付订单号查询订单
 * @subTitle 商户可以通过查询订单接口主动查询订单状态，完成下一步的业务逻辑。查询订单可通过微信支付订单号  (opens new window)和商户订单号  (opens new window)两种方式查询。需要调用查询接口的情况：
 * @支持的商户 【普通商户】
 * @path /v3/pay/transactions/id/{transaction_id}
 */

/** @description 路径参数 */
export type QueryByWxTradeNoReqPath = {
  /** 【微信支付订单号】 微信支付系统生成的订单号 */
  transaction_id: string
}
/** @description 查询参数 */
export type QueryByWxTradeNoReqQuery = {
  /** 【直连商户号】 直连商户的商户号，由微信支付生成并下发。 */
  mchid: string
}
/** @description 接口响应 */
export type QueryByWxTradeNoRes = {
  /** 【公众号ID】 公众号ID */
  appid?: string
  /** 【直连商户号】 直连商户号 */
  mchid: string
  /** 【商户订单号】 商户系统内部订单号，只能是数字、大小写字母_-*且在同一个商户号下唯一，详见【商户订单号】。 */
  out_trade_no: string
  /** 【微信支付订单号】 微信支付系统生成的订单号。 */
  transaction_id?: string
  /** 【交易类型】 交易类型，枚举值：* JSAPI：公众号支付* NATIVE：扫码支付* APP：APP支付* MICROPAY：付款码支付* MWEB：H5支付* FACEPAY：刷脸支付 */
  trade_type?: string
  /** 【交易状态】 交易状态，枚举值：* SUCCESS：支付成功* REFUND：转入退款* NOTPAY：未支付* CLOSED：已关闭* REVOKED：已撤销（仅付款码支付会返回）* USERPAYING：用户支付中（仅付款码支付会返回）* PAYERROR：支付失败（仅付款码支付会返回） */
  trade_state: string
  /** 【交易状态描述】 交易状态描述 */
  trade_state_desc: string
  /** 【银行类型】 银行类型，采用字符串类型的银行标识。 银行标识请参考《银行类型对照表》 */
  bank_type?: string
  /** 【附加数据】 附加数据 */
  attach?: string
  /** 【支付完成时间】 支付完成时间 */
  success_time?: string
  /** 【支付者】 支付者 */
  payer?: CommRespPayerInfo
  /** 【订单金额】 订单金额 */
  amount?: CommRespAmountInfo
  /** 【场景信息】 场景信息 */
  scene_info?: CommRespSceneInfo
  /** 【优惠功能】 优惠功能 */
  promotion_detail?: PromotionDetail[]
}



/**
 * @title JSAPI下单
 * @subTitle 商户系统先调用该接口在微信支付服务后台生成预支付交易单，返回正确的预支付交易会话标识后再按Native、JSAPI、APP等不同场景生成交易串调起支付。
 * @支持的商户 【普通商户】
 * @path /v3/pay/transactions/jsapi
 */

/** @description 包体参数 */
export type JsapiPrepayReqBody = {
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
export type JsapiPrepayRes = {
  /** 【预支付交易会话标识】 预支付交易会话标识。用于后续接口调用中使用，该值有效期为2小时 */
  prepay_id: string
}



