import React from "react";
import Pagination from "../../../../components/Pagination";
import styled from "styled-components";
import { getTranslatedDate } from "../../../../utils/utils";

const Container = styled.section`
   display: flex;
   flex-direction: column;
   gap: 20px;
`
const Title = styled.h2`
   margin:0;
   padding: 0;
   color: #333;
   font-size: 1.5em;
`
const ReviewContainer = styled.div`
   padding: 10px 0;
   border-bottom: 2px solid #000;
   display: flex;
   flex-direction: column;
   gap: 10px;
`
const About = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
   gap: 10px;
`
const Icon = styled.div`
   font-size: 2em;
`
const Autor = styled.div`
   flex-shrink: 0;
   margin-right: 20px;
   & > h4 {
      color: #444;
      font-size: 1.1em;
   }
   & > div {
      font-style: italic;
   }
`
const Header = styled.h3`
   font-size: 1.3em;
   color: #333;
`
const Grades = styled.div`
   margin-left: auto;
   display: flex;
   align-items: center;
   gap: 30px;
`
const Grade = styled.div`
   display: flex;
   align-items: center;
   gap: 15px;
   & > span {
      color: ${props => props.positive ? 'green' : 'red'};
      font-size: 1.5em;
   }
`
const Desc = styled.div`
   text-align: justify;
   text-indent: 2.5em;
`

const Reviews = React.memo(({ isLoading, fetchError, data, setCurrentPage }) => {
   if (isLoading) {
      return <div>Loading...</div>
   }
   if (fetchError) {
      console.log(fetchError);
      return <div>Some error</div>
   }

   return (
      <>
         {data.reviews && (
            <Container>
               <Title>Отзывы о фильме</Title>
               {data.reviews.map((item, index) => {
                  return (
                     <ReviewContainer key={index}>
                        <About>
                           <Icon >
                              {item.reviewType === 'NEUTRAL' && <ion-icon name="star-half-outline"></ion-icon>}
                              {item.reviewType === 'POSITIVE' && <ion-icon name="thumbs-up-outline"></ion-icon>}
                              {item.reviewType === 'NEGATIVE' && <ion-icon name="thumbs-down-outline"></ion-icon>}
                           </Icon>
                           <Autor>
                              <h3>
                                 {item.reviewAutor}
                              </h3>
                              <div>
                                 {getTranslatedDate(item.reviewData)}
                              </div>
                           </Autor>
                           <Header>
                              {item.reviewTitle}
                           </Header>
                           <Grades>
                              <Grade>
                                 <span>
                                    <ion-icon name="thumbs-down-outline"></ion-icon>
                                 </span>
                                 {item.userNegativeRating}
                              </Grade>
                              <Grade positive={true}>
                                 <span>
                                    <ion-icon name="thumbs-up-outline"></ion-icon>
                                 </span>
                                 {item.userPositiveRating}
                              </Grade>
                           </Grades>
                        </About>
                        <Desc>
                           {item.reviewDescription}
                        </Desc>

                     </ReviewContainer>
                  )
               })}
               <Pagination currentPage={data.page} setCurrentPage={setCurrentPage} totalCount={data.pagesCount} />
            </Container>
         )
         }
      </>

   )


})

export default Reviews