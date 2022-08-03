import axios from "axios";
import React, { Component } from "react";

export default class UserList extends Component {
  handleDelete = async (userId) => {
    try {
      await axios.delete(
        `https://62b6eabe6999cce2e80a17ba.mockapi.io/api/users/${userId}`
      );
      this.props.onDeleteSuccess();
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    const { userInApi } = this.props;
    return (
      <table className="table">
        <thead>
          <tr>
            <th>STT</th>
            <th>Account</th>
            <th>Name</th>
            <th>Password</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Type</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {userInApi.map((eachUserInApi) => {
            return (
              <tr key={eachUserInApi.id}>
                <td>{eachUserInApi.id}</td>
                <td>{eachUserInApi.account}</td>
                <td>{eachUserInApi.name}</td>
                <td>{eachUserInApi.password}</td>
                <td>{eachUserInApi.email}</td>
                <td>{eachUserInApi.phone}</td>
                <td>{eachUserInApi.type}</td>
                <td>
                  <button
                    className="btn btn-primary w-50"
                    onClick={() => this.props.onSelect(eachUserInApi.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-dark w-50"
                    onClick={() => this.handleDelete(eachUserInApi.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
