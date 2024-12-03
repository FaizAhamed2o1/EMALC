import WideButtonDark from "../WideButtonDark/WideButtonDark";

const GetLeads = () => {
  return (
    <div className="bg-inversePrimary md:py-p-18 px-4 py-12">
      <div className="max-w-[81rem] mx-auto">
        <div className="md:mb-10 mb-8 space-y-4 text-center">
          <h2 className="md:text-5xl text-3xl font-bold">
            Get verified leads, personalized.
          </h2>

          <p className="text-customBaseTertiary max-w-3xl mx-auto">
            From startups to enterprises, hear firsthand how our platform helped
            businesses boost engagement, save time, and grow revenue.
          </p>
        </div>

        <div className="space-x-4 text-center">
          <WideButtonDark buttonText="Start Free Trial"></WideButtonDark>

          <button className="rounded-2xl sm:px-6 sm:py-4 border-inverseSecondary px-4 py-3 font-bold text-black bg-transparent bg-white border">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetLeads;
