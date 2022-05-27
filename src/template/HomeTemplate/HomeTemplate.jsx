import React from 'react'
import { Route } from 'react-router-dom'

type Props = {
    component: React.ElementType,
    path: string,
    mobileComponent?: (props:React.ElementType) =>React.FC<Props>
}

export default function HomeTemplate(props: Props) {
  return (
    <Route path={props.path} render ={(propsRoute) =>{
        return <>
            <header className='p-2 bg-dark text-center text-white'>Header</header>
            <props.component/>
            <footer className='p-5 bg-dark text-white text-center'>Footer</footer>
        </>
    }}/>
  )
}