import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase";

export default async function deleteItem(
  user,
  docId,
  getItems = () => "no items"
) {
  await deleteDoc(doc(db, user.uid, docId));
  getItems();
}
