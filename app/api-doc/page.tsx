import ReactSwagger from "client/core/utils/swagger/ReactSwagger";
import { getApiDocs } from "client/core/utils/swagger/swagger";
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
