import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiNodejsSmall,
    DiMysql,
    DiReact,
  } from "react-icons/di";
  
  import "../styles/components/technologiescontainer.sass";
  
  const technologies = [
    { id: "html", name: "HTML5", icon: <DiHtml5 />, desc:"HTML5 é uma linguagem de marcação para a World Wide Web e é uma tecnologia chave da Internet" },
    { id: "css", name: "CSS3", icon: <DiCss3 />, desc:"Cascading Style Sheets é um mecanismo para adicionar estilos a uma página web, aplicado diretamente nas tags HTML ou ficar contido dentro das tags <style>."},
    { id: "js", name: "JavaScript", icon: <DiJsBadge />, desc:"JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma."},
    { id: "node", name: "Node.js", icon: <DiNodejsSmall />, desc:"Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web." },
    { id: "mysql", name: "MySQL", icon: <DiMysql />, desc:"O MySQL é um sistema de gerenciamento de banco de dados, que utiliza a linguagem SQL como interface." },
    { id: "react", name: "React", icon: <DiReact /> , desc:"O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web."},
  ];
  
  const TechnologiesContainer = () => {
    return (
      <section className="technologies-container">
        <h2>Tecnologias</h2>
        <div className="technologies-grid">
          {technologies.map((tech) => (
            <div className="technology-card" id={tech.id} key={tech.id}>
              {tech.icon}
              <div className="technology-info">
                <h3>{tech.name}</h3>
                <p>{tech.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default TechnologiesContainer;