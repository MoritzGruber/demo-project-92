import { IPage } from "../types";

export function getHeaderPageTitle(page: IPage): string {
  return page.Page?.internalTitle || "";
}
