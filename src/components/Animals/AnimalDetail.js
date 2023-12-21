import React from 'react';

export default function AnimalDetail({ animalName, animalImg, animalDescription }) {
    return <div>

        <div className='grid grid-cols-2 gap-4 w-3/4 mx-auto p-4'>
            <h1>Details for {animalName}</h1>
            <img src={animalImg} alt={animalName} width="100vw" />
            <p>{animalDescription}</p>
        </div>

    </div>;
}
