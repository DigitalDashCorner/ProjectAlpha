import { makeStyles, Container, Grid, AppBar, Typography, Tabs, Tab, Button } from '@material-ui/core';
import { TabPanel } from '@material-ui/lab';
import React, { ReactElement } from 'react';
// import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image, DotGroup } from 'pure-react-carousel';
import Carousel from 'react-material-ui-carousel'
import  featuredA  from '../../assets/picA.jpg';
import featuredB from '../../assets/picB.jpg';
import featuredC from '../../assets/picC.jpg';
import featuredD from '../../assets/picD.jpg';
import picture1 from '../../assets/pic1.jpg';


const useStyles = makeStyles((theme) => ({
    baseContainer: {
        height: '100%',
    },
    carouselContainer: {
        width:'100%',
        margin: '2rem 0',
    },
    carouselButton: {
        textDecoration: 'none',
        backgroundColor: 'rgba(0,0,0,0)',
        padding: '0',
        borderColor: 'rgba(0,0,0,0)',
    },
    carouselSlide: {
    },
    carouselImage: {
        width: '100%',
        height: '30rem',
        objectFit: 'cover',
    },
    ourStoryImage: {
        maxWidth:'100%',
        objectFit:'cover',
        borderRadius: '2px',
    },
    ourStoryHeading: {
        borderBottomColor: '#78909c',
        borderBottomStyle: 'solid',
        borderBottomWidth: '3px',
    },
    ourStoryBodyContainer: {
        marginTop: '1rem',
    }
}));

export const HomePage = (): ReactElement => {
    const classes = useStyles();
    const [imgTabValue, setImgTabValue] = React.useState(0)
    const carouselImages = [featuredA,featuredB,featuredC,featuredD]
    const handleImgTabChange = (event: React.ChangeEvent<{}>, tab: any): void => {
        setImgTabValue(tab)
    }
    return (
        <Container disableGutters className={classes.baseContainer}>
            <Grid container direction='column' justify='center'>
                
                <Grid container direction='row' justify='center' >
                <Carousel className={classes.carouselContainer}>
                    {carouselImages.map((img, idx) => {
                        return (
                            <Grid item>
                                <img className={classes.carouselImage} src={img}/>
                            </Grid>
                        )
                    })
                    }
                </Carousel>
                </Grid>
                <Typography variant='h3' align='left' className={classes.ourStoryHeading}>Our Story</Typography>
                <Grid container direction='row' justify='center' className={classes.ourStoryBodyContainer}>
                    <Grid item direction='column' sm={12} md={6}>
                        <Typography variant='body1'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Typography>
                    </Grid>
                    <Grid item direction='column' sm={12} md={6}>
                        <img src={ picture1 } className={classes.ourStoryImage}/>
                    </Grid>
                </Grid>
            </Grid>

        </Container>
    )

}

