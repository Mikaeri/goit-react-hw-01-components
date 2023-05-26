import PropTypes from 'prop-types';
import {
  StatList,
  StatListItem,
  StatisticSection,
  Title,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticSection className="statistics">
      {title && <Title className="title">{title}</Title>}

      <StatList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatListItem key={id}>
              <span className="label">{label}</span>
              <span className="percentage">{percentage}%</span>
            </StatListItem>
          );
        })}
      </StatList>
    </StatisticSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
