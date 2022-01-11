import React from 'react'
import SnakeGame from './game/SnakeGame'
import './linksStyles/game.css'

const Reviews = () => {
  return (
    <div>
      <SnakeGame />
      <button className='button'><a style={{color: "black"}} href="/">←Назад</a></button>
    </div>
  )
}

export default Reviews
