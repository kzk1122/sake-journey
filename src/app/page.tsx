import ShareButton from "./　component/share_button";

import Head from "next/head";

<Head>
  <meta name="twitter:card" content="summary_large_image" />
  <meta property="og:url" content="https://sake-journey.vercel.app/" />
  <meta property="og:title" content="さけ旅" />
  <meta property="og:description" content="日本酒巡り達成度可視化ツール" />
  <meta property="og:site_name" content="さけ旅" />
  <meta property="og:locale" content="ja_JP" />
</Head>

export default function Home() {
  return (
    <>
    <h1>さけ旅</h1>
    <div>
      <ShareButton />
    </div>
    </>
  );
}
