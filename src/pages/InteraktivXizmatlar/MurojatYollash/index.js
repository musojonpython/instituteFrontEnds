import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useT } from '../../../custom/hooks/useT';

const MurojatYollash = () => {
    const { t, lang } = useT()

    const [fio, setFio] = useState('');
    const [birthday, setBirthday] = useState('');
    const [passport, setPassport] = useState('');
    const [address, setAddress] = useState('');
    const [postal_code, setPostal_code] = useState('');
    const [email, setEmail] = useState('');
    const [phone_number, setPhone_number] = useState('');
    const [entity, setEntity] = useState('');
    const [content, setContent] = useState('');

    var formData = new FormData();

    formData.append('fio', fio);
    formData.append('birthday', birthday);
    formData.append('passport', passport);
    formData.append('address', address);
    formData.append('postal_code', postal_code);
    formData.append('email', email);
    formData.append('phone_number', phone_number);
    formData.append('entity', entity);
    formData.append('content', content);

    const SubmitHandler = () => {
        axios.post('http://94.228.124.9/api/appeal/', formData)
            .then(res => {
                alert(t(`Alert.${lang}`));
                // setFio(''), 
                // setBirthday(''),
                // setPassport(''),
                // setAddress(''),
                // setPostal_code(''),
                // setEmail(''),
                // setPhone_number(''),
                // setEntity(''),
                // setContent('')
            }).catch(() => alert(t(`AlertNot.${lang}`)))
    }

    return (
        <section className='text-section'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='title-name w-100'>
                            <h3>{t(`murojat.${lang}`)}</h3>
                            <div className='text-title-line'></div>
                        </div>
                    </div>
                </div>
                <div className='row pl-5'>
                    <div className='col-12'>
                        <h5 className='mt-3 mb-3'>{t(`murojatWeb.${lang}`)}</h5>
                    </div>
                </div>
                <div className='row pl-5 pr-5 pb-5 '>
                    <div className='col-12'>
                        <Form>
                            <Form.Group className="mb-3 w-100">
                                <Form.Label>{t(`fio.${lang}`)} :</Form.Label>
                                <Form.Control
                                    value={fio}
                                    onChange={e => setFio(e.target.value)}
                                    type="text"
                                    placeholder={t(`fioI.${lang}`)} />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>{t(`HDate.${lang}`)} :</Form.Label>
                                <Form.Control
                                    value={birthday}
                                    onChange={e => setBirthday(e.target.value)}
                                    type="date"
                                    placeholder={t(`HDateI.${lang}`)} />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>{t(`Passport.${lang}`)} :</Form.Label>
                                <Form.Control
                                    value={passport}
                                    onChange={e => setPassport(e.target.value)}
                                    type="text"
                                    placeholder={t(`PassportI.${lang}`)} />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>{t(`address.${lang}`)} :</Form.Label>
                                <Form.Control
                                    value={address}
                                    onChange={e => setAddress(e.target.value)}
                                    type="text"
                                    placeholder={t(`AddressI.${lang}`)} />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>{t(`ZIPCode.${lang}`)}  :</Form.Label>
                                <Form.Control
                                    value={postal_code}
                                    onChange={e => setPostal_code(e.target.value)}
                                    type="text"
                                    placeholder={t(`ZIPCodeI.${lang}`)} />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>{t(`Email.${lang}`)}:</Form.Label>
                                <Form.Control
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    type="email"
                                    placeholder={t(`EmailI.${lang}`)} />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>{t(`PhoneNumber.${lang}`)}:</Form.Label>
                                <Form.Control
                                    value={phone_number}
                                    onChange={e => setPhone_number(e.target.value)}
                                    type="text"
                                    placeholder={t(`PhoneNumberI.${lang}`)} />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>{t(`Subyekt.${lang}`)} :</Form.Label>
                                <Form.Select
                                    value={entity}
                                    onChange={e => setEntity(e.target.value)}
                                >
                                    <option value='legal'>{t(`jismoniyShaxs.${lang}`)}</option>
                                    <option value='physical' selected>{t(`yuridikShaxs.${lang}`)}</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>{t(`qisqaMurojaat.${lang}`)} :</Form.Label>
                                <Form.Control
                                    value={content}
                                    onChange={e => setContent(e.target.value)} placeholder={t(`qisqaMurojaatI.${lang}`)} as="textarea" rows={3} />
                            </Form.Group>

                            <Button onClick={() => SubmitHandler()} variant="primary" type="button">
                                {t(`send.${lang}`)}
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MurojatYollash;
