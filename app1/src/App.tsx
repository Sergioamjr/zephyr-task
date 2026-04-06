import React, { Suspense } from "react";
// const RemoteApp = React.lazy(() => import("default_webpack_mf_second/App"));
// const RemoteCart = React.lazy(() => import("mf_cart/App"));
//
import img from "./../assets/pexels-alanakatok-31556432.jpg";
import img2 from "./../assets/pexels-alanakatok-31556434.jpg";
import img3 from "./../assets/pexels-alanakatok-31556437.jpg";
import img4 from "./../assets/pexels-alanakatok-31556438.jpg";
import img5 from "./../assets/pexels-alanakatok-31556440.jpg";
import img6 from "./../assets/pexels-alanakatok-31556443.jpg";
import img7 from "./../assets/pexels-alanakatok-31556448.jpg";
import img8 from "./../assets/pexels-alanakatok-31556452.jpg";
import img9 from "./../assets/pexels-alanakatok-31556454.jpg";
import img10 from "./../assets/pexels-alanakatok-31556460.jpg";
import img11 from "./../assets/pexels-alanakatok-31556461.jpg";
import img12 from "./../assets/pexels-dima-valkov-1186343-6211619.jpg";
import img13 from "./../assets/pexels-dima-valkov-1186343-6211655.jpg";
import img14 from "./../assets/pexels-dima-valkov-1186343-6211656.jpg";
import img15 from "./../assets/pexels-dima-valkov-1186343-6211658.jpg";
import img16 from "./../assets/pexels-dima-valkov-1186343-6402850.jpg";
import img17 from "./../assets/pexels-dima-valkov-1186343-6503007.jpg";
// import img18 from "./../assets/pexels-mart-production-8217375.jpg";

const products = [
  // {
  //   photo: "pexels-alanakatok-31556432.jpg",
  //   price: 89.99,
  //   title: "Black Top & Pink Lace Skirt",
  //   description:
  //     "Elegant black sleeveless V-neck top paired with a blush pink lace midi skirt and gold belt",
  //   imageAlt:
  //     "Woman wearing a black sleeveless top and blush pink lace midi skirt with a gold belt and nude heels",
  //   imageUrl: img,
  // },
  {
    photo: "pexels-alanakatok-31556434.jpg",
    price: 119.99,
    title: "Black Ruffle Mini Dress",
    description:
      "Chic black sleeveless mini dress with ruffle neckline detail, perfect for evening outings",
    imageAlt:
      "Woman posing in a black sleeveless mini dress with ruffle neckline and nude heels against a light blue background",
    imageUrl: img2,
  },
  {
    photo: "pexels-alanakatok-31556437.jpg",
    price: 94.99,
    title: "White Lace Blouse & Black Pants",
    description:
      "White lace ruffle blouse with embroidered details paired with black cropped wide-leg pants",
    imageAlt:
      "Woman in a white lace ruffle blouse and black cropped wide-leg pants with beige sneakers",
    imageUrl: img3,
  },
  {
    photo: "pexels-alanakatok-31556438.jpg",
    price: 109.99,
    title: "Floral Crochet Top & Leather Skirt",
    description:
      "Pink floral crochet short-sleeve blouse paired with a navy blue faux leather flared skirt",
    imageAlt:
      "Woman wearing a pink floral crochet blouse and navy blue faux leather flared skirt with nude heels",
    imageUrl: img4,
  },
  {
    photo: "pexels-alanakatok-31556440.jpg",
    price: 134.99,
    title: "Blue Floral Sundress",
    description:
      "Flowy white and blue floral print V-neck sundress with ruffled hem and thin belt",
    imageAlt:
      "Smiling woman in a white and blue floral V-neck sundress with ruffled hem and nude block heels",
    imageUrl: img5,
  },
  {
    photo: "pexels-alanakatok-31556443.jpg",
    price: 79.99,
    title: "Rose Bell Sleeve Blouse & Flared Jeans",
    description:
      "Dusty rose V-neck blouse with wide bell sleeves paired with classic blue flared jeans",
    imageAlt:
      "Woman in a dusty rose V-neck bell sleeve blouse and high-waist blue flared jeans with nude heels",
    imageUrl: img6,
  },
  {
    photo: "pexels-alanakatok-31556448.jpg",
    price: 84.99,
    title: "Pink Embroidered Blouse & Slim Jeans",
    description:
      "Pink flutter-sleeve blouse with floral embroidery on the neckline paired with slim blue jeans",
    imageAlt:
      "Woman wearing a pink flutter-sleeve blouse with floral embroidered neckline and slim-fit blue jeans",
    imageUrl: img7,
  },
  {
    photo: "pexels-alanakatok-31556452.jpg",
    price: 99.99,
    title: "Floral Cold-Shoulder Blouse & Flared Jeans",
    description:
      "White and blue floral cold-shoulder long-sleeve blouse with ruffle details paired with wide-leg flared jeans",
    imageAlt:
      "Woman in a white and blue floral cold-shoulder ruffle blouse with wide-leg flared jeans, looking down",
    imageUrl: img8,
  },
  {
    photo: "pexels-alanakatok-31556454.jpg",
    price: 99.99,
    title: "Blue Floral Open-Shoulder Blouse Set",
    description:
      "Blue and white floral cold-shoulder ruffle blouse with open shoulders paired with high-waist flared jeans",
    imageAlt:
      "Woman posing in a blue and white floral open-shoulder ruffle blouse and high-waist flared jeans",
    imageUrl: img9,
  },
  // {
  //   photo: "pexels-alanakatok-31556460.jpg",
  //   price: 149.99,
  //   title: "Denim Jacket & Navy Flared Skirt",
  //   description:
  //     "Denim jacket worn over a floral blouse paired with a navy blue flared midi skirt and heels",
  //   imageAlt:
  //     "Woman wearing a denim jacket over a floral top with a navy blue flared midi skirt and nude heels, looking down",
  //   imageUrl: img10,
  // },
  {
    photo: "pexels-alanakatok-31556461.jpg",
    price: 144.99,
    title: "Denim Jacket & Navy Ruffle Midi Skirt",
    description:
      "Classic denim jacket layered over a floral top with a navy ruffle asymmetric midi skirt",
    imageAlt:
      "Woman in a classic denim jacket over a floral blouse and navy asymmetric ruffle midi skirt with nude heels",
    imageUrl: img11,
  },
  {
    photo: "pexels-dima-valkov-1186343-6211619.jpg",
    price: 124.99,
    title: "Cream Turtleneck & Camel Knit Skirt",
    description:
      "Cream ribbed turtleneck sweater paired with a camel knit ribbed midi skirt with slit and black ankle boots",
    imageAlt:
      "Woman in a cream ribbed turtleneck and camel knit midi skirt with a slit, wearing black ankle boots",
    imageUrl: img12,
  },
  {
    photo: "pexels-dima-valkov-1186343-6211655.jpg",
    price: 139.99,
    title: "Green Turtleneck & Quilted Vest Set",
    description:
      "Dark green turtleneck sweater with slim black pants, leather boots, and a beige quilted vest jacket",
    imageAlt:
      "Man holding a beige quilted vest jacket while wearing a dark green turtleneck, black slim pants, and leather boots",
    imageUrl: img13,
  },
  {
    photo: "pexels-dima-valkov-1186343-6211656.jpg",
    price: 199.99,
    title: "Camel Wool Overcoat",
    description:
      "Sophisticated camel wool overcoat over a burgundy turtleneck knit with navy tailored trousers and leather shoes",
    imageAlt:
      "Man in a camel wool overcoat over a burgundy turtleneck, navy tailored trousers, and black leather loafers",
    imageUrl: img14,
  },
  {
    photo: "pexels-dima-valkov-1186343-6211658.jpg",
    price: 159.99,
    title: "Black Nike Puffer Jacket",
    description:
      "Black Nike hooded puffer down jacket with gray backpack, casual streetwear style",
    imageAlt:
      "Man wearing a black Nike hooded puffer jacket with a gray backpack against a white background",
    imageUrl: img15,
  },
  {
    photo: "pexels-dima-valkov-1186343-6402850.jpg",
    price: 174.99,
    title: "Black Blazer & Floral Pleated Dress",
    description:
      "Structured black blazer over a pink and mauve floral pleated midi dress, elegant and modern look",
    imageAlt:
      "Woman in a structured black blazer over a pink and mauve floral pleated midi dress with black heels",
    imageUrl: img16,
  },
  {
    photo: "pexels-dima-valkov-1186343-6503007.jpg",
    price: 69.99,
    title: "White Crop Tee & Cargo Pants",
    description:
      "White cropped tie-front t-shirt with a small embroidered logo paired with khaki cargo jogger pants",
    imageAlt:
      "Young woman in a white cropped tie-front t-shirt and khaki cargo jogger pants with colorful sneakers",
    imageUrl: img17,
  },
  // {
  //   photo: "pexels-mart-production-8217375.jpg",
  //   price: 39.99,
  //   title: "Classic White Oversized Tee",
  //   description:
  //     "Classic white oversized unisex crew-neck t-shirt, minimalist essential wardrobe staple",
  //   imageAlt:
  //     "Woman with curly hair wearing a plain white oversized crew-neck t-shirt and blue jeans against a soft pink background",
  //   imageUrl: img18,
  // },
];

const App = () => {
  return (
    <div>
      <header className="flex items-center h-20 justify-between p-4 bg-gray-800 text-white">
        <div className="custom_container w-full flex items-center justify-between">
          <h1>Logo</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="/">Products</a>
              </li>
              <li>
                <a href="/about" className="border-b-2">
                  Carrinho
                </a>
              </li>
              <li>
                <a href="/" className="rounded-md bg-yellow-500 text-black p-3">
                  Checkout
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="custom_section custom_container">
        <h2>Bem-vindo à nossa loja!</h2>
        <p>Explore nossos produtos e adicione ao carrinho.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4_ gap-6 mt-6">
          {products.map((product) => {
            return (
              <div key={product.photo} className="mb-3">
                <a href="#">
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
      </div>
      {/*<Suspense fallback={"loading..."}>
        <RemoteApp />
      </Suspense>
      <Suspense fallback={"loading..."}>
        <RemoteCart name="Sergio" />
      </Suspense>*/}
    </div>
  );
};

export default App;
