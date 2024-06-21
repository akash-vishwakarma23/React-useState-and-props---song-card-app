import React from 'react'

function Navbar({data}) {
  return (
    <div className='w-full px-20 py-3 flex items-center justify-between'>
        <h3 className='font-semibold text-lg'>Orange</h3>
        <div className='px-4 py-2 bg-orange-600 text-sm text-white rounded-md flex gap-3'>
            <h3>Favourites</h3>
            <h4>{data.filter(item => item.added).length}</h4>
        </div>
    </div>
  )
}

export default Navbar
