import React from "react";
import { Container, Typography, Grid } from "@material-ui/core";
import { TopNav, Footer } from "../components";

import { denison, myself } from "../../assets/assets.js"


import useStyles from "./styles";

const Home = () => {
    const classes = useStyles();

    return (
        <Container maxWidth="xl">
            <TopNav />

            <Grid container spacing={5} className={classes.home_wrapper}>
                <Grid item xs={6}>
                    <img src={myself} alt="Profile picx" className={classes.image} />
                </Grid>

                <Grid item xs = {6}>
                    <Typography variant="h2" className={classes.title}>Hello, I'm <Typography variant="h2" style={{color:"rgb(255, 200, 48)", fontWeight: "bold"}}>Bill</Typography></Typography>
                    <hr className={classes.divider} /> 
                    <br />
                    <Typography variant="h6" className={classes.subtitle}>Computer Science @ Denison University</Typography>
                </Grid>
            </Grid>

            <Grid className={classes.about_wrapper} >
                <Typography variant="h4" style={{fontWeight: "bold", color: "rgb(255, 200, 48)", textAlign: "center"}}>About me</Typography>
                
                <Grid container spacing={5} className={classes.about}>
                    <Grid item xs={8}>
                        <Typography>My real name is Luu Gia Bao. I'm a Vietnamese studying Computer Science at Denison University, Ohio, class of 2026.</Typography>
                        <br />
                        <Typography>My first exposure to CS was an online full-stack programming course taught by Amazon engineers. As I coded my first javascript program, I was blown away by how effortlessly we can apply our knowledge into practice with the power of computer. Since then I've constantly been grasping new concepts and coding applications as my hobby.</Typography>
                        <br />
                        <Typography>My areas of interests are Web/App development, Blockchain, Human-Computer Interaction, and Fintech.</Typography>
                        <br /> 
                        <Typography>I'm always bracing myself for new opportunities/challenges and just meeting new people in general, so don't hesitate to drop me a message using any method under the Contact box.</Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <img src={denison} className={classes.Denison} alt="School" />
                    </Grid>
                </Grid>
            </Grid>

            <Footer />
        </Container>
    );
}

export default Home;