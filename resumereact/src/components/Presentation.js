import React from 'react';
import './styles.css';  // Ajusta la ruta según la ubicación de tu archivo CSS

const Presentation = () => {
  return (
    <div>
      <div className="container">

        <h1>CV</h1>       
        <h2>Josue Quispe Peredo</h2>
        <img 
          src="https://avatars.githubusercontent.com/u/43143071?v=4" 
          alt="Josue Quispe Peredo"
          style={{ width: '150px', borderRadius: '50%' }}
        />
        
        <p>
          Desarrollador backend con experiencia en SQL Server, Python, Django y Angular. 
          Apasionado por crear soluciones eficientes.
        </p>
        
        <div className="skills">
          <span className="skill">SQL Server</span>
          <span className="skill">Python</span>
          <span className="skill">Django</span>
          <span className="skill">Angular</span>
          <span className="skill">C#</span>
          <span className="skill">TypeScript</span>
        </div>
      </div>

      <div className="container">
        <h2>Experiencia</h2>
        <ul>
          <li>Desarrollador backend en SQL Server</li>
          <li>Desarrollador backend en Python</li>
          <li>Desarrollador backend en Django</li>
          <li>Desarrollador frontend en Angular</li>
        </ul>
      </div>
    </div>
  );
}

export default Presentation;
