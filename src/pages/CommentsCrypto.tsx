// import "./App.css";
// import { usePrivy } from "@privy-io/react-auth";
// import { useEffect } from "react";
import "../../public/news.css"; // Adjust the path to your CSS file
import CommentsPage from "../components/crypto/cryptoCommentItems2";
import HeaderMain from "./header";

function CommentsCrypto() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const { login, logout, authenticated } = usePrivy();

  // // eslint-disable-next-line react-hooks/rules-of-hooks
  // useEffect(() => {
  //   // Dynamically load the script
  //   const script = document.createElement("script");
  //   script.src = "/public/cryptoScripts/indexComments.js"; // Ensure this path is correct
  //   script.async = true;
  //   document.body.appendChild(script);

  //   return () => {
  //     // Cleanup the script when the component is unmounted
  //     document.body.removeChild(script);
  //   };
  // }, []);

  return (
    <div id="root">
      {/* <script src="indexComments.js"></script> */}
      <center>
        <table
          id="hnmain"
          cellPadding="0"
          cellSpacing="0"
          width="85%"
          style={{ backgroundColor: "#f5f8f8" }}
        >
          <tbody>
            <tr>
              <td style={{ backgroundColor: "#053eff" }}>
                <table
                  cellPadding="0"
                  cellSpacing="0"
                  width="100%"
                  style={{ padding: "2px" }}
                >
                  <tbody>
                    <tr>
                      <td style={{ lineHeight: "12pt", height: "18px" }}>
                        <span className="pagetop" style={{ color: "white" }}>
                          <b className="hnname" style={{ color: "white" }}>
                            <a
                              style={{ color: "white", marginLeft: "3px" }}
                              href="/crypto"
                            >
                              Crypto
                            </a>{" "}
                          </b>
                          <a href="/crypto-new" style={{ color: "white" }}>
                            new
                          </a>{" "}
                          |{" "}
                          <a style={{ color: "white" }} href="/crypto-comments">
                            comments
                          </a>{" "}
                          |{" "}
                          <a style={{ color: "white" }} href="/crypto-ask">
                            ask
                          </a>{" "}
                          |{" "}
                          <a style={{ color: "white" }} href="/crypto-show">
                            show
                          </a>{" "}
                          |{" "}
                          <a style={{ color: "white" }} href="/crypto-jobs">
                            jobs
                          </a>{" "}
                          |{" "}
                          <a
                            style={{ color: "white" }}
                            // onClick={clickSubmit}
                            href="/crypto-submit"
                            rel="nofollow"
                          >
                            submit
                          </a>
                        </span>
                      </td>
                      <td style={{ textAlign: "right", paddingRight: "4px" }}>
                        <span
                          className="pagetop"
                          style={{ color: "white", display: "block" }}
                        >
                          <div id="log" style={{ cursor: "pointer" }}>
                            {/* Optional Login Info */}
                          </div>
                          {/* <a
                            style={{ paddingLeft: '5px', color: 'white', cursor: 'pointer' }}
                            id="loginButton"
                            onClick={clickLog}
                          >
                            {username ? `${username} |` : 'login'}
                          </a> */}

                          <HeaderMain />
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr id="pagespace" style={{ height: "10px" }}></tr>
            <tr>
              <td>
                <table cellPadding="0" cellSpacing="0">
                  <tbody>
                  <tr id="pagespace" style={{ height: "10px" }}></tr>
                    <div style={{ paddingLeft: "8px", paddingRight: "8px" }}>
                      <CommentsPage />
                    </div>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td>
                <img src="./Hacker News_files/s.gif" height="10" width="0" />
                <table width="100%" cellSpacing="0" cellPadding="1">
                  <tbody>
                    <tr>
                      <td style={{ backgroundColor: "#053eff" }}></td>
                    </tr>
                  </tbody>
                </table>
                <br />
                <center style={{ fontSize: "8px" }}>
                  The MIT License (MIT)
                  <br />
                  Copyright (c) 2024 Y Combinator Hacker News
                  <br />
                  {/* Copyright text */}
                </center>
              </td>
            </tr>
          </tbody>
        </table>
      </center>
    </div>
  );
}

export default CommentsCrypto;
