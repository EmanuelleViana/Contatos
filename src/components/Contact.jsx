import React from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';

import './Contact.scss';
class Contact extends React.Component {
  render() {
    const formatedDate = dayjs(this.props.contato.admissionDate, {locale: 'pt-br'}).format('DD/MM/YYYY'); // 15/10/2018
    return (
      <article className="contact" data-testid="contact" >
        <span className="contact__avatar"><img alt="Profile" src={this.props?.contato?.avatar}/></span>
        <span className="contact__data">{this.props?.contato?.name}</span>
        <span className="contact__data">{this.props?.contato?.phone}</span>
        <span className="contact__data">{this.props?.contato?.country}</span>
        <span className="contact__data">{formatedDate}</span>
        <span className="contact__data">{this.props?.contato?.company}</span>
        <span className="contact__data">{this.props?.contato?.department}</span>
      </article>
    );
  }
}

export default Contact;
