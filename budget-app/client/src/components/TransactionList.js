import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalState'

import { Transaction } from './Transaction'

export const TransactionList = () => {
    const { transactions, getTransaction } = useContext(GlobalContext)

    useEffect(() => {
        getTransaction()
        
    }, [])

    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {transactions.map(transaction => {
                return <Transaction transaction={transaction} key={transaction.id} />
                })}
            </ul>
        </>
    )
}
