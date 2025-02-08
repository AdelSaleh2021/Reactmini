
import { useState } from 'react';
import { db } from './database.js';
import { Suspense } from 'react';

async function ConferencePage({ slug }) {
    const conf = await db.Confs.find({ slug });
    return (
      <ConferenceLayout conf={conf}>
        <Suspense fallback={<TalksLoading />}>
          <Talks confId={conf.id} />
        </Suspense>
      </ConferenceLayout>
    );
  }
  
  async function Talks({ confId }) {
    const talks = await db.Talks.findAll({ confId });
    const videos = talks.map(talk => talk.video);
    return <SearchableVideoList videos={videos} />;
  }

function SearchableVideoList({ videos }) {
  const [searchText, setSearchText] = useState('');
  const foundVideos = filterVideos(videos, searchText);
  return (
    <>
      <SearchInput
        value={searchText}
        onChange={newText => setSearchText(newText)} />
      <VideoList
        videos={foundVideos}
        emptyHeading={`No matches for “${searchText}”`} />
    </>
  );
}

function VideoList({ videos, emptyHeading }) {
    const count = videos.length;
    let heading = emptyHeading;
    if (count > 0) {
      const noun = count > 1 ? 'Videos' : 'Video';
      heading = count + ' ' + noun;
    }
    return (
      <section>
        <h2>{heading}</h2>
        {videos.map(video =>
          <Video key={video.id} video={video} />
        )}
      </section>
    );
  }



function Video({ video }) {
    return (
      <div>
        <Thumbnail video={video} />
        <a href={video.url}>
          <h3>{video.title}</h3>
          <p>{video.description}</p>
        </a>
        <LikeButton video={video} />
      </div>
    );
  }