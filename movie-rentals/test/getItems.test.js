import getItems from "../src/modules/getItems.js";
import getSnapshot from "../src/modules/getSnapshot.js";
import _ from "lodash";

jest.mock('../src/modules/getSnapshot.js');

it("Gets cart items from the firestore database", () => {
  const docs = [
    {
      id: "VrIT9p9vyShUcP2AuO4u",
      data: {
        crew: "Destin Daniel Cretton (dir.), Simu Liu, Awkwafina",
        id: "tt9376612",
        image:
          "https://m.media-amazon.com/images/M/MV5BNTliYjlkNDQtMjFlNS00NjgzLWFmMWEtYmM2Mzc2Zjg3ZjEyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX128_CR0,3,128,176_AL_.jpg",
        title: "Shang-Chi and the Legend of the Ten Rings",
        year: "2021",
      },
    },
    {
      id: "XiIMGraTv8U0zsaAeyWi",
      data: {
        crew: "Jason Reitman (dir.), Carrie Coon, Paul Rudd",
        id: "tt4513678",
        image:
          "https://imdb-api.com/images/original/MV5BMmZiMjdlN2UtYzdiZS00YjgxLTgyZGMtYzE4ZGU5NTlkNjhhXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_Ratio0.6716_AL_.jpg",
        title: "Ghostbusters: Afterlife",
        year: "2021",
      },
    },
    {
      id: "Z0NsFSQAeNOi8HpJz2Xk",
      data: {
        crew: "Lin-Manuel Miranda (dir.), Andrew Garfield, Alexandra Shipp",
        id: "tt8721424",
        image:
          "https://imdb-api.com/images/original/MV5BZmMyMmE0M2UtN2E2MC00YzVmLTkwODgtOTVhYjVlOTBhY2RjXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_Ratio0.6716_AL_.jpg",
        title: "tick, tick...BOOM!",
        year: "2021",
      },
    },
    {
      id: "c6VwygsAcic0GqHRr1Tg",
      data: {
        crew: "Rawson Marshall Thurber (dir.), Dwayne Johnson, Ryan Reynolds",
        id: "tt7991608",
        image:
          "https://imdb-api.com/images/original/MV5BZmRjODgyMzEtMzIxYS00OWY2LTk4YjUtMGMzZjMzMTZiN2Q0XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_Ratio0.6716_AL_.jpg",
        title: "Red Notice",
        year: "2021",
      },
    },
    {
      id: "yDZ8hFDeVqLXCSBLxRhk",
      data: {
        description: "(2010)",
        id: "tt1375666",
        image:
          "https://imdb-api.com/images/original/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_Ratio0.7273_AL_.jpg",
        title: "Inception",
      },
    },
  ];
  getSnapshot.mockResolvedValue(docs);
  const items = getItems();
  expect(items.data).toBe(_.sortBy(docs, (q) => q.data));
  expect(items.ids).toBe(_.sortBy(docs, (q) => q.id));
});
