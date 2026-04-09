import { useProducts } from "../../hooks/useStore";
import { Layout, PageTitle } from "../../components";
import { formatMoney } from "../../utils";

export default function Home() {
  const products = useProducts().all;
  return (
    <Layout>
      <>
        <PageTitle title="Our Products!!" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6 first-of-type:mt-0">
          {products.reverse().map((product) => {
            return (
              <div key={product.id} className="mb-3">
                <a
                  href={product.id}
                  data-testid={`product-${product.id}`}
                  className="block"
                >
                  <figure className="mb-2">
                    <img
                      className="md:h-72 w-full object-cover rounded-md md:object-top"
                      src={product.imageUrl}
                      alt={product.imageAlt}
                    />
                  </figure>
                  <h3 className="text-center font-semibold px-2 text-lg whitespace-nowrap overflow-hidden text-ellipsis">
                    {product.title}
                  </h3>

                  <div className="flex justify-center gap-2 items-center">
                    <p className="text-center text-gray-600">
                      {formatMoney(product.price)}
                    </p>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </>
    </Layout>
  );
}
