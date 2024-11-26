import { Button, Typography, Container, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import notFound from "../../assets/images/erro.jpg"

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <Container
            maxWidth="md"
            sx={{
                textAlign: "center",
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                backgroundColor: "#fffbff",
            }}
        >
            <Box
                component="img"
                src={notFound}
                alt="404 Not Found"
                sx={{
                    maxWidth: "50%",
                    marginBottom: "2rem",
                }}
            />
            <Typography
                variant="h4"
                component="h1"
                sx={{
                    color: "#2d2d2d",
                    fontWeight: 700,
                    marginBottom: "1rem",
                }}
            >
                Page Not Found
            </Typography>
            <Typography
                variant="body1"
                sx={{
                    color: "#606060",
                    marginBottom: "2rem",
                }}
            >
                Sorry, the page you're looking for doesn't exist or may have been moved.
            </Typography>
            <Button
                variant="contained"
                onClick={() => navigate("/")}
                sx={{
                    backgroundColor: "#1222fe",
                    color: "#fff",
                    fontWeight: 600,
                    textTransform: "none",
                    padding: "0.75rem 1.5rem",
                    //   "&:hover": {
                    //     backgroundColor: "#444",
                    //   },
                }}
            >
                Go Back to Home
            </Button>
        </Container>
    );
};

export default NotFound;
