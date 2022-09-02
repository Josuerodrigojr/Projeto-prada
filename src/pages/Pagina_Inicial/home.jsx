import { Link, } from "react-router-dom";
import React, {useState} from "react";
import { Botao, Coluna } from "../../components/Edição/style";
import logo from "../../Imagens/prada.webp";
import { Container, Row, Button, Card, Form } from "react-bootstrap";
import { useProdutos } from "../Armazenar_produtos/variaveis";

let id = 0;
let nomeDoProduto = 0;
let id$NomeDoProduto = [
  {
    id: "",
    nomeDoProduto: "",
  },
];
let erro = -2;
let indiceDaPagina= [];


// console.log(teste)
export const Home = () => {
  const [produtos, setProdutos] = useProdutos();
  const [busca, setBusca] = useState("");
  const [bolsas, setBolsas] = useState([]);
  

  if (produtos.titulosDosProdutos === undefined) {
    id = 0;
  } else {

    id = produtos.titulosDosProdutos.length;
    nomeDoProduto = produtos.titulosDosProdutos[id - 1];

    id$NomeDoProduto = [
      {
        id: id,
        nomeDoProduto: nomeDoProduto,
      },
    ];
    

    

    for (let index = 1; index < id; index++) {
      nomeDoProduto = produtos.titulosDosProdutos[index - 1];
      id$NomeDoProduto.push({
        id: index,
        nomeDoProduto: nomeDoProduto,
      });
      
      
      
    }


    

  }

  const montarLista = (id, nomeDoProduto) => {
    if (id!=0){
    return (
      <Coluna tamanho={4}>
        <Card style={{ width: "15rem" }}>
          <Link to={`/produto/${id}`}>
            <Card.Img variant="top" src={logo} />
          </Link>
          <Link class="text-decoration-none text-dark" style={{textAlign:"Left", paddingLeft:"10px"}}to={`/cadastrar/${id}`}>Editar</Link>
          <Card.Body>
            <Card.Title>{nomeDoProduto}</Card.Title>
          </Card.Body>
        </Card>
      </Coluna>
    )};
  };

  indiceDaPagina= [];
  for (let index = 1; index <= id; index++) {

    indiceDaPagina.push(produtos.titulosDosProdutos[index - 1])
  }

const Clicar = (event) =>{
  event.preventDefault();
  
  

}



  return (
    <>
    <Form onSubmit={Clicar}>
    <Container>
      <Row>
        <Coluna align="right">
              <input
                type="text"
                value={busca}
                onChange={(event) => setBusca(event.target.value)}
        
              />
              

              <br/>

              <br/>
              
            <Link to={`/produto/${indiceDaPagina.indexOf(busca.toString()) + 1}`}><Button type="submit">Buscar</Button></Link>


        </Coluna>
      </Row>
    </Container>

<br/>


      <Container>
        <Row>
          <Coluna align="right">
            <Link to="/cadastrar">
              <Botao texto="Cadastrar" cor="orange" />
            </Link>
          </Coluna>
        </Row>
      </Container>
      </Form>

      <br />
      <Container>
        <Row>{id$NomeDoProduto.map((x) => montarLista(x.id, x.nomeDoProduto))}</Row>
      </Container>
    </>
  );
};
