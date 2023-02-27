import React, { useContext, useState } from 'react'
import { MarvelContext } from '../context/MarvelContext'
import { Result } from '../interfaces/Personajes';
import { Header } from '../shared/Header';
import { Footer } from '../shared/Footer';
import { Link } from 'react-router-dom';

export const Personajes = () => {
  const { Personajes } = useContext(MarvelContext)
  
  return (
    <>
      <Header />
      <div className="flex flex-wrap">
        {Personajes.map((personaje: Result) => (
          <Link to={`/personajes/${personaje.id}`}>
            <div className="max-w-sm rounded overflow-hidden shadow-lg mx-4 my-4" key={personaje.id}>
              <img
                className="w-[600px] h-[300px]"
                src={`${personaje.thumbnail.path}.${personaje.thumbnail.extension}`}
                alt={personaje.name}
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{personaje.name}</div>
                <p className="text-gray-700 text-base">
                  {personaje.description ? personaje.description : 'No description'}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Footer />
  </>
  );
}