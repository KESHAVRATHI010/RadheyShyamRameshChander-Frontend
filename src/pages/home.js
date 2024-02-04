import Navbar from '../features/navbar/navbar'
import ProductList from "../features/product/components/product"
function Home(){
    return(
        <div>
            <Navbar>
                <ProductList></ProductList>
            </Navbar>
        </div>
    )
}

export default Home