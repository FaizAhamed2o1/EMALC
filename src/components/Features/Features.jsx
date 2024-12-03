import FeaturesCards from "../FeaturesCards/FeaturesCards";
import SmallButtonLight from "../SmallButtonLight/SmallButtonLight";

const Features = () => {
  return (
    <div className="md:mb-m-18 px-4 mb-16">
      <div className="max-w-[81rem] mx-auto">
        {/* section header content */}
        <div className="md:mb-10 mb-8 space-y-4 text-center">
          <SmallButtonLight buttonText="Features"></SmallButtonLight>

          <h2 className="md:text-5xl text-3xl font-bold">
            Streamlined Email Marketing for Maximum Impact
          </h2>

          <p className="text-customBaseTertiary max-w-3xl mx-auto">
            Achieve more with less effort through intuitive tools and automation
            workflows that let you craft, send, and optimize campaigns tailored
            to your audience—ensuring every email drives results.
          </p>
        </div>

        {/* Features cards container */}
        <div className="md:grid-cols-3 sm:grid-cols-2 xl:grid-cols-4 grid grid-cols-1 gap-6">
          <FeaturesCards></FeaturesCards>
          <FeaturesCards></FeaturesCards>
          <FeaturesCards></FeaturesCards>
          <FeaturesCards></FeaturesCards>
          <FeaturesCards></FeaturesCards>
          <FeaturesCards></FeaturesCards>
          <FeaturesCards></FeaturesCards>
          <FeaturesCards></FeaturesCards>
        </div>
      </div>
    </div>
  );
};

export default Features;
