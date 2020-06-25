import {
  makeStyles,
  Container,
  Grid,
  AppBar,
  Typography,
  Tabs,
  Tab,
  Button,
  BottomNavigation 
} from "@material-ui/core";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubAlt,
  faGoogle,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import React, { ReactElement } from "react";
// import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image, DotGroup } from 'pure-react-carousel';

import featuredA from "../../assets/svg/BuildBetterProducts_ArtWork.svg";

import icon from "../../assets/svg/Icon-arrow-down.svg";
import externalIcon from "../../assets/svg/Icon-external-link.svg";
import WhoWeAre from "../../assets/svg/WhoWeAre_ArtWork.svg";
import WhatWeDo from "../../assets/svg/WhatWeDo_ArtWork.svg";
import ProjectR from "../../assets/svg/ProjectR_Artwork.svg";
import Careers from "../../assets/svg/Careers_ArtWork.svg";
import Future from "../../assets/svg/Future_ArtWork.svg";
import JobMatching from "../../assets/svg/JobMatching_ArtWork.svg";

const useStyles = makeStyles((theme) => ({
  baseContainer: {
    height: "100%",
  },
  Headings: {
    fontFamily: "Karla",
    fontSize: "50px",
    width: "316px",
  },
  subHeadings: {
    fontFamily: "Karla",
    fontSize: "30px",

    color: "#7C7C7C",
  },
  carouselContainer: {
    width: "100%",
    margin: "2rem 0",
  },

  carouselSlide: {},
  carouselImage: {
    width: "976px",
    height: "536px",
    objectFit: "cover",
  },
  BuildProducts: {
    width: "1453px",
    margin: "auto",
  },
  Home: {
    margin: "auto",
  },
  icons: {
    height: "20px",
    width: "20px",
  },
  socialmediaIcons: {
    height: "40px",
    width: "40px",
  },

  WhoWeAre: {
    marginTop: "52px",
  },
  WhoWeAreTxt: {
    width: "620px",
  },
  projHeadings: {
    fontFamily: "Karla",
    fontSize: "15px",
    color: "#7C7C7C",
  },
}));

export const HomePage = (): ReactElement => {
  const classes = useStyles();
  const [navTabValue, setNavTabValue] = React.useState("ResumeBuilder");
  const handleNavChange = (event: any, tab: any) => {
    setNavTabValue(tab);
  };
  return (
    <Container disableGutters className={classes.baseContainer} maxWidth="xl">
      <Grid
        container
        direction="column"
        justify="center"
        className={classes.Home}
        style={{ marginTop: "120px" }}
      >
        <Grid
          container
          direction="row"
          justify="center"
          className={classes.BuildProducts}
        >
          <Grid item direction="column">
            <Typography variant="body2" className={classes.Headings}>
              Build Better Products
            </Typography>
            <Typography
              variant="body2"
              className={classes.subHeadings}
              style={{ width: "316px", paddingTop: "18px" }}
            >
              Lorem ipsum dolor sit amet, consectetur dolor sit Lorem ipsum
            </Typography>
            <img
              className={classes.icons}
              src={icon}
              style={{ marginTop: "22px" }}
            />
          </Grid>
          <Grid item>
            <img className={classes.carouselImage} src={featuredA} />
          </Grid>
        </Grid>
      </Grid>

      <Grid container className={classes.Home} style={{ marginTop: "181px" }}>
        <Grid
          container
          direction="column"
          justify="center"
          className={classes.BuildProducts}
        >
          <Grid container item direction="row">
            <Grid item>
              <Typography variant="body2" className={classes.Headings}>
                Who We Are
              </Typography>
              <img
                src={WhoWeAre}
                className={classes.WhoWeAre}
                style={{ marginRight: "52px" }}
              />
            </Grid>
            <Grid item>
              <Typography
                variant="body2"
                className={classes.subHeadings}
                style={{
                  width: "620px",
                  marginTop: "100px",
                  paddingTop: "18px",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur dolor sit Lorem ipsum
                lorem ipsum dolor sit amet, consectetur dolor lorem ipsum dolor
                sit amet, consectetur dolor lorem ipsum dolor sit amet,
                consectetur dolor
              </Typography>
            </Grid>
          </Grid>

          <Grid container item direction="row" justify="flex-end">
            <Grid item>
              <Typography
                variant="body2"
                className={classes.subHeadings}
                style={{
                  width: "620px",
                  marginTop: "100px",
                  paddingTop: "18px",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur dolor sit Lorem ipsum
                lorem ipsum dolor sit amet, consectetur dolor lorem ipsum dolor
                sit amet, consectetur dolor lorem ipsum dolor sit amet,
                consectetur dolor
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body2"
                className={classes.Headings}
                style={{ marginLeft: "100px" }}
              >
                What We Do
              </Typography>
              <img
                src={WhatWeDo}
                className={classes.WhoWeAre}
                style={{ marginLeft: "52px" }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        direction="column"
        justify="center"
        className={classes.Home}
        style={{ marginTop: "250px" }}
      >
        <Grid
          container
          direction="row"
          justify="center"
          className={classes.BuildProducts}
        >
          <Grid item direction="column">
            <Typography variant="body2" className={classes.subHeadings}>
              Some of our work
            </Typography>
            <Typography variant="body2" className={classes.Headings}>
              Projects
            </Typography>
            <Tabs value={navTabValue} onChange={handleNavChange}>
              <Tab
                value="ResumeBuilder"
                label="Resume Builder"
                className={classes.projHeadings}
              />
              <Tab
                value="MyRef"
                label="MyRef"
                className={classes.projHeadings}
              />
              <Tab
                value="JobMatch"
                label="Job Match"
                className={classes.projHeadings}
              />
            </Tabs>
            <Typography
              variant="body2"
              style={{
                fontFamily: "karla",
                fontSize: "70px",
                paddingTop: "30px",
              }}
            >
              Resume Builder
            </Typography>
            <Typography
              variant="body2"
              className={classes.subHeadings}
              style={{
                width: "614px",
                paddingTop: "50px",
                paddingBottom: "45px",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur dolor sit Lorem ipsum
              lorem ipsum dolor sit amet, consectetur dolor lorem ipsum dolor
              sit amet, consectetur dolor lorem ipsum dolor sit amet,
              consectetur dolor
            </Typography>
            <Grid
              container
              item
              className={classes.subHeadings}
              style={{ color: "#5F90FF" }}
            >
              <Grid item>
                <Typography variant="body2">Learn More</Typography>
              </Grid>
              <img
                src={externalIcon}
                style={{ width: "27px", height: "27px", paddingLeft: "24px" }}
              />
            </Grid>
          </Grid>
          <Grid item>
            <img
              src={ProjectR}
              style={{ paddingLeft: "150px", paddingTop: "40px" }}
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        direction="column"
        style={{
          marginTop: "250px",
          background: "#EFEFEF",
          paddingBottom: "170px",
        }}
      >
        <Grid
          container
          direction="column"
          justify="center"
          className={classes.BuildProducts}
        >
          <Grid item direction="column">
            <Typography
              variant="body2"
              className={classes.Headings}
              style={{ paddingTop: "50px", fontWeight: "bold" }}
            >
              Careers
            </Typography>
          </Grid>
          <Grid
            container
            item
            justify="center"
            style={{ paddingTop: "240px", paddingLeft: "50px" }}
          >
            <Grid item>
              <Typography
                className={classes.Headings}
                style={{
                  fontWeight: "bold",
                  width: "720px",
                  marginBottom: "40px",
                }}
              >
                We’re looking for people who want to make a difference.
              </Typography>
              <Button
                variant="contained"
                className={classes.subHeadings}
                style={{
                  background: "#6C63FF",
                  color: "white",
                  fontWeight: "bold",
                  borderRadius: "30px",
                  paddingLeft: "64px",
                  paddingRight: "64px",
                }}
              >
                View Opportunities
              </Button>
            </Grid>
            <Grid item>
              <img src={Careers} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        direction="column"
        style={{ paddingBottom: "170px", paddingTop: "100px" }}
        className={classes.BuildProducts}
      >
        <Grid item direction="column">
          <Typography variant="body1" className={classes.subHeadings}>
            Have something interesting to say!
          </Typography>
          <Typography
            variant="body2"
            className={classes.Headings}
            style={{ paddingTop: "20px", fontWeight: "bold" }}
          >
            Contact Us
          </Typography>
        </Grid>

        <Grid container item justify="center" direction="row">
          <Grid item md={4}>
            <Typography
              className={classes.Headings}
              style={{
                marginTop: "30px",
                width: "440px",
                height: "110px",
                background: "#A3A3A3",
                borderRadius: "30px",
              }}
            >
              <Grid item style={{ padding: "15px 92px 0px 92px" }}>
                <FontAwesomeIcon
                  icon={faInstagram}
                  className={classes.socialmediaIcons}
                />
                <FontAwesomeIcon
                  icon={faFacebook}
                  className={classes.socialmediaIcons}
                  style={{ paddingLeft: "52px", paddingRight: "56px" }}
                />
                <FontAwesomeIcon
                  icon={faTwitter}
                  className={classes.socialmediaIcons}
                />
              </Grid>
            </Typography>
            <Typography
              style={{
                fontSize: "100px",
                fontWeight: "bold",
                width: "347px",
                fontFamily: "Karla",
              }}
            >
              News & Blogs
            </Typography>
          </Grid>
          <Grid item md={4}>
            <img
              src={Future}
              style={{ marginBottom:"10px" }}
            />
            <Typography
              variant="body1"
              style={{ fontWeight: "bold", fontFamily: "Karla",  }}
            >
              Resume Builder: The Future of Job Hunting
            </Typography>
            <Grid
              container
              item
              className={classes.subHeadings}
              style={{ color: "#5F90FF" }}
            >
              <Grid item>
                <Typography variant="body2">Learn More</Typography>
              </Grid>
              <img
                src={externalIcon}
                style={{ width: "27px", height: "27px", paddingLeft: "24px" }}
              />
            </Grid>
          </Grid>
          <Grid item md={4}>
            <Typography
              variant="body1"
              style={{ fontWeight: "bold", fontFamily: "Karla" }}
            >
              Job Matching: Finding the Career that's Right for You
            </Typography>
            <Grid
              container
              item
              className={classes.subHeadings}
              style={{ color: "#5F90FF" }}
            >
              <Grid item>
                <Typography variant="body2">Learn More</Typography>
              </Grid>
              <img
                src={externalIcon}
                style={{ width: "27px", height: "27px", paddingLeft: "24px" }}
              />
            </Grid>
            <img src={JobMatching} />
          </Grid>
        </Grid>
      </Grid>
      
    </Container>
  );
};
