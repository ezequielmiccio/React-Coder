import './CartWidget.css'
import { Link } from 'react-router-dom'


const CartWidget = () => {

    return(
        <Link to={'/'} className="CartWidget">
            <img src="/images/cart.svg" alt='cart' className='CartImg'/>
            5
        </Link>
    );
}

export default CartWidget