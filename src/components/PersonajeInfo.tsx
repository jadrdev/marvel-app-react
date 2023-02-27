import React, { useContext } from 'react'
import { MarvelContext } from '../context/MarvelContext';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getCharacter } from '../api/marvelApi';

export const PersonajeInfo = () => {

  const {id} = useParams();
  const { Personaje, setPersonaje } = useContext(MarvelContext);


  useEffect(() => {
    getCharacter(id).then((Personaje) => setPersonaje(Personaje));
  }, [id]);

  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        {Personaje.map((personaje: any) => (
          <div className="flex flex-col">
            <img
              className="w-[600px] h-[300px]"
              src={`${personaje.thumbnail.path}.${personaje.thumbnail.extension}`}
              alt={personaje.name}
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{personaje.name}</div>
              <p className="text-gray-700 text-base">
                {personaje.description ? personaje.description : "No description"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
