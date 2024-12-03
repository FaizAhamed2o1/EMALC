import { FaStar } from "react-icons/fa";
import userImage from "../../assets/images/Avatars-Base.png";
const TestimonialCard = () => {
  return (
    <div className="border-inverseSecondary bg-inversePrimary rounded-2xl p-6 border">
      <p className="mb-3 font-medium">
        EmalC transformed our email campaigns! The platform is intuitive, and
        the automation features saved us countless hours while boosting our
        engagement rates by 40%.
      </p>

      <div className="flex items-center gap-2 mb-8">
        <p className="flex gap-0.5 text-brandRegular">
          <span>
            <FaStar />
          </span>
          <span>
            <FaStar />
          </span>
          <span>
            <FaStar />
          </span>
          <span>
            <FaStar />
          </span>
          <span>
            <FaStar />
          </span>
        </p>

        <p className="text-customBaseTertiary font-medium">4.8</p>
      </div>

      <div className="flex items-center gap-3">
        <div>
          <img src={userImage} alt="user image" />
        </div>

        <div className="space-y-0.5 text-sm">
          <p className="font-bold">Esther Howard</p>
          <p className="text-customBaseTertiary">President of Sales</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
