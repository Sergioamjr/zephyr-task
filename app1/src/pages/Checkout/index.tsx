import React, { Suspense } from "react";
import { Layout } from "../../components";
const RemoteCheckout = React.lazy(() => import("mf_checkout/App"));

export default function Checkout() {
  return (
    <Layout>
      <>
        <h2 className="page_title" data-testid="page_title">
          Checkout
        </h2>
        <Suspense fallback={<p>Loading...</p>}>
          <RemoteCheckout />
        </Suspense>
      </>
    </Layout>
  );
}
