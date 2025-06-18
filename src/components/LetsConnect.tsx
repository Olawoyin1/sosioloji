
import "../styles/footer.css";
// import CustomButton from "../../containers/button/CustomButton";
import { FaStar } from "react-icons/fa";

// Import specific icons
import {
  FaFacebookF,
  FaTwitter,
//   FaWhatsapp,
  FaInstagram,
//   FaRss,
} from "react-icons/fa";
import FancyLinkButton from "./Button";

const LetsConnect = () => {
  const socialLinks = [
    {
      name: "Facebook",
      link: "https://web.facebook.com/ideaiscapital?_rdc=1&_rdr#",
      icon: <FaFacebookF />,
      color: "#3b5998",
    },
    {
      name: "Twitter",
      link: "https://x.com/Ideaiscapital",
      icon: <FaTwitter />,
      color: "#1DA1F2",
    },
    // {
    //   name: 'WhatsApp',
    //   link: 'https://wa.me/5492996155777',
    //   icon: <FaWhatsapp />,
    //   color: '#25D366',
    // },
    {
      name: "Instagram",
      link: "https://www.instagram.com/ideaiscapital/",
      icon: <FaInstagram />,
      color: "#E1306C",
    },
    // {
    //   name: 'RSS',
    //   link: 'https://ghost.estudiopatagon.com/edger/rss',
    //   icon: <FaRss />,
    //   color: '#FFA500',
    // },
  ];

  return (
    <div className="connect-widget ">
      <h3 className="connect-title flex items-center gap-3">
        <span>Let's connect</span>{" "}
        <span className="dot">
          {" "}
          <FaStar size={14} />
        </span>
      </h3>
      <div className="lets-connect-wrapper min-h-[330px] max-w-[500px]">
        <div className="absolute top-[-20px] left-5 z-10 bg-[#FFF0D3] shadow-md p-4 rounded-[15px] space-x-2 align-center flex flex-col justify-center  items-center h-[330px] max-w-[400px] w-full">
          {socialLinks.map((social, index) => (
            <FancyLinkButton
              key={index}
              label={social.name}
              to={social.link}
              bgColor={social.color}
              block
              textColor="white" 
            //   title={social.name}
            //   link={social.link}
            //   backgroundColor={social.color}
            //   textColor="#fff"
            //   borderColor="#000"
            //   icon={social.icon}
            //   className="social-button"
            //   buttonClassName="social-button-inner"
            //   style={{
            //     width: "100%",
            //   }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LetsConnect;
