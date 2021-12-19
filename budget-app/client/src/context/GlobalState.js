import React, { createContext, useReducer } from "react";
import AppReducer from './AppReducer'
import axios from 'axios'

const initialState = {
    transactions: [],
    error: null,
    loading: true
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    const urlServer = 'http://localhost:3001/transaction'

    async function getTransaction() {
        try {
            const res = await axios.get(`${urlServer}`)
            dispatch({
                type: 'GET_TRANSACTION',
                payload: res.data
            })
        } catch (err) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.response.data
            })
        }
    }

    async function addTransaction(transaction) {
        try {
            const res = await axios.post(`${urlServer}`, transaction)

            dispatch({
                type: "ADD_TRANSACTION",
                payload: res.data
            })
        } catch (err) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.response.data
            })
        }

    }

    async function deleteTransaction(id) {
        try {
            await axios.delete(`${urlServer}/${id}`)

            dispatch({
                type: "DELETE_TRANSACTION",
                payload: id
            })
        } catch (err) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.response.data
            })
        }
    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        error: state.error,
        loading: state.loading,
        getTransaction,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>)
}