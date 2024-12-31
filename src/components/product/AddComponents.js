import React, { useRef, useState } from 'react'
import { postAdd } from '../../api/productsApi'
import useCustomMove from '../../hooks/useCustomMove'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import ResultModal from '../common/ResultModal'
import FetchingModal from '../common/FetchingModal'

const initState = {
    pname:'',
    pdesc:'',
    price:0,
    files: []
}

// FormData()

function AddComponents() {
  const [product, setProduct] = useState(initState)
  
  const uploadRef = useRef() //고유 식별 
//  useMutaion 사용하면 필요 없음 
//   const [result, setResult] = useState(null)
  
  const {moveToList, refresh} = useCustomMove()

  const addMutation = useMutation({
    mutationFn: (product) => postAdd(product)
  })

  const handleChangeProduct = (e) => {
    product[e.target.name] = e.target.value

    setProduct({...product})
  }

  const handleClick = async (e) => {

    const formData = new FormData()
    
    const files = uploadRef.current.files

    for(let i =0; i < files.length; i++) {

        formData.append("files", files[i])
    }

    formData.append("pname", product.pname)
    formData.append("pdesc", product.pdesc)
    formData.append("price", product.price)

    console.log(formData)

    // try {
    //     // 데이터 추가가 완료되기를 기다림
    //     await postAdd(formData);
    
    //     // 성공적으로 추가된 후 페이지 이동
    //     moveToList();
    //   } catch (error) {
    //     console.error("Error while adding product:", error);
    //   }
    // setResult(product.pname)
    addMutation.mutate(formData)
  }

  //list 조회시 60 초 동안 동일한 요청이 올 경우 다시 가져오지 않음 그렇기 떄문에 등록 후에 무효화 시켜서 다시 가져오게 해야된다.
  const queryClient = useQueryClient()

  const CloseModal = () => {

    queryClient.invalidateQueries('product/list')
    // setResult(null)
    moveToList({page:1})
}

  return (

    <div className = "border-2 border-sky-200 mt-10 m-2 p-4">

        {addMutation.isPending ? <FetchingModal/> : <></>}

        { addMutation.isSuccess ? 
        <ResultModal 
        title={'Product Add'}
        content={`${addMutation.data.result}번 등록 완료`}
        callbackFn={CloseModal}
        />
        :
        <></>
        }       
        <div className="flex justify-center">
            <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                <div className="w-1/5 p-6 text-right font-bold">Product Name</div>
                <input className="w-4/5 p-6 rounded-r border border-solid border-neutral-300 shadow-md"
                name="pname" type={'text'} value={product.pname} onChange={handleChangeProduct} >
                </input>
            </div>
        </div>

        <div className="flex justify-center">
            <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                <div className="w-1/5 p-6 text-right font-bold">Desc</div>
                <textarea
                className="w-4/5 p-6 rounded-r border border-solid border-neutral-300 shadow-md resize-y"
                name="pdesc" rows="4" onChange={handleChangeProduct} value={product.pdesc}>
                {product.pdesc}
            </textarea>
            </div>
        </div>

        <div className="flex justify-center">
            <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                <div className="w-1/5 p-6 text-right font-bold">Price</div>
                <input
                className="w-4/5 p-6 rounded-r border border-solid border-neutral-300 shadow-md"
                name="price" type={'number'} value={product.price} onChange={handleChangeProduct}>
                </input>
            </div>
        </div>

        <div className="flex justify-center">
            <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                <div className="w-1/5 p-6 text-right font-bold">Files</div>
                <input
                ref={uploadRef}
                className="w-4/5 p-6 rounded-r border border-solid border-neutral-300 shadow-md"
                type={'file'} multiple={true}>
                </input>
            </div>
        </div>

        <div className="flex justify-end">
            <div className="relative mb-4 flex p-4 flex-wrap items-stretch">
                <button type="button"
                className="rounded p-4 w-36 bg-blue-500 text-xl  text-white "
                onClick={handleClick} >
                ADD
                </button>
            </div>
        </div>
    </div>
  )
}

export default AddComponents