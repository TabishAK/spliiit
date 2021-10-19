import react, { useState } from "react";
import Footer from './components/footer';
import Header from './components/navbar2';
import FormGroup from "@material-ui/core/FormGroup";
import { Switch } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import './css/test.css';

export default function (props) {
    const AntSwitch = withStyles((theme) => ({
        root: {
            width: 28,
            height: 16,
            padding: 0,
            display: "flex",
        },
        switchBase: {
            padding: 2,
            color: theme.palette.grey[500],
            "&$checked": {
            transform: "translateX(12px)",
            color: theme.palette.common.white,
            "& + $track": {
                opacity: 1,
                backgroundColor: theme.palette.primary.main,
                borderColor: theme.palette.primary.main,
            },
            },
        },
        thumb: {
            width: 12,
            height: 12,
            boxShadow: "none",
        },
        track: {
            border: `1px solid ${theme.palette.grey[500]}`,
            borderRadius: 16 / 2,
            opacity: 1,
            backgroundColor: theme.palette.common.white,
        },
        checked: {},
    }))(Switch);
    return (
        <>
            <Header/>
            <div className="subscriptionDetailBody">
                <div className="firstBox">
                    <div className="display-flex" style={{display:'flex'}}>
                        <img src="https://www.spliiit.com/img/subscription/netflix.png" alt="logo Netflix" title="logo Netflix"/>
                        <a href="https://www.spliiit.com/blog/post/partager-son-compte-netflix" class="btn-how-blog">?</a>
                    </div>
                    {/* <FormGroup>
                        <Typography component="div">
                        <Grid component="label" container alignItems="center" spacing={1}>
                            <Grid item>Off</Grid>
                            <Grid item>
                                <AntSwitch name="checkedA" />
                            </Grid>
                            <Grid item>On</Grid>
                        </Grid>
                        </Typography>
                    </FormGroup> */}
                </div>
                <div className="boxContainer">
                    <div className="box"> 
                        <h3>Netflix Premium</h3>
                        <p>15.99€</p>
                        <a class="link-btn-help" href="https://www.spliiit.com/blog/post/partager-son-compte-netflix">How to share it ?</a>
                    </div>

                    <div style={{marginLeft:20, marginRight:20}} className="box"> 
                        <h3>Netflix Premium</h3>
                        <p>15.99€</p>
                        <a class="link-btn-help" href="https://www.spliiit.com/blog/post/partager-son-compte-netflix">How to share it ?</a>
                    </div>

                    <div className="box"> 
                        <h3>Netflix Premium</h3>
                        <p>15.99€</p>
                        <a class="link-btn-help" href="https://www.spliiit.com/blog/post/partager-son-compte-netflix">How to share it ?</a>
                    </div>
                </div>

                
            </div>
            <Footer/>
        </>
    )
}

