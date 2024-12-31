import React from 'react'
import AddComponets from '../../components/todo/AddComponets'

function AddPage() {
  return (
    <div className="p-4 w-full bg-white">
      <div className="text-3xl font-extrabold">
      Todo Add Page
      </div>
      <AddComponets/>
    </div>
  )
}

export default AddPage