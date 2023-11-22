import React from 'react'

export const Wrapper = ({ children }) => {
  return (
    <main className="flex flex-col items-center item  p-4 min-h-screen w-full">
      {children}
    </main>
  )
}
