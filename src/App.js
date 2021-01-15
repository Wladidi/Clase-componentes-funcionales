import React, {useEffect, useState} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CardPersona from './components/cardPersona/cardPersona';
import clienteAxios from './config/axios';


const App = () => {

  const [usuarios, guardarUsuarios] = useState([]);


  useEffect( () => {
    fetchDataUsuarios();
  },
  []
  )

  const fetchDataUsuarios = async () =>{
    try {
      const datos = await clienteAxios.get('/users');
      let usuarios = datos.data
      
      guardarUsuarios(usuarios)
      
    } catch (error) {
      
    }

  }

  return (

    <Container fluid>
      <Row>
        <Col xs={12} >
          <h1 className="text-center mb-4 mt-4">Componentes funcionales en React.</h1>
        </Col>
      </Row>
      <Row>
        {
          usuarios && usuarios.length > 0 && 
            usuarios.map( (usuario,index ) => <CardPersona key={index} usuario={usuario}/> )
        }
      </Row>
      </Container>
  );
}

export default App;
