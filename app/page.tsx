import Banner from "@/components/common/Banner";
import Product from "@/components/Product";
const images = [
  {
    url: "https://plus.unsplash.com/premium_photo-1670934158407-d2009128cb02?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1670934158275-0a51383caa1d?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function Home() {
  return (
    <div>
      <Banner images={images} />
      <Product />
    </div>
  );
}
