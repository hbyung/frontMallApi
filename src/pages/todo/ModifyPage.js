import React from 'react'
import ModifyComponents from '../../components/todo/ModifyComponents';
import { useParams } from 'react-router-dom';

const ModifyPage = () => {

const {tno} = useParams()

  return (
    <div className='p-4 w-full bg-white'>
          <div className='text-3xl font-extrabold'>
          ModifyPage
          </div>

          <ModifyComponents tno={tno}/>
    </div>
  )
}

export default ModifyPage;