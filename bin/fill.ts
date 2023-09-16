import { Props } from "./types";
import { yml } from "./yml";
import cheerio from "cheerio";

export function getFillTypes(): Props[] {
  const types: Props[] = [];
  Object.keys(yml.fills).forEach((typeName) => {
    const $ = cheerio.load(yml.fills[typeName]);
    const description = "";
    const required = true;
    const type = "object";

    // field-list
    const children: Props[] = [];
    $(".field").each((index, ele) => {
      const name = $(ele).find("> .field-title > .field-name").text();
      const required = $(ele).find("> .field-title .field-required").text();
      const type = $(ele).find("> .field-title .field-tags").text();
      const description = $(ele).find("> .field-desc").text();

      children.push({
        name,
        required: required === "必填",
        type,
        description,
      });
    });
    types.push({ name: typeName, description, required, type, children });
  });

  return types;
}
