const useStyles = (theme) => ({
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
    div: {
        flexGrow: 1,
    },
    img: {
        width: "8%",
        marginLeft:"48%",
    },
    card: {
        minWidth: 275,
        marginTop: "100px",
    },
    title: {
        marginTop: "3%",
        fontSize: "200%",
        textAlign: "center",
    },
    subtitle: {
        fontSize: "100%",
        textAlign: "center",
    },
    textField: {
        width: "100%",
    },

    buttonPrincipal: {
        background: 'linear-gradient(45deg, #C898FF 30%, #72A1FF 90%)',
        color: 'white',
        borderRadius: 50,
        height: 48,
        width: "100%",
        marginBottom: "30px",
        marginTop: "30px",
        "&:hover": {
            background: "transparent",
            color:'#C898FF',
        },
    },
    buttonSecundario: {
        background: 'white',
        color: "#C898FF",
        borderRadius: 50,
        height: 48,
        width: "100%",
        marginBottom: "30px",
        marginTop: "30px",
        "&:hover": {
            background: 'linear-gradient(45deg, #72A1FF 30%,#C898FF 90%)',
            color: 'white',
        },
    },
});

export default useStyles