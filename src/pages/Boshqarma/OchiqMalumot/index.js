import React, { useState, useEffect, useCallback } from 'react';
import { useT } from '../../../custom/hooks/useT';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { OPENBUDGET_NAME, OPENBUDGET_FILES } from '../../../api/Urls';
import baseApi from '../../../api/baseApi';
import { Card, Col, Row, Table } from 'react-bootstrap';

const OchiqMalumot = () => {
    const [openBudgetFiles, setOpenBudgetFiles] = useState([])
    const [isLoading, setisLoading] = useState(true)
    const { t, lang } = useT()

    const getOpenBudgetFiles = useCallback(
        async () => {
            baseApi.fetchAll(OPENBUDGET_FILES)
            .then(response => {
                setOpenBudgetFiles(response.data)
                setisLoading(false);
            })
        }, []);
    
    useEffect(() => {
        getOpenBudgetFiles();
    }, []);

    return (
        
        <section className='text-section'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='title-name'>
                            <h3>{t(`Ochiqma'lumotlar.${lang}`)}</h3>
                        </div>
                    </div>
                </div>
                <div className='row pl-5'>
                    <div className='col-12 mb-4 p-2'>
                        {
                            isLoading ? <h5>{t(`load.${lang}`)}.....</h5> :
                            openBudgetFiles.map(item => (
                                <Card key={item.id} style={{ width: '100%', marginTop: "20px" }}>
                                    <div className='text-dark text-decoration-none'>
                                        <h6 className='fw-bold'>{item.categoryName}</h6>
                                    </div>
                                    <div className='qonun-date d-flex justify-content-between align-items-center' style={{marginBottom:"13px"}}>
                                        <span className='p-1 bg-secondary text-white'>{item.title}</span>
                                        <div>
                                            <a href={item.files} target="_blank" rel="noopener noreferrer">
                                                <button className='btn btn-success ml-3' type="button">
                                                    <FileDownloadIcon />  {t(`download.${lang}`)}
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                </Card>
                            ))
                        }
                    </div>
                </div>
               
            </div>
        </section>
    )
}

export default OchiqMalumot;
