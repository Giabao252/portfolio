import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    footer_wrapper: {
        position: "static",
        textAlign: "center",
        marginTop: "10%"
    },
    title: {
        marginTop: "-3%",
        marginBottom: "2%",
        fontWeight: "bold",
    },
    links: {
        textDecoration: "none",
        color: "rgb(255, 200, 48)",
        marginLeft: theme.spacing(3),
    },
    copyright: {
        marginTop: "2%",
        fontFamily: "'Playfair Display', serif",
        color: "white"
    }, 
    contacts: {
        marginTop: "2%"
    }
}))