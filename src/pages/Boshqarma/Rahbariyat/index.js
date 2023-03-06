import React, { useState, useEffect, useCallback } from 'react';
import './style.css'
import { Card, Col, Row, Table } from 'react-bootstrap';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import TabUnstyled from '@mui/base/TabUnstyled';
import { EMPLOYE_URL } from '../../../api/Urls';
import baseApi from '../../../api/baseApi';
import { useT } from '../../../custom/hooks/useT';

const Rahbariyat = () => {

    const [employee, setEmployee] = useState([]);
    const [isLoading, setisLoading] = useState(true);
    const {t, lang}  = useT();

    const getEmployees = useCallback(
        async () => {
            baseApi.fetchAll(EMPLOYE_URL)
                .then(response => {
                    setEmployee(response.data)
                    setisLoading(false);
                })
        }, []);

    useEffect(() => {
        getEmployees();
    }, []);

    return (
        <div>
            <section className='text-section rah-section'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='title-name'>
                                <h3>{t(`rahbariyat.${lang}`)}</h3>
                                <div className='text-title-line'></div>
                            </div>
                        </div>
                    </div>
                    <div className='row pl-3 pr-3 pb-5'>
                        <div className='col rah-card'>
                            {
                                isLoading ? <h5>{t(`load.${lang}`)}.....</h5> : 
                                employee.map(item => (
                                    <Card key={item.fio} style={{ width: '100%', marginTop: "20px" }}>
                                        <Row className='no-gutters'>
                                            <Col md={3} lg={3} className="text-center" >
                                                <Card.Img variant="top" width="100%" src={item.image} />
                                                <Card.Title className='mt-2 mb-2'>{item.fio}</Card.Title>
                                            </Col>
                                            <Col>
                                                <Card.Body style={{ paddingBottom: "50px" }}>
                                                    <div>
                                                        <Table striped bordered hover>
                                                            <tbody>
                                                                <tr>
                                                                    <td>{t(`lav.${lang}`)}:</td>
                                                                    <td>{item.rank}</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>{t(`handPhone.${lang}`)}:</td>
                                                                    <td>{item.mobile_phone_number}</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>{t(`homePhone.${lang}`)}:</td>
                                                                    <td>{item.home_phone_number}</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>{t(`email.${lang}`)}:</td>
                                                                    <td>{item.email}</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>{t(`accceptDate.${lang}`)}:</td>
                                                                    <td>{item.reception_days}</td>
                                                                </tr>
                                                            </tbody>
                                                        </Table>
                                                    </div>
                                                    <TabsUnstyled>
                                                        <TabsListUnstyled defaultValue={0} className='w-100 mt-5'>
                                                            <TabUnstyled className="btn btn-primary d-none">{t(`bio.${lang}`)}</TabUnstyled>
                                                            <TabUnstyled className="btn btn-primary mr-4">{t(`bio.${lang}`)}</TabUnstyled>
                                                            <TabUnstyled className="btn btn-primary">{t(`tasks.${lang}`)}</TabUnstyled>
                                                        </TabsListUnstyled>
                                                        <TabPanelUnstyled value={0}> </TabPanelUnstyled>
                                                        <TabPanelUnstyled className='rah-text' value={1}>
                                                            <h5>{t(`bio.${lang}`)}</h5>
                                                            <p>
                                                                {item.short_bio}
                                                            </p>
                                                        </TabPanelUnstyled>
                                                        <TabPanelUnstyled className='rah-text' value={2}>
                                                            <h5>{t(`tasks.${lang}`)}</h5>
                                                            <p>
                                                                {item.division_of_responsibility}
                                                            </p>
                                                        </TabPanelUnstyled>
                                                    </TabsUnstyled>
                                                </Card.Body>
                                            </Col>
                                        </Row>
                                    </Card>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Rahbariyat;
