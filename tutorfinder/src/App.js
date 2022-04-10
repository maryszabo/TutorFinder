/*
Initial code from: https://www.newline.co/@andreeamaco/react-dropdown-tutorial-for-beginners-create-a-dropdown-menu-from-scratch--9831d197
Code modified for our project

needed to import styled components to run this project
for button creation tutorial, I watch a video with the folloing line at the top
    import styled from 'styled-components';
video watched to create a button: https://react.school/ui/button 

https://reactjsexample.com/an-example-of-a-schema-based-form-system-for-react/ 

 */
import React, { useState } from "react";
import { Dropdown, Option } from "./Dropdown";

function clickMe() {
  alert('Please select an option!'); //FIX ME!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
}

export default function App() {
  const [optionValue, setOptionValue] = useState("");
  const handleSelect = (e) => {
    console.log(e.target.value);
    setOptionValue(e.target.value);
  };

  return (
    <div>
      <h1>Schedule a Tutoring Session</h1>
      <Dropdown
        formLabel="Choose a subject"
        //buttonText="Send form"
        onChange={handleSelect}
        action="https://jsonplaceholder.typicode.com/posts"
      >
        <Option selected value="Click to see options" />
        <Option value="Math" />
        <Option value="Science" />
        <Option value="History" />
        <Option value="English" />
        <Option value="Science" />
      </Dropdown>

      <Dropdown
        formLabel="Choose a class"
        //buttonText="Send form"
        onChange={handleSelect}
        action="https://jsonplaceholder.typicode.com/posts"
      >
        <Option selected value="Click to see options" />
        <Option value="CEN3031" />
        <Option value="CDA3101" />
        <Option value="COP3530" />
      </Dropdown>

      <Dropdown
        formLabel="Choose a topic"
        //buttonText="Send form"
        onChange={handleSelect}
        action="https://jsonplaceholder.typicode.com/posts"
      >
        <Option selected value="Click to see options" />
        <Option value="Pointers" />
        <Option value="ARM Assembly Language" />
        <Option value="Trees" />
      </Dropdown>

      <button onClick={clickMe}>
        Submit
      </button>
    </div>
  );
}
