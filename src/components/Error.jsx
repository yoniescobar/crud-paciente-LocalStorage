import React from 'react'

// export default function Error({ mensaje }) {
export default function Error({ children }) {
    return (
        <div className='bg-red-100 mb-5 text-center text-red-700 p-3 font-bold rounded-lg uppercase'>
            <>{children}</>
        </div>
    )
}


