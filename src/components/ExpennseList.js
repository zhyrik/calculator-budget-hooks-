import React from 'react'
import PropTypes from 'prop-types'
import { MdDelete } from 'react-icons/md'

import Item from './ExpanseItem'

/**
 * functional react component for ...
 * @function
 * @param {*} expenses - props
 * @returns {JSX.Element} - react component
 * @useIn - ../App.js
 */
function ExpenseList({ expenses }) {
  return (
    <>
      <ul className="list">
        {expenses.map(item => {
          return <Item key={item.id} expense={item} />
        })}
      </ul>
      {expenses.length > 0 && (
        <button className="btn">
          cleat expenses
          <MdDelete className="btn-icon" />
        </button>
      )}
    </>
  )
}

ExpenseList.propTypes = {
 expenses: PropTypes.array.isRequired
}

export default ExpenseList