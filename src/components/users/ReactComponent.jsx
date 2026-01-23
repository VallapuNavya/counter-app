import React, { useState } from "react";
import dateTime from "date-time";

function VideoPlayer() {
  const [searchTerm, setSearchTerm] = useState("");

  const [nameForAddComment, setNameForAddComment] = useState("");
  const [commentForAddElement, setCommentForAddElement] = useState("");

  const [comments, setComments] = useState([
    {
      uniqueId: 1,
      img: "https://randomuser.me/api/portraits/men/1.jpg",
      name: "Navya",
      comment: "Great video! Really enjoyed it",
      time: dateTime(),
    },
    {
      uniqueId: 2,
      img: "https://randomuser.me/api/portraits/men/2.jpg",
      name: "Kavya",
      comment: "Nice explanation",
      time: dateTime(),
    },
    {
      uniqueId: 3,
      img: "https://randomuser.me/api/portraits/men/3.jpg",
      name: "Nandhishwar",
      comment: "Very helpful",
      time: dateTime(),
    },
  ]);

  const deleteElement = uniqueId => {
    const filteredComments = comments.filter(
      eachItem => eachItem.uniqueId !== uniqueId
    );
    setComments(filteredComments);
  };

  const addNewCommentToList = () => {
    if (nameForAddComment === "" || commentForAddElement === "") return;

    const newComment = {
      uniqueId: Date.now(),
      img: "https://randomuser.me/api/portraits/men/4.jpg",
      name: nameForAddComment,
      comment: commentForAddElement,
      time: dateTime(),
    };

    setComments([...comments, newComment]);
    setNameForAddComment("");
    setCommentForAddElement("");
  };

  const filteredComments = comments.filter(eachItem =>
    eachItem.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Comments</h1>

      <input
        type="search"
        placeholder="Search by name"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />

      {filteredComments.length === 0 ? (
        <h3>No users found</h3>
      ) : (
        filteredComments.map((eachItem, index) => (
          <div key={eachItem.uniqueId}>
            <img src={eachItem.img} alt={eachItem.name} width="50" />
            <p>index: {index}</p>
            <p>key: {eachItem.uniqueId}</p>
            <p>{eachItem.name}</p>
            <p>{eachItem.comment}</p>
            <small>{eachItem.time}</small>
            <br />
            <button onClick={() => deleteElement(eachItem.uniqueId)}>
              Delete
            </button>
            <hr />
          </div>
        ))
      )}

      <h2>Add Comment</h2>

      <input
        type="text"
        placeholder="name"
        value={nameForAddComment}
        onChange={e => setNameForAddComment(e.target.value)}
      />

      <input
        type="text"
        placeholder="comment"
        value={commentForAddElement}
        onChange={e => setCommentForAddElement(e.target.value)}
      />

      <button onClick={addNewCommentToList}>Add Comment</button>

      <hr />

      <h2>Random YouTube Video</h2>

      <iframe
        width="400"
        height="225"
        src="https://www.youtube.com/embed/J-z3RzgY5lA"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default VideoPlayer;
