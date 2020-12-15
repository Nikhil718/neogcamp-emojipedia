import React, { useState } from "react";
import "./styles.css";
// emoji data

const emojiDictionary = {
  "🍇": "Grapes",
  "🍉": "Watermelon",
  "🍋": "Lemon",
  "🍌": "Bannana",
  "❤️": "love",
  "🥝": "Kiwi fruit",
  "😊": "Smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "😑": "annoyance"
};

//converting object into array
const emojis = Object.keys(emojiDictionary);

export default function App() {
  const [Input, setEmoji] = useState(""); /** concept 2 is useState */
  const [meaning, setMeaning] = useState("Meaning:");

  changehandler = () => {
    var userInput = event.target.value;
    setEmoji(userInput);
    //condition to check weather the user input is there in database or not
    if (userInput in emojiDictionary) {
      setMeaning(emojiDictionary[userInput]);
    } else {
      setMeaning("failure to recognise this emoji");
    }
  };

  function emojiClickHandler(inputEmoji) {
    setMeaning(emojiDictionary[inputEmoji]);
  }

  return (
    <div className="App">
      <h1>Emoji group</h1>
      <input
        className="input-txt"
        onChange={changehandler}
        value={Input}
        placeholder={"Search your emoji"}
      ></input>
      <h1> {meaning} </h1>

      {emojis.map((emoji) => (
        <span
          onClick={() => emojiClickHandler(emoji)}
          style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
        >
          {" "}
          {emoji}{" "}
        </span>
      ))}
    </div>
  );
}
