import React from 'react'
import BasicMenu from '../components/menus/BasicMenu';
import CartComponent from '../components/menus/CartComponent';

function BasicLayout({children}) {
  return (
    <>
    {/* 기존 해더 대신 BasicMenu */}
    <BasicMenu/>

    <div className="bg-white my-5 w-full flex flex-col space-y-1 md:flex-row md:space-x-1 
    md:space-y-0">
        <main className="bg-sky-300 md:w-2/3 lg:w-3/4 px-5"> {/* py-40 제거 flex 제거 */}
            <h1 className="text-2xl md:text-4xl">{children}</h1>
        </main>
        <aside className="bg-green-300 md:w-1/3 lg:w-1/4 px-5"> {/* py-40 제거 flex 제거 */}
            <CartComponent />
        </aside>
    </div>
    </>
  );
}

export default BasicLayout
