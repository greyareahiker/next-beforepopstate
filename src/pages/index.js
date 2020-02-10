import React from "react";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import Layout from "../layout";

export default () => {
  return (
    <div className="page">
      <Layout>
        <header className="page-header">
          <h1>Next.js beforePopState Ex</h1>
        </header>
        <section className="button_section">
          <Link href={"/popupex"}>
            <a>팝업 예제 페이지로 이동</a>
          </Link>
        </section>
      </Layout>

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
          .button_section a {
            font-size: 1em;
            border: 1px solid red;
          }
        `}
      </style>
    </div>
  );
};
