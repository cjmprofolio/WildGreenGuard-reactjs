import React from "react";
import Image from "./Image.tsx";
import { useTranslation } from "react-i18next";

interface Props {
  plant: string;
  imageUrl: string;
}

const Shortcut: React.FC<Props> = ({ plant, imageUrl }) => {
  const { t } = useTranslation();
  return (
    <li
      className="w-1/4 mx-10 items-start py-4 px-2"
    >
      <a href={`#${plant}`} className="flex items-center">
        <Image
          imageUrl={imageUrl}
          plant={plant}
          className="w-10 h-10 rounded-full border-2 border-gray-400"
        />
        <p className="ml-4 hover:text-blue-600">{t(plant)}</p>
      </a>
    </li>
  );
};

export default Shortcut;
