import { makeStyles } from "@material-ui/core";
import { hover } from "@testing-library/user-event/dist/hover";

export default makeStyles((theme) => ({
    navbar: {
        overflow: "hidden",
        backgroundColor: "transparent",
        alignItems: "center",
    },
    title: {
        cursor: "pointer",
        fontSize: "25px",
        color: "rgb(255, 200, 48)",
        fontWeight: "bold",
        textDecoration: "none"
    },
    sections : {
        display: "flex",
        flexDirection: "row",
        justifyContent:"space-between",
    },
    links: {
        textDecoration: "none",
        listStyle: "none",
        color:"white",
        fontSize: "21px",
        cursor: "pointer",
        fontWeight: "bold",
        marginLeft: theme.spacing(10),
        "&:hover": {
            textDecoration: "none",
            color: "rgb(255, 200, 48)"
        }
    },


}))