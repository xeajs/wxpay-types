import YAML from "yaml";
import fs from "fs";
import path from "path";

const fillPath = path.resolve(process.cwd(), "config/fill.yml");
const urlPath = path.resolve(process.cwd(), "config/url.yml");
const fills = YAML.parse(fs.readFileSync(fillPath, "utf8"));
const urls = YAML.parse(fs.readFileSync(urlPath, "utf8"));

export const yml = {
  actions: urls.actions as string[],
  notices: urls.notices as string[],
  fills: fills as Record<string, string>,
};
