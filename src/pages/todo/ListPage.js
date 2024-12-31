import React from 'react'
import { useSearchParams } from 'react-router-dom';
import ListComponents from '../../components/todo/ListComponents';

const ListPage = () => {


  return (
    <div className="p-4 w-ful bg-white ">
        <div className="text-3xl font-extrabold">
            Todo List Page Component
        </div>
        <ListComponents />
    </div>
  )
}

export default ListPage;