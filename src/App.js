import { useState } from "react";
import HeatMap from "react-heatmap-grid";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";

import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [isResult, setIsResult] = useState(false);
  const [spinner, setSpinner] = useState(false);
  const [context, setContext] = useState("");
  const [question, setQuestion] = useState("");
  const [website, setWebsite] = useState("");
  const [onlyTitle, setOnlyTitle] = useState(false);

  const xLabels = ["Polaris.com", "BRB.com", "Tesla.com", "Google.com"];
  const yLabels = ["Clean Energy", "Hydrogen", "Clean Energy,Hydrogen"];
  const data = new Array(yLabels.length).fill(0).map(() => new Array(xLabels.length).fill(0).map(() => Math.floor(Math.random() * 10 + 1)));

  const row = [
    {
      id: 1,
      company: "Polaris.com",
      context: "Clean Energy",
      question: "Hydrogen",
      url: "www.polaris.com",
      title: "Clean energy cost",
    },
    {
      id: 2,
      company: "Polaris.com",
      context: "Clean Energy",
      question: "Hydrogen",
      url: "www.polaris.com",
      title: "Clean energy cost",
    },
    {
      id: 3,
      company: "Polaris.com",
      context: "Clean Energy",
      question: "Hydrogen",
      url: "www.polaris.com",
      title: "Clean energy cost",
    },
    {
      id: 4,
      company: "Polaris.com",
      context: "Clean Energy",
      question: "Hydrogen",
      url: "www.polaris.com",
      title: "Clean energy cost",
    },
    {
      id: 5,
      company: "Polaris.com",
      context: "Clean Energy",
      question: "Hydrogen",
      url: "www.polaris.com",
      title: "Clean energy cost",
    },
    {
      id: 6,
      company: "Polaris.com",
      context: "Clean Energy",
      question: "Hydrogen",
      url: "www.polaris.com",
      title: "Clean energy cost",
    },
    {
      id: 7,
      company: "Polaris.com",
      context: "Clean Energy",
      question: "Hydrogen",
      url: "www.polaris.com",
      title: "Clean energy cost",
    },
    {
      id: 8,
      company: "Polaris.com",
      context: "Clean Energy",
      question: "Hydrogen",
      url: "www.polaris.com",
      title: "Clean energy cost",
    },
    {
      id: 9,
      company: "Polaris.com",
      context: "Clean Energy",
      question: "Hydrogen",
      url: "www.polaris.com",
      title: "Clean energy cost",
    },
    {
      id: 10,
      company: "Polaris.com",
      context: "Clean Energy",
      question: "Hydrogen",
      url: "www.polaris.com",
      title: "Clean energy cost",
    },
    {
      id: 11,
      company: "Polaris.com",
      context: "Clean Energy",
      question: "Hydrogen",
      url: "www.polaris.com",
      title: "Clean energy cost",
    },
  ];

  const columns = [
    {
      field: "id",
      headerName: "ID",
    },
    {
      field: "company",
      headerName: "COMPANIES",
    },
    {
      field: "context",
      headerName: "CONTEXT",
    },
    {
      field: "question",
      headerName: "QUESTION",
    },
    {
      field: "url",
      headerName: "RESULT URL",
    },
    {
      field: "title",
      headerName: "TITLE",
    },
  ];

  const reset = (item) => {
    setContext("");
    setQuestion("");
    setWebsite("");
    setOnlyTitle(false);
    setIsResult(false);
  };

  const search = () => {
    setSpinner(true);
    setTimeout(function () {
      setIsResult(true);
      setSpinner(false);
    }, 1000);
  };

  return (
    <Box className="App">
      <Box className="spinner">
        {spinner && (
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        )}
      </Box>
      <Box container mx={4}>
        <Box className={isResult ? "row row-first" : "row"}>
          <Grid item mt={2}>
            <Box component="form" noValidate autoComplete="off">
              <FormControl fullWidth>
                <TextField
                  id="context"
                  label="Context(s)"
                  placeholder="Enter here"
                  variant="outlined"
                  multiline
                  rows={3}
                  onChange={(e) => {
                    setContext(e.target.value);
                  }}
                  value={context}
                  className={"_textarea"}
                />
              </FormControl>

              <FormControl fullWidth>
                <TextField
                  id="website"
                  label="Companies/Websites"
                  placeholder="Enter here"
                  variant="outlined"
                  multiline
                  rows={3}
                  onChange={(e) => {
                    setWebsite(e.target.value);
                  }}
                  value={website}
                  style={{ marginTop: "20px" }}
                  className={"_textarea"}
                />
              </FormControl>

              <FormControl fullWidth>
                <TextField
                  id="question"
                  label="Questions"
                  placeholder="Enter here"
                  variant="outlined"
                  multiline
                  rows={3}
                  onChange={(e) => {
                    setQuestion(e.target.value);
                  }}
                  value={question}
                  style={{ marginTop: "20px" }}
                  className={"_textarea"}
                />
              </FormControl>

              <FormControl fullWidth>
                <FormControlLabel control={<Checkbox />} label="Only search webpage titles" />
              </FormControl>

              <Grid container>
                <Grid item xs={6}>
                  <FormControl fullWidth style={{ marginTop: "20px" }}>
                    <InputLabel id="demo-simple-select-label">Select Market (Optional)</InputLabel>
                    <Select labelId="demo-simple-select-label" id="demo-simple-select" className={"_textarea"}>
                      <MenuItem value="">
                        <em>Select Market</em>
                      </MenuItem>
                      <MenuItem value={"Polaris.com"}>Polaris.com</MenuItem>
                      <MenuItem value={"BRB.com"}>BRB.com</MenuItem>
                      <MenuItem value={"Tesla.com"}>Tesla.com</MenuItem>
                      <MenuItem value={"Google.com"}>Google.com</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <Button variant="contained" onClick={() => search()} className={"search_btn"}>
                    Search
                  </Button>
                  <Button variant="text" onClick={() => reset()} className={"reset_btn"}>
                    RESET
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Box>

        {isResult && (
          <Grid container className="row row-second">
            <Grid item xs={6}>
              <Grid container>
                <Grid item xs={1}>
                  <center className="lbl_heatmap lbl_left">Context& Questions</center>
                </Grid>
                <Grid item xs={11}>
                  <Grid container>
                    <Grid item xs={12}>
                      <center className="lbl_heatmap lbl_top">Companies/Websites</center>
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item xs={12}>
                      <HeatMap
                        xLabels={xLabels}
                        yLabels={yLabels}
                        data={data}
                        yLabelWidth={180}
                        yLabelTextAlign={"left"}
                        cellRender={(value) => value && `${value}`}
                        cellStyle={(background, value, min, max, data, x, y) => ({
                          background: `rgba(66, 86, 244, ${1 - (max - value) / (max - min)})`,
                          fontSize: "14px",
                          color: "white",
                          margin: "5px",
                          borderRadius: "5px",
                          border: "1px solid #blue !important",
                        })}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <DataGrid rows={row} columns={columns} pageSize={5} rowsPerPageOptions={[5]} checkboxSelection disableSelectionOnClick />
            </Grid>
          </Grid>
        )}
      </Box>
    </Box>
  );
}

export default App;
