import React from 'react';

const Contact = () => {
  return (
    <div className="contact">
      <h2 className="heading">
        Entre em <span>Contato</span>
      </h2>

      <form action="#">
        <div className="input-box">
          <input type="text" name="name" placeholder="Nome Completo" />
          <input type="email" name="email" placeholder="Endereço de Email" />
        </div>
        <div className="input-box">
          <input type="number" name="number" placeholder="Número de Telefone" />
          <input type="text" name="subject" placeholder="Assunto do Email" />
        </div>

        <textarea name="message" cols="30" rows="10" placeholder="Sua Mensagem"></textarea>
        <input type="submit" value="Enviar Mensagem" className="btn" />
      </form>
    </div>
  );
};

export default Contact;