# wxpay-types

根据微信支付文档内容，使用脚本自动生成对应的ts类型文件，在对接微信支付时，就不需要依赖别的很久没有维护的SDK，直接自己写接口就能快速调用搞定

### Install

`pnpm add wxpay-types`

```yml
# url

actions:
  - https://pay.weixin.qq.com/docs/merchant/apis/jsapi-payment/direct-jsons/jsapi-prepay.html
  - https://pay.weixin.qq.com/docs/merchant/apis/jsapi-payment/query-by-wx-trade-no.html

notices:
  - https://pay.weixin.qq.com/docs/merchant/apis/jsapi-payment/payment-notice.html

# fill
# https://pay.weixin.qq.com/docs/merchant/apis/jsapi-payment/direct-jsons/jsapi-prepay.html
CommReqAmountInfo: <div data-v-e3a039fa="" class="field-list" data-old-p
JsapiReqPayerInfo: <div data-v-e3a039fa="" class="field-list" data-old-pa
OrderDetail: <div data-v-e3a039fa="" class="field-list" data-o
GoodsDetail: <div data-v-e3a039fa="" class="field-list" data-old-padding-top="" data-old-padding-bottom=""
CommReqSceneInfo: <div data-v-e3a039fa="" class="field-list" data-old-padding-top="" data-old-padding-
StoreInfo: <div data-v-e3a039fa="" class="field-list" data-old-paddin
SettleInfo: <div data-v-e3a039fa="" class="field-list" data-old-padding-top="

# https://pay.weixin.qq.com/docs/merchant/apis/jsapi-payment/query-by-wx-trade-no.html
CommRespPayerInfo: <div data-v-e3a039fa="" class="field-list" da
CommRespAmountInfo: <div data-v-e3a039fa="" class="field-list" data-old-padding-top="" data-old-padding-bottom="
CommRespSceneInfo: <div data-v-e3a039fa="" class="field-list" data-old-pad
PromotionDetail: <div data-v-e3a039fa="" class="fie
GoodsDetailInPromotion: <div data-v-e3a039fa="" class="field-list" data-ol
```


```ts

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
...
```