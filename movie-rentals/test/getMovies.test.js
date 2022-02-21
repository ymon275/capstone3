const getMovies = require("C:/Users/beats/Repos/CapstoneProject3/MovieRental/movie-rentals/src/modules/getMovies.js");

describe("Fetch movies from imdb api", () => {
  it("should return a movies object", () => {
    const fakeFetch = jest.fn().mockReturnValue(
      Promise.resolve({
        json: () =>
          Promise.resolve({
            items: {
              0: {
                crew: "Guillermo del Toro (dir.), Bradley Cooper, Cate Blanchett",
                fullTitle: "Nightmare Alley (2021)",
                id: "tt7740496",
                imDbRating: "7.2",
                imDbRatingCount: "59483",
                image:
                  "https://imdb-api.com/images/original/MV5BOTI4NDhhNGEtZjQxZC00ZTRmLThmZTctOGJmY2ZlOTc0ZGY0XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_Ratio0.6716_AL_.jpg",
                rank: "1",
                rankUpDown: "0",
                title: "Nightmare Alley",
                year: "2021",
              },
            },
          }),
      })
    );
    return getMovies(fakeFetch).then((result) => {
      expect(result).toStrictEqual({
        items: {
          0: {
            crew: "Guillermo del Toro (dir.), Bradley Cooper, Cate Blanchett",
            fullTitle: "Nightmare Alley (2021)",
            id: "tt7740496",
            imDbRating: "7.2",
            imDbRatingCount: "59483",
            image:
              "https://imdb-api.com/images/original/MV5BOTI4NDhhNGEtZjQxZC00ZTRmLThmZTctOGJmY2ZlOTc0ZGY0XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_Ratio0.6716_AL_.jpg",
            rank: "1",
            rankUpDown: "0",
            title: "Nightmare Alley",
            year: "2021",
          },
        },
      });
      expect(fakeFetch).toBeCalledWith(
        "https://imdb-api.com/en/API/MostPopularMovies/k_xa1iox8h",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    });
  });
});
