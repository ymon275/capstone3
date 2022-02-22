import { db } from "../../firebase.js";
import { collection, addDoc } from "firebase/firestore";

export default async function addToCart(
  movie,
  user,
  getItems = () => "no items"
) {
  if (movie.description === undefined) {
    await addDoc(collection(db, user.uid), {
      image: movie.image,
      title: movie.title,
      id: movie.id,
      crew: movie.crew,
      year: movie.year,
    });
    getItems();
  } else if (movie !== undefined) {
    await addDoc(collection(db, user.uid), {
      image: movie.image,
      title: movie.title,
      id: movie.id,
      description: movie.description,
    });
    getItems();
  }
}
