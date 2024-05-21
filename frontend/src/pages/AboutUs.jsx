import React from "react";
import { Typography, Box, Grid, Paper } from "@mui/material";

const AboutUs = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h2" align="center" gutterBottom>
        About Us
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="body1">
              The vehicle repairing system is a dedicated platform designed to
              cater to the maintenance and repair needs of automobiles, aimed at
              ensuring their optimal performance and longevity. It offers a
              diverse array of services tailored to enhance the functionality
              and well-being of vehicles.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="body1">
              Operated by skilled technicians and mechanics, the system provides
              a comprehensive range of services including diagnostics, repairs,
              and maintenance routines. These experts are trained and certified
              in their respective fields, equipped with the knowledge and
              expertise to address various automotive issues effectively.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="body1">
              The vehicle repairing system utilizes advanced diagnostic
              equipment and genuine automotive parts to deliver top-notch
              service. Whether it's routine maintenance tasks like oil changes
              and brake inspections or more complex repairs such as engine
              overhauls and transmission rebuilds, the system ensures that every
              aspect of vehicle care is meticulously attended to.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="body1">
              Before commencing any work, the system often conducts thorough
              inspections and consultations with vehicle owners to understand
              their concerns and requirements. This personalized approach
              ensures that services are tailored to meet the specific needs of
              each vehicle, optimizing performance and customer satisfaction. In
              essence, the vehicle repairing system ensures the reliability and
              longevity of automobiles, providing peace of mind to vehicle
              owners and contributing to the smooth functioning of
              transportation networks.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutUs;
