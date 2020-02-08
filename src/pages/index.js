import React from "react";
import { useRouter } from "next/dist/client/router";

export default () => {
  const router = useRouter();
  return (
    <div className="page">
      <header className="page-header">
        <h1>Next.js beforePopState Ex</h1>
      </header>
      <section className="button_section">
        <button>팝업 예제</button>
      </section>
      <style jsx>
        {`
          .page {
            position: relative;
            padding: 24px;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
          }
          .page-header {
            width: 100%;
            margin-bottom: 16px;
          }
          h1 {
            font-size: 1.5em;
            text-align: center;
          }
          .button_section {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .button_section button {
            font-size: 1em;
            border: 1px solid red;
          }
        `}
      </style>
    </div>
  );
};
