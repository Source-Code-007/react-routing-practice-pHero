import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='h-screen bg-red-500 flex flex-col gap-8 justify-center items-center font-bold text-3xl text-slate-50'>
            <h2 className='drop-shadow-lg'>This is Error Page!!!</h2>
            <h2 className='font-semibold drop-shadow-lg'>Back to <Link to='/'><button className='p-5 bg-green-500 rounded-lg'>homepage</button></Link></h2>
        </div>
    );
};

export default ErrorPage;