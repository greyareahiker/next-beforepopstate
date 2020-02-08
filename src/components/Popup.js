import React from "react";

const Popup = ({ onClose }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <header className="popup-content--header">
          <button onClick={onClose}>X</button>
        </header>
        <section>팝업이 열렸습니다.</section>
      </div>

      <style jsx>
        {`
          .popup {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(178, 190, 195, 0.2);

          }
		  .popup-content {
			  margin: 24px
			  background-color: 
		  }
        `}
      </style>
    </div>
  );
};

export default Popup;
