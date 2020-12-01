import PropTypes from 'prop-types';
import Transaction from './Transaction';
import s from './Transaction.module.css';

export default function TransactionHistory({items}) {
    
    return <>
    <table className={s.table}>
  <thead className={s.head}>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
<tbody className={s.body}>
                {items.map(item => (
                    <tr key={item.id}>
                        <Transaction
                            type={item.type}
                            amount={item.amount}
                            currency={item.currency}
                        />
                    </tr>
                ))}
 </tbody>
</table>
        </>
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
}))
}