import ReactPlayer from "react-player";
import SmallButtonLight from "../SmallButtonLight/SmallButtonLight";
import WideButtonDark from "../WideButtonDark/WideButtonDark";
import AboutRating from "../AboutRating/AboutRating";
import g2Logo from "../../assets/images/G2-logo.svg";
import chromeLogo from "../../assets/images/chrome-logo.png";

const About = () => {
  return (
    <section className=" md:mb-m-18 px-4 mb-16">
      <div className="max-w-[57.25rem] mx-auto">
        {/* section header content */}
        <div className="md:mb-10 mb-8 space-y-4 text-center">
          <SmallButtonLight buttonText="About"></SmallButtonLight>

          <h2 className="text-5xl font-bold">
            Avoid the spam folder, Send Smartly
          </h2>

          <p className="text-customBaseTertiary max-w-3xl mx-auto">
            Grab new customers with the top email marketing and automation
            platform that suggests cool ways to boost your opens, clicks, and
            sales.
          </p>
        </div>

        {/* video and description div */}
        <div className="md:space-y-8 space-y-6">
          {/* Video */}
          <div className="overflow-hidden rounded">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=WNCl-69POro"
              width="100%"
            ></ReactPlayer>
          </div>

          {/* description */}
          <div className="max-w-xl mx-auto text-sm text-center">
            <p className="mb-6">
              Every business has an email address so it&apos;s baffling that
              people still ask if cold email works. It has never stopped
              working. It has evolved, but if you do it right - it will always
              work.
            </p>

            <p>
              We offer a free 14-day trial so you can explore our platform,
              begin your campaigns and reach out to your ideal customers.
            </p>
          </div>

          <div className="space-x-4 text-center">
            <WideButtonDark buttonText="Start Free Trial"></WideButtonDark>

            <button className="rounded-2xl sm:px-6 sm:py-4 border-inverseSecondary px-4 py-3 font-bold text-black bg-transparent border">
              Contact Us
            </button>
          </div>

          <div className="md:gap-20 flex items-center justify-center gap-10">
            <AboutRating
              logo={g2Logo}
              ratingBy="Rating by G2 users"
            ></AboutRating>

            <AboutRating
              logo={chromeLogo}
              ratingBy="on Chrome Store"
            ></AboutRating>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
