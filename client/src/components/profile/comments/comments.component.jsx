import React from 'react';
import CommentForm from './comment-form.component';
import Moment from 'react-moment';
import { Avatar, CardBody, CardComponent, Rating, ReviewText, Average, Stars, CommentContainer, Line } from './comments.styles';

const Comments = ({ profile: { comments, _id }}) => {

    const commentCount = comments.length
    let rating = null;

    comments.forEach((comment) => { rating += comment.stars });

    console.log(comments.map(comment => comment.stars));
    console.log(commentCount)
    return(
        <div>
        <CommentContainer>
            <CommentForm id={_id} />
        </CommentContainer>
        <Rating>Rating Average:</Rating>
        <Line />
        <Stars>
            <i style={{ margin: '6%', fontSize: '4rem', color: '#ffe500'}} className="fas fa-star"></i>
            <Average>
                    {Math.round((rating / commentCount + Number.EPSILON) * 100) / 100} 
                    <p style={{ fontSize: '2.5rem', marginTop: '20%', color: 'darkgrey'}}> / 5</p>
            </Average>
            <i style={{ margin: '6%', fontSize: '4rem', color: '#ffe500'}} className="fas fa-star"></i>
        </Stars>
        <Line />
        {comments.map((comment, index) => (
            <CardComponent key={index} border="light">
            <CardBody>
            <Avatar src={comment.avatar} />
            <ReviewText>
                <h3>{comment.name}</h3>
                <hr />
                <blockquote className="blockquote mb-0">
                <p>
                    {comment.text}
                </p>
                <footer className="blockquote-footer">
                <Moment format="YYYY/MM/DD HH:MM">{comment.date}</Moment>
                </footer>
                </blockquote>
            </ReviewText>
            </CardBody>
            </CardComponent>
        ))}
        </div>
    ) 
}

export default Comments;