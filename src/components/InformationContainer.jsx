import "../styles/components/informationcontainer.sass";

import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai";

const InformationContainer = () => {
  return (
    <section id="information">
      <div className="info-card">
        <AiFillPhone id="phone-icon" />
        <div>
          <h3>Whatsapp</h3>
          <a href="https://api.whatsapp.com/send?phone=5548996590766&text=Ol%C3%A1,%20meu%20nome%20%C3%A9%20Leandro%20e%20ficarei%20muito%20feliz%20em%20fazer%20parte%20da%20sele%C3%A7%C3%A3o%20de%20recrutamento%20para%20area%20de%20Front-End%20Developer%20-%20Junior%0A%0A"><p >(48)99659-0766</p></a>
          
        </div>
      </div>
      <div className="info-card">
        <AiOutlineMail id="email-icon" />
        <div>
          <h3>E-mail</h3>
          <p>leandroepindula@gmail.com</p>
        </div>
      </div>
      <div className="info-card">
        <AiFillEnvironment id="pin-icon" />
        <div>
          <h3>Localização</h3>
          <p>Florianópolis/ SC</p>
        </div>
      </div>
    </section>
  );
};

export default InformationContainer;