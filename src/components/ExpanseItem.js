import React from 'react'
import PropTypes from 'prop-types'
import { MdEdit } from 'react-icons/md';

/**
 * functional react component for ...
 * @function
 * @param {obj} expense - props
 * @returns {JSX.Element} - react component
 * @useIn - ./ExpenseList.js
 */
function ExpenseItem({ expense }) {
  const { id, charge, amount } = expense
  return (
    <li className="item">
      <div className="info">
        <span className="expense">{charge}</span>
        <span className="amount">${amount}</span>
      </div>
      <div>
        <button className="edit-btn" aria-label="edit button">
          <MdEdit />
        </button>
        <button className="cleat-btn" aria-label="delete button">
          <MdEdit />
        </button>
      </div>
    </li>
  )
}

ExpenseItem.propTypes = {
  expense: PropTypes.object.isRequired
}
 

export default ExpenseItem
