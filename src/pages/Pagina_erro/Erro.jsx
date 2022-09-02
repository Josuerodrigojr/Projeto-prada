import {Container, Row, Stack, Button} from 'react-bootstrap'
import {Coluna} from '../../components/Edição/style'
import {Link} from 'react-router-dom'

export const Erro = () => {
   return (
       <>
       <Container>
           <Row>
               <Coluna align="center">
               <Stack gap={2} className="col-md-5 mx-auto">
    <h1>O produto digitado não tem no nosso estoque</h1>
    <Link to="/"><Button variant="outline-secondary">Voltar</Button></Link>
</Stack>
               </Coluna>
           </Row>
       </Container>

       </>
   )
  };
  