import React from 'react'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        // to delete NotFound Page in route stack so use replace true
        navigate('/', { replace: true });
    }

    return (
        <Container>
            <Stack
                justifyContent="center"
                alignItems="center"
                direction="column"
                sx={{ minHeight: "550px" }}
            >
                <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                    Page Not Found
                </Typography>
                <Button
                    fullWidth
                    variant="contained"
                    size="large"
                    sx={{
                        bgcolor: "var(--primary-color)",
                        borderRadius: "8px",
                        width: '100px',
                        mt: 3,
                    }}
                    onClick={handleNavigate}
                >
                    Home
                </Button>
            </Stack>
        </Container>
    )
}

export default NotFound