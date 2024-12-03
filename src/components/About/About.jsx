import SmallButtonLight from "../SmallButtonLight/SmallButtonLight";

const About = () => {
  return (
    <section className="px-4">
      <div className="max-w-[57.25rem]">
        {/* section header content */}
        <div className="space-y-4">
          <SmallButtonLight buttonText="About"></SmallButtonLight>

          <h2 className="">Avoid the spam folder, Send Smartly</h2>

          <p>
            Grab new customers with the top email marketing and automation
            platform that suggests cool ways to boost your opens, clicks, and
            sales.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
