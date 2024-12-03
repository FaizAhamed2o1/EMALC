import PropTypes from "prop-types";

const SmallButtonLight = ({ buttonText }) => {
  return (
    <button className="bg-brandLight px-3 py-2 text-xs font-medium text-black rounded-lg">
      {buttonText}
    </button>
  );
};

SmallButtonLight.propTypes = {
  buttonText: PropTypes.string,
};

export default SmallButtonLight;
