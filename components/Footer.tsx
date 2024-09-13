import Image from "next/image";
import logo from "../images/logo.png";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full h-20 bg-blue-950 text-gray-400 flex items-center justify-center gap-4">
      <Image src={logo} alt="Logo" width={50} height={50} />
      <p className="text-sm -mt-4">
        All rights reserved{" "}
        <Link
          className="hover:text-white hoverunderline decoration-[1px]
            cursor-pointer duration-250"
          href=""
          target="_blank"
        >
          @Ecommerce
        </Link>
      </p>
    </div>
  );
};

export default Footer;
