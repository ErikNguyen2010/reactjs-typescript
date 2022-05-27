import React from 'react'
import { ProductModel } from '../_core/models/ProductModel'
import Product from './Product';

type Props = {
    arrProduct: ProductModel[]

}

export default function ProductList(props: Props) {
    let {arrProduct} = props;
    const renderProduct = () =>{
        return arrProduct.map((item, key) =>{
            return <div className='col-4' key={key}>
                <Product product={item}/>
            </div>

        })
    }
  return (
    <div className='row'>
        {renderProduct()}
    </div>
  )
}