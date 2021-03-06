import React from 'react'
import Info from './components/Info'
import Seasons from './components/Seasons/Seasons'
import Facts from './components/Facts'
//import Distributors from './components/Distributors' //доделать!
import BoxOffice from './components/BoxOffice'
import Videos from './components/Videos/Videos'
import Frames from './components/Frames'
import ReviewsContainer from './components/Reviews/ReviewsContainer'
import Staff from './components/Staff'
import styled from 'styled-components'
import SliderFilms from '../home/components/SliderFilms'

const Container = styled.div`
   display: flex;
   flex-direction: column;
   gap: 20px;
   padding: 40px;
`

const Film = React.memo(({ state, slug, review }) => {

   return (
      <Container>
         <Info data={state.filmInfo.data} isLoading={state.filmInfo.isLoading} fetchError={state.filmInfo.fetchError} />
         <SliderFilms films={state.filmSimilars.data.items} isLoading={state.filmSimilars.isLoading} fetchError={state.filmSimilars.fetchError} title='Похожие фильмы' />
         <Facts data={state.filmFacts.data} isLoading={state.filmFacts.isLoading} fetchError={state.filmFacts.fetchError} />
         <BoxOffice data={state.filmBox_office.data} isLoading={state.filmBox_office.isLoading} fetchError={state.filmBox_office.fetchError} />
         <Staff data={state.filmStaff.data} isLoading={state.filmStaff.isLoading} fetchError={state.filmStaff.fetchError} slug={slug} />
         {/* <Distributors data={state.filmDistrib.data} isLoading={state.filmDistrib.isLoading} fetchError={state.filmDistrib.fetchError} /> */}
         <Seasons data={state.filmSeasons.data} isLoading={state.filmSeasons.isLoading} fetchError={state.filmSeasons.fetchError} slug={slug} />
         <Videos data={state.filmVideos.data} isLoading={state.filmVideos.isLoading} fetchError={state.filmVideos.fetchError} slug={slug} />
         <Frames data={state.filmFrames.data} isLoading={state.filmFrames.isLoading} fetchError={state.filmFrames.fetchError} slug={slug} />
         <ReviewsContainer slug={slug} />
      </Container>

   )
})
export default Film