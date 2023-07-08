import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { genders } from "@/data";

import UniversalPage from "@/components/UneversalPage";

export default function Gender() {
  const { t } = useTranslation();
  const router = useRouter();
  const { query } = router;
  const { gender } = query;

  if (!gender) return null;
  const data = genders[gender];

  // console.log(data);

  return (
    <UniversalPage
      title={data.title}
      desc={data.description}
      secondDesc={data.description2}
    />
  );
}

export const getServerSideProps = async ({ locale }) => {
  return { props: { ...(await serverSideTranslations(locale)) } };
};
