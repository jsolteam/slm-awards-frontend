import { Main } from "@pages/Main";
import { ROUTE_CONST } from "./route.constants";
import { Preview } from "@pages/Main/components/Preview";
import { Info } from "@pages/Main/components/Info";
import { FaqPreview } from "@pages/Main/components/FaqPreview";

export const ROUTE_ELEMENTS = {
  [ROUTE_CONST.main]: Main,
  [ROUTE_CONST.preview]: Preview,
  [ROUTE_CONST.informationAboutTheAward]: Info,
  [ROUTE_CONST.faq]: FaqPreview,
};
