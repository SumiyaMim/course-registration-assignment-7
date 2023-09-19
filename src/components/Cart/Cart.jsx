/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const Cart = ({ selectedCourse, totalCredit, remaining, totalPrice }) => {
  return (
    <div className='bg-white p-5 rounded-lg flex-1 lg:w-[272px]'>
      <h2 className='text-[#2F80ED] text-base font-bold mb-2'>Credit Hour Remaining {remaining} hr</h2>
      <hr className='border-zinc-400 mb-2'/>
      <h3 className='text-base font-bold mb-3'>Course Name</h3>
      {selectedCourse.map((course, index) => (
        <p key={course.id} className="text-sm font-medium text-[#1C1B1B] opacity-60 mb-2">{`${index + 1}. ${course.name}`}</p>
      ))}
      <hr className='border-zinc-400 mt-4 mb-2'/>
      <h4 className="text-sm font-semibold text-[#1C1B1B] opacity-60 mb-2">Total Credit Hour: {totalCredit}</h4>
      <hr className='border-zinc-400 mb-2'/>
      <h4 className="text-sm font-semibold text-[#1C1B1B] opacity-90">Total Price : {totalPrice} USD</h4>
    </div>
  )
}

export default Cart
