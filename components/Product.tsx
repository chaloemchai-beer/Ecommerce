import Image from "next/image";

interface ProductItem {
  id: string;
  title: string;
  image: string;
  category: string;
  price: number;
}

interface ProductProps {
  products: ProductItem[];
}

const Product = ({ products }: ProductProps) => {
  return (
    <div className="w-full px-6 grid grid-col-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="w-full bg-white text-black p-4 border-gray-300
        rounded-lg group overflow-hidden"
        >
          <div className="w-full h-[320px] relative">
            <Image
              className="w-full h-full object-cover scale-90 hover:scale-100
          transition-transform duration-300"
              width={300}
              height={300}
              src={product.image}
              alt=""
            />
          </div>
          <div className="px-4 py-3 flex flex-col gap-1"></div>
          <div className="text-xs text-gray-500 tracking-wide">{product.category}</div>
          <div className="text-base font-medium">{product.title}</div>
          <p><span>{product.price} Baht</span></p>
        </div>
      ))}
    </div>
  );
};

export default Product;
