import PropTypes from 'prop-types';

export default function Badges(props) {
  const styles = {
    badge: {
      backgroundColor: props.backColor,
      color: 'white',
      padding: '4px 8px',
      textAlign: 'center',
      borderRadius: '10px',
      transition: 'box-shadow 0.3s ease-in-out',
    },
    badgeHover: {
      boxShadow: '0 0 10px 4px  #15869d',
    },
  };

  return (
    <button
      style={styles.badge}
      onMouseEnter={(e) => e.currentTarget.style.boxShadow = styles.badgeHover.boxShadow}
      onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
    >
      {props.title}
    </button>
  );
}

Badges.propTypes = {
  title: PropTypes.string.isRequired,
  backColor: PropTypes.string.isRequired,
};