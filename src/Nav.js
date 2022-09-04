import './Nav.css';
import {Link} from 'react-router-dom';
import { useContext } from 'react';
import CartContext from './CartContext';
export default function Nav(){

    const { itemCount, allPrice} = useContext(CartContext);
 
    return(
        <div className="nav_main">
            <div className="nav_image">
                <Link to="/" className='link'>
                    <img src="https://cdn.emartmall.mn/Resource/banner/66570638-089f-4364-977e-0c208629544f.png" className="img" alt=''/>
                </Link>
                
            </div>
            <Link to="/cart" style={{ textDecoration: 'none', color: '#63666a' }}>
            <div className="nav_cart">
                <div className='nav_my_cart'>Миний сагс</div>
                <div className='nav_my_price'>{allPrice.toFixed(2)}₮</div>
                {itemCount > 0 ?
                <div className='item_counter'>
                       {itemCount}
                </div>: <div className='item_counter'>
                   
                </div>}
            </div>
            </Link>
            
        </div>
    )
}