import PropTypes from 'prop-types';
import Data from './Data';
import s from './Statistics.module.css';

export default function Statistics({title, stats} ) {
  // const { title, stats } = items;

  return <section className={s.statistics}>
  {title && <h2 className={s.title}>Upload stats</h2>}

  <ul className={s.list}>
      {stats.map(item => (
        <li key={item.id} className={s.item}>
          <Data
            label = {item.label}
            percentage = {item.percentage} />
        </li>
      ))}
  </ul>
</section>

}

Statistics.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
  }))
}