import React from 'react'

const Students = ({name, bio, scores}) => (
  <div>
    <h1>{name}</h1>
    <p><i>{bio}</i></p>
    <h4>Scores:</h4>
    {scores.map((score, index) => (
      <div key={index}>
        <p><b>Date: {score.date}</b></p>
        <p><b>Score: {score.score}</b></p>
      </div>
    ))}
  </div>
)

export default Students;
