import React, { Component } from "react";
import "../App.css";

// import Array from "./array";

export default class Textform extends Component {
  state = {
    username: "",
    department: "",
    rating: 0,
    FormVisible: "",
    displayData: "displayNone",
    details: [],
  };

  handleName = (ev) => {
    this.setState({ username: ev.target.value });
    // console.log(ev.target.value);
  };
  handleDept = (ev) => {
    this.setState({ department: ev.target.value });
    // console.log(ev.target.value);
  };
  handleRating = (ev) => {
    this.setState({ rating: ev.target.value });
    // console.log(ev.target.value);
  };
  handleForm = (ev) => {
    ev.preventDefault();
    const details = [...this.state.details];
    const detail = {
      id: details.length + 1,
      name: this.state.username,
      dept: this.state.department,
      rate: this.state.rating,
    };
    details.push(detail);
    console.log(details);

    this.setState({ details, username: "", department: "", rating: 0 });
    this.setState({ FormVisible: "displayNone" });
    this.setState({ displayData: "" });

    console.log(details);
  };
  goToForm = () => {
    this.setState({ FormVisible: "" });
    this.setState({ displayData: "displayNone" });
  };
  render() {
    console.log(this.state.details);
    return (
      <>
        <div className={this.state.FormVisible}>
          <h1 className="header">EMPLOYEE FEEDBACK FORM</h1>
          <form>
            <div className="formSpan"> Name : </div>
            <label htmlFor="Name : ">
              <input
                type="text"
                onChange={this.handleName}
                value={this.state.username}
              />
            </label>{" "}
            <br /> <br />
            <div className="formSpan"> Department : </div>
            <label htmlFor="Department : ">
              <input
                type="text"
                onChange={this.handleDept}
                value={this.state.department}
              />
            </label>
            <br /> <br />
            <div className="formSpan">Rating : </div>
            <label htmlFor="Rating : ">
              <input
                type="number"
                onChange={this.handleRating}
                value={this.state.rating}
              />
            </label>
            <br /> <br />
            <button type="submit" onClick={this.handleForm}>
              submit
            </button>
          </form>
        </div>

        {/* {this.state.FormVisible ? <p>{this.state.username}</p> : <div></div>} */}

        {/* <Array array={[...this.state.details]} /> */}
        <div className={this.state.displayData}>
          <div className="flex">
            {this.state.details.map((item) => {
              return (
                <div key={item.id}>
                  <p> Name : {item.name}</p>
                  <p>Department : {item.dept}</p>
                  <p>Rating : {item.rate}</p>
                </div>
              );
            })}
          </div>
          <center>
            {" "}
            <button onClick={this.goToForm}>Back To Form</button>{" "}
          </center>
        </div>
      </>
    );
  }
}
