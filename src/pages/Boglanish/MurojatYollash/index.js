import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useT } from '../../../custom/hooks/useT';

const MurojatYollashBoglanish = () => {
    const { t, lang } = useT();
    return (
        <section className='text-section'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='title-name w-100'>
                            <h3>{t(`murojatMatni.${lang}`)} </h3>
                            <div className='text-title-line'></div>
                        </div>
                    </div>
                </div>
                <div className='row pl-5 pr-5 pb-5 '>
                    <div className='col-12'>
                        <Form>

                            <Form.Group className="mb-3 w-100" controlId="formBasicEmail">
                                <Form.Label>{t(`fio.${lang}`)} :</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    placeholder={t(`fioI.${lang}`)}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>{t(`Email.${lang}`)}  :</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    placeholder={t(`EmailI.${lang}`)} 
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>{t(`qisqaMurojaat.${lang}`)}  :</Form.Label>
                                <Form.Control 
                                    placeholder={t(`qisqaMurojaatI.${lang}`)}  
                                    as="textarea" rows={3} 
                                />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                            {t(`send.${lang}`)}  
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MurojatYollashBoglanish;
