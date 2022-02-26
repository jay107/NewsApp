import React from 'react';
import MenuIcon from "@material-ui/icons/Menu";
import {Menu, Typography } from "@material-ui/core";

const Navbar = () => {
    return (
        <div style={{ backgroundColor: "lightblue", height: "100%"}}>
            <Typography variant="button">
                <MenuIcon />
            </Typography>
            <Typography>
                <Typography>
                    headlines
                </Typography>
                <Typography>
                    Popular
                </Typography>
                <Typography>
                    search for Article
                </Typography>
                <Typography>
                    Sources
                </Typography>
            </Typography>
        </div>
    )
}

export default Navbar
