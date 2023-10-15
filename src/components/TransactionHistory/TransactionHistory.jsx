import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }
) => {
    return (
        <table className={css.transactionHistoryTable}>
            <thead >
                <tr className={css.tableHeader}>
                    <th className={css.tableHeaderName}>Type</th>
                    <th className={css.tableHeaderName}>Amount</th>
                    <th className={css.tableHeaderName}>Currency</th>
                </tr>
            </thead>

            <tbody className={css.tableBody}>
                {items.map(( {id, type, amount, currency}) =>(<tr key={id} className={css.tableDataRow}>
                    <td className={css.tableData}>{type}</td>
                    <td className={css.tableData}>{amount}</td>
                    <td className={css.tableData}>{currency}</td>
                </tr>))}

            </tbody>
        </table>);
};