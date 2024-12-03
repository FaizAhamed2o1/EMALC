import OverviewCards from "../OverviewCards/OverviewCards";
import SmallButtonLight from "../SmallButtonLight/SmallButtonLight";
import campaignIcon from "../../assets/images/campaign-icon.svg";
import leadFinderIcon from "../../assets/images/lead-finder.svg";
import personalizationIcon from "../../assets/images/personalization.svg";
import deliverabilityIcon from "../../assets/images/deliverability.svg";
import unifiedIcon from "../../assets/images/unified-inbox.svg";
import dashboardImage from "../../assets/images/Dashboard.png";

const Overview = () => {
  return (
    <section className="bg-inversePrimary md:mb-m-18 md:py-p-18 px-4 py-12 mb-16">
      {/* section header content */}
      <div className="md:mb-10 mb-8 space-y-4 text-center">
        <SmallButtonLight buttonText="Overview"></SmallButtonLight>

        <h2 className="md:text-5xl text-3xl font-bold">
          Your All-in-One Email Marketing Solution
        </h2>

        <p className="text-customBaseTertiary max-w-3xl mx-auto">
          Gain control of your campaigns with a platform designed for simplicity
          and effectiveness. From segmentation and automation to real-time
          analytics, our solution empowers you to connect with your audience,
          optimize engagement, and achieve your marketing goals effortlessly.
        </p>
      </div>

      <div className="max-w-[75rem] mx-auto">
        {/* overview cards container */}
        <div className="md:mb-10 md:grid-cols-3 xl:grid-cols-5 grid grid-cols-2 gap-6 mb-8">
          <OverviewCards
            icon={campaignIcon}
            solution="Campaign"
          ></OverviewCards>
          <OverviewCards
            icon={leadFinderIcon}
            solution="Lead Finder"
          ></OverviewCards>
          <OverviewCards
            icon={personalizationIcon}
            solution="Personalization"
          ></OverviewCards>
          <OverviewCards
            icon={deliverabilityIcon}
            solution="Deliverability Suite"
          ></OverviewCards>
          <OverviewCards
            icon={unifiedIcon}
            solution="Unified Inbox"
          ></OverviewCards>
        </div>

        <div>
          <img src={dashboardImage} alt="Dashboard image" />
        </div>
      </div>
    </section>
  );
};

export default Overview;
