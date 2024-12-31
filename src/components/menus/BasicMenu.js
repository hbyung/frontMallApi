import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import useCustomLogin from '../../hooks/useCustomLogin';

const BasicMenu = () => {

//   const loginState = useSelector(state => state.loginSlice)

    const {loginState} = useCustomLogin()
    
  return (
    <nav id='navbar' className=" flex bg-blue-300">

        <div className="w-4/5 bg-gray-500" >
        
            <ul className="flex p-4 text-white font-bold">
                <li className="pr-6 text-2xl hover:text-blue-300"> <Link to={'/'}>Main</Link> </li>
                <li className="pr-6 text-2xl hover:text-blue-300"> <Link to={'/about'}>About</Link> </li>

                {loginState.email ? 
                <>
                <li className="pr-6 text-2xl hover:text-blue-300"> <Link to={'/todo/'}>Todo</Link> </li>
                <li className="pr-6 text-2xl hover:text-blue-300"> <Link to={'/products/'}>products</Link> </li>
                </>
                :
                <></>
                }
            </ul>

        </div>

        <div className="w-1/5 flex justify-end bg-orange-300 p-4 font-medium">
        { !loginState.email ?

            <div className="text-white text-smm-1 rounded" >
                <Link to={'/member/login'}>Login</Link>
            </div>
            :
            <div className="text-white text-smm-1 rounded flex justify-center items-center" >
                <div className='mr-2 hidden md:block font-medium '>
                { loginState.nickname }님
                </div >
                <div className='border-2 p-2 hover:bg-red-700'> 
                <Link to={'/member/logout'}>Logout</Link>
                </div>   
            </div>
        }    
        </div>
    </nav>
    );
}

export default BasicMenu