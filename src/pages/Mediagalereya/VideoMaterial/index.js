import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import baseApi from '../../../api/baseApi';
import { VIDEO_URL } from '../../../api/Urls';
import { useT } from '../../../custom/hooks/useT';
import './style.css'


const VideoMaterial = () => {

    const [videos, setVideos] = useState([]);
    const [isLoading, setisLoading] = useState(true);
    const { t, lang }  = useT();

    const getVideos = useCallback(
        async () => {
            baseApi.fetchAll(VIDEO_URL)
            .then(response => {
                setVideos(response.data);
                setisLoading(false);
            })
        }, [])

    useEffect(() => {
        getVideos();
    })

    return (
        <section className='my-4'>
            <div className='container-fluid bg-white'>
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
                        isLoading ? <h5>Loading...</h5> : videos.map((item) => (
                            <div key={item.created_at} className='col-md-6 col-lg-4 mb-4'>
                                <div class="card">
                                    <iframe width="100%" height="315" title="This is a unique title"
                                        src={`https://www.youtube.com/embed/${item.detail.substr(32)}`} allowFullScreen>
                                    </iframe>
                                    <div class="card-body">
                                        <div className='d-flex justify-content-between flex-wrap'>
                                            <div className="card-title"><h5>{item.name}</h5></div>
                                            <p class="card-text"><small class="text-muted">{item.created_at.slice(0, 10)}</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}

export default VideoMaterial;

