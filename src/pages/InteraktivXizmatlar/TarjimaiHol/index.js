import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
// import baseApi from '../../../api/baseApi';
// import { AUTOBI_URL } from '../../../api/Urls';
import { useT } from '../../../custom/hooks/useT';

const TarjimaiyHol = () => {

    const { t, lang } = useT(); 

    const [fio, setFio] = useState('');
    const [email, setEmail] = useState('');
    const [phone_number, setPhone_number] = useState('');
    const [comment, setComment] = useState('');
    const [file, setFile] = useState();
 
    var formData = new FormData();
    formData.append("fio", fio);
    formData.append("email", email);
    formData.append("phone_number", phone_number);
    formData.append("comment", comment);
    formData.append("file", file);
    
    const submitHandler = () => {
        axios
            .post("http://94.228.124.9/api/autobiography/", formData)
            .then((res) => {
                alert(t(`Alert.${lang}`));;
            })
            .catch(() =>alert(t(`AlertNot.${lang}`)));
    };



    return (
        <section className='text-section'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='title-name w-100'>
                            <h3>{t(`tarjimaiy.${lang}`)}</h3>
                            <div className='text-title-line'></div>
                        </div>
                    </div>
                </div>
                <div className='row pl-5'>
                    <div className='col-12'>
                        <h5 className='mt-3 mb-3'>{t(`tarjimaiyTitle.${lang}`)}</h5>
                    </div>
                </div>
                <div className='row pl-5 pr-5 pb-5 '>
                    <div className='col-12'>
                        <Form>

                            <Form.Group className="mb-3 w-100" controlId="formBasicEmail">
                                <Form.Label>{t(`fio.${lang}`)} :</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={fio}
                                    onChange={(e) => setFio(e.target.value)}
                                    placeholder={t(`fioI.${lang}`)} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>{t(`Email.${lang}`)} :</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder={t(`EmailI.${lang}`)} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>{t(`PhoneNumber.${lang}`)} :</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={phone_number}
                                    onChange={(e) => setPhone_number(e.target.value)}
                                    placeholder={t(`PhoneNumberI.${lang}`)} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>{t(`qisqaMurojaat.${lang}`)} :</Form.Label>
                                <Form.Control
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                    placeholder={t(`qisqaMurojaatI.${lang}`)}
                                    as="textarea" rows={3} />
                            </Form.Group>

                            <Form.Group className="mb-3 w-50" controlId="formBasicPassword">
                                <Form.Label>{t(`fileBiriktir.${lang}`)} :</Form.Label>
                                <Form.Control
                                    onChange={(e) => setFile(e.target.files[0])}
                                    type="file"
                                />
                            </Form.Group>

                            <Button onClick={() => submitHandler()} variant="primary" type="button">
                            {t(`send.${lang}`)}
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TarjimaiyHol;
