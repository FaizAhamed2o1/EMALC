import PropTypes from "prop-types";

const WideButtonBordered = ({ buttonText }) => {
  return (
    <button className="rounded-2xl sm:px-6 sm:py-4 text-inversePrimary border-inversePrimary px-4 py-3 font-bold bg-transparent border">
      {buttonText}
    </button>
  );
};

WideButtonBordered.propTypes = {
  buttonText: PropTypes.string,
};

export default WideButtonBordered;
