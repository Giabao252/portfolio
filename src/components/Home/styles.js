import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    home_wrapper : {
        marginTop: "10%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        height: 400
    },   
    title: {
        fontWeight: "bold"
    },
    image: {
        height: "40%",
        float: "right",
        borderRadius: "10px",
        padding: 0
    },
    divider: {
        width: "90%",
        float: "left",
    },
    about_wrapper :{
       
    },
    about: {
        marginTop: "2%"
    },
    Denison: {
        height: 100,
        width: 300,
        position: "absolute",
        margin: "auto"
    }
}))