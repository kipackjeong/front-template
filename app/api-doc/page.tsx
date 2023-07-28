import ReactSwagger from "core/utils/swagger/ReactSwagger";
import { getApiDocs } from "core/utils/swagger/swagger";
import { GetStaticProps, InferGetServerSidePropsType } from "next";
import { createSwaggerSpec } from "next-swagger-doc";
import { AppInitialProps } from "next/app";
import dynamic from "next/dynamic";
import "swagger-ui-react/swagger-ui.css";

async function ApiDoc() {
  const spec = await getApiDocs();
  return (
    <section className="container h-full w-full">
      <ReactSwagger spec={spec} />
    </section>
  );
}

export default ApiDoc;
