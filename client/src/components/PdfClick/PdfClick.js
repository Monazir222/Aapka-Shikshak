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

const faces = [
  "http://i.pravatar.cc/300?img=1",
  "http://i.pravatar.cc/300?img=2",
  "http://i.pravatar.cc/300?img=3",
  "http://i.pravatar.cc/300?img=4"
];

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
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
  name: "Nature Around Us",
  description:
    "We are going to learn different kinds of species in nature that live together to form amazing environment."
};
export default function PdfCard() {
  const classes = useStyles();

  const [cards, setCards] = React.useState([card]);

  return (
    <div className="root">
      <div className={classes.title}>
        <h2>Cards</h2>
      </div>

      <div className={classes.header}>
        <Button
          variant="contained"
          size="small"
          color="primary"
          onClick={() => {
            setCards([...cards, card]);
          }}
        >
          Add
        </Button>
        <Button
          variant="contained"
          size="small"
          color="primary"
          onClick={() => {
            setCards([]);
          }}
        >
          Reset
        </Button>
      </div>

      <Grid container spacing={1}>
        {cards.map((cards, index) => {
          const { image, name, description } = cards;
          return (
            <Grid item>
              <Card key={index} className={classes.card}>
                <CardMedia className={classes.media} image={image} />
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
                  {faces.map(face => (
                    <Avatar className={classes.avatar} key={face} src={face} />
                  ))}
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
