import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    chosenFriend: [],
    currentScore: 0,
    highScore: 0,
    gameStatus: ""
  };

  handleFriendClick = id => {
    if (this.state.chosenFriend.includes(id)) {
      this.setState({ gameStatus:"Game over! Try again!" });
      // alert("You have already chosen that friend. Start again!")
      this.handleReset();
    } else {
      let idArray = [];
      idArray.push(id);
      this.setState({ gameStatus: "Great Job! Keep Clicking!" });
      this.setState({ chosenFriend: idArray});
      this.state.currentScore <= this.state.highScore -1 
      ? this.setState({ currentScore: this.state.currentScore +1 })
      : this.setState({
        currentScore: this.state.currentScore + 1,
        highScore: this.state.highScore + 1
      });

      let friendCardShuffle = this.state.friends;
      for (let i = friendCardShuffle.length -1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [friendCardShuffle[i], friendCardShuffle[j]] = [
          friendCardShuffle[j], friendCardShuffle[i]
        ];
      }
      this.setState({ friends: friendCardShuffle})
    }
  };

  handleReset = () => {
    this.setState ({ chosenFriend: [], currentScore: 0 });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title
          currentScore={this.state.currentScore}
          highScore={this.state.highScore}
          gameStatus={this.state.gameStatus}
          />
        {this.state.friends.map(friend => (
          <FriendCard
            handleFriendClick={this.handleFriendClick}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
