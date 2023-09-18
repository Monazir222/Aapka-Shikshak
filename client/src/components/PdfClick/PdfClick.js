import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";
import TextField from '@mui/material/TextField';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import '../../assets/Global.css';
import './PdfClick.css';

const faces = [
    "http://i.pravatar.cc/300?img=1",
    "http://i.pravatar.cc/300?img=2",
    "http://i.pravatar.cc/300?img=3",
    "http://i.pravatar.cc/300?img=4"
];

const useStyles = makeStyles(theme => ({
    root: {
        // display: "flex",
        justifyContent: "initial"
    },
    title: {
        marginBottom: "30px"
    },
    header: {
        marginBottom: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
    },
    card: {
        maxWidth: 300,
        // margin: "auto",
        transition: "0.3s",
        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
        "&:hover": {
            boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
        }
    },
    media: {
        paddingTop: "56.25%"
    },
    content: {
        textAlign: "left",
        padding: theme.spacing.unit * 3
    },
    divider: {
        margin: `${theme.spacing.unit * 3}px 0`
    },
    heading: {
        fontWeight: "bold"
    },
    subheading: {
        lineHeight: 1.8
    },
    avatar: {
        display: "inline-block",
        border: "2px solid white",
        "&:not(:first-of-type)": {
            marginLeft: theme.spacing.unit
        }
    }
}));

const card = {
    image:
        "https://image.freepik.com/free-photo/river-foggy-mountains-landscape_1204-511.jpg",
    name: "Class X Physics Notes",
    description:
        "All important questions and topics are listed in this pdf."
};
export default function PdfCard() {
    const classes = useStyles();

    const [cards, setCards] = React.useState([card]);

    return (
        <>
            <div style={{ paddingTop: '10px', paddingBottom: '10px' }}>
                <button
                    className='pdfButton'
                    onClick={() => {
                        setCards([...cards, card]);
                    }}
                    style={{ marginRight: '10px' }}
                >
                    Add
                </button>
                <button
                    className='pdfButton'
                    onClick={() => {
                        setCards([]);
                    }}
                >
                    Reset
                </button>
            </div>
            <div className={classes.card}>
                {/* <CardMedia className={classes.media} image={image} /> */}
                <CardContent className={classes.content}>
                    <TextField id="outlined-basic" label="Enter Content Topic" variant="outlined" size="small" fullWidth />
                    <div style={{ height: '10px' }}></div>
                    <TextField id="outlined-basic" label="Enter Content Description" multiline maxRows={4} size="small" fullWidth />

                    <Divider className={classes.divider} light />
                    <Grid container>
                        <Grid xs={2}>
                            <FileUploadIcon />
                        </Grid>
                        <Grid xs={3}><Typography>Upload</Typography>
                        </Grid>
                    </Grid>
                    {/* {faces.map(face => (
                    <Avatar className={classes.avatar} key={face} src={face} />
                  ))} */}
                </CardContent>
            </div>
            <Grid container spacing={1} justifyContent='center' className="pdfCard">
                {cards.map((cards, index) => {
                    const { image, name, description } = cards;
                    return (
                        <Grid item>
                            <div key={index} className={classes.card}>
                                {/* <CardMedia className={classes.media} image={image} /> */}
                                <CardContent className={classes.content}>
                                    <Typography
                                        className={"MuiTypography--heading"}
                                        variant={"h6"}
                                        gutterBottom
                                    >
                                        {name}
                                    </Typography>
                                    <Typography
                                        className={"MuiTypography--subheading"}
                                        variant={"caption"}
                                    >
                                        {description}
                                    </Typography>
                                    <Divider className={classes.divider} light />
                                    <Grid container>
                                        <Grid xs={2}>
                                            <FileDownloadIcon />
                                        </Grid>
                                        <Grid xs={4}><Typography>Downlod</Typography>
                                        </Grid>
                                    </Grid>
                                    {/* {faces.map(face => (
                    <Avatar className={classes.avatar} key={face} src={face} />
                  ))} */}
                                </CardContent>
                            </div>
                        </Grid>
                    );
                })}
            </Grid>
        </>
    );
}
