import React from 'react';
import Link from 'next/link';
const Product = ({product}) => {
    return (
        <div>
            <div className='product_card grid-cols-5'>
                <Link href={`/products/${product.id}`} >
                <a>
                    <div>
                        <div className="prod_title">{product.title}</div>
                        <img src={product.image}></img>
                        <div className="prod_cat">{product.category}</div>
                        <div className="prod_desc">{product.description}</div>
                    </div>
                </a>
                </Link>
            </div>
        </div>
    );
};

export default Product;
