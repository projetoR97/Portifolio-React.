import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'Desenvolvimento Web',
      description:
        'Ofereço serviços completos de desenvolvimento web, criando sites responsivos e funcionais utilizando as melhores práticas e tecnologias modernas.',
    },
    {
      title: 'Desenvolvedora Frontend',
      description:
        'Especializada em desenvolvimento frontend, utilizo React, JavaScript e CSS para criar interfaces de usuário interativas e atraentes.',
    },
    {
      title: 'Design UI / UX',
      description:
        'Crio designs de interface e experiência do usuário focados na usabilidade, acessibilidade e estética para melhorar a interação do usuário.',
    },
    {
      title: 'Gerente de Conteúdo',
      description:
        'Gerencio e crio conteúdo digital, garantindo que seja relevante, envolvente e otimizado para diferentes plataformas e públicos.',
    },
  ];

  return (
    <div className="services">
      <h2 className="heading">Serviços</h2>
      <div className="sevices-container">
        {services.map((service, index) => (
          <div className="service-box" key={index}>
            <div className="service-info">
              <h4>{service.title}</h4>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;