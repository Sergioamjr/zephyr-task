import React, { Suspense } from "react";
import { Layout } from "../../components";
const RemoteOrder = React.lazy(() => import("mf_order/App"));

export default function Orders() {
  return (
    <Layout>
      <>
        <p>Orders</p>
        <Suspense fallback={<p>Loading...</p>}>
          <RemoteOrder />
        </Suspense>
      </>
    </Layout>
  );
}
