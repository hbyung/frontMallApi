import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { getAccessToken, getMemberWithAccessToken } from '../../api/kakaoApi'
import { useDispatch } from 'react-redux'
import { login } from '../../slices/loginSlice'
import useCustomLogin from '../../hooks/useCustomLogin'

function KakaoRedirectPage() {
  
    const [searchParams] = useSearchParams()

    const authCode = searchParams.get('code')

    // const dispatch = useDispatch()

    const {moveToPath, saveAsCookie} = useCustomLogin()



    useEffect(() => {

        getAccessToken(authCode).then(data =>{
            
            const accessToken = data

            getMemberWithAccessToken(accessToken).then(result => {
                console.log('------------')
                console.log(result)
                // dispatch(login(result))

                saveAsCookie(result)

                if(result && result.social) {
                    moveToPath("/member/modify")
                }else {
                    moveToPath("/")
                }
            })
        })

    }, [authCode])

  return (
    <div>
        <div>Kakao Login Redirect</div>
        <div>{authCode}</div>
    </div>
  )
}

export default KakaoRedirectPage