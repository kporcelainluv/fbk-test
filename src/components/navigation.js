import React from "react";

const NavigationElement = ({ link, text }) => {
  return (
    <li>
      <a href={link}>{text}</a>
    </li>
  );
};

export const Navigation = ({ elements }) => {
  return (
    <ul style={{ display: "none" }}>
      {elements.map(element => {
        return (
          <NavigationElement
            key={element.link}
            link={element.link}
            text={element.name}
          />
        );
      })}
    </ul>
  );
};
