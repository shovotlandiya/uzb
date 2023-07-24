import { useRouter } from "next/router";

import { jadids } from "@/data";

import UniversalPage from "@/components/UneversalPage";

export default function Jadid() {
  const router = useRouter();
  const { query } = router;
  const { jadid } = query;

  if (!jadid) return null;

  const data = jadids[jadid];

  return (
    <UniversalPage
      title={data.title}
      desc={data.description}
      secondDesc={data.description2}
      src={data.image}
    />
  );
}
