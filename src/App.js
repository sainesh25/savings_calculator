import './App.css';

import Input from './components/Input/Input';
import Button from './components/Button/Button';
import Dropdown from './components/Dropdown/Dropdown';
import TotalSavingHeading from './components/TotalSavingHeading/TotalSavingHeading';
import Table from './components/Table/Table';


import { useState } from 'react';
import TotalHeading from './components/TotalHeading/TotalHeading';

function App() {
    let [state, updateState] = useState({
        amount: '',
        description: '',
        type: '',
        income: [],
        expense: [],
        totalSavings: 0,
        totalIncome: 0,
        totalExpense: 0,
        message: ``
    });

    if (state.totalSavings < 0) {
        state.totalSavings = 0;
    }

    const handleInputChange = function (e) {
        updateState({
            ...state,
            [e.target.name]: e.target.value,
        })
    }

    const addNewEntry = () => {
        if (state.type == 1) {
            let newEntry = {};
            newEntry.srNo = state.income.length + 1
            newEntry.amount = state.amount;
            newEntry.description = state.description;

            let totalInc = +state.totalIncome + +newEntry.amount;
            let totalSavings = +totalInc - +state.totalExpense;

            updateState({
                ...state,
                income: [...state.income, newEntry],
                totalIncome: totalInc,
                totalSavings: totalSavings,

            });
        }
        else if (state.type == 2) {
            let newEntry = {}
            newEntry.srNo = state.expense.length + 1;
            newEntry.amount = state.amount;
            newEntry.description = state.description;
            // object destructuring

            let totalExp = +newEntry.amount + +state.totalExpense;
            let totalSavings = +state.totalIncome - +totalExp;

            updateState({
                ...state,
                expense: [...state.expense, newEntry],
                totalExpense: totalExp,
                totalSavings: totalSavings,
            })
        }
    }



    return (
        <div className="App">
            <div className='all-inputs flex justify-center'>

                <Input name='amount' type='number' placeholder='Amount' val={state.amount} changeFunction={handleInputChange} />
                <Input name='description' type='text' placeholder='Description' val={state.description} changeFunction={handleInputChange} />
                <Dropdown name='type' changeFunction={handleInputChange} />
            </div>

            <div className='button-section flex justify-center'>
                <Button changeFunction2={addNewEntry} name='Enter' />
            </div>

            <TotalSavingHeading saving={state.totalSavings} val={(state.totalSavings <= 2000) ? 'savings does not looks good' : 'savings looks good'} />

            <div className='income-exp-table space-x-4 p-5 flex justify-around'>
                <div className='income-table p-5'>
                    <Table className='bg-green-700' bgColor='bg-green-200' data={state.income} tablename="Income" />
                    {/* <h3>Total Income: {state.totalIncome}</h3> */}
                    <TotalHeading>Total Income: {state.totalIncome}</TotalHeading>
                </div>
                <div className='expense-table p-5'>
                    <Table className='bg-red-700' bgColor='bg-red-200' data={state.expense} tablename="Expense" />
                    <TotalHeading>Total Expense: {state.totalExpense}</TotalHeading>
                    {/* <h3 className='text-2xl	'>Total Expense: {state.totalExpense}</h3> */}
                </div>
            </div>

        </div>
    );
}

export default App;
