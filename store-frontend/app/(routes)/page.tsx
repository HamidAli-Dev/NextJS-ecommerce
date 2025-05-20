import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/shared/container";
import { Product } from "@/types";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function Home() {
  let billboard = null;
  let products: Product[] = [];

  try {
    billboard = await getBillboard("eb2c7637-9979-4d73-b55a-97ba80dc3bf2");
    products = await getProducts({ isFeatured: true });
  } catch (error) {
    console.error('Error fetching data:', error);
  }

  return (
    <Container>
      <div className="space-y-10 pb-10">
        {billboard && <Billboard data={billboard} />}

        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
}
