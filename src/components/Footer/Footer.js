import React from "react";
import { Container, Typography, Button } from "@material-ui/core";
import { ReactDOM } from "react-dom";
import useStyles from "./styles";
import { Link } from "@material-ui/core";
import { Facebook, LinkedIn, Mail, GitHub, Instagram } from "@material-ui/icons";


const Footer = () => {
    const classes = useStyles();

    

    return (
        <Container className={classes.footer_wrapper} maxWidth="xl">
            <Typography className={classes.title}>Contact me</Typography>
            <Typography>luugiabaoluu24@gmail.com</Typography>
            <div className={classes.contacts}>
                <Link href="https://www.facebook.com/profile.php?id=100035791500312" style={{color: "rgb(255, 200, 48)", textDecoration: "none"}}>
                    <Facebook />
                </Link>
                <Link href="https://www.instagram.com/billybigboy_06/" className={classes.links}>
                    <Instagram />
                </Link>
                <Link href="https://www.linkedin.com/in/bao-luu-180983217/" className={classes.links}>
                    <LinkedIn />
                </Link>
            </div>
            <Typography className={classes.copyright}>Copyright © Luu Gia Bao 2022. All Rights Reserved</Typography>
        </Container>
    );
}

export default Footer