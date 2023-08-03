'use client'

import { useEffect } from 'react'
import { Crisp } from 'crisp-sdk-web'

const CrispChat = () => {
  useEffect(() => {
    Crisp.configure('e6ecf6d6-39f2-4704-96b6-f9b12fa02971')
  }, [])

  return null
}

export default CrispChat
