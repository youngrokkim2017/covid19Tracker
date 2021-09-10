import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    if (!confirmed || !recovered || !deaths) {
        return 'Loading...'
    }

    return (
        <div>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card}>
                     <CardContent>
                         <Typography color="textSecondary" gutterBottom>
                            Infected
                         </Typography>
                         <Typeography variant="h5">
                            <CountUp
                                start={0}
                                end={confirmed.value}
                                duration={2.5}
                                separator=","
                            />
                         </Typeography>
                         <Typeography color="textSecondary">
                            {new Date(lastUpdate).toDateString()}
                         </Typeography>
                         <Typeography variant="body2">
                             Number of active cases of COVID-19
                         </Typeography>
                     </CardContent>
                </Grid>
                <Grid item component={Card}>
                     <CardContent>
                         <Typography color="textSecondary" gutterBottom>
                            Recovered
                         </Typography>
                         <Typeography variant="h5">
                            <CountUp
                                start={0}
                                end={recovered.value}
                                duration={2.5}
                                separator=","
                            />
                         </Typeography>
                         <Typeography color="textSecondary">
                            {new Date(lastUpdate).toDateString()}
                         </Typeography>
                         <Typeography variant="body2">
                             Number of recoveries from COVID-19
                         </Typeography>
                     </CardContent>
                </Grid>
                <Grid item component={Card}>
                     <CardContent>
                         <Typography color="textSecondary" gutterBottom>
                            Deaths
                         </Typography>
                         <Typeography variant="h5">
                            <CountUp
                                start={0}
                                end={deaths.value}
                                duration={2.5}
                                separator=","
                            />
                         </Typeography>
                         <Typeography color="textSecondary">
                            {new Date(lastUpdate).toDateString()}
                         </Typeography>
                         <Typeography variant="body2">
                             Number of deaths caused by COVID-19
                         </Typeography>
                     </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;