import { Component } from "react";
import { Context } from "./context_api";
import uuid from "react-uuid";


export class ContextProvider extends Component {

  state = {
      data : JSON.parse(localStorage.getItem("data"))
  }

  handleCreation = (comment) => {
    const new_comment = {
      id: uuid(),
      content: comment,
      createdAt: "just now",
      score: 0,
      user: {
        image: {
          png: this.state.data.currentUser.image.png,
          webp: this.state.data.currentUser.image.png
        },
        username: this.state.data.currentUser.username
      },
      replies: []
    }

    this.setState({...this.state.data, new_comment})
    // localStorage.setItem("data", JSON.stringify(this.state.data))
    console.log(this.state.data);

    // end of creation
  }


  render() {
    return (
      <Context.Provider value={{ ...this.state, handleCreation: this.handleCreation }}>
          {this.props.children}
      </Context.Provider>
    )
  }
}

export default ContextProvider