import axios from "axios";
import React, { Component } from "react";

export default class UserForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      values: {
        id: "",
        account: "",
        name: "",
        password: "",
        email: "",
        phone: "",
        type: "",
      },
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(
        "https://62b6eabe6999cce2e80a17ba.mockapi.io/api/users",
        this.state.values
      );
    } catch (error) {
      console.log(error);
    }

    this.setState({
      values: {
        id: "",
        account: "",
        name: "",
        password: "",
        email: "",
        phone: "",
        type: "",
      },
    });

    this.props.onSuccess();
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      values: {
        ...this.state.values,
        [name]: value,
      },
    });
  };

  componentDidUpdate(preProps, preState) {
    if (
      this.props.onUpdateForm &&
      this.props.onUpdateForm !== preProps.onUpdateForm
    ) {
      this.setState({
        values: {
          ...this.props.onUpdateForm,
        },
      });
    }
  }

  handleSubmitChange = async (event) => {
    event.preventDefault();
    const { id } = this.state.values;
    console.log(this.state.values.id);
    try {
      if (id) {
        await axios.put(
          `https://62b6eabe6999cce2e80a17ba.mockapi.io/api/users/${id}`,
          this.state.values
        );
        this.props.onSuccess();
      }
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <form>
        {/* Account */}
        <div className="mb-3">
          <label htmlFor="account" className="form-label">
            Account
          </label>
          <input
            id="account"
            className="form-control"
            name="account"
            value={this.state.values.account}
            onChange={this.handleChange}
          />
        </div>
        {/* Name */}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            id="name"
            name="name"
            className="form-control"
            value={this.state.values.name}
            onChange={this.handleChange}
          />
        </div>
        {/* Password */}
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            id="password"
            name="password"
            className="form-control"
            value={this.state.values.password}
            onChange={this.handleChange}
          />
        </div>
        {/* Email */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            name="email"
            className="form-control"
            value={this.state.values.email}
            onChange={this.handleChange}
          />
        </div>
        {/* Phone Number */}
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            className="form-control"
            value={this.state.values.phone}
            onChange={this.handleChange}
          />
        </div>
        {/* Type */}
        <div className="mb-3">
          <label htmlFor="type" className="form-label">
            Type
          </label>
          <input
            id="type"
            name="type"
            className="form-control"
            value={this.state.values.type}
            onChange={this.handleChange}
          />
        </div>

        <button onClick={this.handleSubmit}>Register</button>
        <button onClick={this.handleSubmitChange}>Update</button>
      </form>
    );
  }
}
