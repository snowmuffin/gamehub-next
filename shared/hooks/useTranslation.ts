import { useSelector } from "react-redux";
import resources from "../locales";

export function useTranslation() {
  const language = useSelector((state: any) => state.language.code || "en");
  const t = (key: string) => {
    return resources[language]?.[key] || resources["en"][key] || key;
  };
  return { t, language };
}
