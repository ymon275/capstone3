import _ from "lodash";
import { db } from "../../firebase.js";
import { query, collection, orderBy, getDocs } from "firebase/firestore";

export default async function getItems(currentUser, inputDoc) {
  let array = [];
  let docArray = [];
  if (inputDoc) {
    _.forEach(inputDoc, (doc) => {
      array.push(doc.data());
      docArray.push(doc.id);
    });
    return {
      data: array,
      ids: docArray,
    };
  }
  if (currentUser != null) {
    const q = query(collection(db, currentUser.uid), orderBy("title"));
    const querySnapshot = await getDocs(q);

    _.forEach(querySnapshot.docs, (doc) => {
      array.push(doc.data());
      docArray.push(doc.id);
    });
    return {
      data: array,
      ids: docArray,
    };
  }
}
