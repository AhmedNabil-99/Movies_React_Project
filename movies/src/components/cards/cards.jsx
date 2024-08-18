import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
import './cards.css';

const Cards = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get("https://api.themoviedb.org/3/movie/popular", {
        params: {
          api_key: 'd05c4cd1b7f5c2480d55c1a2931702d5',
          language: 'en-US',
          page: 1,
        },
      })
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch((err) => {
        console.error('Error fetching the movies:', err);
      });
  }, []);
      

  return (
    <div className="cards-container">
      {movies.map(movie => (
        <div key={movie.id} className="card" style={{ width: '20rem', margin: '13px' }}>
          <img className="card-img-top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
          <div className="card-body d-flex flex-column justify-content-center align-items-center">
            <h5 className="card-title">{movie.title}</h5>
            <p className="card-text">{movie.overview}</p>
            <button className="btn btn-custom">View Details</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
