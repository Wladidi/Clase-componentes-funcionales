import React,{useState, useEffect} from 'react';
import { Card,Button, Badge } from 'antd';
import { Col, Row } from 'react-bootstrap';

import iconoCorazon from '../../img/heart.png'
import Swal from 'sweetalert2';

const CardPersona = ({ usuario }) => {
    //state
    const [likes,guardarLikes] = useState(0);

    const {name, username, email, website} = usuario;

    const agregarLikes = () =>{
        guardarLikes(likes + 1 )
    }

    // useEffect => componentDidMount, componentDidUpdate, componentDidUmounted
    useEffect(() => {
        if(likes === 5){
            Swal.fire({
                title: `El usuario ${name} esta teniendo muchos likes.`
            })
        }

    },[likes,name])

    //Condicional, dependiendo de la cantidad de likes mostrara una u otra cosa.
    const mostrarInsignia = likes >= 10 ? "d-block" : "d-none"

    return (
        <Col xs={12} sm={3}>
            <Badge.Ribbon className={`${mostrarInsignia}`} text="Este usuario esta on fire 🔥">
                <Card title={<h4 >{name}</h4>}>
                    <AtributoPersona atributo={username} nombreAtributo={"Nombre de usuario"}/>                
                    <AtributoPersona atributo={email} nombreAtributo="Email"/>  
                    <AtributoPersona atributo={website} nombreAtributo="Sitio web"/>  
                    <Row>
                        <Col xs={6}><Button onClick={agregarLikes} size="large" ghost ><img src={iconoCorazon} alt="like"/> </Button> </Col>
                        <Col xs={6}><h3>{likes}</h3></Col>
                    </Row>
                </Card>
            </Badge.Ribbon>
        </Col>
    );
}



const AtributoPersona = ({atributo, nombreAtributo}) => {
    return (
        <Row>
            <Col xs={12} sm={5}><p className="mb-1"> {nombreAtributo} </p> </Col>
            <Col xs={12} sm={7}><p>{atributo} </p></Col>
        </Row>
    )
}

export default CardPersona;