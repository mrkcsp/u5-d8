import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import SingleComment from "./SingleComment";
import { useState } from "react";
import AddComment from "./AddComment";
import "../styles/CommentList.css";

const NewCommentList = ({ bookId, comments, refreshFunction }) => {
  const [isAddCommentOpen, setIsAddCommentOpen] = useState(false);
  const toggleAddComment = () => {
    setIsAddCommentOpen(!isAddCommentOpen);
  };
  return (
    <>
      <Card style={{ wbookIdth: "18rem" }} className="newCommentListCard">
        <Card.Body>
          <Card.Title className="comment-color">Commenti</Card.Title>
          <ListGroup>
            {comments &&
              comments.map((comment, index) => {
                return (
                  <SingleComment
                    key={index}
                    comment={comment}
                    refreshFunction={refreshFunction}
                  />
                );
              })}
          </ListGroup>
          <Button
            variant="primary btn-success"
            onClick={toggleAddComment}
            className="mt-2"
          >
            Aggiungi commento
          </Button>
        </Card.Body>
      </Card>
      {isAddCommentOpen && (
        <AddComment
          closeFunction={toggleAddComment}
          bookId={bookId}
          refreshFunction={refreshFunction}
        />
      )}
    </>
  );
};

export default NewCommentList;
