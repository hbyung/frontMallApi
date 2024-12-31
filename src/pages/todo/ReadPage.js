import React from 'react'
import ReadComponents from "../../components/todo/ReadComponents"
import { useParams } from 'react-router-dom';

const ReadPage = () => {


  const { tno } = useParams()

  return (
    <div className="font-extrabold w-full bg-white mt-6">

      <div className="text-2xl "> 
        Todo Read Page Component 
      </div>
      <ReadComponents tno={tno} />
    </div>
    );
}

export default ReadPage;