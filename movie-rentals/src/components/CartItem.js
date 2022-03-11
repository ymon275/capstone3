import Dropdown from "react-bootstrap/Dropdown";
import React from "react";
import deleteItem from "../modules/firestore-api/deleteItem";

class cartItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Dropdown.Item id="dropdown-item" href="javascript:void(0)">
        <div>
          <img
            src={this.props.item.image}
            style={{ width: "20px", height: "30px" }}
            alt={this.props.item.title}
          ></img>
          {this.props.item.title}
          <button
            className="btn btn-danger mx-2"
            onClick={() =>
              deleteItem(this.props.user, this.props.docId, this.props.getItems)
            }
          >
            x
          </button>
        </div>
      </Dropdown.Item>
    );
  }
}

export default cartItem;
