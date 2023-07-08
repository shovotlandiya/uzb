import React from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import cn from "classnames";

const Language = ({ language, languages = ["uz", "ru", "en"] }) => {
  const { i18n } = useTranslation();
  const router = useRouter();
  const { pathname, asPath, query } = router;

  const [languageState, setLanguageState] = React.useState(language);

  const handleChange = (lang) => {
    setLanguageState(lang);

    router.push({ pathname, query }, asPath, { locale: lang });

    return i18n.changeLanguage(lang);
  };

  return (
    <div>
      <span className="flex gap-4 ">
        {languages.map((lang) => (
          <span
            className="uppercase cursor-pointer language
            "
            key={lang}
            tabIndex={1}
            onClick={() => handleChange(lang)}
          >
            {lang}
          </span>
        ))}
      </span>
    </div>
  );
};

export default Language;
