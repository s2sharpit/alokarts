import ProductList from "./ProductList";
import { Section, Title } from "./ui";
import productData from "@/data/productData";


export default function PopularProducts() {
  return (
    <Section id="popular">
      <Title className="text-white">Popular Products</Title>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 mt-6">
          {productData.map((data: any, index: number) => (
            <ProductList key={index} data={data} index={index} />
          ))}
        </div>
    </Section>
  );
}
