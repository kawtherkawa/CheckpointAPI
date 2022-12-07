import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Profile = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/?id=${id}`)
      .then((res) => setUser(res.data[0]))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://img.freepik.com/vecteurs-premium/avatar-personnage-belle-femme-costume-affaires_491904-64.jpg?w=2000"/>
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <Card.Text>{user.username} </Card.Text>
          <Card.Text>{user.email}</Card.Text>
          <Button variant="primary">
            <Link to={-1} style={{ color: "white" }}>
              Go To Back
            </Link>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Profile;
