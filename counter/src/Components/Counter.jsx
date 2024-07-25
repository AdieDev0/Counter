import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const reset = () => {
        setCount(0);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    return (
        <div className='w-full h-screen bg-black text-white py-12 flex items-center justify-center'>
            <div className='border-2 w-full max-w-[500px] h-[400px] mx-auto rounded-md bg-neutral-900 flex flex-col items-center p-6'>
                <div className='text-center'>
                    <p className='my-4 text-2xl md:text-4xl font-Oswald'>Number Counter</p>
                    <p className='my-16 text-7xl font-Oswald'>{count}</p>
                    <div className='flex gap-4 md:gap-6'>
                        <button onClick={increment} className='border-2 rounded-md p-2 font-semibold hover:bg-pink-500 hover:scale-105 duration-300'>Increment</button>
                        <button onClick={reset}     className='border-2 rounded-md p-2 font-semibold hover:bg-pink-500 hover:scale-105 duration-300'>Reset</button>
                        <button onClick={decrement} className='border-2 rounded-md p-2 font-semibold hover:bg-pink-500 hover:scale-105 duration-300'>Decrement</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Counter;
