import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Img2 from '../../assets/img2.jpg'
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
    {/* <div className={classes.footer}>
        <p>Made with ❤️ by Team Awaaz at Vihaan6.0</p>
    </div> */}
    <Footer/>
    </>
  )
}

export default Main

// <div className={classes['image-div']}>
{/* <img className={classes['main-image']} src={Img2} alt='display image' ></img>
</div> */}