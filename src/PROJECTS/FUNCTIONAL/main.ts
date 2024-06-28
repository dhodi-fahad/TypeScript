type Transaction = {
    id: number,
    amount: number,
    type: string,
    category: string
}

type Transactions = Transaction[]

// Define Transactions
const transactions: Transactions = [
    { id: 1, amount: 500, type: 'income', category: 'salary' },
    { id: 2, amount: 200, type: 'expense', category: 'food' },
    { id: 3, amount: 1000, type: 'income', category: 'bonus' },
    { id: 4, amount: 50, type: 'expense', category: 'transport' },
    { id: 5, amount: 300, type: 'income', category: 'freelance' },
  ];

// Filter Transactions - (type == 'income' && amount > threshold)
const filterTransactions = (data: Transactions, transType: string, amount: number): Transactions => {
    let filteredTrans: Transactions = []
    data.forEach((trans)=> {
        trans.type === transType && trans.amount > amount?filteredTrans.push(trans):null
    })
    return filteredTrans
}

console.log(filterTransactions(transactions, 'income', 200))

// Transform Transactions - include only (id && amount) and 2x amount
const transformTransactions = (trans: Transactions): {id: number, amount: number}[] => {
    let transformedTrans: {id: number, amount: number}[]
    transformedTrans = trans.map(tran => {
        return {
            id: tran.id,
            amount: 2 * tran.amount
        }
    })
    return transformedTrans
}

console.log(transformTransactions(filterTransactions(transactions, 'income', 200)))

// Summarize Transactions - total sum of transformed transaction amounts
const summarizeTransactions = (transactions: {id: number, amount: number}[]): number => {
    let sum: number = 0;
    transactions.forEach(transaction => {
        sum = sum + transaction.amount
    })
    return sum
}

console.log(summarizeTransactions(transformTransactions(filterTransactions(transactions, 'income', 200))))


console.log(transactions)