import GenderView from "@/view/GenderView";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Genders = () => {
  return <GenderView />;
};

export const getServerSideProps = async ({ locale }) => {
  return { props: { ...(await serverSideTranslations(locale)) } };
};

export default Genders;
