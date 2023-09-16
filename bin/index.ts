import Crawler from "crawler";
import { yml } from "./yml";
import { getTypes } from "./types";
import { getDesc } from "./desc";
import { getFillTypes } from "./fill";
import { gen, init } from "./help";

init();
gen(getFillTypes())

const onActions = ($: Crawler.CrawlerRequestResponse["$"], uri: string) => {
  const desc = getDesc($, uri);
  const types = getTypes(desc, $);
  gen(types, desc);
};
const actionsCrawler = new Crawler({
  callback: async (error, res, done) => {
    if (error) throw error;
    onActions(res.$, res.request.uri.path!);
    done();
  },
});
actionsCrawler.queue(yml.actions);
