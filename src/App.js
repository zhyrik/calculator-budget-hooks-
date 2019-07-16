import React, { useState, useEffect } from 'react'
import uuid from 'uuid/v4'

import ExpenseList from './components/ExpennseList'
import ExpenseForm from './components/ExpenseForm'
import Alert from './components/Alert'
import './App.css'

/*const initialExpenses = [
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
] */
const initialExpenses = localStorage.getItem('expenses') ? JSON.parse(localStorage.getItem('expenses')): []

function App() {
  // ************* state values ***********
  // all expenses, add expense
  const [expenses, setExpenses] = useState(initialExpenses)
  // single expense
  const [charge, setCharge] = useState('')
  // single amount
  const [amount, setAmount] = useState('')
  //alert
  const [alert, setAlert] = useState({ show: false })
  // edit
  const [edit, setEdit] = useState(false)
  // edit item
  const [id, setId] = useState(0)

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses))
  }, [expenses])
  // **************** functionality *******

  const handleChange = e => {
    setCharge(e.target.value)
  }
  const handleAmount = e => {
    setAmount(e.target.value)
  }
  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text })
    setTimeout(() => {
      setAlert({ show: false })
    }, 3000)
  }
  const hadndleSubmit = e => {
    e.preventDefault()
    if (charge !== '' && amount > 0) {
      if (edit) {
        let tempExpenses = expenses.map(item => {
          return item.id === id ? { ...item, charge, amount }: item
        })
        setExpenses(tempExpenses)
        setEdit(false)
      } else {
        const singelExpense = {
          id: uuid(),
          charge,
          amount
        }
        setExpenses([...expenses, singelExpense])
        handleAlert({ type: 'success', text: 'item added'})
      }
      setAmount('')
      setCharge('')
    } else {
      // handle alert
      handleAlert({ type: 'danger', text: `charge can't be empty value and amout value has to bigger than zero`})
    }
  }
  
  const cleatItems = () => {
    setExpenses([])
    handleAlert({ type: 'danger', text: 'all items deleted'})
  }
  const handleDelete = (id) => {
    let tempExpenses = expenses.filter(item =>  item.id !== id)
    setExpenses(tempExpenses)
    handleAlert({ type: 'danger', text: 'item deleted' })
  }
  const handleEdit = id => {
    let expense = expenses.find(item => item.id === id)
    let { charge, amount } = expense
    setCharge(charge)
    setAmount(amount)
    setEdit(true)
    setId(id)
  }

  return (
    <>

      {alert.show && <Alert type={alert.type} text={alert.text} />}
      <h1>budget calculator</h1>
      <main className="App">
        <ExpenseForm 
          charge={charge}
          amount={amount}
          handleAmount={handleAmount}
          handleChange={handleChange}
          hadndleSubmit={hadndleSubmit}
          edit={edit}
        />
        <ExpenseList
          expenses={expenses}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          cleatItems={cleatItems}
        />
      </main>
      <h1>total spending:
        <span className="total">
          $ {expenses.reduce((acc, curr) => {
            return (acc += parseInt(curr.amount))
          }, 0)}  
        </span>
      </h1>
    </>
  );
}

export default App;
