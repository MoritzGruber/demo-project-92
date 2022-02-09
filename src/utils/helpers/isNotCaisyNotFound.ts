import {IGenCaisy_Field_Document_NotFound} from "../types_gen";

export type INotCaisyNotFound<T> = T extends IGenCaisy_Field_Document_NotFound ? null: Exclude<T,IGenCaisy_Field_Document_NotFound>




export function isNotCaisyNotFound<T>(object: T) {
  const __typename = (object as { __typename?: string })?.__typename;
  return (
    __typename &&
    __typename !== "Caisy_Field_Document_NotFound" &&
    object as INotCaisyNotFound<T>
  );
}
