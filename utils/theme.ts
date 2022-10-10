import {createTheme} from '@mui/material/styles'

declare module "@mui/material/styles" {
    interface Palette {
        neutral?: Palette['primary']
    }
    interface PaletteOptions {
        neutral?: PaletteOptions['primary']
    }
}

// @ts-ignore
const theme = createTheme({
    typography: {
        h1: {
            fontSize:"1.25rem"
        },
        h2: {
            fontSize:"1.5rem"
        }
    },
    palette: {
        primary: {
            main:"#000",
            light:"#595959"
        },
        secondary: {
            main: "#595959"
        }
    },
    components: {
        MuiPaper: {
            styleOverrides: {
                rounded: {
                    borderRadius: 8,
                },
            }
        },
        MuiDialog: {
            styleOverrides: {
                paper: {
                    boxShadow: 'none',
                },
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '8px',
                    textTransform: 'inherit',
                    fontSize: 16,
                    transition: '0.2s',
                    '&:active': {
                        boxShadow:
                            '0 1px 1px rgb(0 0 0 / 15%), 0 4px 7px rgb(0 0 0 / 0%), 0 -1px 0 rgb(0 0 0 / 5%), -1px 0 0 rgb(0 0 0 / 5%), 1px 0 0 rgb(0 0 0 / 5%) !important',
                        transform: 'translateY(1px)',
                    },
                },
                contained: {
                    backgroundColor: 'white',
                    boxShadow:
                        '0 1px 1px rgb(0 0 0 / 15%), 0 4px 7px rgb(0 0 0 / 5%), 0 -1px 0 rgb(0 0 0 / 5%), -1px 0 0 rgb(0 0 0 / 5%), 1px 0 0 rgb(0 0 0 / 5%)',
                    '&:hover': {
                        backgroundColor: 'white',
                        boxShadow:
                            '0 1px 1px rgb(0 0 0 / 18%), 0 4px 7px rgb(0 0 0 / 8%), 0 -1px 0 rgb(0 0 0 / 8%), -1px 0 0 rgb(0 0 0 / 8%), 1px 0 0 rgb(0 0 0 / 15%)',
                    },
                },
                containedPrimary: {
                    color:"#000",
                    backgroundColor: '#fff',
                    '&:hover': {
                        backgroundColor: '#fff',
                    },
                },
            }
        },
        MuiButtonBase: {
            defaultProps: {
                disableRipple: true
            }
        }
    }
})


export default theme