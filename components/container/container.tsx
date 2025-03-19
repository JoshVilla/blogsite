import React, { ReactNode } from 'react'

const Container = ({children}:{children: ReactNode}) => {
  return (
    <div className='w-[90%] md:w-[70%] mx-auto mt-10'>{children}</div>
  )
}

export default Container