import React from "react";

const UserCard = ({ name, email, bio }) => {
  const cardStyle = {
    border: "2px solid #ccc",
    borderRadius: "10px",
    padding: "20px",
    margin: "10px",
    width: "300px",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  };
  const headingStyle = {
    color: "#333",
    marginBottom: "8px",
  };
  return (
    <div style={cardStyle}>
      <h1 style={headingStyle}>Name : {name}</h1>
      <p>
        <strong>Email:</strong>
        {email}
      </p>
      <p>
        <strong>Bio: </strong>
        {bio}
      </p>
    </div>
  );
};
export default UserCard;
