import Icon, { TypeIcon } from "../game/components/icon";
import "./styles.css";
import React from "react";

interface CircularButtonProps {
  type?: TypeIcon;
  onClick: () => void;
}

const CircularButton = ({ type = "back", onClick }: CircularButtonProps) => (
  <button className="circular-button" onClick={onClick}>
    <Icon type={type} fill="white" />
  </button>
);

export default React.memo(CircularButton);