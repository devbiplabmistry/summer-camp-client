import React from 'react';
import errorImg from '../../assets/others/errorPage.jpg'

const ErrorPage = () => {
    return (
        <div className='mx-auto my-8 text-center'>
            <h2 className='text-red-700  mb-4 font-bold font-[roboto] text-2xl'>404 ERROR !!!</h2>
            <img className='text-center' src={errorImg} alt="" />
        </div>
    );
};

export default ErrorPage;