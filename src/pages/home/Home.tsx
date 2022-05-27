import React, { useState } from 'react'
import Carts from '../../Component/Carts'
import ProductList from '../../Component/ProductList'
import { ProductModel } from '../../_core/models/ProductModel'

type Props = {}

const arrProduct: ProductModel[] =[
    {id: "1", name: "Iphone", price: 1000, img: "https://i.pravatar.cc?u=1"},
    {id: "2", name: "Iphone2", price: 1000, img: "https://i.pravatar.cc?u=2"},
    {id: "3", name: "Iphone3", price: 1000, img: "https://i.pravatar.cc?u=3"},
]


export default function Home({}: Props) {
    const [number,setState] = useState<number>(1)
  return (
    <div className='container'>
        <div>
            giỏ hàng
        </div>
        <Carts/>
        <div className="text-center display-4">
            Danh Sách sản phẩm
        </div>
        <ProductList arrProduct={arrProduct}/>
    </div>
  )
}