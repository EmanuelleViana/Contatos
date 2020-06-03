import React from "react";
import Label from "./Label";
import Contact from "./Contact";

import "./Contacts.scss";
import ErrorBoundary from "../error/ErrorBoundary";

class Contacts extends React.Component {
  render() {
    return (
      <div className="container" data-testid="contacts">
        <section className="contacts">
          <article className="contact" data-testid="contact">
            <span className="contact__avatar" />
            <Label name="Nome" />
            <Label name="Telefone" />
            <Label name="País" />
            <Label name="Admissão" />
            <Label name="Empresa" />
            <Label name="Departamento" />
          </article>
         <ErrorBoundary> {this.props?.contatos?.length === 0
            ? "Nenhum registro encontrado"
            : this.props.contatos.map((contato) => {
                return <Contact key={contato.id} contato={contato} />;
              })}
          </ErrorBoundary>
        </section>
      </div>
    );
  }
}

export default Contacts;
