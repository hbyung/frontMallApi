import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../slices/loginSlice'
import useCustomLogin from '../../hooks/useCustomLogin'
import ResultModal from '../common/ResultModal'

function LogoutComponent() {

  const {doLogout, moveToPath} = useCustomLogin()

  const [result, setResult] = useState(false)

  const handleClickLogout = () => {

    doLogout()
    setResult('로그 아웃')
    
  }

  const closeModal = () => {

     if(result === '로그 아웃')
        moveToPath("/")
  } 

  return (
    <div className ="border-2 border-red-200 mt-10 m-2 p-4">

        {result ? <ResultModal
            title={'처리 알람'}
            content={`${result}`}
            callbackFn={closeModal}
        ></ResultModal>:<></>}

        <div className="flex justify-center">
            <div className="text-4xl m-4 p-4 font-extrabold text-red-500">
            Logout Component
            </div>
        </div>

        <div className="flex justify-center">
            <div className="relative mb-4 flex w-full justify-center">
                <div className="w-2/5 p-6 flex justify-center font-bold">
                    <button className="rounded p-4 w-36 bg-red-500 text-xl text-white"
                    onClick={handleClickLogout} > LOGOUT </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LogoutComponent