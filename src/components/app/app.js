import "./app.css";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import FormRegisration from "../FormRegistration/FormRegistration";

import SignUp from "../pages/signup/SignUp";
import Main from "../pages/Main/Main";
import Block from "../pages/Block/Block";
import SignIn from "../pages/signIn/SignIn";
import Profile from "../pages/Profile/Profile";

function App() {
  const [selectedBlock, onSelectedBlock] = useState(0);

  const noauth = false;

  // const data = [
  //   {
  //     id: 1,
  //     videos: [
  //       {
  //         id: 1,
  //         link: "https://www.youtube.com/embed/JnLHnhzSj-M",
  //         description: "Описание",
  //       },
  //       // {
  //       //   id: 2,
  //       //   link: 'https://www.youtube.com/embed/JnLHnhzSj-M"',
  //       //   description: "Описание2",
  //       // },
  //     ],
  //     description: "Как правильно вкладываться",
  //   },
  //   {
  //     id: 2,
  //     videos: [
  //       {
  //         id: 3,
  //         link: 'https://www.youtube.com/embed/JnLHnhzSj-M"',
  //         description: "Описание3",
  //       },
  //       {
  //         id: 4,
  //         link: 'https://www.youtube.com/embed/JnLHnhzSj-M"',
  //         description: "Описание4",
  //       },
  //     ],
  //     description: "Куда лучше вкладываться",
  //   },
  //   {
  //     id: 3,
  //     videos: [
  //       {
  //         id: 4,
  //         link: 'https://www.youtube.com/embed/JnLHnhzSj-M"',
  //         description: "Описание4",
  //       },
  //     ],
  //     description: "Зачем вкладываться",
  //   },
  // ];

  return (

      <Routes>
        <Route path="/" element={<Main noauth={noauth} />} />
        <Route path="/block/:blockid" element={<Block />} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
  );
}

export default App;
