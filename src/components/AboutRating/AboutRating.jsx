import PropTypes from "prop-types";

import { FaStar } from "react-icons/fa";

const AboutRating = ({ logo, ratingBy }) => {
  return (
    <div className="flex items-center gap-4">
      <div className="bg-inversePrimary p-2 rounded-lg">
        <img src={logo} alt="g2 logo" />
      </div>

      <div className="space-y-1 text-sm font-medium">
        <p className="flex">
          <span className="flex items-center gap-1.5 border px-2 rounded-l-xl">
            <FaStar /> 4.8
          </span>
          <span className="rounded-r-xl bg-inverseSecondary px-2">5</span>
        </p>

        <p>{ratingBy}</p>
      </div>
    </div>
  );
};

AboutRating.propTypes = {
  logo: PropTypes.string,
  ratingBy: PropTypes.string,
};

export default AboutRating;
