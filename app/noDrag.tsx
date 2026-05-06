// components/NoDrag.tsx
'use client'
import { useEffect } from 'react'

export default function NoDrag() {
  useEffect(() => {
    const handler = (e: DragEvent) => e.preventDefault()
    document.addEventListener('dragstart', handler)
    return () => document.removeEventListener('dragstart', handler)
  }, [])

  return null
}
