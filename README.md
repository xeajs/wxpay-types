# wxpay-types

Nodejs 微信支付 Typescript 类型大全， 一比一还原微信支付文档接口请求、响应类型，字段类型以及字段说明，助力Nodejs下的微信支付开发

### Install

```bash
pnpm add wxpay-types
```

### Import

```ts
import { jsapi, weapp } from "wxpay-types";
// or
import * as WXPayTypes from 'wxpay-types'
```


### 支持的产品
|  产品名   | 类型名  | 支持情况 |
|  :----:  | :----:  | :----: |
| [JSAPI支付](https://pay.weixin.qq.com/docs/merchant/apis/jsapi-payment/direct-jsons/jsapi-prepay.html) | jsapi | 支持 |
| [APP支付](https://pay.weixin.qq.com/docs/merchant/apis/in-app-payment/direct-jsons/app-prepay.html) | - | - |
| [H5支付](https://pay.weixin.qq.com/docs/merchant/apis/h5-payment/direct-jsons/h5-prepay.html) | - | - |
| [Native支付](https://pay.weixin.qq.com/docs/merchant/apis/native-payment/direct-jsons/native-prepay.html) | - | - |
| [小程序支付](https://pay.weixin.qq.com/docs/merchant/apis/mini-program-payment/mini-prepay.html)  | weapp | 支持 |
| [合单支付](https://pay.weixin.qq.com/docs/merchant/apis/combine-payment/orders/jsapi-prepay.html)  | - | - |
| [资金/交易账单](https://pay.weixin.qq.com/docs/merchant/apis/bill-download/trade-bill/get-trade-bill.html)  | - | - |
| [退款](https://pay.weixin.qq.com/docs/merchant/apis/refund/refunds/create.html)  | - | - |

### File Content

```ts
export type CommReqAmountInfo = {
  /** 【总金额】 订单总金额，单位为分。 */
  total: number;
  /** 【货币类型】 CNY：人民币，境内商户号仅支持人民币。 */
  currency?: string;
};
export type JsapiReqPayerInfo = {
  /** 【用户标识】 用户在普通商户AppID下的唯一标识。 下单前需获取到用户的OpenID，详见OpenID获取 */
  openid: string;
};
export type OrderDetail = {
  /** 【订单原价】 1、商户侧一张小票订单可能被分多次支付，订单原价用于记录整张小票的交易金额。2、当订单原价与支付金额不相等，则不享受优惠。3、该字段主要用于防止同一张小票分多次支付，以享受多次优惠的情况，正常支付订单不必上传此参数。 */
  cost_price?: number;
  /** 【商品小票ID】 商家小票ID */
  invoice_id?: string;
  /** 【单品列表】 单品列表信息条目个数限制：【1，6000】 */
  goods_detail: GoodsDetail[];
  /** 【商户侧商品编码】 由半角的大小写字母、数字、中划线、下划线中的一种或几种组成。 */
  merchant_goods_id: string;
  /** 【微信支付商品编码】 微信支付定义的统一商品编号（没有可不传） */
  wechatpay_goods_id?: string;
  /** 【商品名称】 商品的实际名称 */
  goods_name?: string;
  /** 【商品数量】 用户购买的数量 */
  quantity: number;
  /** 【商品单价】 单位为：分。如果商户有优惠，需传输商户优惠后的单价(例如：用户对一笔100元的订单使用了商场发的纸质优惠券100-50，则活动商品的单价应为原单价-50) */
  unit_price: number;
};
export type GoodsDetail = {
  /** 【商户侧商品编码】 由半角的大小写字母、数字、中划线、下划线中的一种或几种组成。 */
  merchant_goods_id: string;
  /** 【微信支付商品编码】 微信支付定义的统一商品编号（没有可不传） */
  wechatpay_goods_id?: string;
  /** 【商品名称】 商品的实际名称 */
  goods_name?: string;
  /** 【商品数量】 用户购买的数量 */
  quantity: number;
  /** 【商品单价】 单位为：分。如果商户有优惠，需传输商户优惠后的单价(例如：用户对一笔100元的订单使用了商场发的纸质优惠券100-50，则活动商品的单价应为原单价-50) */
  unit_price: number;
};
export type CommReqSceneInfo = {
  /** 【用户终端IP】 用户的客户端IP，支持IPv4和IPv6两种格式的IP地址。 */
  payer_client_ip: string;
  /** 【商户端设备号】 商户端设备号（门店号或收银设备ID）。 */
  device_id?: string;
  /** 【商户门店信息】 商户门店信息 */
  store_info?: StoreInfo;
  /** 【门店编号】 商户侧门店编号 */
  id: string;
  /** 【门店名称】 商户侧门店名称 */
  name?: string;
  /** 【地区编码】 地区编码，详细请见省市区编号对照表。 */
  area_code?: string;
  /** 【详细地址】 详细的商户门店地址 */
  address?: string;
};
```

[查看更多](https://github.com/xeajs/wxpay-types/tree/master/types/index.ts)
