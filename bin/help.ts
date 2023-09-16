import fs from "node:fs";
import path from "node:path";
import { Props as Types } from "./types";
import { Props as Descs } from "./desc";

const filePath = path.resolve(process.cwd(), "types/index.ts");

export function init() {
  fs.writeFileSync(filePath, "");
}
function append(str: string) {
  fs.appendFileSync(filePath, str);
}
function tsType(type: string) {
  if (type === "integer") return "number";
  if (/string\(/.test(type)) return "string";
  if (/array\[/.test(type)) return `${type.replace(/array|\[|\]/g, "")}[]`;
  return type;
}

export function gen(types: Types[], desc?: Descs) {
  let typeString = desc
    ? `/**
 * @title ${desc.title}
 * @subTitle ${desc.subTitle}
 * @支持的商户 ${desc.supportMerch}
 * @path ${desc.path}
 */\n\n`
    : "";
  types.forEach((value) => {
    if (value.description)
      typeString += `/** @description ${value.description} */\n`;

    if (value.children?.length) {
      typeString += `export type ${value.name} = {\n`;
      value.children.forEach(({ name, description, type, required }) => {
        if (description) typeString += `  /** ${description} */\n`;
        typeString += `  ${name}${required ? "" : "?"}: ${tsType(type)}\n`;
      });
      typeString += "}\n";
    } else {
      typeString += `export type ${value.name} = ${value.type}\n`;
    }
  });
  typeString += "\n\n\n";
  append(typeString);
}
