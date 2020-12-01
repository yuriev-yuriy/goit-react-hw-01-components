import PropTypes from 'prop-types';

export default function Data({label, percentage}) {
    
    return <>
        <span className="label">{label}</span>
        <span className="percentage">{percentage}</span>
        </>
}

Data.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}