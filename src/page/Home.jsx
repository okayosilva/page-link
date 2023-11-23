import React from 'react'
import { Header } from '../components/Header'
import { ListCard } from './Listcard'
import { About } from '../components/About'

export const Home = () => {
  return (
    <div className="max-w-2xl ">
      <Header />
      <ListCard />
      <About />
    </div>
  )
}
