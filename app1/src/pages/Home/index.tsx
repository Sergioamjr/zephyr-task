import { useProducts } from "../../hooks/useStore";
import { Layout } from "../../components";

export default function Home() {
  const products = useProducts().all;
  return (
    <Layout>
      <>
        <h2>Bem-vindo à nossa loja!</h2>
        <p>Explore nossos produtos e adicione ao carrinho.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4_ gap-6 mt-6">
          {products.map((product) => {
            return (
              <div key={product.photo} className="mb-3">
                <a href={product.photo}>
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
                      R${product.price}
                    </p>
                    <p className="text-center px-2_ line-through text-sm text-gray-400">
                      R${product.price}
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
