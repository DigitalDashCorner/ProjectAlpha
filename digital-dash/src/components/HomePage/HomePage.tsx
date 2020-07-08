import {
  makeStyles,
  Container,
  Grid,
  AppBar,
  Typography,
  Tabs,
  Tab,
  Button,
  BottomNavigation,
  Tooltip,
  Fab,
  IconButton,
  Card,
  Icon,
} from "@material-ui/core";
import { Link, animateScroll as scroll } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithubAlt,
  faFacebook,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

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
  },
  subHeadings: {
    fontFamily: "Karla",
    color: "#7C7C7C",
  },
  carouselContainer: {
    width: "100%",
    margin: "2rem 0",
  },

  carouselSlide: {},
  carouselImage: {
    maxWidth:'100%',
    objectFit: "cover",
  },
  BuildProducts: {
    width: "100%",
  },
  Home: {
    padding:'4rem'
  },
  icons: {
    height: "1rem",
    width: "1rem",
  },
  socialmediaIcons: {
    height: "1.5rem !important",
    width: "1.5rem !important",
  },

  WhoWeAre: {
    marginTop: "52px",
  },
  WhoWeAreTxt: {
  },
  projHeadings: {
    fontFamily: "Karla",
    fontSize: "0.75rem",
    color: "#7C7C7C",
  },
  whatWeOfferIcon: {
    height: '1rem',
    width: '1rem',
    backgroundColor: 'black'
  },
  WhatWeOfferCard: {
    padding: '0.5rem'
  }

}));

export const HomePage = (): ReactElement => {
  const classes = useStyles();
  const [navTabValue, setNavTabValue] = React.useState("ResumeBuilder");
  const handleNavChange = (event: any, tab: any) => {
    setNavTabValue(tab);
  };

  const getProjectTab = () => {
    return (
      <div>
        <Grid container direction='row'>
          <Grid item lg={6}>
            <Typography
              variant="h2"
              style={{
                fontFamily: "karla",
                paddingTop: "1rem",
              }}
            >
              Resume Builder
              </Typography>
            <Typography
              variant="body2"
              className={classes.subHeadings}
              style={{
                padding: '2rem 0'
              }}
            >
              Lorem ipsum dolor sit amet, consectetur dolor sit Lorem ipsum
              lorem ipsum dolor sit amet, consectetur dolor lorem ipsum dolor
              sit amet, consectetur dolor lorem ipsum dolor sit amet,
              consectetur dolor
          </Typography>
            <Grid direction='row' style={{ color: "#5F90FF" }}>
              <Typography variant="body2">Learn More</Typography>
              <img
                src={externalIcon}
                style={{ width: "1rem", height: "1rem", paddingLeft: "1rem" }}
              />
            </Grid>
          </Grid>
          <Grid item lg={6}>
            <img
              src={ProjectR}
              style={{ maxWidth: '100%' }}
            />
          </Grid>
        </Grid>
      </div>
    )
  };

  return (
    <Container disableGutters className={classes.baseContainer} maxWidth="xl">

      <section title="Top" id="Top">
        <Grid
          container
          direction="column"
          justify="center"
          className={classes.Home}
          style={{ marginTop: "5rem" }}
        >
          <Grid
            container
            direction="row"
            justify="center"
            className={classes.BuildProducts}
          >
            <Grid item direction="column" lg={4} md={12}>
              <Typography variant="h3">
                Build Better Products
              </Typography>
              <Typography
                variant="h4"
              >
                Lorem ipsum dolor sit amet, consectetur dolor sit Lorem ipsum
              </Typography>
              <Link
                to="AboutUs"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
              >
                <Tooltip title="" style={{ marginTop: "1rem" }}>
                  <IconButton>
                    <img className={classes.icons} src={icon} />
                  </IconButton>
                </Tooltip>
              </Link>
            </Grid>
          <Grid item lg={8} md={12}>
              <img className={classes.carouselImage} src={featuredA} />
            </Grid>
          </Grid>
        </Grid>
      </section>
      <section title='WhatWeOffer' id='WhatWeOffer'>
        <Grid container direction='column'>
          <Typography variant='h1' align='center' style={{ paddingTop: '1rem' }}>
            What We Offer
            </Typography>
          <Grid container direction='row' spacing={2} style={{ padding: '0 3rem' }}>
            <Grid item lg={3} md={6}>
              <Card className={classes.WhatWeOfferCard}>
                <Grid direction="row" justify='flex-start'>
                  <Icon className={classes.whatWeOfferIcon}>

                  </Icon>
                </Grid>
                <Grid direction="row">
                  <Typography variant='h6' align='left' >
                    Web Development
                  </Typography>
                </Grid>
                <Grid direction="row">
                  <Typography variant='body1'>
                    Lorem ipsumpaijnwdipawdipanpwidnaipwdnpianwd iahndwipanwipdn awd aipwndaipw ndpan wdaw daipwdn pa
                  </Typography>
                </Grid>
              </Card>
            </Grid>
            <Grid item lg={3} md={6}>
              <Card className={classes.WhatWeOfferCard}>
                <Grid direction="row" justify='flex-start'>
                  <Icon className={classes.whatWeOfferIcon}>

                  </Icon>
                </Grid>
                <Grid direction="row">
                  <Typography variant='h6' align='left'>
                    UX Design
                  </Typography>
                </Grid>
                <Grid direction="row">
                  <Typography variant='body1'>
                    Lorem ipsumpaijnwdipawdipanpwidnaipwdnpianwd iahndwipanwipdn awd aipwndaipw ndpan wdaw daipwdn pa
                  </Typography>
                </Grid>
              </Card>
            </Grid>
            <Grid item lg={3} md={6}>
              <Card className={classes.WhatWeOfferCard}>
                <Grid direction="row" justify='flex-start'>
                  <Icon className={classes.whatWeOfferIcon}>

                  </Icon>
                </Grid>
                <Grid direction="row">
                  <Typography variant='h6' align='left'>
                    Brand Design
                  </Typography>
                </Grid>
                <Grid direction="row">
                  <Typography variant='body1'>
                    Lorem ipsumpaijnwdipawdipanpwidnaipwdnpianwd iahndwipanwipdn awd aipwndaipw ndpan wdaw daipwdn pa
                  </Typography>
                </Grid>
              </Card>
            </Grid>
            <Grid item lg={3} md={6}>
              <Card className={classes.WhatWeOfferCard}>
                <Grid direction="row" justify='flex-start'>
                  <Icon className={classes.whatWeOfferIcon}>

                  </Icon>
                </Grid>
                <Grid direction="row">
                  <Typography variant='h6' align='left'>
                    Marketing Design
                  </Typography>
                </Grid>
                <Grid direction="row">
                  <Typography variant='body1'>
                    Lorem ipsumpaijnwdipawdipanpwidnaipwdnpianwd iahndwipanwipdn awd aipwndaipw ndpan wdaw daipwdn pa
                  </Typography>
                </Grid>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </section>
      <section title=''>

      </section>

      <section title="projects" id="projects">
        <Grid
          container
          direction="column"
          justify="center"
          className={classes.Home}
        >
          <Typography variant="h5" className={classes.subHeadings}>
            Some of our work
              </Typography>
          <Typography variant="h3" className={classes.Headings}>
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
          {
            getProjectTab()
          }

        </Grid>
      </section>
      <section title="careers" id="careers">
        <Card style={{
          margin: '3rem', padding: '2rem 4rem', background: "#EFEFEF", borderRadius: '40px'
        }}>
          <Grid
            container
            direction="column"
            justify="center"
            className={classes.BuildProducts}
          >
            <Typography
              variant="h3"
              style={{ fontWeight: "bold" }}
            >
              Careers
              </Typography>
            <Grid
              container
              justify="center"
              direction='row'
              style={{ paddingTop: '2rem' }}
              spacing={2}
            >
              <Grid item lg={8}>
                <Typography
                  variant='h4'
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  We’re looking for people who want to make a difference.
                </Typography>
                <Button
                  variant="contained"
                  style={{
                    background: "#6C63FF",
                    color: "white",
                    fontWeight: "bold",
                    borderRadius: "30px",
                    paddingLeft: "2.5rem",
                    paddingRight: "2.5rem",
                    marginTop: '2rem',
                  }}
                >
                  View Opportunities
                </Button>
              </Grid>
              <Grid item lg={4}>
                <img src={Careers} style={{ maxWidth: '100%' }} />
              </Grid>
            </Grid>
          </Grid>

        </Card>
      </section>
      <section title="contacts" id="contacts">
        <Grid
          container
          direction="column"
          style={{ padding: '3rem' }}
          className={classes.BuildProducts}
        >
          <Grid container item justify="flex-start" direction="row">
            <Typography variant="body1" className={classes.subHeadings}>
              Have something interesting to say!
            </Typography>
          </Grid>
          <Grid container item justify="flex-start" direction="row" style={{ padding: "1rem 0" }}>
            <Grid item style={{ marginRight: '2rem' }}>
              <Typography
                variant="h3"
                style={{ fontWeight: "bold" }}
              >
                Contact Us
            </Typography>
            </Grid>
            <Grid item style={{
              background: "#A3A3A3",
              borderRadius: "30px",
              padding: '0.5rem',
              width: '10rem'
            }}>
              <Grid container direction='row' justify='space-between' >
                <Grid item>
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className={classes.socialmediaIcons}
                  />
                </Grid>
                <Grid item>
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className={classes.socialmediaIcons}
                  />
                </Grid>
                <Grid item>
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className={classes.socialmediaIcons}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container item justify="center" direction="row">
            <Grid item lg={6} md={12}>
              <img src={Future} style={{ marginBottom: "10px", maxWidth: '100%' }} />
              <Typography
                variant="body1"
                style={{ fontWeight: "bold", fontFamily: "Karla" }}
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
                  style={{ width: "1rem", height: "1rem", paddingLeft: "1rem" }}
                />
              </Grid>
            </Grid>
            <Grid item lg={6} md={12}>
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
                  style={{ width: "1rem", height: "1rem", paddingLeft: "1rem" }}
                />
              </Grid>
              <img src={JobMatching} style={{ maxWidth: '100%' }} />
            </Grid>
          </Grid>
        </Grid>
      </section>
    </Container>
  );
};
