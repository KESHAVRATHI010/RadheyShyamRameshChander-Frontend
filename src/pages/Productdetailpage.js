import Navbar from '../features/navbar/navbar' 
import ProductDetail from '../features/product list/components/productDetails'
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