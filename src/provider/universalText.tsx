import React, { useContext } from "react";
import { IGenUniversaltext } from "../utils/types_gen";

const UniversalTextProviderContext = React.createContext<IGenUniversaltext>({});

export const useUniversalText = (): IGenUniversaltext => {
  return useContext(UniversalTextProviderContext);
};

export const UniversalTextProvider: React.FC<{
  universalText: IGenUniversaltext;
}> = ({ universalText, children }) => {
  return (
    <UniversalTextProviderContext.Provider value={universalText}>
      {children}
    </UniversalTextProviderContext.Provider>
  );
};
