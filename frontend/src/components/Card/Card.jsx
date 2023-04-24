import React from 'react'
import Img1 from '../../assets/img1.jpg'
import classes from './Card.module.css'

const Card = (props) => {
  return (
    <section className={classes['card-container']}>
      <img src={props.image} alt="img1" className={classes['card-img']} />
      <h3>{props.place}</h3>
      <h4>{props.city}</h4>
    </section>
  )
}

export default Card
