import React from "react";
import { CardContent, Grid, InputBase, Paper, Card } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import "../Components/common.css";

export const Page = () => {
  return (
    <div style={{ height: "1500px" }}>
      <div style={{ marginLeft: "100px" }}>
        <h4 className="new">Buy your dreams</h4>
        <h1 className="size">
          Search,
          <br />
          Select,
          <br />
          Buy
        </h1>
        <p>
          Lorem Ipsum has been the industry'standard dummy <br />
          text ever since the 1500s,when an unknown printer <br />
          tool a galley of type and scrambled it to make a type <br />
          specimen book.It has survived not only five centuries, <br />
          but also the leap into elctronic typesetting,remaining <br />
          essentially unchanged.{" "}
        </p>
        <button
          className="but"
          style={{
            height: "50px",
            width: "250px",
          }}
        >
          Shop Now
        </button>
        <img style={{ height: "620px" }} src="./car-image.webp" alt="" />
        <br />

        <h3>Search your Dream Car</h3>
        <p>Start Dealing with the RM </p>
        <div className="col">
          <Paper
            sx={{
              width: 600,
              margin: 3,
              marginLeft: 6,
              position: "relative",
              top: "30px",
              borderRadius: "10px",
            }}
          >
            <IconButton sx={{ p: "10px" }} aria-label="search"></IconButton>
            <InputBase sx={{ ml: 1 }} />
            <SearchIcon
              sx={{ marginLeft: "330px", color: "blue", marginTop: "10px" }}
            />
          </Paper>
        </div>
      </div>
      <div className="div2">
        <h1 className="shop">Shop By Type</h1>
        <input type="range" className="range" />
        <Grid container spacing={7}>
          <Grid item xs={3}>
            <Card
              style={{
                height: 180,
                width: 250,
                borderRadius: 20,
                marginLeft: 30,
              }}
            >
              <CardContent>
                <img
                  src="carTask.jpeg"
                  alt=""
                  style={{
                    height: "100px",
                    marginTop: "20px",
                    marginLeft: "0px",
                  }}
                />
                <h5>SUV</h5>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card
              style={{
                height: 180,
                width: 250,
                borderRadius: 20,
                marginLeft: 20,
              }}
            >
              <CardContent>
                <img
                  src="carTask.jpeg"
                  alt=""
                  style={{
                    height: "100px",
                    marginTop: "20px",
                    marginLeft: "0px",
                  }}
                />
                <h5>SUV</h5>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card
              style={{
                height: 180,
                width: 250,
                borderRadius: 20,
                marginLeft: 10,
              }}
            >
              <CardContent>
                <img
                  src="carTask.jpeg"
                  alt=""
                  style={{
                    height: "100px",
                    marginTop: "20px",
                    marginLeft: "0px",
                  }}
                />
                <h5>SUV</h5>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card style={{ height: 180, width: 250, borderRadius: 20 }}>
              <CardContent>
                <img
                  src="carTask.jpeg"
                  alt=""
                  style={{
                    height: "100px",
                    marginTop: "20px",
                    marginLeft: "0px",
                  }}
                />
                <h5>SUV</h5>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card
              style={{
                height: 180,
                width: 250,
                borderRadius: 20,
                marginLeft: 30,
              }}
            >
              <CardContent>
                <img
                  src="carTask.jpeg"
                  alt=""
                  style={{
                    height: "100px",
                    marginTop: "20px",
                    marginLeft: "0px",
                  }}
                />
                <h5>SUV</h5>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card
              style={{
                height: 180,
                width: 250,
                borderRadius: 20,
                marginLeft: 20,
              }}
            >
              <CardContent>
                <img
                  src="carTask.jpeg"
                  alt=""
                  style={{
                    height: "100px",
                    marginTop: "20px",
                    marginLeft: "0px",
                  }}
                />
                <h5>SUV</h5>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card
              style={{
                height: 180,
                width: 250,
                borderRadius: 20,
                marginLeft: 10,
              }}
            >
              <CardContent>
                <img
                  src="carTask.jpeg"
                  alt=""
                  style={{
                    height: "100px",
                    marginTop: "20px",
                    marginLeft: "0px",
                  }}
                />
                <h5>SUV</h5>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card style={{ height: 180, width: 250, borderRadius: 20 }}>
              <CardContent>
                <img
                  src="carTask.jpeg"
                  alt=""
                  style={{
                    height: "100px",
                    marginTop: "20px",
                    marginLeft: "0px",
                  }}
                />
                <h5>SUV</h5>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
