import {
  IGenFooter,
  IGenMegaMenu,
  IGenPage,
  IGenUniversaltext,
} from "./types_gen";
export interface IPage {
  universalText?: IGenUniversaltext;
  navigation?: IGenMegaMenu;
  footer?: IGenFooter;
  Page?: IGenPage;
}
