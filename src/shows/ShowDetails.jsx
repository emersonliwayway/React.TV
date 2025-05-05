import { useState } from "react";
import "./shows.css";
import EpisodeDetails from "../episodes/EpisodeDetails";
import EpisodeList from "../episodes/EpisodeList";

/** Allows users to browse through the episodes of the given show */
export default function ShowDetails({
  show,
  selectedEpisode,
  setSelectedEpisode,
}) {
  if (!show) {
    return (
      <div className="show-details">
        <p>Select a show to learn more.</p>
      </div>
    );
  }
  return (
    <div className="show-details">
      <EpisodeList
        name={show.name}
        episodes={show.episodes}
        selectedEpisode={selectedEpisode}
        setSelectedEpisode={setSelectedEpisode}
      />
      <EpisodeDetails episode={selectedEpisode} />
    </div>
  );
}
