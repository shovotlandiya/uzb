import { useRouter } from "next/router";

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
      src={data.src}
      initialSrc={data.src}
      hasSrc={true}
      linkto360={data.href}
      hasLink={true}
      text360={data.text360}
    />
  );
}
