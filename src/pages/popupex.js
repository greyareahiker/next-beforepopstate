import React from "react";
import { useRouter } from "next/dist/client/router";
import Layout from "../layout";

const popupex = ({}) => {
  const router = useRouter();
  return (
    <Layout>
      <p>팝업 예제 페이지</p>
      <section className="button_section">
        <button
          onClick={() =>
            router.push(
              { pathname: router.pathname, query: { popup: "open" } },
              { pathname: router.pathname, query: { popup: "open" } },
              { shallow: true }
            )
          }
        >
          팝업 열기
        </button>
        <button onClick={() => router.back()}>돌아가기</button>
      </section>
      <style jsx>
        {`
          .button_section {
            display: flex;
            justify-content: space-around;
            align-items: center;
          }
        `}
      </style>
    </Layout>
  );
};

export default popupex;
