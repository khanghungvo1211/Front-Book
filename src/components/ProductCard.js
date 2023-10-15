import React from 'react'
import ReactStars from 'react-rating-stars-component'
import { Link, useLocation } from 'react-router-dom'
const ProductCard = (props) => {
    const {grid} =props;
    let location = useLocation();
    return (
        <>
        <div className={` ${
            location.pathname === "/product" ? `gr-${grid}` : "col-3"
          } `}>
            <Link className='product-card position-relative'>
                <div className='wishlist-icon position-absolute'>
                    <Link>
                    <img src='image/wish.svg' alt='wishlist' />
                    </Link>
                </div>
                <div className='product-image'>
                    <img src='image/watch.jpg' className='img-fluid' alt='product image' />
                    <img src='image/tv.jpg' className='img-fluid' alt='product image' />
                </div>
                <div className='product-detail'>
                    <h6 className='brand'>Havels</h6>
                    <h5 className='product-title'>
                        Demo
                    </h5>
                    <ReactStars
                        count={5}
                        size={24}
                        activeColor="#ffd700"
                        value="3"
                        edit={false}
                    />
                    <p className='price'>500.000VND</p>
                </div>
                <div className='action-bar position-absolute'>
                    <div className='d-flex flex-column'>
                        <Link>
                            <img src='image/view.svg' about='view' />
                        </Link>
                        <Link>
                            <img src='image/add-cart.svg' about='addcart' />
                        </Link>

                    </div>
                </div>
            </Link>
        </div>
        </>
    )
}

export default ProductCard
