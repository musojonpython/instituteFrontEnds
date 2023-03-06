import React, { useCallback, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { SRLWrapper } from "simple-react-lightbox";
import baseApi from '../../../api/baseApi';
import { PHOTO_URL } from '../../../api/Urls';
import { useT } from '../../../custom/hooks/useT';


const FotoDetails = () => {
    const { id } = useParams();
    const [photos, setPhotos] = useState([]);
    const [isLoading, setisLoading] = useState(true);
    const { t, lang } = useT();

    const getPhotos = useCallback(
        async () => {
            baseApi.fetchAll(PHOTO_URL)
                .then(response => {
                    setPhotos(response.data);
                    setisLoading(false)
                })
        }, []);

    useEffect(() => {
        getPhotos();
    })

    return (
        <section className="my-4">
            <div className='container-fluid bg-white pl-5 pr-5'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='title-name'>
                            <h3>{t(`Fotogalereya.${lang}`)}</h3>
                            <div className='text-title-line'></div>
                        </div>
                    </div>
                </div>
                <SRLWrapper>
                    <div className='row'>
                        {
                            isLoading ? <h5>Loading...</h5> : photos.filter(item => item.created_at == id).map(card => (
                                card.detail.map(item => (
                                    <div className='col-md-6 col-lg-4 mb-4'>

                                        <a href={item.image}>
                                            <img className='galery_image' src={item.image} width="100%" alt=" " />
                                        </a>
                                    </div>
                                ))
                            ))
                        }
                    </div>
                </SRLWrapper>
            </div>
        </section>
    );
}

export default FotoDetails;
