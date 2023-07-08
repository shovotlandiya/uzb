import AboutView from "@/view/AboutView";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const AboutPage = () => {
  return <AboutView />;
};

export const getServerSideProps = async ({ locale }) => {
  return { props: { ...(await serverSideTranslations(locale)) } };
};

export default AboutPage;
