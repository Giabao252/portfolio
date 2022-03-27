import React from "react";
import { AppBar, Container, Typography, Toolbar } from "@material-ui/core";
import { Link } from "react-router-dom";

import useStyles from "./styles";

const TopNav = () => {
    const classes = useStyles();

    return (
        <AppBar className={classes.navbar} position="static" maxWidth="xl">
            <Container maxWidth="xl">
                <Toolbar>
                    <Link to="/" className={classes.title}>
                            Bill.
                    </Link>
                    <div className={classes.sections}>
                        <Link to="/projects" className={classes.links}>
                                Projects
                        </Link>
                        <Link to="/resume" className={classes.links}>
                                Resume
                        </Link>
                        <a href="https://baobill.notion.site/Bill-s-blog-posts-7b433eb019064deaa738879673103f9c" className={classes.links}>
                                Blog
                        </a>
                        <Link to="/coding-notes" className={classes.links}>
                            Notes
                        </Link>
                    </div>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default TopNav;
