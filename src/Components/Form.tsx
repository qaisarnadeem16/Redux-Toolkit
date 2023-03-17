import React, { useState } from 'react'

interface Todo{
    id: number,
    name: string
}
const Form = () => {

    const [name, setName] = useState<string>('');
    const [userData, SetUserData] = useState<Todo[]>([]);

    const handleForm = (e: any) => {
        e.preventDefault();
        // console.log(name);
        const newUser  = {
           id: userData.length + 1,
           name: name
        }
        SetUserData([...userData , newUser])
        setName('')

    }
    return (
        <>
            <form action="" onSubmit={handleForm}>
                <input type="text" onChange={(e) => { setName(e.target.value) }} />
                <button type='submit'>Add</button>
            </form>
            <div className="">
                <ul>
                    {userData.map((user)=>(
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Form
