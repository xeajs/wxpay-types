import Crawler from "crawler";
import { Props as DescProps } from "./desc";

export interface Props {
  name: string;
  description: string;
  required: boolean;
  type: string;
  children?: Props[];
}

type Ins = Crawler.CrawlerRequestResponse["$"];
export function getTypes(desc: DescProps, $: Ins) {
  // 请求参数
  const $reqFields = $("#请求参数").next().eq(0).find(".left > .fields");
  //   应答参数
  const $resFields = $("#应答参数").next().eq(0).find(".left > .fields");

  const types: Props[] = [];

  $reqFields.each(function (index, ele) {
    const name = $(ele).find(".req-header>span").text();
    const description = $(ele).find(".req-header-desc").text();
    const required = true;
    const type = "object";
    if (name === "Header") return;

    // field-list
    const children: Props[] = [];
    $(this)
      .find(".field-list .field")
      .each((index, ele) => {
        const name = $(ele).find(".field-title .field-name").text();
        const required = $(ele).find(".field-title .field-required").text();
        const type = $(ele).find(".field-title .field-tags").text();
        const description = $(ele).find(".field-desc").text();

        children.push({
          name,
          required: required === "必填",
          type,
          description,
        });
      });
    const typeName = `${desc.pathName}Req${name}`;
    types.push({ name: typeName, description, required, type, children });
  });

  $resFields.each(function (index, ele) {
    const description = "接口响应";
    const required = true;
    const type = "object";

    // field-list
    const children: Props[] = [];
    $(this)
      .find(".field-list .field")
      .each((index, ele) => {
        const name = $(ele).find(".field-title .field-name").text();
        const required = $(ele).find(".field-title .field-required").text();
        const type = $(ele).find(".field-title .field-tags").text();
        const description = $(ele).find(".field-desc").text();

        children.push({
          name,
          required: required === "必填",
          type,
          description,
        });
      });

    types.push({
      name: `${desc.pathName}Res`,
      description,
      required,
      type,
      children,
    });
  });

  return types;
}

export function getNoticesTypes(desc: DescProps, $: Ins) {
  // 通知参数请求参数
  const $ctxBodyFields = $("#通知参数~.columns").eq(0).find(".left > .fields");
  // 通知请求参数解密
  const $ctxBodyDecryptFields = $("#通知参数~.columns")
    .eq(1)
    .find(".left > .fields");

  const types: Props[] = [];

  [$ctxBodyFields, $ctxBodyDecryptFields].forEach((fields, index) => {
    const name = index === 0 ? "CtxBodyFields" : "CtxBodyDecryptFields";
    const description = index === 0 ? "通知参数" : "resource解密后字段";
    const required = true;
    const type = "object";
    const children: Props[] = [];
    fields.find(".field-list .field").each((index, ele) => {
      const name = $(ele).find(".field-title .field-name").text();
      const required = $(ele).find(".field-title .field-required").text();
      const type = $(ele).find(".field-title .field-tags").text();
      const description = $(ele).find(".field-desc").text();
      children.push({
        name,
        required: required === "必填",
        type,
        description,
      });
    });
    const typeName = `${desc.pathName}${name}`;
    types.push({ name: typeName, description, required, type, children });
  });

  return types;
}
