import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import MuzeysView from "@/view/MuzeysView/MuzeysView";

const MuzeysPage = () => {
  return <MuzeysView />;
};

export const getServerSideProps = async ({ locale }) => {
  return { props: { ...(await serverSideTranslations(locale)) } };
};

export default MuzeysPage;
