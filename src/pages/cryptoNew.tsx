// import "./App.css";
import { usePrivy } from "@privy-io/react-auth";
import "../../public/news.css"; // Adjust the path to your CSS file
// import CryptoNewItems from "../components/crypto/cryptoNewItems";
import HeaderMain from "./header";

function CryptoNew() {
  const { login } = usePrivy();

  const clickSubmit = () => {
    // handle submit click
  };
  // Add click listeners to .cnUser elements
  const voteElements = document.querySelectorAll(".cnUpVote");

  voteElements.forEach((voteElement) => {
    voteElement.addEventListener("click", () => {
      const username = localStorage.getItem("username");
      if (!username || username === "null") {
        login();
      }
    });
  });

  return (
    <div id="root">
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
                          <a href="/crypto/new" style={{ color: "white" }}>
                            new
                          </a>{" "}
                          |{" "}
                          <a style={{ color: "white" }} href="/crypto/comments">
                            comments
                          </a>{" "}
                          |{" "}
                          <a style={{ color: "white" }} href="./cn_ask.html">
                            ask
                          </a>{" "}
                          |{" "}
                          <a style={{ color: "white" }} href="./cn_show.html">
                            show
                          </a>{" "}
                          |{" "}
                          <a style={{ color: "white" }} href="./cn_jobs.html">
                            jobs
                          </a>{" "}
                          |{" "}
                          <a
                            style={{ color: "white" }}
                            onClick={clickSubmit}
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
                          <a style={{ color: "white" }} href="./index.html">
                            TopTop |
                          </a>
                          <HeaderMain />
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr id="pagespace" style={{ height: "5px" }}></tr>
            <tr>
              <td>
                <table cellPadding="0" cellSpacing="0">
                  <tbody>
                    <div style={{ paddingLeft: "8px", paddingRight: "8px" }}>
                      {/* <CryptoNewItems /> */}
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

export default CryptoNew;
