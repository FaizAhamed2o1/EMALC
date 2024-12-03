import Logo from "../Logo/Logo";
import footerSocialIcon from "../../assets/images/footer-icon.png";

const Footer = () => {
  return (
    <footer className="bg-customPrimary text-inversePrimary md:py-p-18 px-4 py-12">
      <div className="lg:flex-row flex flex-col items-start gap-4">
        <div className="max-w-96 lg:max-w-80">
          <Logo></Logo>

          <p>
            Our mission is to empower businesses of all sizes with intuitive
            tools and automation that make connecting with audiences effortless.
          </p>
        </div>

        <div className="sm:grid-cols-4 grid flex-1 grid-cols-2 gap-4">
          <div>
            <p>Quick Links</p>
            <p>Home</p>
            <p>About</p>
            <p>Pricing</p>
            <p>Testimonials</p>
            <p>Contact</p>
          </div>

          <div>
            <p>Quick Links</p>
            <p>Home</p>
            <p>About</p>
            <p>Pricing</p>
            <p>Testimonials</p>
            <p>Contact</p>
          </div>

          <div>
            <p>Quick Links</p>
            <p>Home</p>
            <p>About</p>
            <p>Pricing</p>
            <p>Testimonials</p>
            <p>Contact</p>
          </div>

          <div>
            <p className="pl-2">Socials</p>
            <div className="flex">
              <img src={footerSocialIcon} alt="" />
              <img src={footerSocialIcon} alt="" />
              <img src={footerSocialIcon} alt="" />
            </div>
          </div>
        </div>
      </div>

      <p className="mt-8 text-center">© 2024 EmalC. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
