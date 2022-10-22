import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { FaEye, FaRegBookmark, FaShareAlt, FaStar,  } from 'react-icons/fa';

const NewsSummaryCard = ({news}) => {
    console.log(news)
    const {_id, author, details, image_url, rating, title, total_view} = news
    return (
        <Card className="mb-5">
          <Card.Header className='d-flex justify-content-between align-items-center'>
            <div className='d-flex'>
            <Image 
            roundedCircle
            className='me-3'
            src={author.img}
            style = {{height: '95px'}}
            
            ></Image>
            <div>
                <p className='mb-0'>{author.name}</p>
                <p><small>{author.published_date}</small></p>
            </div>

            </div>
            <div>
                <FaRegBookmark ></FaRegBookmark>
                <FaShareAlt></FaShareAlt>
            </div>
          </Card.Header>
          <Card.Body>
            <Card.Title className='fw-bold'>{title}</Card.Title>
            <Card.Img variant="top" src={image_url} />
            <Card.Text>
              {details.length > 250 ?
              <p>{details.slice(0, 250) + '...'} <Link to = {`/news/${_id}`}>Read More</Link></p>
              :
              <p>{details}</p>
            
            }
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-muted d-flex justify-content-between align-items-center">
            <div className='align-items-center'>
                <FaStar className='text-warning me-2'></FaStar>
                <span>{rating?.number}</span>
            </div>
            <div className='align-items-center'>
                <FaEye className='me-2'></FaEye>
                <span>{total_view}</span>
            </div>
          </Card.Footer>
        </Card>
      );
};

export default NewsSummaryCard;