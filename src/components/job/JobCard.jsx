import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const JobCard = ({ job, onClick }) => {
    const {
        title,
        company,
        location,
        skills,
        type,
        description,
        createdAt
    } = job;

    return (
        <Grid item xs={12} md={6}>
            <Card>
                <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                        {title}
                    </Typography>
                    <Typography variant="subtitle1">{company.name}</Typography>
                    <Typography variant="subtitle1" mb={1}>
                        {location.name}
                    </Typography>
                    {skills.map((skill, index) => (
                        <Chip
                            label={skill}
                            key={index}
                            variant="outlined"
                            sx={{ mr: 1, mb: 1 }}
                        />
                    ))}
                    <Typography variant="subtitle2" mt={1} sx={{ fontWeight: "bold" }}>
                        {type.name}
                    </Typography>
                    <Typography variant="body1" mt={2} mb={2} gutterBottom>
                        {description}
                    </Typography>
                    <Stack
                        justifyContent="space-between"
                        alignItems="center"
                        direction="row"
                    >
                        <Typography variant="subtitle2" sx={{ color: "#6F6F6F" }}>
                            {createdAt}
                        </Typography>
                        <Button
                            variant="contained"
                            size="small"
                            sx={{
                                bgcolor: "var(--primary-color)",
                                borderRadius: "8px",
                            }}
                            onClick={onClick}
                        >
                            Apply
                        </Button>
                    </Stack>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default JobCard;
