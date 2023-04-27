import { React, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
// import classes from "./Main.module.css";
import Search from "../../components/Search/Search";
import Places from "../../components/Places/Places";
import Footer from "../../components/Footer/Footer";
import About from "../../components/About/About";

const Main = () => {
  async function fetchData(){
    const url = "https://countries-cities.p.rapidapi.com/location/city/5128580";
    const options = {
      method: "GET",
      headers: {
        "content-type": "application/octet-stream",
        "X-RapidAPI-Key": "360e275e36msh4c222c882cf7d3fp1a7d71jsn4aa24845a677",
        "X-RapidAPI-Host": "countries-cities.p.rapidapi.com",
      },
    };
    try {
      const response = await fetch(url,options);
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect( () => {
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <Search />
      <Places />
      <About/>
      <Footer />
    </>
  );
};

export default Main;
