import Head from "next/head";

interface data {
  type: string;
  title: string;
  url: string;
  image: string;
  img_type: string;
  img_width: string;
  img_height: string;
  description: string;
}

const LocalHead: React.FunctionComponent<{}> = (data): React.ReactElement => {
  console.log(data);
  return (
    <Head>
      <title>Blog by Mark the Dev</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
      />
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge;" />
      <meta property="og:type" content={data["type"]} />
      <meta property="og:title" content={data["title"] ? data["title"] : ""} />
      <meta property="og:url" content={data["url"] ? data["url"] : ""} />
      <meta property="og:image" content={data["image"] ? data["image"] : ""} />
      <meta
        property="og:image:type"
        content={data["img_type"] ? data["img_type"] : ""}
      />
      <meta
        property="og:image:width"
        content={data["img_width"] ? data["img_width"] : ""}
      />
      <meta
        property="og:image:height"
        content={data["img_height"] ? data["img_height"] : ""}
      />
      <meta
        property="og:description"
        content={data["description"] ? data["description"] : ""}
      />
    </Head>
  );
};

export default LocalHead;
