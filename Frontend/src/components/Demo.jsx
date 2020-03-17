import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { Grid } from "react-bootstrap";
import axios from "axios";

const Demo = () => {
  const [files, setFile] = useState("");
  const [data, setData] = useState("");

  const onChange = e => {
    setFile(e.target.files);
  };

  const onSubmit = e => {
    e.preventDefault();
    // console.log(files);
    var form = new FormData();
    // console.log(Object.values(files));
    var i = 0;
    for (const val of Object.values(files)) {
      form.append("pdf" + i.toString(), val);
      i += 1;
    }
    console.log(form);
    axios({
      url: "http://127.0.0.1:5000/check",
      method: "POST",
      data: form,
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <Grid>
      <h1 style={{ marginBottom: "30px", textAlign: "center" }}>
        Please select 2 documents to check if they are similar.
      </h1>
      <form onSubmit={onSubmit}>
        <input
          name="pdf"
          type="file"
          id="customFile"
          multiple
          style={{ marginLeft: "auto", marginRight: "auto" }}
          onChange={onChange}
        />
        <input
          style={{ marginTop: "30px" }}
          type="submit"
          value="Check"
          className="btn btn-primary btn-block mt-4"
        />
      </form>

      {/* This is conditional rendering using ternary operator.
      {data ? (
        <Jumbotron>
          <h2 style={{ textAlign: "center" }}>{data}</h2>
        </Jumbotron>
      ) : (
        <></>
      )} */}

      <h2 style={{ textAlign: "center" }}>{data}</h2>
    </Grid>
  );
};

export default Demo;
