import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import newsImg from '../assets/news.jpg';

export const NewsItem = ({title, description, imageUrl, newsUrl}) => {
  return (
    <Card className='d-inline-block my-3 mx-3 p-2 shadow-lg'  bg="dark" text='light' style={{ maxWidth:"345px" }}>
      <Card.Img variant="top" src={imageUrl?imageUrl:newsImg} style={{height:"200px", width:"325px"}}/>
      <Card.Body>
        <Card.Title>{title.slice(0,25)}</Card.Title>
        <Card.Text >
            {description?description.slice(0,90):"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries."}...
        </Card.Text>
        <Button variant="primary" href={newsUrl}>Read More</Button>
      </Card.Body>
    </Card>
  )
}
