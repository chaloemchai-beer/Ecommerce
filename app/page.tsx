import Banner from "@/components/common/Banner";
import Product from "@/components/Product";
const images = [
  {
    url: "https://optimine.com/wp-content/uploads/2018/08/amazon-missing-link-LI.png",
  },
  {
    url: "https://blogs-images.forbes.com/eladnatanson/files/2019/03/amazon2-e1553774022915.png",
  },
];

const products= [
  {
    id: "1",
    title: "Smartphone X",
    image: "https://images.unsplash.com/photo-1613588718956-c2e80305bf61?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Electronics",
    price: 699.99
  },
  {
    id: "2",
    title: "Leather Jacket",
    image: "https://plus.unsplash.com/premium_photo-1675186049547-2842e30f12e6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Clothing",
    price: 199.99
  },
  {
    id: "3",
    title: "Running Shoes",
    image: "https://images.unsplash.com/photo-1529339944280-1a37d3d6fa8c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Footwear",
    price: 89.99
  },
  {
    id: "4",
    title: "Coffee Maker",
    image: "https://images.unsplash.com/photo-1707241358597-bafcc8a8e73d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Home & Kitchen",
    price: 59.99
  },
  {
    id: "5",
    title: "Yoga Mat",
    image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Sports & Outdoors",
    price: 29.99
  },
  {
    id: "6",
    title: "Wireless Headphones",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Electronics",
    price: 149.99
  },
  {
    id: "7",
    title: "Sunglasses",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Accessories",
    price: 79.99
  },
  {
    id: "8",
    title: "Desk Lamp",
    image: "https://plus.unsplash.com/premium_photo-1684991958905-9e3151e6cebe?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Home & Kitchen",
    price: 39.99
  },
  {
    id: "9",
    title: "Backpack",
    image: "https://plus.unsplash.com/premium_photo-1664110691115-790e20a41744?q=80&w=1906&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Bags",
    price: 54.99
  },
  {
    id: "10",
    title: "Smartwatch",
    image: "https://images.unsplash.com/photo-1523475496153-3d6cc0f0bf19?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Electronics",
    price: 199.99
  }
];

export default function Home() {
  return (
    <div>
      <Banner images={images} />
      <Product products={products} />
    </div>
  );
}
