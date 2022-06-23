

import React, {useEffect, useState} from 'react';
import { getAllArgonautes } from '../api';
import { Link } from 'react-router-dom';

export default function Argonautes() {
    const argonautes = useState([])
  

    useEffect(()=>{
        if(argonautes.data !== null) {
            getAllArgonautes()
                
        }  
    }, [])

    return (
        <div>
            <h2>Les Argonautes...</h2>
            <ul >
                {argonautes.map((argonaute)=>{
                    return (<li key={argonaute._id}>
                        <h3>{argonaute.name}</h3>
                        <Link className="link-custom" to={`/argonaute/${argonaute._id}`}>Aller</Link>
                    </li>)
                })}
            </ul>
        </div>
    )
}
