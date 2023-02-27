import { createContext, useEffect, useState } from "react";
import { getCharacters, getComics, getData, getSeries, getCharacter } from '../api/marvelApi';

export const MarvelContext = createContext({
  Personajes: [],
  Series: [],
  Comics: [],
  Personaje: [],
  setPersonajes: (Personajes: any) => { },
  setSeries: (Series: any) => { },
  setComics: (Comics: any) => { },
  setPersonaje: (Personaje: any) => { },
});

export const MarvelContextProvider = ({children}: any) => {
  const [Personajes, setPersonajes] = useState([])
  const [Personaje, setPersonaje] = useState([])
  const [Series, setSeries] = useState([])
  const [Comics, setComics] = useState([])


  

  useEffect(() => {
    getCharacters().then((Personajes) => setPersonajes(Personajes));
  }, []);


  useEffect(() => {
    getCharacter(1011334).then((Personaje) => setPersonaje(Personaje));
  }, []);

  
  useEffect(() => {
    getComics().then((Comics) => setComics(Comics));
  }, []);


  useEffect(() => {
    getSeries().then((Series) => setSeries(Series));
  }, []);



  return (
    <MarvelContext.Provider
      value={{
        Personajes,
        setPersonajes,
        Series,
        setSeries,
        Comics,
        setComics,
        Personaje,
        setPersonaje
      }}
    >
      {children}
    </MarvelContext.Provider>
  );
}
