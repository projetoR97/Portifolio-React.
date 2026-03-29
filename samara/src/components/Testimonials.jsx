import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Marilyn',
      img: 'Kamilla.jpg',
      rating: 5,
      text: 'Samara é uma excelente desenvolvedora. Seu trabalho em React foi impecável e ajudou muito no nosso projeto.',
    },
    {
      name: 'Julia',
      img: 'download.jpg',
      rating: 5,
      text: 'Trabalhar com Samara foi uma experiência incrível. Ela entregou um código limpo e funcional, superando nossas expectativas.',
    },
    {
      name: 'Aleksa',
      img: 'rosto.jpg',
      rating: 5,
      text: 'Samara demonstrou grande profissionalismo e criatividade. Recomendo seus serviços para qualquer projeto web.',
    },
  ];

  return (
    <div className="testimonials">
      <div className="testimonials-box">
        <h2 className="heading">Depoimentos</h2>
        <div className="wrapper">
          {testimonials.map((item, index) => (
            <div className="testimonial-item" key={index}>
              <img src={item.img} alt={item.name} />
              <h2>{item.name}</h2>
              <div className="rating">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="fa-solid fa-star"></i>
                ))}
              </div>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

