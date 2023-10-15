import css from './Statistics.module.css';
import {getRandomHexColor} from 'utilities/getRandomColor';

export const Statistics = ({ title, stats }) => { 
  return (<section className={css.statisticsSection}>
        {title && <h2 className={css.statsCardTitle}>{title}</h2>}
        <ul className={css.statisticsCard}>
            { stats.map(stat =><li className={css.statListItem} key={stat.id} style={{backgroundColor:getRandomHexColor()}}>
              <span className={css.statLabel}>{stat.label}</span>
      <span className={css.statPercentage}>{stat.percentage}%</span>
    </li>)}

  </ul>
</section>)
}