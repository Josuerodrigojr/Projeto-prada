import { Navbar, Container, Row } from "react-bootstrap";
import logo from "../../Imagens/logo.png";


export const Template = (props) =>{
    return(<>
    <header>
        
    
    <Navbar bg='light' variant="dark">
          <Container>
            <Navbar.Brand href="/">
              <img
                alt=""
                src={logo}
                width="170"
                height="120"
              />{' '}

            </Navbar.Brand>
          </Container>
        </Navbar>
    </header>
    <main> 
        {props.children}
    </main>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
    <footer> 
      <Container>
        <Row>
        Luxuosa e chique, ela gera cobiça na cabeça das mulheres de todos os países, fazendo com que o desejo de obter suas roupas ultrapassem gerações. Podemos dizer que a marca é uma verdadeira joia das Maison mundiais.
        </Row>
      </Container>
      
    </footer>
    
    </>
    );
}


