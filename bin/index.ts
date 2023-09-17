import Crawler from "crawler";
import { yml } from "./yml";
import { getNoticesTypes, getTypes } from "./types";
import { getDesc, getNoticesDesc } from "./desc";
import { getFillTypes } from "./fill";
import { gen, init } from "./help";

init();
gen(getFillTypes());

new Crawler({
  callback: async (error, res, done) => {
    if (error) throw error;
    const $ = res.$;
    const uri = res.request.uri.path!;
    const desc = getDesc($, uri);
    const types = getTypes(desc, $);
    gen(types, desc);
    done();
  },
}).queue(yml.actions);

new Crawler({
  callback: async (error, res, done) => {
    if (error) throw error;
    const $ = res.$;
    const uri = res.request.uri.path!;
    const desc = getNoticesDesc($, uri);
    const types = getNoticesTypes(desc, $);
    gen(types, desc);
    done();
  },
}).queue(yml.notices);
