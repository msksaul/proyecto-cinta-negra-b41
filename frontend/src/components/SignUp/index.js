import React, { useState } from 'react';
//import axios from 'axios';
import {
  Button,  
  Form,  
  FormGroup,
  Label,  
  Input,
} from 'reactstrap';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInput = (e) => {
    switch (e.target.name) {
      case "inputFirstName":
        setFirstName(e.target.value)
        break;
      case "lastName":
        setLastName(e.target.value)
        break;
      case "email":
        setEmail(e.target.value)
        break;
      case "password":
        setPassword(e.target.value)
        break;
      default:
        break;
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const jsonSend = {
      first_name: firstName,
      last_name: lastName,
      email,
      password,
    }
    // Hacer una peticion POST al backend para registrar un usuario
/*     try {
      await axios.post('https://cinta-negra-backend.herokuapp.com/api/v1/register', jsonSend);
      alert('Successful signup');
    } catch (error) {
      alert('Error');
    } */
    
  }

  return (
    <React.Fragment>
      <h1 className="mb-4">Registro QuetzalStore</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Nombre</Label>
          <Input 
            required
            type="text"
            id="firstName"
            name="inputFirstName" 
            placeholder="Ej. Juan"
            value={firstName}
            onChange={handleInput} />
        </FormGroup>
        <FormGroup>
          <Label>Apellido</Label>
          <Input
            required
            type="text" 
            name="lastName" 
            id="inputLastname" 
            placeholder="Ej. Pérez"
            value={lastName}
            onChange={handleInput} />
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Input
            required
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="Ej. hola@email.com"
            value={email}
            onChange={handleInput} />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input
            required 
            type="password"
            name="password"
            id="examplePassword"
            placeholder="Escribe tu contraseña" 
            value={password}
            onChange={handleInput} />
        </FormGroup>
        <Button>Registrar</Button>
      </Form>
    </React.Fragment>
  );
}
 
export default Signup;