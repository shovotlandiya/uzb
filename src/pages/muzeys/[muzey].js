import { useRouter } from "next/router";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { muzeys } from "@/data";

import UniversalPage from "@/components/UneversalPage";

export default function Muzeys() {
  const router = useRouter();
  const { query } = router;
  const { muzey } = query;

  if (!muzey) return null;

  const data = muzeys[muzey];

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
