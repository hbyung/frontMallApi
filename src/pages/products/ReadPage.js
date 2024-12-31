import React from 'react'
import ReadComponents from '../../components/product/ReadComponents';
import { useParams } from 'react-router-dom';

function ReadPage() {
  
  const { pno } = useParams()  

  return ( 
    <div className="p-4 w-full bg-white mb-3">
        <div className="text-3xl font-extrabold">
        Products Read Page 
        </div>

        <ReadComponents pno={pno}></ReadComponents>
    </div>
  );
}


export default ReadPage