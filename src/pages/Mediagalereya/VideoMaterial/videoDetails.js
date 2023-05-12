import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import baseApi from '../../../api/baseApi';
import { VIDEO_URL } from '../../../api/Urls';
import { useT } from '../../../custom/hooks/useT';

const VideoDetails = () => {
    const { id } = useParams();
    const [ videos, setVideos ] = useState([]);
    const [isLoading, setisLoading] = useState(true);
    const { t, lang } = useT();

    const getVideos = useCallback(
        async () => {
            baseApi.fetchAll(VIDEO_URL)
            .then(response => {
                setVideos(response.data);
                setisLoading(false);
            })
        }, []);

    useEffect(() => {
        getVideos();
    })

    return (
        <section className='my-4'>
            <div className='container-fluid bg-white pl-5 pr-5'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='title-name'>
                            <h3>{t(`VideoMaterial.${lang}`)}</h3>
                            <div className='text-title-line'></div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    {
                        isLoading ? <h5>Loading...</h5> : videos.filter(item => item.created_at === id).map(card => (
                            card.detail.map(item => (
                                <div className='col-md-6 mb-4'>
                                    <iframe width="100%" height="315" title="This is a unique title"
                                        src={`https://www.youtube.com/embed/${item.video.substr(32)}`} allowFullScreen>
                                    </iframe>
                                </div>
                            ))
                        ))
                    }
                </div>
            </div>
        </section>
    );
}

export default VideoDetails;
