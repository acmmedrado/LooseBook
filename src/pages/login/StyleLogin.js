const useStyles = (theme) => ({
    card: {
        marginTop: "10%",
        width: "50%",
        marginLeft: "25%",
    },
    textField: {
        width: "250%",
        marginTop: "20px",
        marginLeft: "25%",
    },
    buttonPrincipal: {
        background: 'linear-gradient(45deg, #C898FF 30%, #72A1FF 90%)',
        borderRadius: 50,
        color: 'white',
        padding: '0 30px',
        height: 48,
        width: "250px",
        marginTop: "50px",
        marginBottom: "5px",
        marginLeft: "30%",
        transition: '0.5s',
        "&:hover": {
            background: "transparent",
            color:'#C898FF',
        },
    },
    Button: {
        color: '#C898FF',
        borderRadius: 6,
        height: 30,
        width: "250px",
        marginTop: "5px",
        marginBottom: "50px",
        marginLeft: "30%",
        transition: '0.5s',
        "&:hover": {
            color:'#C898FF',
            background: "transparent",
        },
    },
    title: {
        marginTop: "8%",
        fontSize: "250%",
        textAlign: "center",
        marginBottom: "5%",
    },

});

export default useStyles