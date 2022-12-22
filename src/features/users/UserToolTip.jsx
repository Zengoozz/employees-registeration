import React from 'react'

export default function UserToolTip({ title, value }) {
    return (
        <>
            <span className='tool-tip' >
                <p className='item-title'>{title}</p>
                <p className='item-value'>{value === '' ? 'N/A' : value }</p>
            </span>
        </>
    )
}
