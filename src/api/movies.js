export async function getMovies() {
  // eslint-disable-next-line no-unused-vars
  return new Promise(function (resolve, _) {
    setTimeout(() => {
      resolve(movieList);
    }, 500);
  });
}

const movieList = [
  {
    id: 1,
    title: "The Equalizer",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTQ2MzE2NTk0NF5BMl5BanBnXkFtZTgwOTM3NTk1MjE@._V1_SX300.jpg",
  },
  {
    id: 2,
    title: "Spider-Man: No Way Home",
    poster:
      "https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_SX300.jpg",
  },
  {
    id: 3,
    title: "Avengers: Endgame",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
  {
    id: 4,
    title: "Scary Movie 2",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMzQxYjU1OTUtYjRiOC00NDg2LWI4MWUtZGU5YzdkYTcwNTBlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
  },
  {
    id: 5,
    title: "John Wick",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_SX300.jpg",
  },
];
