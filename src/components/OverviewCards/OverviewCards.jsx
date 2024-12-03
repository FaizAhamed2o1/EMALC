import PropTypes from "prop-types";

const OverviewCards = ({ icon, solution }) => {
  return (
    <div className="border-inverseSecondary flex flex-col items-center justify-center gap-3 p-6 font-medium text-center bg-white border rounded-lg">
      <div className="size-10 bg-inversePrimary flex items-center justify-center rounded-lg">
        <img src={icon} alt="" />
      </div>
      <p>{solution}</p>
    </div>
  );
};

OverviewCards.propTypes = {
  icon: PropTypes.string,
  solution: PropTypes.string,
};

export default OverviewCards;
