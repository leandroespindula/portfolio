
import SocialNetworkContainer from "./SocialNetworkContainer";
import InformationContainer from "./InformationContainer";

import Avatar from "../img/eu.jpeg";

import "../styles/components/sidebar.sass";

const Sidebar = () => { 
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Leandro Espindula" />
      <p className="title">Desenvolvedor</p>
      <SocialNetworkContainer/>
      <InformationContainer />
      <a href="https://drive.google.com/file/d/17EnYdVhD_KtG2MU10Us-Km-TnchwAw2H/view?usp=sharing" className="btn">
        Download do curriculo</a>
    </aside>
    
  )
}

export default Sidebar