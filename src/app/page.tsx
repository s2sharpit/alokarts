import Products from "@/components/Products";
import PopularProducts from "@/components/PopularProducts";
import { Section } from "@/components/ui";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 md:p-20">
      <Section className="w-full grid sm:grid-cols-2 gap-8 md:gap-16 pt-4">
        <Image
          src="/1.jpg"
          width={500}
          height={300}
          alt="alok main"
          className="rounded-2xl w-full"
        />
        <Image
          src="/2.jpg"
          width={500}
          height={300}
          alt="alok main"
          className="rounded-2xl w-full"
        />
      </Section>

      <PopularProducts />
      <Products />
    </main>
  );
}
