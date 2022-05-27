import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/configStore'
import { deleteProduct } from '../redux/reducer/CartReducer'

type Props = {}

export default function Carts({}: Props) {
    const {carts} = useSelector((state:RootState)=>state.CartReducer)
    const dispatch = useDispatch()
    const handleDelete = (idClick:string) =>{
        const action = deleteProduct(idClick);
        dispatch(action)
    } 
  return (
    <table className='table'>
        <thead>
            <tr>
                <th>id</th>
                <th>name</th>
                <th>img</th>
                <th>quantity</th>
                <th>price</th>
                <th>total</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {carts.map((item,key) =>{
                return <tr key={key}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>
                        <img src={item.img} alt="..." width={50} height={50} />
                    </td>
                    <td>{item.price}</td>
                    <td>{item.price*item.quantity}</td>
                    <td>
                        <button onClick={() =>{
                            handleDelete(item.id)
                        }} className="btn btn-danger">Xoa</button>
                    </td>
                </tr>
            })}
        </tbody>
    </table>
  )
}