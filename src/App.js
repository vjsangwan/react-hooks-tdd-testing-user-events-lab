import React from "react";
import { useState } from "react";

function App() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [singingIsChecked, setSingingIsChecked] = useState(false);
  const [dancingIsChecked, setDancingIsChecked] = useState(false);
  const [surfingIsChecked, setSurfingIsChecked] = useState(false);
  const [messageToBeDisplayed, setMessageToBeDisplayed] = useState(false);
  const toggleSinging = (e) => setSingingIsChecked(e.target.checked);
  const toggleDancing = (e) => setDancingIsChecked(e.target.checked);
  const toggleSurfing = (e) => setSurfingIsChecked(e.target.checked);
  const onSubmitHandle = (e) => {
    e.preventDefault();
    setMessageToBeDisplayed(true);
  };

  return (
    <main>
      <div>
        <form onSubmit={onSubmitHandle}>
          <label htmlFor="userName">Username</label>
          <input
            id="userName"
            placeholder="Username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <br />
          <br />
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            placeholder="enter the email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <div>
            <h3>Interests :</h3>
            <input
              type="checkbox"
              checked={singingIsChecked}
              onChange={toggleSinging}
              value={true}
              id="singing"
            />
            <label htmlFor="singing"> Singing</label>
          </div>

          <div>
            <input
              type="checkbox"
              checked={dancingIsChecked}
              onChange={toggleDancing}
              value={true}
              id="dancing"
            />
            <label htmlFor="dancing">Dancing</label>
          </div>
          <div>
            <input
              type="checkbox"
              checked={surfingIsChecked}
              id="surfing"
              onChange={toggleSurfing}
              value={false}
            />
            <label htmlFor="surfing">Surfing</label>
          </div>
          <div>
            <button type="submit" id="html">
              Submit
            </button>
          </div>
        </form>
      </div>
      {messageToBeDisplayed && (
        <div>
          <h1>Hi, I'm {userName}</h1>
          <img alt="My profile pic" src="https://via.placeholder.com/350" />
          <h2>About Me</h2>
          <p>
            My hobbies are {singingIsChecked && "Singing"},
            {surfingIsChecked && "Surfing"}, {dancingIsChecked && "Dancing"}.
          </p>
        </div>
      )}

      <div>
        <a href="https://github.com">GitHub</a>
        <a href="https://linkedin.com">LinkedIn</a>
      </div>
    </main>
  );
}
export default App;
