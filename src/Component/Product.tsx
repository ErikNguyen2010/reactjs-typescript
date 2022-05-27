import React from 'react'
import { ProductModel } from '../_core/models/ProductModel'

type Props = {
    product: ProductModel
}



export default function Product(props: Props) {
    let {product} = props
  return (
    <div className='card'>
        
        <img src={product.img} alt="..." />
        <div className="card-body">
            <p>{product.name}</p>
            <p>{product.price}</p>
            <button className="btn btn-success">Add to cart</button>
        </div>
    </div>
  )
}