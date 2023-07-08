import Image from "next/image";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Container from "@/components/Container";

import MuzeyImage from "../../../public/360.png";
import Rectangle from "../../../public/Rectangle.png";

const Muzeys = () => {
  return (
    <div>
      <Container>
        <Image className="w-full" src={MuzeyImage} alt="image" />
        <h2 className="my-8 font-bold text-3xl">Alisher Navoiy</h2>
        <p className="text-xl">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum. It is a long established fact that
          a reader will be distracted by the readable content of a page when
          looking at its layout. The point of using Lorem Ipsum is that it has a
          more-or-less normal distribution of letters, as opposed to using
          Content here, content here, making it look like readable English. Many
          desktop publishing packages and web page editors now use Lorem Ipsum
          as their default model text, and a search for lorem ipsum will uncover
          many web sites still in their infancy. Various versions have evolved
          over the years, sometimes by accident, sometimes on purpose (injected
          humour and the like).
        </p>
        <div className="flex items-center justify-between">
          <p className="text-xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. It is a long
            established fact that a reader will be distracted by the readable
            content of a page when looking at its layout. The point of using
            Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using Content here, content here, making it
            look like readable English. Many desktop publishing packages and web
            page editors now use Lorem Ipsum as their default model text, and a
            search for lorem ipsum will uncover many web sites still in their
            infancy. Various versions have evolved over the years, sometimes by
            accident, sometimes on purpose (injected humour and the like).
            <br />
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. It is a long
            established fact that a reader will be distracted by the readable
            content of a page when looking at its layout. The point of using
            Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using Content here, content here, making it
            look like readable English.
          </p>

          <Image className="h-full w-full" src={Rectangle} alt="rectangle" />
        </div>
      </Container>
    </div>
  );
};

export const getServerSideProps = async ({ locale }) => {
  return { props: { ...(await serverSideTranslations(locale)) } };
};

export default Muzeys;
