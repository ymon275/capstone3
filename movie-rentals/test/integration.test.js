import _ from "lodash";

test("integration testing for firestore", () => {
  let db = {
    users: [
      {
        uId: "Angelota",
        docs: [
          {
            id: "123",
            title: "Honey Boo Boo",
          },
          {
            id: "456",
            title: "Hulk",
          },
          {
            id: "789",
            title: "Shrek",
          },
        ],
      },
      {
        uId: "Jean",
        docs: [
          {
            id: "098",
            title: "Inception",
          },
          {
            id: "765",
            title: "Licorice Pizza",
          },
          {
            id: "432",
            title: "Red Notice",
          },
        ],
      },
    ],
  };

  let sampleToAdd = {
    uId: "Jean",
    docs: [
      {
        id: "361",
        title: "Shrek 2",
      },
    ],
  };

  let sampleToRemove = {
    uId: "Angelota",
    docs: [
      {
        id: "789",
        title: "Shrek",
      },
    ],
  };
  const getUserDocs = (O) =>
    db.users[_.findIndex(db.users, (o) => o.uId == O.uId)].docs;
  const setUserDocs = (uId, docs) =>
    (db.users[_.findIndex(db.users, (o) => o.uId == uId)].docs = docs);
  const dbWithAdded = {
    users: [
      {
        uId: "Angelota",
        docs: [
          {
            id: "123",
            title: "Honey Boo Boo",
          },
          {
            id: "456",
            title: "Hulk",
          },
        ],
      },
      {
        uId: "Jean",
        docs: [
          {
            id: "098",
            title: "Inception",
          },
          {
            id: "765",
            title: "Licorice Pizza",
          },
          {
            id: "432",
            title: "Red Notice",
          },
          {
            id: "361",
            title: "Shrek 2",
          },
        ],
      },
    ],
  };
  const dbWithRemoved = {
    users: [
      {
        uId: "Angelota",
        docs: [
          {
            id: "123",
            title: "Honey Boo Boo",
          },
          {
            id: "456",
            title: "Hulk",
          },
        ],
      },
      {
        uId: "Jean",
        docs: [
          {
            id: "098",
            title: "Inception",
          },
          {
            id: "765",
            title: "Licorice Pizza",
          },
          {
            id: "432",
            title: "Red Notice",
          },
        ],
      },
    ],
  };

  const getItemsMock = jest.fn();
  getItemsMock.mockResolvedValue(db);

  const addToCartMock = jest.fn((object) => {
    return Promise.resolve(
      setUserDocs(object.uId, _.concat(getUserDocs(object), object.docs))
    );
  });
  const deleteItemMock = jest.fn((object) => {
    return Promise.resolve(
      setUserDocs(
        object.uId,
        _.filter(getUserDocs(object), (o) => o.id !== object.docs[0].id)
      )
    );
  });

  getItemsMock().then((result) => expect(result).toBe(db));
  deleteItemMock(sampleToRemove).then(expect(db).toStrictEqual(dbWithRemoved));
  addToCartMock(sampleToAdd).then(expect(db).toStrictEqual(dbWithAdded));
});
