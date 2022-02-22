import searchMovies from "../src/modules/searchMovies.js";

describe("Search for specific movie from imdb api", () => {
  it("should return the expected movie based on the title passed to it", () => {
    const searchResults = {
      errorMessage: "",
      expression: "titanic",
      results: {
        0: {
          id: "tt0120338",
          resultType: "Title",
          image:
            "https://imdb-api.com/images/original/MV5BMDdmZGU3N…yXkFqcGdeQXVyNTA4NzY1MzY@._V1_Ratio0.7273_AL_.jpg",
          title: "Titanic",
          description: "(1997)",
        },
        1: {
          id: "tt0051994",
          resultType: "Title",
          image:
            "https://imdb-api.com/images/original/MV5BOWRiZDljY…yXkFqcGdeQXVyNjQzNDI3NzY@._V1_Ratio0.7273_AL_.jpg",
          title: "A Night to Remember",
          description: '(1958) aka "La última noche del Titanic"',
        },
        2: {
          id: "tt0046435",
          resultType: "Title",
          image:
            "https://imdb-api.com/images/original/MV5BMTU3NTUyM…BanBnXkFtZTgwOTA2MDE3MTE@._V1_Ratio0.7273_AL_.jpg",
          title: "Titanic",
          description: "(1953)",
        },
        3: {
          id: "tt1640571",
          resultType: "Title",
          image:
            "https://imdb-api.com/images/original/MV5BMTMxMjQ1M…BanBnXkFtZTcwNjIzNjg1Mw@@._V1_Ratio0.7273_AL_.jpg",
          title: "Titanic II",
          description: "(2010) (Video)",
        },
        4: {
          id: "tt0081400",
          resultType: "Title",
          image:
            "https://imdb-api.com/images/original/MV5BNTQyZGI0N…yXkFqcGdeQXVyMTY5Nzc4MDY@._V1_Ratio0.7273_AL_.jpg",
          title: "Raise the Titanic",
          description: "(1980)",
        },
        5: {
          id: "tt1869152",
          resultType: "Title",
          image:
            "https://imdb-api.com/images/original/MV5BMTA4MjIyZ…yXkFqcGdeQXVyNjk1Njg5NTA@._V1_Ratio0.7273_AL_.jpg",
          title: "Titanic",
          description: "(2012) (TV Mini Series)",
        },
        6: {
          id: "tt0115392",
          resultType: "Title",
          image:
            "https://imdb-api.com/images/original/MV5BMTBhMjUzM…yXkFqcGdeQXVyNjk1Njg5NTA@._V1_Ratio0.7273_AL_.jpg",
          title: "Titanic",
          description: "(1996) (TV Mini Series)",
        },
        7: {
          id: "tt15739482",
          resultType: "Title",
          image:
            "https://imdb-api.com/images/original/MV5BMTUwNjNiO…yXkFqcGdeQXVyMTEwNDU1MzEy._V1_Ratio0.7727_AL_.jpg",
          title: "Titanic: Deleted Scenes",
          description: "(2012) (Video)",
        },
      },
    };
    const fakeFetch = jest.fn().mockReturnValue(
      Promise.resolve({
        json: () => Promise.resolve(searchResults),
      })
    );
    return searchMovies("titanic", fakeFetch).then((results) => {
      expect(results).toStrictEqual(searchResults);
      expect(fakeFetch).toBeCalledWith(
        `https://imdb-api.com/en/API/SearchMovie/k_xa1iox8h/titanic`,
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
