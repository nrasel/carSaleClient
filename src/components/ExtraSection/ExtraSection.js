import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import car from '../../images/4.png'

const ExtraSection = () => {
    return (

        <Container sx={{ mt: 7 }}>

            <Grid container spacing={2}>
                <Grid item sx={{ mt: 10, textAlign: 'end', }} xs={12} sm={12} md={4}>
                    <Typography sx={{ color: 'rgba(5, 32, 70, 1)' }} variant="h5">
                        Experience support team <i class="far fa-dot-circle"></i>
                    </Typography>
                    <Typography sx={{ fontSize: 'default', color: '#9c9c9c' }}>
                        I recently put together a bookshelf for my office. No instructions needed for me, as I confidently wielded the allen wrench
                    </Typography>
                    <Typography sx={{ mt: 3, color: 'rgba(5, 32, 70, 1)' }} variant="h5">
                        Handle emergency situations <i class="far fa-dot-circle"></i>
                    </Typography>
                    <Typography sx={{ fontSize: 'default', color: '#9c9c9c' }}>
                        An emergency is a situation that poses an immediate risk to health, life, property, The precise definition of an emergency.
                    </Typography>
                    <Typography sx={{ mt: 3, color: 'rgba(5, 32, 70, 1)' }} variant="h5">
                        Insurance Included <i class="far fa-dot-circle"></i>
                    </Typography>
                    <Typography sx={{ fontSize: 'default', color: '#9c9c9c' }}>
                        Integral Insurance Core Solution. Minimum time to market. Regulatory compliance. Integrated company. Plug play.
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    <img style={{ width: '100%' }} src={car} alt="" />
                </Grid>
                <Grid sx={{ mt: 10, textAlign: 'start', }} item xs={12} sm={12} md={4}>
                    <Typography sx={{ color: 'rgba(5, 32, 70, 1)' }} variant="h5">
                        <i class="far fa-dot-circle"></i> Hight technology instrument
                    </Typography>
                    <Typography sx={{ fontSize: 'default', color: '#9c9c9c' }}>
                        I recently put together a bookshelf for my office. No instructions needed for me, as I confidently wielded the allen wrench
                    </Typography>
                    <Typography sx={{ mt: 3, color: 'rgba(5, 32, 70, 1)' }} variant="h5">
                        <i class="far fa-dot-circle"></i> Access control system
                    </Typography>
                    <Typography sx={{ fontSize: 'default', color: '#9c9c9c' }}>
                        Leader in Microscopy Hitech Instruments is a full service microscope and imaging company, serving the scientific community
                    </Typography>
                    <Typography sx={{ mt: 3, color: 'rgba(5, 32, 70, 1)' }} variant="h5">
                        <i class="far fa-dot-circle"></i> Online 24/7 Available
                    </Typography>
                    <Typography sx={{ fontSize: 'default', color: '#9c9c9c' }}>
                        Integral Insurance Core Solution. Minimum time to market. Regulatory compliance. Integrated company. Plug play.
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
};

export default ExtraSection;