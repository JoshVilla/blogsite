import React from 'react'

interface ITitlePage {
    title: string
}
function TitlePage({title}: ITitlePage) {
  return (
    <div>
        <div className='text-2xl font-bold'>{title}</div>
    </div>
  )
}

export default TitlePage