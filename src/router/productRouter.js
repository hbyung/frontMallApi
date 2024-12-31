import React, { lazy, Suspense } from 'react'
import { Navigate } from 'react-router-dom'

const productRouter = () => {
  const Loading = <div>Loading...</div>
  const ProductList = lazy(() => import("../pages/products/ListPage.js"))

  const ProductAdd = lazy(() => import("../pages/products/AddPage.js"))

  const ProductRead = lazy(() => import("../pages/products/ReadPage.js"))
  const ProductModify = lazy(() => import("../pages/products/ModifyPage.js"))

  return [{
      path: "list",
      element: <Suspense fallback={Loading}><ProductList/></Suspense>
    },
    {
      path: '',
      element: <Navigate replace={true} to={'list'}/>
    },    
    {
      path: 'add',
      element: <Suspense fallback={Loading}><ProductAdd/></Suspense>
    },
    {
      path: 'read/:pno',
      element: <Suspense fallback={Loading}><ProductRead/></Suspense>
    },
    {
      path: 'modify/:pno',
      element: <Suspense fallback={Loading}><ProductModify/></Suspense>
    },
  ]
}

export default productRouter
