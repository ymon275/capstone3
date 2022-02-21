const getMovies = require("C:/Users/beats/Repos/CapstoneProject3/MovieRental/movie-rentals/src/modules/getMovies.js");
const searchMovies = require("C:/Users/beats/Repos/CapstoneProject3/MovieRental/movie-rentals/src/modules/searchMovies.js");

async function getItems(currentUser, db) {
  if (currentUser !== null) {
    const q = query(collection(db, currentUser.uid), orderBy("title"));
    const querySnapshot = await getDocs(q);

    let array = [];
    let docArray = [];
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      array.push(doc.data());
      docArray.push(doc.id);
    });
    setItemsRef(array);
    setDocIds(docArray);
  }
}

async function addToCart() {
  if (movie.description === undefined) {
    await addDoc(collection(db, user.uid), {
      image: movie.image,
      title: movie.title,
      id: movie.id,
      crew: movie.crew,
      year: movie.year,
    });
    getItems();
  } else {
    await addDoc(collection(db, user.uid), {
      image: movie.image,
      title: movie.title,
      id: movie.id,
      description: movie.description,
    });
    getItems();
  }
}

async function deleteItem() {
  await deleteDoc(doc(db, this.props.user.uid, this.props.docId));
  this.props.getItems();
}

it.todo("integration test");
