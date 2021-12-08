import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.aside`
   max-width: 100%;
   background-color: #bbb;
   padding: 20px 40px;
   display: flex;
   gap: 10px;
   flex-direction: column;
`
const Header = styled.h2`
   align-self: flex-start;
   margin: 0;
   padding: 0;
   font-size: 1.3em;
   color: #333;
`
const List = styled.ul`
   display: flex;
   gap: 15px;
   align-items: center;
   overflow: hidden;
   overflow-x: scroll;
`
const Item = styled.li`
   list-style: none; 
`
const StyledLink = styled(Link)`
   text-decoration: none;
`
const Picture = styled.div`
   width: 150px;
   height: 200px;
   position: relative;
   & :hover {
      transform: scale(1.1)
   }
`
const Image = styled.img`
   width: 100%;
   height: 100%;
   object-fit: contain;
`

const SliderFilms = React.memo(({ isLoading, fetchError, films, title }) => {
   if (isLoading) {
      return <div>Loading...</div>
   }
   if (fetchError) {
      return <div>Some error</div>
   }
   if (films && films.length === 0) {
      return null
   }
   return (
      <Container>
         <Header>{title}</Header>
         <List>
            {films && films.map((item) => {
               return (
                  <Item key={item.kinopoiskId || item.filmId}>
                     <StyledLink to={`/film/${item.kinopoiskId || item.filmId}`}>
                        <Picture>
                           <Image src={item.posterUrlPreview} alt={item.nameRu} />
                        </Picture>
                     </StyledLink>
                  </Item>
               )
            })}
         </List>
      </Container>
   );
})

export default SliderFilms