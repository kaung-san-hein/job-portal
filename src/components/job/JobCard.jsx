import React from "react";
import Grid from "@mui/material/Grid";
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip'

const JobCard = () => {
    return (
        <Grid item xs={12} md={6}>
            <Card>
                <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Game Marketing Open to Any Level of Experience!</Typography>
                    <Typography variant="subtitle1">ZigZaGame Inc.</Typography>
                    <Typography variant="subtitle1" mb={1}>Shinagawa Ward, Tokyo</Typography>
                    <Chip label="HTML" variant="outlined" sx={{ mr: 1 }} />
                    <Chip label="CSS" variant="outlined" />
                    <Typography variant="subtitle2" mt={1} sx={{ fontWeight: 'bold' }}>intern</Typography>
                    <Typography variant="body1" mt={2} mb={2} gutterBottom>
                        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                        quasi quidem quibusdam.
                    </Typography>
                    <Typography variant="subtitle2" sx={{ color: '#6F6F6F' }}>2 days ago</Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default JobCard