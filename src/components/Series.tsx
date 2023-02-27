import React, { useContext } from 'react'
import { Header } from '../shared/Header'
import { Footer } from '../shared/Footer';
import { MarvelContext } from '../context/MarvelContext';
import { Result } from '../interfaces/Series';
import { Link } from 'react-router-dom';

export const Series = () => {

  const { Series } = useContext(MarvelContext);
  return (
    <>
      <Header />
      <div className="flex flex-wrap">
        {Series.map((series: Result) => (
          <Link to={`/series/${series.id}`}>
          <div
            className="max-w-sm rounded overflow-hidden shadow-lg mx-4 my-4"
            key={series.id}
          >
            <img
              className="w-full"
              src={`${series.thumbnail.path}.${series.thumbnail.extension}`}
              alt={series.title}
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{series.title}</div>
              <p className="text-gray-700 text-base">
                {series.description ? series.description : "No description"}
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
