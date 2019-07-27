import React from "react";
import IconContainer from "./components/IconContainer/IconContainer";

const FILE_TYPE = {
  PICTURE: "picture",
  FOLDER: "folder",
  TEXT: "text"
};

const FILE1 = [
  {
    id: "test1",
    size: { x: 400, y: 200 },
    pos: { x: 200, y: 100 },
    windowTitle: "Northern Lights.jpg",
    iconTitle: "Northern Lights.jpg",
    type: FILE_TYPE.PICTURE,
    source: "https://www.w3schools.com/w3css/img_lights.jpg",
    content: (
      <img
        className={FILE_TYPE.PICTURE}
        alt="northern lights"
        src="https://www.w3schools.com/w3css/img_lights.jpg"
      />
    )
  },
  {
    id: "test2",
    size: { x: 200, y: 250 },
    pos: { x: 250, y: 150 },
    windowTitle: "Window Title 2",
    iconTitle: "IconTitle2",
    type: FILE_TYPE.FOLDER
  },
  {
    id: "test3",
    size: { x: 450, y: 300 },
    pos: { x: 300, y: 200 },
    windowTitle: "WWWWWWWWWW Title 3",
    iconTitle: "IconTitle3",
    type: FILE_TYPE.PICTURE
  },
  {
    id: "test4",
    size: { x: 300, y: 200 },
    pos: { x: 150, y: 250 },
    windowTitle: "iiiiiiii Title 3",
    iconTitle: "IconTitle3",
    type: FILE_TYPE.PICTURE
  }
];

export const DESKTOP = [
  {
    id: "desktop_readme",
    size: { x: 400, y: 200 },
    pos: { x: 200, y: 100 },
    windowTitle: "README.md",
    iconTitle: "README.md",
    type: FILE_TYPE.TEXT,
    content: (
      <div className={FILE_TYPE.TEXT}>
        <p>Hello and Welcome!</p>
        <p>
          My name is Justin Ma and this is a portfolio of my creative and coding
          work
        </p>
        <p>
          Feel free to drag, scale, and close these windows just like you would
          on a regular desktop
        </p>
        <p>Have fun exploring!</p>
        <img
          className="picture"
          alt="northern lights"
          src="https://www.w3schools.com/w3css/img_lights.jpg"
        />
      </div>
    )
  },
  {
    id: "test1",
    size: { x: 400, y: 200 },
    pos: { x: 200, y: 100 },
    windowTitle: "Northern Lights.jpg",
    iconTitle: "Northern Lights.jpg",
    type: FILE_TYPE.PICTURE,
    source: "https://www.w3schools.com/w3css/img_lights.jpg",
    content: (
      <img
        className={FILE_TYPE.PICTURE}
        alt="northern lights"
        src="https://www.w3schools.com/w3css/img_lights.jpg"
      />
    )
  },
  {
    id: "test2",
    size: { x: 350, y: 250 },
    pos: { x: 250, y: 150 },
    windowTitle: "Folder",
    iconTitle: "Folder",
    type: FILE_TYPE.FOLDER,
    content: (
      <IconContainer
        style={{ zoom: "0.5" }}
        direction="row"
        length={3}
        icons={FILE1}
      />
    )
  },
  {
    id: "test3",
    size: { x: 450, y: 300 },
    pos: { x: 300, y: 200 },
    windowTitle: "File.txt",
    iconTitle: "File.txt",
    type: FILE_TYPE.TEXT,
    content: (
      <div className={FILE_TYPE.TEXT}>
        Here is a paragraph Here is a paragraph Here is a paragraph Here is a
        paragraph
        <img
          className="picture"
          alt="northern lights"
          src="https://www.w3schools.com/w3css/img_lights.jpg"
        />
      </div>
    )
  },
  {
    id: "test4",
    size: { x: 600, y: 400 },
    pos: { x: 150, y: 250 },
    windowTitle: "iiiiiiii Title 3",
    iconTitle: "IconTitle3",
    type: FILE_TYPE.PICTURE,
    content: (
      <iframe
        className="picture"
        src="https://www.youtube.com/embed/IzTYggOUDX8"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    )
  }
];