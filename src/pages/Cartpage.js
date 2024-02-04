import Navbar from '../features/navbar/navbar' 
import Cart from "../features/cart/Cart"

function CartPage() {
    return ( 
        <div>
            <Navbar>
                <Cart></Cart>
            </Navbar>
        </div>
     );
}

export default CartPage;