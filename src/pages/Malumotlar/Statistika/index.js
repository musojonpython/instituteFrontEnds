import React, { useCallback, useState, useEffect } from 'react';
import './style.css';
import { useT } from '../../../custom/hooks/useT';

import baseApi from '../../../api/baseApi';
import { STATISTICS_URL } from '../../../api/Urls';

const Statistika = () => {
    const [statistics, setStatistics] = useState([]);
    const { t, lang } = useT();

    const getStatistics = useCallback(
        async () => {
            baseApi.fetchAll(STATISTICS_URL)
            .then(res => {
                setStatistics(res.data)
            })
        }, [])

    useEffect(() => {
        getStatistics();
    }, []) // #9bcd9b

    return (
        <section className='text-section'>
            <div className='container-fluid'>
                <div className='row' style={{color: '#9bcd9b'}}>
                    <div className='col-12'>
                        <div className='title-name'>
                            <h3>{t(`Statistics.${lang}`)}</h3>
                            <div className='text-title-line'></div>
                        </div>
                    </div>
                </div>
                <div className='row pl-3 pr-3 pb-5'>

                    <div>
                        <div className="gallery-wrapper">
                            <div className="image-wrapper">
                                <a href="#lightbox-image-1">
                                    <img src={statistics.statistics} alt="image" />
                                </a>
                            </div>
                            <div className="image-wrapper">
                                <a href="#lightbox-image-2">
                                    <img src={statistics.statistics2} alt="image" />
                                </a>
                            </div>
                            <div className="image-wrapper">
                                <a href="#lightbox-image-3">
                                    <img src={statistics.statistics3} alt="" />
                                </a>
                            </div>
                        </div>

                        <div className="gallery-lightboxes">

                            <div className="image-lightbox" id="lightbox-image-1">
                                <div className="image-lightbox-wrapper">
                                    <a href="#" className="close"></a>
                                    <a href="#lightbox-image-3" className="arrow-left"></a>
                                    <a href="#lightbox-image-2" className="arrow-right"></a>
                                    <img src={statistics.statistics} alt="image" />
                                </div>
                            </div>

                            <div className="image-lightbox" id="lightbox-image-2">
                                <div className="image-lightbox-wrapper">
                                    <a href="#" className="close"></a>
                                    <a href="#lightbox-image-1" className="arrow-left"></a>
                                    <a href="#lightbox-image-3" className="arrow-right"></a>
                                    <img src={statistics.statistics2} alt="image" />
                                </div>
                            </div>

                            <div className="image-lightbox" id="lightbox-image-3">
                                <div className="image-lightbox-wrapper">
                                    <a href="#" className="close"></a>
                                    <a href="#lightbox-image-2" className="arrow-left"></a>
                                    <a href="#lightbox-image-1" className="arrow-right"></a>
                                    <img src={statistics.statistics3} alt="" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Statistika;


