import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const userRole = localStorage.getItem("userRole");
  const navigate = useNavigate();
  if (userRole === "Customer") {
    return (
      <div style={{ maxWidth: "1200px", marginTop: "-14rem", padding: "20px" }}>
        {/* Customer Section */}
        <section style={{ textAlign: "center", padding: "50px 0" }}>
          <h1 style={{ fontSize: "50px", marginBottom: "30px" }}>
            Welcome, Customer!
          </h1>
          <p style={{ fontSize: "40px", color: "#666", marginBottom: "30px" }}>
            <i>Repair vehicle of any brand by our skilled mechanics.</i>{" "}
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
          </p>
        </section>
        <Stack direction={"row"} justifyContent="center">
          <img
            src="https://miro.medium.com/v2/resize:fit:1400/1*duVdgJ3oEQOxtsyPw7ofYA.jpeg"
            alt="Customer Image 1"
            style={{ maxWidth: "100%", maxHeight: "400px" }}
          />
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/040/254/636/small_2x/ai-generated-auto-mechanic-working-in-workshop-close-up-a-car-mechanic-repairing-car-engine-service-worker-at-the-work-photo.jpg"
            alt="Customer Image 2"
            style={{ maxWidth: "100%", maxHeight: "400px" }}
          />
        </Stack>
      </div>
    );
  } else {
    return (
      <div style={{ width: "1200px", marginTop: "-12rem", padding: "20px" }}>
        {/* Mechanic Section */}
        <section style={{ textAlign: "center", padding: "50px 0" }}>
          <h1 style={{ fontSize: "50px", marginBottom: "30px" }}>
            Welcome, Mechanic!
          </h1>
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
          <Stack direction={"row"} justifyContent="center" mt="3rem">
            <img
              src="https://www.shutterstock.com/image-photo/young-african-american-mechanic-working-600nw-2099017543.jpg"
              alt="Customer Image 1"
              style={{ maxWidth: "100%", maxHeight: "400px" }}
            />
            <img
              src="https://miro.medium.com/v2/resize:fit:4320/1*JktzC9GrA_l4yz0cCy8a5Q.jpeg"
              alt="Customer Image 2"
              style={{ maxWidth: "100%", maxHeight: "400px" }}
            />
          </Stack>
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
                marginTop: "-7rem",
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
