import React from "react";
import { useTranslation } from "react-i18next";

const Home: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex flex-col sm:flex-row gap-4 place-items-center mx-auto px-16 py-16">
        <div>
          <img
            className="flex flex-col rounded-2xl object-contain h-200 w-200"
            src="https://cdn.britannica.com/70/234870-050-D4D024BB/Orange-colored-cat-yawns-displaying-teeth.jpg"
            alt="Orange-cat-yawn"
          />
        </div>
        <div>
          <img
            className="flex flex-col rounded-2xl object-contain h-200 w-200"
            src="https://cdn.britannica.com/70/234870-050-D4D024BB/Orange-colored-cat-yawns-displaying-teeth.jpg"
            alt="Orange-cat-yawn"
          />
        </div>
        <div>
          <img
            className="flex flex-col rounded-2xl object-contain h-200 w-200"
            src="https://cdn.britannica.com/70/234870-050-D4D024BB/Orange-colored-cat-yawns-displaying-teeth.jpg"
            alt="Orange-cat-yawn"
          />
        </div>
      </div>
      <div className="text-center px-16 mt-5 [background-color:#e6ebe0] text-xl sm:text-3xl block">
        {t("webintro")}
      </div>
    </>
  );
};

export default Home;
