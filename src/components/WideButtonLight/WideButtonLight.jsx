import PropTypes from "prop-types";

const WideButtonLight = ({ buttonText }) => {
  return (
    <button className="bg-brandLight rounded-2xl sm:px-6 sm:py-4 px-4 py-3 font-bold text-black">
      {buttonText}
    </button>
  );
};

WideButtonLight.propTypes = {
  buttonText: PropTypes.string,
};

export default WideButtonLight;
