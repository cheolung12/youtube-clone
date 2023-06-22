import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import VideoCard from '../components/VideoCard';
import { useYoutubeApi } from '../context/YoutubeApiContext';



export default function Videos() {

    const { keyword } = useParams();
    const { youtube } = useYoutubeApi();
    // 관심 있는 데이터 : isLoading, error, data 입력 (useQuery의 반환값)
    // isLoading : 데이터 로딩중일때 true, error : 데이터 로드중 발생한 오류 포착, data: fetch를 통해 반환된 데이터 (이름을 video로 바꿔 사용)
    const { isLoading, error, data: videos } = useQuery(
        ['videos', keyword],
        () => youtube.search(keyword), {staleTime: 1000 * 60 * 1});

    return (
        <div>
            Videos {keyword ? `🔍${keyword}` : '🔥'}
            {isLoading && <p>Loading...</p>}
            {error && <p>Something is wrong</p>}
            {videos && (<ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 gap-y-4'>
                {videos.map((video) => (<VideoCard key={video.id} video={video}/>))}
            </ul>)}
        </div>
    );
}

