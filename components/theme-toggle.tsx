'use client'

import React from 'react'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

import { Button } from './ui/button'
import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])
  if (!mounted) {
    return null
  }

  return (
    <Button
      size='sm'
      variant='ghost'
      onClick={() => {
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
      }}
    >
      {resolvedTheme === 'dark' ? (
        <Sun className='size-4 text-yellow-600' />
      ) : (
        <Moon className='size-4 text-gray-600' />
      )}

      <span className='sr-only'>Toggle theme</span>
    </Button>
  )
}
