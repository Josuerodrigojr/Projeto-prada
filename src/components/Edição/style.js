import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

export const Coluna = ({align, children, tamanho}) => {
    return (

        <Col xs ={tamanho} style={{
            textAlign:align
          }}>
        {children}
        </Col>

    );
}

export const Botao = ({texto, cor, clicar}) =>{
    return(
        <Button onClick={clicar}  type='submit'  style={{
            backgroundColor: cor,
            color: '#fff'
          }}> {texto} </Button>
    );
}

