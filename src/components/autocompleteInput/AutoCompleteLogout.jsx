import React from 'react';
import Form from 'react-bootstrap/Form';

function AutoCompletLogout() {
    // Pega o nome do usuário do localStorage
    const usuario = localStorage.getItem('user');  // Aqui pegamos o usuário que foi armazenado após o login

    return (
        <Form.Select aria-label="Default select example">
            <option>{usuario || 'Adm'}</option>
            <option value="1">Sair</option>
        </Form.Select>
    );
}

export default AutoCompletLogout;
