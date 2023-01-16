import React from 'react'

const UserDetails = ({ name, age, job }) => {
    
    let cnh = true;

    if (age < 18) {
        cnh = false;
    }

    return (
    <div>

        <ul>
            <li>Nome: {name}</li>
            <li>Idade: {age}</li>
            <li>Emprego: {job}</li>
        </ul>

        { !cnh && <p> Usuário não pode tirar CNH !</p>}

    </div>

  )
}

export default UserDetails