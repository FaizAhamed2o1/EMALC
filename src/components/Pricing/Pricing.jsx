import PricingCard from "../PricingCard/PricingCard";
import SmallButtonLight from "../SmallButtonLight/SmallButtonLight";

const Pricing = () => {
  return (
    <div className="bg-inversePrimary md:mb-m-18 md:py-p-18 px-4 py-12 mb-16">
      <div className="max-w-[81rem] mx-auto">
        {/* section header content */}
        <div className="md:mb-10 mb-8 space-y-4 text-center">
          <SmallButtonLight buttonText="Pricing"></SmallButtonLight>

          <h2 className="md:text-5xl text-3xl font-bold">
            Transparent Pricing Tailored to Your Needs
          </h2>

          <p className="text-customBaseTertiary max-w-3xl mx-auto">
            Choose a plan that fits your business size and goals. Whether
            you&apos;re just starting or scaling up, our flexible pricing
            ensures you only pay for the features and capacity you need—no
            hidden fees, just value-driven solutions.
          </p>
        </div>

        {/* Pricing cards container */}
        <div className="sm:grid-cols-2 md:grid-cols-3 grid grid-cols-1 gap-6">
          <PricingCard></PricingCard>
          <PricingCard></PricingCard>
          <PricingCard></PricingCard>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
