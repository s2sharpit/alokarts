import ProductList from "./ProductList";
import productData from "@/data/productData";
import { Section, Title } from "./ui";

export default function Products() {
  return (
    <Section id="products">
      <Title className="text-white">All Products</Title>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-8 mt-6">
        {productData.map((data: any, index: number) => (
          <ProductList key={index} data={data} index={index} />
        ))}
      </div>
    </Section>
  );
}
