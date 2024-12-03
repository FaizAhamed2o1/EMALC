import WideButtonBordered from "../WideButtonBordered/WideButtonBordered";
import WideButtonLight from "../WideButtonLight/WideButtonLight";
import dashboardImage from "../../assets/images/Dashboard.png";
import miroLogo from "../../assets/images/Microsoft-logo.png";
import adobeLogo from "../../assets/images/Adobe-logo.png";
import treeHouseLogo from "../../assets/images/Treehouse-logo.png";
import slackLogo from "../../assets/images/Slack-logo.png";
import webflowLogo from "../../assets/images/Webflow-logo.png";
import spotifyLogo from "../../assets/images/Spotify-logo.png";

const Hero = () => {
  return (
    <section className="bg-customPrimary rounded-b-3xl md:rounded-b-4xl md:mb-m-18 px-4 mb-16 text-center">
      <div className="md:pt-16 sm:pb-10 pb-8 max-w-[75rem] mx-auto">
        <h1
          className="text-inversePrimary text-4xl sm:text-5xl lg:text-[4rem] font-bold 
        max-w-[49.5rem] mx-auto leading-tight sm:leading-normal mb-4"
        >
          Get in touch with the right folks who make the calls
        </h1>

        <p className="text-inverseSecondary md:text-lg max-w-[33.625rem] mx-auto mb-8 text-base">
          Step up your outreach! Make it personal, automate the boring stuff,
          and watch your cold emails bring in more meetings and leads.
        </p>

        <div className="md:mb-12 mb-8 space-x-4">
          <WideButtonLight buttonText="Start Free Trial"></WideButtonLight>
          <WideButtonBordered buttonText="Contact Us"></WideButtonBordered>
        </div>

        <div className=" md:mb-12 mx-auto mb-8">
          <img src={dashboardImage} alt="Dashboard Image" className="w-full" />
        </div>

        <p className="text-inversePrimary md:mb-10 mb-6 text-sm text-center">
          Trusted by 5000+ businesses to scale outbound sales and drive new
          revenue
        </p>

        <div className=" flex flex-wrap items-center justify-around">
          <img src={miroLogo} alt="miro logo" />
          <img src={adobeLogo} alt="adobe logo" />
          <img src={treeHouseLogo} alt="treehouse logo" />
          <img src={slackLogo} alt="slack logo" />
          <img src={webflowLogo} alt="webflow logo" />
          <img src={spotifyLogo} alt="spotify logo" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
