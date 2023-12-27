import { products } from "@/utils/product";
import Container from "./components/Container";
import HomeBanner from "./components/HomeBanner";
import { truncateText } from "@/utils/turncateText";
import ProductCard from "./components/products/productCard";

export default function Home() {
  return (
    <div className="p-8">
      <Container>
        <div>
          <HomeBanner/>
        </div>
        <div className="grid grid-cols-2 am:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5
        2xl:grid-cols-6 gap-8">
          {
            products.map((prod:any)=>{
              return <div>
                {/* {truncateText(prod.name)} */}
                <ProductCard data={prod} />
              </div>
            })
          }
        </div>
      </Container>
    </div>
  )
}
