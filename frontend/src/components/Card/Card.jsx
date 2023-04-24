import React from 'react'
import Img1 from '../../assets/img1.jpg'
import classes from './Card.module.css'

const Card = () => {
  return (
    <div className={classes['main-container']}>
      <img src={Img1} alt="img1" className={classes['card-img']} />
      <h3>place name</h3>
      <h4>City</h4>
    </div>
  )
}

export default Card
