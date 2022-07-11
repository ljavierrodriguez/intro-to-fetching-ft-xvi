import { useEffect, useState } from 'react';

// GET, POST, PUT, DELETE // CRUD = Create, Read, Update, Delete

const Test = props => {

    const [characters, setCharacters] = useState(null);
    const [users, setUsers] = useState(null);


    useEffect(() => {
        //getCharacters();
        //getUsers();
        getAsyncCharacters();
        getAsyncUsers();
        getCharactersById(1);
    }, [])

    /*     const getCharacters = () => {
            fetch('https://rickandmortyapi.com/api/characters', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then((response) => {
                    console.log(response);
                    if (response.status === 404) throw new Error('Pagina no encontrada');
    
                    return response.json();
                })
                .then((data) => {
                    console.log(data);
                    setCharacters(data);
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    
        const getUsers = () => {
            fetch('https://jsonplaceholder.typicode.com/users', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
    
                .then((response) => {
                    console.log(response);
    
                    if (response.status === 404) throw new Error({ error: 'Pagina no encontrada' });
    
                    return response.json();
                })
    
                .then((data) => {
                    console.log(data);
                    setUsers(data);
                })
    
                .catch((error) => {
                    console.log(error);
                })
        } */

    const getAsyncCharacters = async () => {
        try {
            const response = await fetch('https://rickandmortyapi.com/api/character', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const data = await response.json();

            console.log(data);

            setCharacters(data);

        } catch (error) {
            console.log(error);
        }

    }

    const getAsyncUsers = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await response.json();

            setUsers(data);
        } catch (error) {
            console.log(error);
        }
    }


    const getCharactersById = (id) => {
        fetch('https://rickandmortyapi.com/api/character/'+id)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                return data;
            })
            .then(async( data) => {
                const resp = await fetch(data.episode[0]);
                //console.log(resp);
                const info = await resp.json();
                data.episode[0] = info;
                console.log(data);
            });
    }


    /* 
        fetch('', {})
        .then((resp) => {}) // respueste del servidor
        .then((data) => {}) // data de la peticion 
        .catch((error) => {}) // si ocurre algun error
    */

    return (
        <h1>Test App</h1>
    )
}

export default Test;