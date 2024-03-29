import React, { useState, useEffect } from "react";
import "./LandingPage.scss";
import IconContainer from "../../components/Icon/IconContainer";
import Loading from "../../components/Loading/Loading";
import Icon from "../../components/Icon/Icon";
import Mobile from "../../components/Mobile/Mobile";
import DESKTOP from "../../content/desktopContent";
import { FILE_TYPE } from "../../constants";
import RECYCLE from "../../content/recycleContent";
import { windowComplete } from "../../utils";

const LandingPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      windowComplete();
    }, 400);
  }, []);

  const loadingDone = () => {
    setLoading(false);
  };

  return window.innerWidth < 700 ? (
    <Mobile />
  ) : (
    <div className="landing">
      <div className="landing__background" />
      <div id="windowSpawn" className="landing__windowSpawn" />
      <div className="landing__desktop">
        <IconContainer
          icons={DESKTOP}
          direction="column"
          length={0}
          loading={loading}
        />
      </div>
      <div className="landing__recycle">
        <Icon
          id="desktop_recycle"
          size={{ x: 400, y: 280 }}
          pos={{ x: -250, y: 220 }}
          title="Recycling Bin"
          type={FILE_TYPE.RECYCLE}
          content={<IconContainer direction="row" icons={RECYCLE} />}
        />
      </div>
      <Loading loadingDone={loadingDone} />
    </div>
  );
};

export default LandingPage;
