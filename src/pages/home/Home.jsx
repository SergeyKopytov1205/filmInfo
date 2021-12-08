import React from "react";
import SectionFilms from "./components/SectionFilms";

import SliderFilms from "./components/SliderFilms";

const Home = ({ stateTopFilms, statePremiers, title, setCurrentPage }) => {

   return (
      <div>
         <SliderFilms isLoading={statePremiers.isLoading} fetchError={statePremiers.fetchError} films={statePremiers.films} title='Новинки в следующем месяце' />
         <SectionFilms isLoading={stateTopFilms.isLoading} fetchError={stateTopFilms.fetchError} films={stateTopFilms.films} totalCount={stateTopFilms.pagesCount} title={title} currentPage={stateTopFilms.currentPage} setCurrentPage={setCurrentPage} />
      </div>

   )
}

export default Home;
