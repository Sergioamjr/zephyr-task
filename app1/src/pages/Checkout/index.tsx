import React, { Suspense } from "react";
import { Layout, Loading, PageTitle } from "../../components";
const RemoteCheckout = React.lazy(() => import("mf_checkout/App"));

export default function Checkout() {
  return (
    <Layout>
      <>
        <PageTitle title="Checkout" />
        <Suspense fallback={<Loading />}>
          <RemoteCheckout />
        </Suspense>
      </>
    </Layout>
  );
}
