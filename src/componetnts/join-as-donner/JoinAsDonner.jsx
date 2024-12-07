import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContextComponent';

const JoinAsDonner = () => {
    const {user}= useContext(AuthContext)
    if(user){
        return
    }
    return (
            <div className='flex flex-col-reverse md:flex-row items-center justify-center py-4 bg-red-100 mt-8 rounded-t-3xl rounded-b-lg'>
            <div className='px-2'>
                <h2 className='text-4xl md:text-6xl lg:text-8xl font-bold mb-6 uppercase'>Join as <span className='text-red-600'>a Donner</span></h2>
                <Link className='w-full bg-red-600 px-4 py-2 rounded-md inline-block text-center font-semibold text-white text-xl' to={"/register"}>JOIN NOW</Link>
            </div>
            <div><img src="/donner_hero.png" alt="donner" /></div>
            </div>
    );
};

export default JoinAsDonner;