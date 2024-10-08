"use client";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

interface ImageType {
  url: string;
}

interface BannerProps {
  images: ImageType[];
}

const Banner: React.FC<BannerProps> = ({ images }) => {
  if (!images || images.length === 0) {
    return <div>No images to display</div>;
  }

  return (
    <div className="relative">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        dynamicHeight={false}
        interval={3000}
      >
        {images.map((image: ImageType) => (
          <div key={image.url} className="h-[370px]">
            <Image
              priority
              src={image.url}
              alt=""
              fill
              style={{ objectFit: "fill" }}
            />
          </div>
        ))}
      </Carousel>
      <div className="w-full h-[80px] bg-gradient-to-t from-gray-100 to-transparent absolute bottom-0 z-20"></div>
    </div>
  );
};

export default Banner;
