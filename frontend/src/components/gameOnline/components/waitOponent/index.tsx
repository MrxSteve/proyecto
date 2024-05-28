import "./styles.css";
import { ButtonGroup, PageWrapper } from "../../../wrappers";
import AvatarImage from "../../../avatarImage";
import Loading from "../../../loading";
import Logo from "../../../logo";
import React from "react";
import type { IAuth } from "../../../../interfaces";
import Share from "../../../share";

const WaitOpponent = ({ room, state }: { room: string; state: IAuth }) => {
  const dataShare = {
    title: "YatzyJS",
    text: "Ven a jugar conmigo YatzyJS!",
    url: `${window.location.origin}/online?room=${room}`,
  };

  return (
    <PageWrapper>
      <div className="wait-opponent">
        <Logo />
        <AvatarImage
          photo={state.user?.photo || ""}
          name={state.user?.name || ""}
        />
        {room ? (
          <ButtonGroup label="Sala privada">
            <div className="wait-opponent-share">
              <Loading />
              <code className="wait-opponent-code">{room}</code>
              <Share data={dataShare}>
                <button className="button orange">Compartir codigo</button>
              </Share>
              <p>Comparte este codigo a tu amigo</p>
            </div>
          </ButtonGroup>
        ) : (
          <React.Fragment>
            <Loading />
            <h2>Buscando Oponente...</h2>
          </React.Fragment>
        )}
      </div>
    </PageWrapper>
  );
};

export default React.memo(WaitOpponent);