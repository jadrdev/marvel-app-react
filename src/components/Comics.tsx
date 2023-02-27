import React, { useContext } from 'react'
import { Header } from '../shared/Header'
import { Footer } from '../shared/Footer'
import { MarvelContext } from '../context/MarvelContext';
import { Result } from '../interfaces/Comics';
import { Link } from 'react-router-dom';

export const Comics = () => {

  const { Comics } = useContext(MarvelContext);

  return (
    <>
      <Header />
      <div className="flex flex-wrap">
        {Comics.map((comic: Result) => (
          <Link to={`/comics/${comic.id}`}>
          <div
            className="max-w-sm rounded overflow-hidden shadow-lg mx-4 my-4"
            key={comic.id}
          >
            <img
              className="w-full"
              src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
              alt={comic.title}
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{comic.title}</div>
              <p className="text-gray-700 text-base">
                {comic.description ? comic.description : "No description"}
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
