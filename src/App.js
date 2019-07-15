import React, { useState } from 'react'
import uuid from 'uuid/v4'

import ExpenseList from './components/ExpennseList'
import ExpenseForm from './components/ExpenseForm'
import Alert from './components/Alert'
import './App.css'

const initialExpenses = [
  {
    id: uuid(),
    charge: 'rent',
    amount: 1600
  },
  {
    id: uuid(),
    charge: 'car payment',
    amount: 400
  },{
    id: uuid(),
    charge: 'credit card',
    amount: 1200
  },
]

function App() {
const [expenses, setExpenses] = useState(initialExpenses)

  return (
    <>
      <Alert />
      <h1>budget calculator</h1>
      <main className="App">
        <ExpenseForm />
        <ExpenseList expenses={expenses} />
      </main>
      <h1>total spending:
        <span className="total">
          $ {expenses.reduce((acc, curr) => {
            return (acc += curr.amout)
          }, 0)}  
        </span>
      </h1>
    </>
  );
}

export default App;
