import React from "react";
import classes from "./Places.module.css";
import "../Card/Card";
import Card from "../Card/Card";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";

const Places = () => {
  return (
    <section className={classes["main-container"]}>
      <h2 className={classes["places-title"]}>Explore Popular Places</h2>
      <div className={classes["places-card-container"]}>
        <Card image={img1} place="Statue of Unity" city="Gujarat" />
        <Card image={img2} place="Srinagar" city="J&K" />
        <Card image={img3} place="Manali" city="Himachal Pradesh" />
      </div>
    </section>
  )
}

export default Places
