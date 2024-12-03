import logoImage from "../../assets/images/logo.svg";

const Logo = () => {
  return (
    <a href="#">
      <div className="text-inversePrimary flex items-center gap-2">
        <div className="p-1 bg-[#00452E] rounded-lg">
          <img src={logoImage} alt="Logo image" />
        </div>

        <p className="text-2xl font-bold">EMALC</p>
      </div>
    </a>
  );
};

export default Logo;
