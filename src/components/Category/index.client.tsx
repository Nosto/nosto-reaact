import React, { useEffect } from "react";
import { useNostoContext } from "../Provider/context.client";

const NostoCategory: React.FC<{ category: string }> = ({ category }) => {
  const { clientScriptLoaded } = useNostoContext();
  useEffect(() => {
    // @ts-ignore
    if (clientScriptLoaded) {
      window.nostojs((api) => {
        api
          .defaultSession()
          .setResponseMode("HTML")
          .viewCategory(category)
          .setPlacements(api.placements.getPlacements())
          .load()
          .then((data: object) => {
            // @ts-ignore
            api.placements.injectCampaigns(data.recommendations);
          });
      });
    }
  }, [clientScriptLoaded, category]);

  return (
    <>
      <div className="nosto_page_type" style={{ display: "none" }}>
        category
      </div>
      <div className="nosto_category" style={{ display: "none" }}>
        {category}
      </div>
    </>
  );
};

export default NostoCategory;
