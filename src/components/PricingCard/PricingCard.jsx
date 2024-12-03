import pricingIcon from "../../assets/images/pricing-icon.svg";

const PricingCard = () => {
  return (
    <div className="rounded-3xl group hover:bg-customPrimary p-2 duration-200 bg-white">
      <div className="p-4 mb-6">
        <div className="size-10 bg-inversePrimary group-hover:bg-brandLight flex items-center justify-center mb-5 duration-200 rounded-lg">
          <img src={pricingIcon} alt="Audience segmentation" />
        </div>

        <div className="md:mb-10 md-8">
          <h3 className="group-hover:text-inversePrimary mb-2 text-lg font-bold duration-200">
            Ready
          </h3>
          <p className="text-customBaseTertiary text-sm">
            Effortlessly group your audience based on behavior, demographics,
            and preferences to target them with precision.
          </p>
        </div>

        <p className="text-customBaseTertiary group group-hover:text-inversePrimary mb-3 text-sm duration-200">
          <span className="group-hover:text-inversePrimary text-5xl font-bold text-black duration-200">
            $15
          </span>{" "}
          / Per Month
        </p>

        <button className="border-inverseSecondary rounded-2xl group-hover:bg-brandLight group-hover:border-brandLight w-full px-4 py-3 font-bold duration-200 bg-white border">
          Get Started
        </button>
      </div>

      <div className="bg-inversePrimary border-inverseSecondary rounded-2xl group-hover:bg-brandRegular group-hover:border-brandRegular group-hover:text-inversePrimary p-4 space-y-2 text-sm duration-200 border">
        <p className="mb-1">Benefits</p>
        <p>Campaign Management</p>
        <p>Lead Finder</p>
        <p>Contact Management</p>
        <p>User Management</p>
        <p>Spam Protection</p>
      </div>
    </div>
  );
};

export default PricingCard;
