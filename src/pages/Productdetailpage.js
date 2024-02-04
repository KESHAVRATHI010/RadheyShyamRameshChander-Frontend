import Navbar from '../features/navbar/navbar' 
import ProductDetail from '../features/product/components/productDetails'
function Home(){
    return(
        <div>
            <Navbar>
                <ProductDetail></ProductDetail>
            </Navbar>
        </div>
    )
}

export default Home