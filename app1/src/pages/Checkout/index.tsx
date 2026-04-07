import React, { Suspense } from "react";
import { Layout } from "../../components";
const RemoteCheckout = React.lazy(() => import("mf_checkout/App"));

export default function Checkout() {
  return (
    <Layout>
      <>
        <p>Checkout</p>
        <Suspense fallback={<p>Loading...</p>}>
          <RemoteCheckout />
        </Suspense>
      </>
    </Layout>
  );
}
