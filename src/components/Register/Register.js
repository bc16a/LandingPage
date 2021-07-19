import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as S from './styled';

export default function Register() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [telephone, setTelephone] = useState(Number);


    const history = useHistory();
    useEffect(() => {

        let email = localStorage.getItem('email');

        if (email != null) {
            email = JSON.parse(email);
            setEmail(email);
        }
     
    }, []);

    function saveData() {
        let datas = localStorage.getItem('datas');

        if (datas != null) {
            datas = JSON.parse(datas)
            let data = {
                name: name,
                lastName: lastName,
                email: email,
                telephone: telephone
            }
            datas.push(data);
            localStorage.setItem('datas', JSON.stringify(datas))

        } else {
            datas = []
            let data = {
                name: name,
                lastName: lastName,
                email: email,
                telephone: telephone
            }
            datas.push(data);
            localStorage.setItem('datas', JSON.stringify(datas))
        }

        history.push('./')
    }

    return (
        <S.Container>
            <S.Title>Email Register</S.Title>
            <S.LinkHome to="./">Back</S.LinkHome>
            <S.List>
                <S.ListItem className="NameInput" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
                <S.ListItem className="LastNameInput" placeholder="Last Name" value={lastName} onChange={e => setLastName(e.target.value)} />
                <S.ListItem className="emailInput" placeholder="email" value={email} onChange={e => setEmail(e.target.value)} />
                <S.ListItem className="TelephoneInput" placeholder="Telephone" value={telephone} onChange={e => setTelephone(e.target.value)} />
                < button type="button" onClick={saveData}> Register </button >
            </S.List>
        </S.Container>
    )
}