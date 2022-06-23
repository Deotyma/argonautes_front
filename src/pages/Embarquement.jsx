import React, {useState} from 'react';
import { saveArgonaute} from '../api';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    
    const navigate = useNavigate()

    const onSubmitForm = ()=>{
        const data = {
            name, 
            description
        }

        saveArgonaute(data)
            .then((res)=>{
                if(res.status === 200) {
                    return navigate('/');
                }
            })
    }

    return (
        <>
            <form 
                className="block custom-form"
                onSubmit={(e)=>{
                    e.preventDefault();
                    onSubmitForm()
                }}
            >
                <div>
                    <label>S'embarquer</label>
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e)=>{
                            setName(e.target.value);
                        }}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="description"
                        value={description}
                        onChange={(e)=>{
                            setDescription(e.target.value);
                        }}
                    />
                </div>
                   
                <button type="submit">
                    Envoyer
                </button>
            </form>
        </>
    )
}
  