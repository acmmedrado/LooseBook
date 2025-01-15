const useStyles = (theme) => ({
    root: {
        flexGrow: 1,
    },
    card: {
        marginTop: 100,
        marginRight: 100,
        marginLeft: 100,
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    buttonEscolher: {
        background: 'linear-gradient(45deg, #C898FF 30%, #72A1FF 90%)',
        borderRadius: 50,
        color: 'white',
        padding: '0 30px',
        height: 35,
        "&:hover": {
            background: "transparent",
            color: '#C898FF',
            border: "1px solid "
        },
    },
    imagemgrid: {
        width: "auto"
    },
    image: {
        height: "auto"
    },
    borda: {
        width: "auto",
        border: "2px solid #C898FF",
        padding: 15

    },
    gridButton: {
        marginBlockStart: "auto"
    }

});

export default useStyles