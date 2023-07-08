import React from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";

import Container from "@/components/Container";

import Rectangle from "../../../public/gender.png";

const UniversalPage = ({ title, desc, secondDesc }) => {
  const { t } = useTranslation();

  console.log(title);

  return (
    <div>
      <Container>
        <h2 className="my-8 font-bold text-3xl">
          {t("genderInner:temur.title")}
        </h2>
        <p className="text-xl">{t(desc)}</p>
        <div className="flex items-center justify-between">
          <p className="text-xl">{t(secondDesc)}</p>
          <Image className="h-full w-full" src={Rectangle} alt="rectangle" />
        </div>
      </Container>
    </div>
  );
};

export default UniversalPage;

export const getServerSideProps = async ({ locale }) => {
  return { props: { ...(await serverSideTranslations(locale)) } };
};
