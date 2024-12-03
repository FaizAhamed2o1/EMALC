import PropTypes from "prop-types";

const WideButtonDark = ({ buttonText }) => {
  return (
    <button className="bg-brandRegular rounded-2xl sm:px-6 sm:py-4 text-inversePrimary px-4 py-3 font-bold">
      {buttonText}
    </button>
  );
};

WideButtonDark.propTypes = {
  buttonText: PropTypes.string,
};

export default WideButtonDark;
