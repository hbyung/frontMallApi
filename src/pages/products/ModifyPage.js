import React from 'react'
import ModifyComponents from '../../components/product/ModifyComponents'
import { useParams } from 'react-router-dom'

function ModifyPage() {

  const {pno} = useParams()

  return (
    <div className="p-4 w-full bg-white mb-2">
        <div className="text-3xl font-extrabold">
                 Products Modify Page 
        </div>

        <ModifyComponents pno={pno}/>
    </div>
  )
}

export default ModifyPage