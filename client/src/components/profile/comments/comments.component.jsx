import React from 'react';
import CommentForm from './comment-form.component';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { deleteComment } from '../../../redux/profile/api';
import { Avatar, CardBody, CardComponent, Rating, ReviewText, Average, Stars, CommentContainer, Line } from './comments.styles';

const Comments = ({ profile: { comments, _id }, id, deleteComment}) => {

    const commentCount = comments.length
    let rating = null;

    comments.forEach((comment) => { rating += comment.stars });

    console.log(comments.map(comment => comment._id));
    console.log(id)
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
            { comment.user === id ? <i onClick={() => deleteComment(_id, comment._id)} style={{ color: 'red'}} className="far fa-trash-alt"></i> : ''}
            <Avatar src={comment.avatar} />
            <ReviewText>
                <div style={{ display: 'flex'}}>
                <h3>{comment.name}</h3>
                {
                    Array.from(Array(comment.stars), (e, i) => {
                        return <i key={i} style={{ marginLeft: '10px', fontSize: '1rem', color: '#ffe500'}} className="fas fa-star"></i>
                    })
                }
                </div>
                <hr />
                <blockquote className="blockquote mb-0">
                <p>
                    {comment.text}
                </p>
                <footer className="blockquote-footer">
                <Moment format="YYYY/MM/DD HH:mm">{comment.date}</Moment>
                </footer>
                </blockquote>
            </ReviewText>
            </CardBody>
            </CardComponent>
        ))}
        </div>
    ) 
}

export default connect(null, { deleteComment })(Comments);