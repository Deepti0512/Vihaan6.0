import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import classes from './Main.module.css'
import Search from '../../components/Search/Search'
import Places from '../../components/Places/Places'
import Footer from '../../components/Footer/Footer'

const Main = () => {
  return (
    <>
    <Navbar/>
    <Search/>
    <Places/>
    <Footer/>
    </>
  )
}

export default Main
