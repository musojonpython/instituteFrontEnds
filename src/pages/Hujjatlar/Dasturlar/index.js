import React from 'react';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { Link } from 'react-router-dom';
import { useT } from '../../../custom/hooks/useT';



const Dasturlar = () => {
    const { t, lang } = useT();

    const qonunlar = [
        {
            id: 1,
            title: t(`dastur1.${lang}`),
            date: "28.01.2022",
            number: "ПФ-60",
            lexUrl: "https://lex.uz/docs/4751561",
            docxUrl: "/files/dastur2.pdf"
        },
        
    ]
    return (
        <section className='text-section' style={{width: '100%'}}>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='title-name'>
                            <h3 style={{display: "inline-block"}}>{t(`dastur.${lang}`)}</h3>
                            <div className='text-title-line' style={{display: "inline-block"}}></div>
                        </div>
                    </div>
                </div>
                <div className='row pl-5 pr-5'>
                    {
                        qonunlar.map(item => (
                            <div key={item.id} className='col-12 mb-4 p-2'>
                                <Link className='text-dark text-decoration-none' to={`${item.id}`}>
                                    <h5>{item.title}</h5>
                                </Link>
                                <div className='qonun-date d-flex justify-content-between align-items-center'>
                                    <div>
                                        <span className='p-1 bg-secondary text-white'>{t(`RDate.${lang}`)}: {item.date}</span>
                                        <span className='p-1 bg-secondary text-white ml-3'>{t(`Number.${lang}`)}: {item.number}</span>
                                    </div>
                                    <div>
                                        <a href={item.lexUrl} className='text-decoration-none font-italic'>{t(`lex.${lang}`)} </a>
                                        <a href={item.docxUrl} target="_blank" rel="noopener noreferrer">
                                            <button className='btn btn-success ml-3' type="button">
                                                <FileDownloadIcon />  {t(`download.${lang}`)}
                                            </button>
                                        </a>
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

export default Dasturlar;
