import { t } from 'i18next';
import React, { useCallback, useEffect, useState } from 'react';
import { Accordion, ListGroup } from 'react-bootstrap';
import baseApi from '../../../api/baseApi';
import { VACANCY_URL } from '../../../api/Urls';
import { useT } from '../../../custom/hooks/useT';
import './style.css'

const BoshIshOrinlari = () => {

    const [expanded, setExpanded] = React.useState(false);
    const [isLoading, setisloading] = useState(true);
    const [vacancy, setvacancy] = useState([]);
    const {t, lang} = useT();

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const getVacancy = useCallback(
        async () => {
            baseApi.fetchAll(VACANCY_URL)
            .then(response => {
                setvacancy(response.data);
                setisloading(false);
            })
        }, [])

    useEffect(() => {
        getVacancy()
    }, [])

    console.log(vacancy);

    return (
        <section className='text-section'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='title-name'>
                            <h3>{t(`ishOrni.${lang}`)}</h3>
                            <div className='text-title-line'></div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <h5 className='mt-3 mb-3 ish-orin '>{t(`ishOrniTitle.${lang}`)}</h5>
                    </div>
                </div>
                <div className='row bosh-ish pl-3 pr-3 mt-4'>
                    <div className='col'>
                        <Accordion>
                            {
                                isLoading ? <h5>Loading...</h5> : vacancy.map(item => (
                                    <Accordion.Item key={item.created_at} eventKey={item.created_at}>
                                        <Accordion.Header className='w-100'>
                                            <div className='d-flex justify-content-center'>
                                                <h5 className='p-0 m-0'>{item.name}</h5> 
                                                {/* <span className=' text-secondary p-0 mt-1 ml-auto'> {t(`terms.${lang}`)}</span> */}
                                            </div>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <ListGroup variant="flush">
                                                <ListGroup.Item>
                                                    <h6>Malumoti:</h6> - {item.education}
                                                </ListGroup.Item>
                                                <ListGroup.Item>
                                                    <h6>Ish staji: </h6> - {item.work_experience}
                                                </ListGroup.Item>
                                                <ListGroup.Item>
                                                    <h6>Umumiy ma'lumotlar:</h6>  - {item.general}
                                                </ListGroup.Item>
                                                <ListGroup.Item>
                                                    <h6>Ҳужжатларни жўнатиш учун манзил:</h6>  - <a className='text-decoration-none text-dark' href={item.url}>vacancy.argos.uz</a>
                                                </ListGroup.Item>
                                            </ListGroup>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                ))
                            }
                        </Accordion>


                    </div>
                </div>
            </div>
        </section>
    );
}

export default BoshIshOrinlari;
