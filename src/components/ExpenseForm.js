import React from 'react'
import { MdSend } from 'react-icons/md';

/**
 * functional react component for ...
 * @function
 * @param {*} props - props
 * @returns {JSX.Element} - react component
 * @useIn - ./
 */
function Form({
    charge,
    amount,
    handleAmount,
    handleChange,
    hadndleSubmit,
    edit
}) {
  return (
    <form onSubmit={hadndleSubmit}>
      <div className="form-center">
        <div className="form-group">
          <label htmlFor="charge">charge</label>
          <input
            type="text"
            name="charge"
            className="form-control"
            id="charge"
            placeholder="e.g. rent"
            value={charge}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">amount</label>
          <input
            type="text"
            name="amount"
            className="form-control"
            id="amount"
            placeholder="e.g. 100"
            value={amount}
            onChange={handleAmount}
          />
        </div>
      </div>
      <button type="submit" className="btn">
        {edit ? 'edit' : 'submit'}
        <MdSend className="btn-icon" />
      </button>
    </form>
  )
}

export default Form