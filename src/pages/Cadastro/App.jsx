import "../../App.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Botao, Coluna } from "../../components/Edição/style";
import { useProdutos } from "../Armazenar_produtos/variaveis";
import "bootstrap/dist/css/bootstrap.min.css";


let id = 0;
let titulosDosProdutos = [];
let precosDosProdutos = [];
let informacoesDosProdutos = [];
let dimensoesDosProdutos = [];


function App() {
  const [titulo, setTitulo] = useState("");
  const [preco, setPreco] = useState(0);
  const [informacao, setInformacao] = useState("");
  const [dimensao, setDimensao] = useState(0);
  const [fotos, setFotos] = useState('');
  const [produtos, setProdutos] = useProdutos("");
  const [busca, setBusca] = useState(" ");
  const navigate = useNavigate();
  

  const Salvar = (event) => {
    event.preventDefault();

    titulosDosProdutos.push(titulo);
    precosDosProdutos.push(preco);
    informacoesDosProdutos.push(informacao);
    dimensoesDosProdutos.push(dimensao);

    setProdutos({
      titulosDosProdutos,
      precosDosProdutos,
      informacoesDosProdutos,
      dimensoesDosProdutos,
    });
    
    id = id + 1;
    navigate('/');
    
    // const produto = { id: 1, titulo: '', preco: 0 }
    // setProdutos([...produtos, produto])

  };

  return (
    <>
      <Container>
        <Form onSubmit={Salvar}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Row>
              <Form.Label>Titulo: </Form.Label>
            </Row>
            <Row>
              <Col xs={5}>
                <Form.Control
                  type="Titulo"
                  placeholder="Digite o nome do produto"
                  onChange={(event) => {
                    setTitulo(event.target.value);

                  }}
                />
              </Col>
            </Row>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Row>
              <Form.Label>Preço: </Form.Label>
            </Row>
            <Row>
              <Col xs={5}>
                <Form.Control
                  type="Preço"
                  placeholder="Digite o preço do produto"
                  onChange={(event) => setPreco(event.target.value)}
                />
              </Col>
            </Row>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Row>
              <Form.Label id="Informacao">Informação/Descrição: </Form.Label>
            </Row>
            <Row>
              <Col xs={5}>
                <Form.Control
                  type="Informação/Descrição"
                  placeholder="Digite a descrição do produto"
                  onChange={(event) => setInformacao(event.target.value)}
                  as="textArea"
                  rows={5}
                />
              </Col>
            </Row>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Row>
              <Form.Label>Dimensão: </Form.Label>
            </Row>
            <Row>
              <Col xs={5}>
                <Form.Control
                  type="Peso"
                  placeholder="Digite a dimensao do produto"
                  onChange={(event) => setDimensao(event.target.value)}
                />
              </Col>
              <Coluna align="right" tamanho={5}>
                <input type="file" name="fotos" onChange={event => setFotos(event.target.files[0])} /> <br /><br />
                
                
              </Coluna>
            </Row>
          </Form.Group>

          <Row>
            <Coluna align="right">
              <Botao texto="Salvar" cor="blue" />
            </Coluna>

            <Coluna align="left">
              <Link to="/">
                <Botao texto="Cancelar" cor="blue" />
              </Link>
            </Coluna>


           
          </Row>
        </Form>
      </Container>
    </>
  );
}

export default App;
