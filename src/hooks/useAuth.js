import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContextComponent'

const useAuth = () => {
    const auth = useContext(AuthContext);
    return auth || {};
}

export default useAuth;
