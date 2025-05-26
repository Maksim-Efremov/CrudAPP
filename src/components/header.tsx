import React from "react";

interface HeaderProps {
  text: string; // Указываем, что text должен быть строкой
}

export const Header: React.FC<HeaderProps> = ({ text }) => {
  return <h1 style={{ textAlign: "center" }}>{text}</h1>;
};
