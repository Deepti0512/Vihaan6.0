import React from 'react'
import classes from './Places.module.css'
import '../Card/Card'
import Card from '../Card/Card'

const Places = () => {
  return (
    <div className={classes['main-container']}>
        <Card/>
        <Card/>
        <Card/>
    </div>
  )
}

export default Places
