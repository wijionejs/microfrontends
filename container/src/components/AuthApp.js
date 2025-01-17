import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { mount } from "auth/mount";

const AuthApp = () => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const onNavigate = ({ pathname: nextPathname }) => {
      const { pathname } = history.location;

      if (pathname !== nextPathname) {
        history.push(nextPathname);
      }
    };

    const { onParentNavigate } = mount(ref.current, { onNavigate });

    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
};

export default AuthApp;
