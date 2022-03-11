import React from "react";
import CartItem from "./CartItem";
import _ from "lodash";
import { useAuth } from "../contexts/AuthContext";
import Dropdown from "react-bootstrap/Dropdown";

export default function CartItems({
  isLoading,
  data,
  itemsRef,
  docIds,
  getItems,
}) {
  const { currentUser } = useAuth();

  if (
    itemsRef !== undefined &&
    itemsRef !== null &&
    itemsRef.length !== 0 &&
    !isLoading
  ) {
    return (
      <Dropdown.Menu id="dropdown">
        {_.map(itemsRef, (item, index) => {
          let docId = docIds[index];
          // console.log('index', index)
          // console.log('docId', docId)
          return (
            <CartItem
              key={index}
              item={item}
              user={currentUser}
              docId={docId}
              getItems={getItems}
            />
          );
        })}
      </Dropdown.Menu>
    );
  } else {
    return (
      <Dropdown.Menu id="dropdown">
        <Dropdown.Item>Loading Cart...</Dropdown.Item>
      </Dropdown.Menu>
    );
  }
}
