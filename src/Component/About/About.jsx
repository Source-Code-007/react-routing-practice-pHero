import React from 'react';

const About = () => {
    return (
            <div className='space-y-2 text-center'>
                <h2 className='text-3xl'>This is our <span className='font bold'>about</span> page</h2>
                <div className='grid grid-cols-2 gap-5 p-5'>
                    <div className='h-64 bg-red-500 rounded-lg'>

                    </div>
                    <div className='h-64 bg-green-500 rounded-lg'>

                    </div>
                </div>
            </div>
    );
};

export default About;