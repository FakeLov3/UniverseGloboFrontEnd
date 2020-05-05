import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const ContainerTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  background-color: blue;
`;
export const ContainerNoticia = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  align-items: center;
  justify-content: center;
  margin: 10px;
  width: 100%;
`;
const Section = styled.div`
  background-color: #009ddb;
  box-shadow: 7px 8px 24px -2px #000000;
  border-radius: 2px;
  padding: 3px;
  height: 40px;
  display: flex;
  max-width: 200px;
  align-items: center;
  margin-top: 5px;
  color: white;
`;
const useStyles = makeStyles({
  root: {
    maxWidth: 200,
    margin: 10,
  },
  media: {
    height: 100,
  },
  content: {
    height: 150,
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
});
export const Noticia = ({ imagem, titulo, descricao }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={imagem}
          title="Contemplative Reptile"
        />
        <CardContent className={classes.content}>
          <Typography noWrap="true" gutterBottom variant="h5" component="h2">
            {titulo}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {descricao}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default function Sessao({
  sessao,
  noticias = [{ imagem: "", titulo: "", descricao: "" }],
}) {
  const news = noticias.map(({ imagem, titulo, descricao }) => {
    return <Noticia imagem={imagem} titulo={titulo} descricao={descricao} />;
  });
  return (
    <Container>
      <Section>
        <Typography variant="h6">{sessao}</Typography>
      </Section>
      <ContainerNoticia>{news}</ContainerNoticia>
    </Container>
  );
}
