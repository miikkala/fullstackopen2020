import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Title = () => <h1>Give us feedback</h1>

const Button = ({text, handleClick}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const StatisticLine = ({text, value}) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

const Statistics = ({data}) => {
  const { good, neutral, bad } = data

  const total = good + neutral + bad
  const average = ((good - bad) / total).toFixed(2)
  const goodPercentage = ((good / total) * 100).toFixed(1) + ' %'

  if (total > 0){
    return (
      <div>
      <h1>Statistics</h1>
        <table>
          <tbody>
            <StatisticLine text='Good' value={good} />
            <StatisticLine text='Neutral' value={neutral} />
            <StatisticLine text='Bad' value={bad} />
            <StatisticLine text='Total' value={total} />
            <StatisticLine text='Average' value={average} />
            <StatisticLine text='Positive' value={goodPercentage} />
          </tbody>
        </table>
      </div>
    )
  }else{
    return (
      <div>
        <h1>Statistics</h1>
        <p>No feedback given yet.</p>
      </div>
    )
  }
  
} 

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const addGoodVote = () => setGood(good + 1);
  const addNeutralVote = () => setNeutral(neutral + 1);
  const addBadVote = () => setBad(bad + 1);

  const avg = () => {
    const ret = 1110
    return(
      ret
    )
  }
  const numbers = {
    good: good,
    neutral: neutral,
    bad: bad
  }
    
  return (
    <div>
        <Title/>
        <Button handleClick={addGoodVote} text="Good" counter={good} /> 
        <Button handleClick={addNeutralVote} text="Neutral" counter={neutral}/> 
        <Button handleClick={addBadVote} text="Bad" counter={bad}/> 
        <Statistics data={numbers}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
