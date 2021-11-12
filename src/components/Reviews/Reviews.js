import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Paper } from '@mui/material';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';

const Reviews = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ fontWeight: 600, m: 5 }} variant="h4" component="div">
                    Reviews
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={4} sm={4} md={4}>
                        <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>

                            <Box
                                sx={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    '& > :not(style)': {
                                        m: 1,
                                        width: 128,
                                        height: 128,
                                    },
                                }}
                            >

                                <Paper elevation={3} >paper</Paper>
                            </Box>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Reviews;