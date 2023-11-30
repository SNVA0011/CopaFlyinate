import React from 'react'

const StepUlList = ({ listItem }) => {
    return (
        <>
            <ul className='steps-list equipaje'>
                {listItem && listItem.map((item, index) => {
                    return (
                        <li className='d-flex flex-column flex-md-row' key={index}>
                            <i className="bi bi-check2-circle ico"></i>
                            <div className='flex-grow-1'>{item}</div>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default StepUlList