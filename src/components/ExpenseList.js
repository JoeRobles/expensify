import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    <table>
      <thead>
      <tr>
        <th>Description</th>
        <th>Amount</th>
        <th>Created at</th>
      </tr>
      </thead>
      <tbody>
      {
        props.expenses.length === 0 ? (
          <p>No expenses</p>
        ) : (
          props.expenses.map((expense) => {
            return <ExpenseListItem key={expense.id} {...expense} {...props} />;
          })
        )
      }
      </tbody>
    </table>
  </div>
);

const mapStateToProps = (state) => ({
  expenses: selectExpenses(state.expenses, state.filters),
});

export default connect(mapStateToProps)(ExpenseList);
