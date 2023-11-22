import React from 'react'
import { Header } from '../components/Header'
import { ListCard } from './Listcard'
import { About } from '../components/About'

export const Home = () => {
  return (
    <>
      <Header />
      <ListCard />
      <About />
    </>
  )
}
