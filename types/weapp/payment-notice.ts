/**
 * @title 支付通知
 * @subTitle 微信支付通过支付通知接口将用户支付成功消息通知给商户。支持商户： 【普通商户】请求方式： 【POST】回调URL： 该链接是通过基础下单接口中的请求参数“notify_url”来设置的，要求必须为HTTPS地址。请确保回调URL是外部可正常访问的，且不能携带后缀参数，否则可能导致商户无法接收到微信的回调通知信息。回调URL示例："https://pay.weixin.qq.com/wxpay/pay.action"用户支付完成后，微信会把相关支付结果和用户信息发送给商户，商户需要接收处理该消息，并返回应答。对后台通知交互时，如果微信收到商户的应答不符合规范或超时，微信认为通知失败，微信会通过一定的策略定期重新发起通知，尽可能提高通知的成功率，但微信不保证通知最终能成功。（通知频率为15s/15s/30s/3m/10m/20m/30m/30m/30m/60m/3h/3h/3h/6h/6h - 总计 24h4m）支付结果通知是以POST 方法访问商户设置的通知URL，通知的数据以JSON 格式通过请求主体（BODY）传输。通知的数据包括了加密的支付结果详情。微信支付会对发送给商户的通知进行签名，并将签名值放在通知的HTTP头Wechatpay-Signature。商户应当验证签名，以确认请求来自微信，而不是其他的第三方。签名验证的算法请参考 《微信支付API v3签名验证》。为了保证安全性，微信支付在回调通知，对关键信息进行了AES-256-GCM加密。商户应当按照以下的流程进行解密关键信息，解密的流程：
 * @支持的商户 
 * @path 
 */

/** @description 通知参数 */
export type BodyFields = {
  /** 通知的唯一ID。 */
  id: string
  /** 通知创建的时间，遵循rfc3339标准格式，格式为yyyy-MM-DDTHH:mm:ss+TIMEZONE，yyyy-MM-DD表示年月日，T出现在字符串中，表示time元素的开头，HH:mm:ss.表示时分秒，TIMEZONE表示时区（+08:00表示东八区时间，领先UTC 8小时，即北京时间）。例如：2015-05-20T13:29:35+08:00表示北京时间2015年05月20日13点29分35秒。 */
  create_time: string
  /** 通知的类型，支付成功通知的类型为TRANSACTION.SUCCESS。 */
  event_type: string
  /** 通知的资源数据类型，支付成功通知为encrypt-resource。 */
  resource_type: string
  /** 通知资源数据。 */
  resource: object
  /** 回调摘要 */
  summary: string
}
/** @description resource解密后字段 */
export type BodyDecryptFields = {
  /** 直连商户申请的公众号或移动应用AppID。 */
  appid: string
  /** 商户的商户号，由微信支付生成并下发。 */
  mchid: string
  /** 商户系统内部订单号，可以是数字、大小写字母_-*的任意组合且在同一个商户号下唯一。 */
  out_trade_no: string
  /** 微信支付系统生成的订单号。 */
  transaction_id: string
  /** 交易类型，枚举值：JSAPI：公众号支付NATIVE：扫码支付App：App支付MICROPAY：付款码支付MWEB：H5支付FACEPAY：刷脸支付 */
  trade_type: string
  /** 交易状态，枚举值：SUCCESS：支付成功REFUND：转入退款NOTPAY：未支付CLOSED：已关闭REVOKED：已撤销（付款码支付）USERPAYING：用户支付中（付款码支付）PAYERROR：支付失败(其他原因，如银行返回失败) */
  trade_state: string
  /** 交易状态描述。 */
  trade_state_desc: string
  /** 银行类型，采用字符串类型的银行标识。银行标识请参考[《银行类型对照表》](/merchant-articles/development/chart/bank-type.md。 */
  bank_type: string
  /** 附加数据，在查询API和支付通知中原样返回，可作为自定义参数使用，实际情况下只有支付完成状态才会返回该字段。 */
  attach?: string
  /** 支付完成时间，遵循rfc3339标准格式，格式为yyyy-MM-DDTHH:mm:ss+TIMEZONE，yyyy-MM-DD表示年月日，T出现在字符串中，表示time元素的开头，HH:mm:ss表示时分秒，TIMEZONE表示时区（+08:00表示东八区时间，领先UTC 8小时，即北京时间）。例如：2015-05-20T13:29:35+08:00表示，北京时间2015年5月20日 13点29分35秒。 */
  success_time: string
  /** 支付者信息 */
  payer: object
  /** 订单金额信息 */
  amount: object
  /** 支付场景信息描述 */
  scene_info?: object
  /** 优惠功能，享受优惠时返回该字段 */
  promotion_detail?: any[]
}
