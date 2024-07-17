import Products from "@/components/Products";
import PopularProducts from "@/components/PopularProducts";
import { Section } from "@/components/ui";
import Image from "next/image";
import ImgSlider from "@/components/ImgSlider";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 md:p-20">
      <ImgSlider />

      <PopularProducts />
      <Products />
    </main>
  );
}
