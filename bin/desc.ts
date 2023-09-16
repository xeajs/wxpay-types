import Crawler from "crawler";

export interface Props {
  title: string;
  subTitle: string;
  supportMerch: string;
  method: string;
  path: string;
  pathName: string;
  domain: string;
}
type Ins = Crawler.CrawlerRequestResponse["$"];
export function getDesc($: Ins, uri: string): Props {
  // 标题
  const title = $(".content-title").text();
  //   子标题
  const subTitle = $("#main-content > p").text();
  // 接口说明
  const $desc = $("#接口说明").next().eq(0);

  // 支持商户
  const supportMerch = $desc
    .find(".intro-row:nth-child(1) .intro-content")
    .text();
  // 请求方式
  const method = $desc
    .find(".intro-row:nth-child(2) .intro-content > span:nth-child(1)")
    .text()
    .replace(/【|】/g, "");
  // 请求地址
  const path = $desc
    .find(".intro-row:nth-child(2) .intro-content > span:nth-child(2)")
    .text();
  // 域名
  const domain = $desc
    .find(
      ".intro-row:nth-child(3) .intro-domain-inner-container:nth-child(1) .intro-domain .code"
    )
    .text();

  const firstUp = function (str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  const pathName =
    uri
      .split("/")
      .at(-1)
      ?.split(".")[0]
      .split("-")
      .map((d) => firstUp(d))
      .join("") || "";

  return { title, subTitle, supportMerch, method, path, pathName, domain };
}
