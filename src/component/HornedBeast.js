import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class HornedBeast extends React.Component{
    render(){
        return(
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={this.props.imageUrl} />
            <Card.Body>
              <Card.Title>{this.props.title}</Card.Title>
              <Card.Text>
              🦄 {this.props.description}
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>

        )
    }


}
export default HornedBeast;