import "./styles.css";
import React from "react";
import { ButtonGroup } from "../../../wrappers";
import { Link } from "react-router-dom";
import state from "sweetalert/typings/modules/state";
import type { IAuth } from "../../../../interfaces";

const LINKS = [
    {
      label: "Entrenamiento",
      path: "/game/solo",
    },
    {
       label: "Online",
       path: "/online",
    },
    {
      label: "Vs Amigo ",
      path: "/game/friend",
    },
    {
      label: "VS Maquina",
      path: "/game/bot",
    },
  ];

const Links = ({state} : {state:IAuth | null}) => {
    return (
        <div className="lobby-game-links">
            <ButtonGroup label="Play">
            <div className="lobby-game-links-link">
                {LINKS.map(({ label, path }, key) => {
                // Valida si puede o no mostrar el link de online
                // esto sucede si el api no responde, entonces el estado sería null
                const renderLink =
                     (label === "Online" && !!state) || label !== "Online";

                return (
                    <Link className="button orange" key={key} to={path}>
                        {label}
                    </Link>
                );
                })}
            </div>
            </ButtonGroup>
        </div>
    );
};

export default React.memo(Links);