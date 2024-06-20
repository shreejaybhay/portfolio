import React from 'react'

const LearnMore = () => {
    return (
        <div className='w-full'>
            <div className='flex flex-col items-center justify-center w-full mt-20 text-center'>
                <h1 className='font-medium'>WELCOME</h1>
                <h1 className='text-xl font-medium sm:text-2xl md:text-4xl lg:text-4xl text-slate-300'>LEARN MORE ABOUT THE MILITARY</h1>
            </div>

            <div className='flex flex-col items-center justify-center p-5'>
                <div className='flex-col my-20 sm:items-center sm:flex sm:flex-col md:flex md:items-center md:flex-row'>
                    <a href='/living' className='flex flex-col items-center justify-center gap-5 py-10 border cursor-pointer md:w-[200px] lg:w-[250px] w-[300px] border-slate-400 text-slate-300 font-medium hover:text-slate-400 duration-200' >
                        LIVING
                    </a>
                    <a href='/working' className='flex-col md:w-[200px] lg:w-[250px] py-10 border border-slate-400 flex items-center justify-center gap-5 text-center text-slate-300 font-medium hover:text-slate-400 duration-200 w-[300px]'>
                        <h1 className='uppercase'>WORKING</h1>
                    </a>
                    <a href='training' className='flex flex-col items-center justify-center gap-5 md:w-[200px] lg:w-[250px] py-10 border border-slate-400 text-slate-300 font-medium hover:text-slate-400 duration-200 w-[300px]'>
                        <h1>TRAINING</h1>
                    </a>
                    <a href='joining' className='flex flex-col items-center justify-center gap-5 md:w-[200px] lg:w-[250px] py-10 border border-slate-400 text-slate-300 font-medium hover:text-slate-400 duration-200 w-[300px]'>
                        <h1>JOINING</h1>
                    </a>
                </div>
                <div className='lg:w-[50%]'>
                    <h1 className='w-full text-center'>Is more than just a job. As a Guard Soldier you’ll respond when disaster strikes at home. You’ll also answer the call when your country needs
                        you around the world. This is our unique dual mission–serving both community and country.
                        Make it your mission today.
                    </h1>
                </div>
            </div>


        </div>
    )
}
export default LearnMore