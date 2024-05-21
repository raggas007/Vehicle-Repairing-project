import { Button, Typography } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const userRole = localStorage.getItem("userRole");

  const navigate = useNavigate();
  if (userRole === "Customer") {
    return (
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
        {/* Hero Banner */}
        <section style={{ textAlign: "center", padding: "50px 0" }}>
          <h1 style={{ fontSize: "50px", marginBottom: "30px" }}>
            Repair your vehicle here.
          </h1>
          <p style={{ fontSize: "40px", color: "#666", marginBottom: "30px" }}>
            <i>Repair vehicle of any brand by our skilled mechanics.</i>
          </p>

          <Button
            variant="contained"
            sx={{ height: "100px", width: "1000px", color: "white" }}
            onClick={() => {
              navigate("/make-request");
            }}
          >
            <Typography variant="h4" color="white">
              Problem With Vehicle? Make Request
            </Typography>
          </Button>
        </section>
      </div>
    );
  } else {
    return (
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
        {/* Hero Banner */}
        <section style={{ textAlign: "center", padding: "50px 0" }}>
          <Button
            variant="contained"
            color="secondary"
            sx={{ height: "100px", width: "350px" }}
            onClick={() => {
              navigate("/view-request");
            }}
          >
            <Typography variant="h4" color="Yellow">
              View Request
            </Typography>
          </Button>
        </section>

        <section style={{ textAlign: "center", padding: "50px 0" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "20px",
            }}
          >
            <Link
              to="/about-us"
              style={{
                marginTop: "3rem",
                textAlign: "center",
                display: "block",
              }}
            >
              <Typography
                variant="h4"
                color="secondary"
                sx={{ marginTop: "4rem", color: "black" }}
              >
                <Typography variant="h3">About Us?</Typography> Go there
              </Typography>
            </Link>
          </div>
          <a
            href="#"
            style={{
              display: "block",
              textAlign: "center",
              fontSize: "16px",
              color: "#333",
              textDecoration: "none",
              marginTop: "20px",
            }}
          ></a>
        </section>
      </div>
    );
  }
};

export default Home;
