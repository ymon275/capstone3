import _ from "lodash";
import { db } from "../firebase.js";
import { query, collection, orderBy, getDocs } from "firebase/firestore";

export default async function getItems(currentUser) {
  if (currentUser != null) {
    const q = query(collection(db, currentUser.uid), orderBy("title"));
    const querySnapshot = await getDocs(q);
    let array = [];
    let docArray = [];
    _.forEach(querySnapshot.docs, (doc) => {
      // console.log(doc.id, " => ", doc.data());
      array.push(doc.data());
      docArray.push(doc.id);
    });
    // console.log({
    //   data: array,
    //   ids: docArray
    // })
    return {
      data: array,
      ids: docArray,
    };
  }
}
