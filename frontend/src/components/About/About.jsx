import React from 'react';
import classes from './About.module.css';
import Image from '../../assets/img3.jpg';

const About = () => {
  return (
    <section className={classes["about-section"]}>
      <div className={classes["about-container"]}>
        <h2 className={classes["about-title"]}>About Us</h2>
        <p className={classes["about-text"]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et leo euismod, sagittis diam quis, consectetur libero.
          Donec imperdiet sapien augue, in consectetur nunc maximus quis. Fusce auctor ex id mauris bibendum, id aliquet lorem
          volutpat.
        </p>
        <p className={classes["about-text"]}>
          Sed pellentesque ante sit amet dolor lobortis auctor. Sed tristique tellus nec velit sodales iaculis. Nulla facilisi.
          Suspendisse ac ultrices quam, ac elementum neque. Sed quis eros magna. Nunc suscipit sem vel justo feugiat, eu varius
          sapien interdum.
        </p>
        <img src={Image} alt="About Us" className="about-image" />
      </div>
    </section>
  );
};

export default About;
