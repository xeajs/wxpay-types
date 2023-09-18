/**
 * @title 退款结果通知
 * @subTitle 退款状态改变后，微信会把相关退款结果发送给商户。支持商户： 【普通商户】请求方式： 【POST】请求URL： 该链接是通过退款申请指定的notify_url，必须为HTTPS协议。如果链接无法访问，商户将无法接收到微信通知。 通知URL必须为直接可访问的URL，不能携带参数。示例："https://pay.weixin.qq.com/wxpay/pay.action"商户退款完成后，微信会把相关退款结果和用户信息发送给清算机构，清算机构需要接收处理后返回应答成功，然后继续给异步通知到下游从业机构。对后台通知交互时，如果微信收到应答不是成功或超时，微信认为通知失败，微信会通过一定的策略定期重新发起通知，尽可能提高通知的成功率，但微信不保证通知最终能成功。（通知频率为15s/15s/30s/3m/10m/20m/30m/30m/30m/60m/3h/3h/3h/6h/6h - 总计 24h4m）退款结果通知是以POST 方法访问商户设置的通知URL，通知的数据以JSON 格式通过请求主体（BODY）传输。通知的数据包括了加密的支付结果详情。微信支付会对发送给商户的通知进行签名，并将签名值放在通知的HTTP头Wechatpay-Signature。商户应当验证签名，以确认请求来自微信，而不是其他的第三方。签名验证的算法请参考 《微信支付API v3签名验证》。为了保证安全性，微信支付在回调通知，对关键信息进行了AES-256-GCM加密。商户应当按照以下的流程进行解密关键信息，解密的流程：
 * @支持的商户 
 * @path 
 */

/** @description 通知参数 */
export type BodyFields = {
  /** 通知的唯一ID。 */
  id: string
  /** 遵循rfc3339标准格式，格式为yyyy-MM-DDTHH:mm:ss+TIMEZONE，yyyy-MM-DD表示年月日，T出现在字符串中，表示time元素的开头，HH:mm:ss.表示时分秒，TIMEZONE表示时区（+08:00表示东八区时间，领先UTC 8小时，即北京时间）。例如：2015-05-20T13:29:35+08:00表示北京时间2015年05月20日13点29分35秒。 */
  create_time: string
  /** 通知的类型:REFUND.SUCCESS：退款成功通知REFUND.ABNORMAL：退款异常通知REFUND.CLOSED：退款关闭通知 */
  event_type: string
  /** 通知简要说明。 */
  summary: string
  /** 通知的资源数据类型，支付成功通知为encr */
  resource_type: string
  /** 通知资源数据 */
  resource: object
}
/** @description resource解密后字段 */
export type BodyDecryptFields = {
  /** 直连商户的商户号，由微信支付生成并下发。 */
  mchid: string
  /** 返回的商户订单号 */
  out_trade_no: string
  /** 微信支付订单号 */
  transaction_id: string
  /** 商户退款单号 */
  out_refund_no: string
  /** 微信退款单号 */
  refund_id: string
  /** 退款状态，枚举值：SUCCESS：退款成功CLOSED：退款关闭ABNORMAL：退款异常，退款到银行发现用户的卡作废或者冻结了，导致原路退款银行卡失败，可前往【商户平台—>交易中心】，手动处理此笔退款 */
  refund_status: string
  /** 1、退款成功时间，遵循rfc3339标准格式，格式为yyyy-MM-DDTHH:mm:ss+TIMEZONE，yyyy-MM-DD表示年月日，T出现在字符串中，表示time元素的开头，HH:mm:ss表示时分秒，TIMEZONE表示时区（+08:00表示东八区时间，领先UTC 8小时，即北京时间）。例如：2015-05-20T13:29:35+08:00表示，北京时间2015年5月20日13点29分35秒。 */
  success_time?: string
  /** 取当前退款单的退款入账方。1、退回银行卡：{银行名称}{卡类型}{卡尾号}2、退回支付用户零钱: 支付用户零钱3、退还商户: 商户基本账户、商户结算银行账户4、退回支付用户零钱通：支付用户零钱通 */
  user_received_account: string
  /** 金额信息 */
  amount: object
}
