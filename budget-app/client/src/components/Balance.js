import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import convertToRupiah from '../toRupiah/rupiah'

export const Balance = () => {
    const { transactions } = useContext(GlobalContext)

    const amounts = transactions.map(transaction => transaction.amount)
    const total = amounts.reduce((acc, item) => (acc += item), 0)

    const sign = total < 0 ? '-' : null

    return (
        <>
            <h4>Your Balance</h4>
            <h1>{sign} {convertToRupiah(Math.abs(total))}</h1>
        </>
    )
}
