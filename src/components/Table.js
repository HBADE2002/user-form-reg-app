// export default Table;
import React, { useState, useEffect } from "react";

function UserDataTable() {
  // Changed setDisplayData to setUserDisplayData to match the state variable name
  const [userDisplayData, setUserDisplayData] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("userDisplayData"));
    if (data) {
      // Use setUserDisplayData instead of setDisplayData
      setUserDisplayData(data);
    }
  }, []);

  const onDeleteRow = (userID) => {
    console.log("index>>", userID);
    console.log("userDisplayData", userDisplayData);
    const userDataAfterDelete = userDisplayData.filter((user) => {
      console.log("user", user);
      if (user.userID !== userID) {
        return user;
      }
      return null;
    });
    console.log("userDataAfterDelete", userDataAfterDelete);

    setUserDisplayData(userDataAfterDelete);
    localStorage.setItem(
      "userDisplayData",
      JSON.stringify(userDataAfterDelete)
    );
    alert("User deleted");
  };

  const hasData = userDisplayData.length > 0;

  return (
    <div className="container">
      <h2>User Data</h2>
      {hasData ? (
        <table className="table">
          <thead>
            <tr>
              <th>User ID</th>
              <th>User Name</th>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>City</th>
              <th>Text</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {userDisplayData.map((user, index) => (
              <tr key={index}>
                <td>{user.userID}</td>
                <td>{user.userName}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td>{user.city}</td>
                <td>{user.text}</td>
                <td>
                  <div className="edit-delete-buttons">
                    <button id="edit-row">
                      <i className="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button
                      // onClick={(item) => onDeleteRow(index)}
                      onClick={() => onDeleteRow(user.userID)}
                      id="delete-row"
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>User ID</th>
                <th>User Name</th>
                <th>Name</th>
                <th>Email</th>
                <th>Gender</th>
                <th>City</th>
                <th>Text</th>
                <th>Actions</th>
              </tr>
            </thead>
          </table>
          <p style={{ paddingLeft: "405px" }}>No Data In Table</p>
        </div>
      )}
    </div>
  )
}

export default UserDataTable;
