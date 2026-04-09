import React, { Suspense } from "react";
import { Layout, Loading, PageTitle } from "../../components";
const RemoteOrder = React.lazy(() => import("mf_order/App"));

export default function Orders() {
  return (
    <Layout>
      <>
        <PageTitle title="Orders" />
        <Suspense fallback={<Loading />}>
          <RemoteOrder />
        </Suspense>
      </>
    </Layout>
  );
}
