import React from 'react'
import {Card,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom' 
const UserCard = ({user}) => {
  return (
    <div>
       <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://img.freepik.com/free-vector/indian-school-girl-happy-elementary-school-pupil-back-school_71593-1071.jpg?w=2000" />
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>{user.username} </Card.Text>
        <Card.Text>{user.email}</Card.Text>
        <Button variant="primary"><Link to={`/profile/${user.id} ` } style={{color: 'white'}}>Go To Profile</Link></Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default UserCard
