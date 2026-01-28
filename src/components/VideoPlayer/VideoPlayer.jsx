import React, { useState } from 'react'
import dateTime from 'date-time'

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

  return (
    <div>
      <h1>Comments</h1>

      <input
        type="search"
        placeholder="Search by name"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />

      <p>
        {comments
          .filter(eachItems =>
            eachItems.name.includes(searchTerm)
          )
          .map((eachItem, index) => (
            <div key={index}>
              <img src={eachItem.img} alt={eachItem.name} />
              <p>index: {index}</p>
              <p>key: {eachItem.uniqueId}</p>
              <span>{eachItem.name}</span>
              <br />
              <span>{eachItem.comment}</span>
              <br />

              {/* 
              <button onClick={deleteElement(index)}>
                Delete
              </button> 
              */}

              <button
                onClick={() => deleteElement(eachItem.uniqueId)}
              >
                Delete
              </button>
            </div>
          ))}
      </p>
    </div>
  )
}

export default VideoPlayer