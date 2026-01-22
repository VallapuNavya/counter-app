import React, { useState } from 'react'
import dateTime from 'date-time'
import ReactPlayer from "react-player";
function VideoPlayer() {
  const [searchTerm, setSearchTerm] = useState('')

  const [comments, setComments] = useState([
    {
      uniqueId: 1,
      img: 'https://randomuser.me/api/portraits/men/1.jpg',
      name: 'Navya',
      comment: 'Great video! Really enjoyed it',
      time: dateTime(),
    },
    {
      uniqueId: 2,
      img: 'https://randomuser.me/api/portraits/men/2.jpg',
      name: 'Kavya',
      comment: 'Nice explanation',
      time: dateTime(),
    },
    {
      uniqueId: 3,
      img: 'https://randomuser.me/api/portraits/men/3.jpg',
      name: 'Nandhishwar',
      comment: 'Very helpful',
      time: dateTime(),
    },
  ])

  const deleteElement = uniqueId => {
    const filteredComments = comments.filter(
      eachItem => eachItem.uniqueId !== uniqueId
    )
    setComments(filteredComments)
  }

  // 🔍 Filter based on search
  const filteredComments = comments.filter(eachItem =>
    eachItem.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div>
      <h1>Comments</h1>

      <input
        type="search"
        placeholder="Search by name"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />

      {/* Conditional Rendering */}
      {filteredComments.length === 0 ? (
        <h3>No users found</h3>
      ) : (
        filteredComments.map((eachItem, index) => (
          <div key={eachItem.uniqueId}>
            <img src={eachItem.img} alt={eachItem.name} />
            <p>index: {index}</p>
            <p>key: {eachItem.uniqueId}</p>
            <span>{eachItem.name}</span>
            <br />
            <span>{eachItem.comment}</span>
            <br />
            <small>{eachItem.time}</small>
            <br />

            <button onClick={() => deleteElement(eachItem.uniqueId)}>
              Delete
            </button>
          </div>
        ))
      )}

      <hr />

      <h2>Random YouTube Video</h2>
      <p>Video</p>
      <ReactPlayer
  url="https://www.youtube.com/shorts/J-z3RzgY5lA"
  controls
  width="400px"
  height="225px"
/>    
    </div>
  )
}

export default VideoPlayer
