import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Pagination from "../../../components/Pagination";

const Container = styled.aside`
   max-width: 100%;
   background-color: #eee;
   padding: 20px 40px;
   display: flex;
   gap: 20px;
   flex-direction: column;
`
const Header = styled.h1`
   align-self: flex-start;
   margin: 0;
   padding: 0;
   font-size: 1.8em;
   font-weight: 700;
   color: #333;
`
const List = styled.ul`
   display: flex;
   flex-wrap: wrap;
   gap: 30px;
   justify-content: space-between;
   align-items: center;
`
const Item = styled.li`
   list-style: none; 
`
const StyledLink = styled(Link)`
   text-decoration: none;
`
const Contant = styled.div`
   width: 240px;
   height: 320px;
   position: relative;
   & :hover{
      opacity: 1;
   }
`
const Image = styled.img`
   width: 100%;
   height: 100%;
   object-fit: cover;
`
const Description = styled.div`
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background-color: rgba(0,0,0,0.7);
   opacity: 0;
   transition: 0.5s;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   gap: 20px;
   color: #fff;
   padding: 20px;
   text-align: center;
`

const SectionFilms = ({ isLoading, fetchError, films, title, totalCount, currentPage, setCurrentPage }) => {
   if (isLoading) {
      return <div>Loading...</div>
   }
   if (fetchError) {
      return <div>Some error</div>
   }
   return (
      <Container>
         <Header>{films.length !== 0 ? title : 'Ничего не найдено'}</Header>
         <List>
            {films.map((item) => {
               return (
                  <Item key={item.filmId || item.kinopoiskId}>
                     <StyledLink to={`/film/${item.filmId || item.kinopoiskId}`}>
                        <Contant>
                           <Image src={item.posterUrlPreview} alt={item.nameRu} />
                           <Description>
                              <h3>{item.nameRu}</h3>
                              <p>Год: {item.year}</p>
                              <p>Длительность: {item.filmLength}</p>
                              <p>Рейтинг: {item.rating}</p>
                           </Description>
                        </Contant>
                     </StyledLink>
                  </Item>
               )
            })}
         </List>
         <Pagination totalCount={totalCount} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </Container>
   );
}

export default SectionFilms