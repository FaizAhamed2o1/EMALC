import SmallButtonLight from "../SmallButtonLight/SmallButtonLight";
import TestimonialCard from "../TestimonialCard/TestimonialCard";

const Tetimonials = () => {
  return (
    <div className="md:mb-m-18 px-4 mb-16">
      <div className="max-w-[81rem] mx-auto">
        {/* section header content */}
        <div className="md:mb-10 mb-8 space-y-4 text-center">
          <SmallButtonLight buttonText="Testimonials"></SmallButtonLight>

          <h2 className="md:text-5xl text-3xl font-bold">
            What Our Customers Say
          </h2>

          <p className="text-customBaseTertiary max-w-3xl mx-auto">
            Join thousands of satisfied users who have transformed their email
            marketing. From startups to enterprises, hear firsthand how our
            platform helped businesses boost engagement, save time, and grow
            revenue.
          </p>
        </div>

        {/* Testimonials cards container */}
        <div className="grid-col-1 md:grid-cols-2 lg:grid-cols-3 grid gap-6">
          <TestimonialCard></TestimonialCard>
          <TestimonialCard></TestimonialCard>
          <TestimonialCard></TestimonialCard>
        </div>
      </div>
    </div>
  );
};

export default Tetimonials;
