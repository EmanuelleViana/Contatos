import React from 'react';
import './Contact.scss';

class Contact extends React.Component {
  render() {
    return (

      <article className="contact" data-testid="contact" >
        <span className="contact__avatar"><img alt="Profile" src={this.props?.contato?.avatar}/></span>
        <span className="contact__data">{this.props?.contato?.name}</span>
        <span className="contact__data">{this.props?.contato?.phone}</span>
        <span className="contact__data">{this.props?.contato?.country}</span>
        <span className="contact__data">{this.props?.contato?.admissionDate}</span>
        <span className="contact__data">{this.props?.contato?.company}</span>
        <span className="contact__data">{this.props?.contato?.department}</span>
      </article>
    );
  }
}

export default Contact;
