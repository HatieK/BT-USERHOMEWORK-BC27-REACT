import React, { Component } from "react";
import UserList from "./UserList";
import UserForm from "./UserForm";
import axios from "axios";

export default class UserManagement extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showUserInApi: [],
      showDetailUser: [],
    };
  }

  fetchUser = async () => {
    try {
      const { data } = await axios.get(
        "https://62b6eabe6999cce2e80a17ba.mockapi.io/api/users"
      );

      this.setState({ showUserInApi: data });
    } catch (error) {
      console.log(error);
    }
  };

  fetchUserDetail = async (eachUserId) => {
    try {
      const { data } = await axios.get(
        `https://62b6eabe6999cce2e80a17ba.mockapi.io/api/users/${eachUserId}`
      );

      this.setState({ showDetailUser: data });
    } catch (error) {
      console.log(error);
    }
  };
  componentDidMount() {
    this.fetchUser();
  }
  render() {
    return (
      <div className="container">
        <h1 className="text-center text-primary">User Management</h1>
        <div className="mb-5">
          <div className="card-header bg-dark text-white">
            <strong>User Form</strong>
          </div>
          <div className="card-body">
            <UserForm
              onUpdateForm={this.state.showDetailUser}
              onSuccess={this.fetchUser}
            />
          </div>
        </div>
        <UserList
          onSelect={this.fetchUserDetail}
          onDeleteSuccess={this.fetchUser}
          userInApi={this.state.showUserInApi}
        />
      </div>
    );
  }
}
