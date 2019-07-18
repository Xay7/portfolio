import React from "react";
import styled from "styled-components";
import ContactInfo from "./UI/ContactInfo";
import axios from "axios";
import Game from "./Game";
import Loader from "./UI/Loader";

const Container = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background-color: #fbfbfb;

  @media (min-width: 1400px) {
  }
`;

const Header = styled.h1`
  font-size: 36px;
  color: #444444;
  margin: 10px 0;
  text-align: center;
  align-self: center;

  @media (min-width: 1200px) {
    font-size: 48px;
  }
`;

const ContactOptions = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  background-color: #fbfbfb;
  margin: 10px 0;

  @media (min-width: 1200px) {
    flex-direction: row;
  }
`;

const Contacts = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 0;

  @media (min-width: 1200px) {
    margin-top: 100px;
  }
`;

const Form = styled.form`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 1200px) {
    align-items: flex-start;
    margin: 0;
    width: auto;
  }
`;

const FormContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 1200px) {
    align-items: flex-start;
    margin-top: 100px;
  }
`;

const TextInput = styled.input`
  box-sizing: border-box;
  width: 90%;
  height: 50px;
  border: 1px solid ${props => (props.error ? "red" : "#ccc")};
  padding: 5px 10px;
  margin-bottom: 20px;

  ::placeholder {
    color: ${props => (props.error ? "red" : "#aaa")};
  }

  @media (min-width: 1200px) {
    width: 600px;
  }
`;

const Textarea = styled.textarea`
  resize: none;
  width: calc(90% - 20px);
  height: 200px;
  padding: 5px 10px;
  border: 1px solid ${props => (props.error ? "red" : "#ccc")};
  font-size: 16px;

  ::placeholder {
    color: ${props => (props.error ? "red" : "#aaa")};
  }

  @media (min-width: 1200px) {
    width: 578px;
  }
`;

const Send = styled.input`
  position: relative;
  font-size: 18px;
  height: 45px;
  width: calc(40% + 22px);
  background-color: ${props => (props.success ? "green" : "#0984e3")};
  border: none;
  color: white;
  cursor: ${props => (props.success ? "not-allowed" : "pointer")};
  border-radius: 5px;
  align-self: center;
  transition: 150ms all;
  outline: none;
  box-shadow: 0 5px ${props => (props.success ? "#025e02" : "#0564ad")};
  transition: 150ms ease-in-out;
  transition-property: background-color, top;
  &:active {
    box-shadow: none;
    top: 5px;
  }

  :hover {
    background-color: ${props => (props.success ? "green" : "#0676cc")};
  }
`;

class Contact extends React.Component {
  state = {
    email: "",
    emailError: false,
    title: "",
    message: "",
    messageError: false,
    loading: false,
    formSuccess: false
  };

  // Form carry for serverless form handling
  handleForm = async e => {
    e.preventDefault();

    // Error handling
    await this.validEmail(this.state.email);

    if (this.state.emailError) {
      return;
    } else if (this.state.message.length < 1) {
      this.setState({ messageError: true });
      return;
    }

    // Post message to my endpoint
    this.setState({ loading: true });
    await axios.post(
      "https://formcarry.com/s/WjN5v3b01iK",
      {
        email: this.state.email,
        title: this.state.title,
        message: this.state.message
      },
      {
        headers: {
          Accept: "application/json"
        }
      }
    );
    this.setState({ loading: false, formSuccess: true });
  };

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value,
      emailError: false,
      messageError: false
    });
  };

  validEmail = email => {
    // eslint-disable-next-line no-useless-escape
    const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return this.setState({ emailError: !pattern.test(email) });
  };

  render() {
    return (
      <Container ref={this.props.forwardRef}>
        <ContactOptions>
          <Contacts>
            <Header>Find me here</Header>
            <ContactInfo name="Github">https://github.com/Xay7</ContactInfo>
            <ContactInfo name="Linkedin">
              https://www.linkedin.com/in/emiliancw/
            </ContactInfo>
            <ContactInfo name="Email">emilian.cw@gmail.com</ContactInfo>
            <ContactInfo name="Phone">+48 883 241 335</ContactInfo>
          </Contacts>
          <FormContainer>
            <Form onSubmit={this.handleForm}>
              <Header>Message me</Header>
              <TextInput
                type="text"
                name="email"
                placeholder={this.state.emailError ? "Invalid email" : "Email"}
                onChange={this.handleInput}
                error={this.state.emailError}
              />
              <TextInput
                type="text"
                name="title"
                placeholder="Title"
                autoComplete="off"
                onChange={this.handleInput}
              />
              <Textarea
                name="message"
                placeholder={
                  this.state.messageError ? "Message can't be empty" : "Message"
                }
                onChange={this.handleInput}
                error={this.state.messageError}
              />
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "auto",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: 20
                }}
              >
                <Send
                  type="submit"
                  value={
                    this.state.loading
                      ? " "
                      : this.state.formSuccess
                      ? "✔"
                      : "Send"
                  }
                  success={this.state.formSuccess}
                  disabled={this.state.formSuccess}
                />
                {this.state.loading && <Loader />}
              </div>
            </Form>
          </FormContainer>
        </ContactOptions>
        <Game />
      </Container>
    );
  }
}

export default React.forwardRef((props, ref) => (
  <Contact forwardRef={ref} {...props} />
));
