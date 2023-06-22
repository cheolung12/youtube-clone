import React from "react";
import { useLocation } from "react-router-dom";
import ChannelInfo from "../components/ChannelInfo";
import RelatedVideos from "../components/RelatedVideos";

export default function VideoDetail() {
  // useLocation으로 필요한 상태를 받아옴
  const {
    state: { video },
  } = useLocation();
  const { title, channelId, channelTitle, description } = video.snippet;
  
  return (
    <section>
      <article>
      <iframe
        id="player"
        title="video"
        type="text/html"
        width="100%"
        height="640"
        src={`http://www.youtube.com/embed/${video.id}`}
      />
      <div>
        <h2>{title}</h2>
        <ChannelInfo id={channelId} name={channelTitle} />
        <pre>{description}</pre>
      </div>
      </article>
      <section>
        <RelatedVideos id={video.id} />
      </section>
    </section>
  );
}
