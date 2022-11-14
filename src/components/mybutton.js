import React from 'react'

const MyButton =({to}) => {
    return (
        <a href={`/${to}`}>
           <button className='my-button'>
            {to=== '' ? 'donate': to}
           </button>
        </a>
    )
    }


export default MyButton;