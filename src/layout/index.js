import React, { useState, useEffect } from "react";
import { useRouter } from "next/dist/client/router";
import Popup from "../components/Popup";

const Layout = ({ children }) => {
  const router = useRouter();
  const [popup, setPopup] = useState(false);

  useEffect(() => {
    if (router?.query?.popup === "open") {
      setPopup(true);
    }
  }, [router?.query]);

  return (
    <div className="page">
      {children}
      {popup && <Popup onClose={() => setPopup(false)} />}
      <style jsx>
        {`
          .page {
            width: 100vw;
            height: 100vh;
            padding: 24px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
          }
        `}
      </style>
    </div>
  );
};

export default Layout;
