import YAML from "yaml";
import fs from "fs";
import path from "path";

const actionsPath = path.resolve(process.cwd(), "actions.yml");
const noticesPath = path.resolve(process.cwd(), "notices.yml");
const actions = YAML.parse(fs.readFileSync(actionsPath, "utf8"));
const notices = YAML.parse(fs.readFileSync(noticesPath, "utf8"));

let extendFills: Record<string, string> = {};
const urlActions: string[] = [];
const urlNotices: string[] = [];
actions.forEach((action) => {
  extendFills = { ...extendFills, ...action.extends };
  urlActions.push(action.href);
});
notices.forEach((notice) => {
  extendFills = { ...extendFills, ...notice.extends };
  urlNotices.push(notice.href);
});

export const yml = {
  actions: urlActions,
  notices: urlNotices,
  fills: extendFills,
};
