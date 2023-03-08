//import { Grid } from "@mui/material";
import { Grid } from "@mui/material";
import React from "react";
import Feebtn from "../Container/Feebtn";
import Footer from "../Container/Footer";
import Header from "../Container/Header";
import PlanBoxContainer from "../Container/PlanBoxContainer";
import Scope from "../Container/Scope";
import ScopeWork from "../Container/ScopeWork";

function Home() {
  return (
    <Grid container>
      <Header/>
      <Scope/>
      <ScopeWork/>
      <Feebtn/>
      <PlanBoxContainer/>
      <Footer/>
    </Grid>
  );
}

export default Home;
