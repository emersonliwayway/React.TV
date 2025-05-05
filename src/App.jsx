/**
 * React TV is an web streaming platform that allows users to browse
 * through the episodes of a variety of different shows.
 */
import { useState } from "react";
import ShowDetails from "./shows/ShowDetails";
import ShowSelection from "./shows/ShowSelection";
import { tvShows } from "./shows/data";

export default function App() {
  const [SHOWS] = useState(tvShows);
  const [selectedEpisode, setSelectedEpisode] = useState();
  const [selectedShow, setSelectedShow] = useState();
  return (
    <>
      <header>
        <p>React TV</p>
        <ShowSelection
          setSelectedShow={setSelectedShow}
          shows={SHOWS}
          setSelectedEpisode={setSelectedEpisode}
        />
      </header>
      <main>
        <ShowDetails
          show={selectedShow}
          selectedEpisode={selectedEpisode}
          setSelectedEpisode={setSelectedEpisode}
        />
      </main>
    </>
  );
}
