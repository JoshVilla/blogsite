import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

interface ITitlePage {
    title: string;
    hasBack?: boolean;
    onBackFunction?: () => void;
}

function TitlePage({ title, hasBack = false, onBackFunction }: ITitlePage) {
  const router = useRouter()

  const handleBack = () => {
    if (onBackFunction) {
      onBackFunction()
    }
    router.back()
  }

  return (
    <div className='flex items-center gap-4'>
      {hasBack && (
        <ArrowLeft 
          className='cursor-pointer hover:scale-110' 
          onClick={handleBack} 
          aria-label="Go back"
          role="button"
        />
      )}
      <div className='text-2xl font-bold'>{title}</div>
    </div>
  )
}

export default TitlePage
