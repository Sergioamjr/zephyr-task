import React, { Suspense } from "react";
import { Layout } from "../../components";
const RemoteOrder = React.lazy(() => import("mf_order/App"));

export default function Orders() {
  return (
    <Layout>
      <>
        <h2 className="page_title">Orders</h2>
        <Suspense fallback={<p>Loading...</p>}>
          <RemoteOrder />
        </Suspense>
      </>
    </Layout>
  );
}
