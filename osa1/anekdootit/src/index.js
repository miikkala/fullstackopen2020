import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const ShowAnecdote = ({title, anecdote, votecount}) => (
  <div>
    <h1>{title}</h1>
    <p>{anecdote}</p>
    {votecount == 1 ? <p>This anecdote has {votecount} vote</p> : <p>This anecdote has {votecount} votes</p>}
  </div>
)

const Button = ({text, handleClick}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = ({anecdotes}) => {
  const [selected, setSelected] = useState(0)
  const [votes, addVote] = useState(new Array(anecdotes.length).fill(0)) // Zero filled array

  const showNext = () => {
    let randomItemIndex = Math.floor(Math.random() * anecdotes.length) // Generate random index
    if (randomItemIndex === selected){ // Prevent getting same anecdote twice
      while (randomItemIndex === selected) {
        randomItemIndex = Math.floor(Math.random() * anecdotes.length)
      } 
    } 
    setSelected(randomItemIndex) // Set newly randomized index to selected
  };

  const voteAnecdote = () => {  
    const copyOfVotes = [...votes] // Copy votes
    copyOfVotes[selected] += 1   // Add vote to copied array
    addVote(copyOfVotes) // Set new array
  };

  const mostVoted = votes.indexOf(Math.max(...votes))

  return (
    <div>
      <ShowAnecdote title="Anecdote of the day" anecdote={anecdotes[selected]} votecount={votes[selected]} />
      <Button handleClick={showNext} text="Next anecdote" />
      <Button handleClick={voteAnecdote} text="Vote this!" /> 
      <ShowAnecdote title="Anecdote with most votes" anecdote={anecdotes[mostVoted]} votecount={votes[mostVoted]} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)