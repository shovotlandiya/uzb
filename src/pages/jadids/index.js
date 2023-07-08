import DjadidsView from "@/view/DjadidsView/DjadidsView";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const DjadidsPage = () => {
  return <DjadidsView />;
};

export const getServerSideProps = async ({ locale }) => {
  return { props: { ...(await serverSideTranslations(locale)) } };
};

export default DjadidsPage;
