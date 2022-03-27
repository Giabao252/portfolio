import React from "react";
import { TopNav } from "../components";
import { Container } from "@material-ui/core";
import PDF from "../../assets/resume.pdf"

import useStyles from "./styles";


const Resume = () => {
    const classes = useStyles();

    return (
        <Container maxWidth="xl">
            <TopNav /> 

            <div className={classes.pdf_container}>
                <object className={classes.resume} type="application/pdf" data={PDF} > 
                    <p>PDF cannot be displayed</p>
                </object>
            </div>
            
        </Container>
    );
}

export default Resume;