// import "./App.css";
import { usePrivy } from "@privy-io/react-auth";
import "../../public/news.css"; // Adjust the path to your CSS file
import HeaderMain from "./header";
import DePINNewItems from "../components/depin/depinNewItems";

function DePINNew() {
  const { login } = usePrivy();


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
            <td style={{ backgroundColor: "red" }}>
                <table
                  border={0}
                  cellPadding={0}
                  cellSpacing={0}
                  style={{ padding: "2px", width: "100%" }}
                >
                  <tbody>
                    <tr>
                      <td
                        style={{
                          lineHeight: "12pt",
                          height: "18px",
                          color: "white",
                        }}
                      >
                        <span className="pagetop" style={{ color: "white" }}>
                          <b className="hnname" style={{ color: "white" }}>
                            <a
                              style={{ color: "white", marginLeft: "3px" }}
                              href="/depin"
                            >
                              DePIN
                            </a>{" "}
                          </b>
                          <a href="/depin/new" style={{ color: "white" }}>
                            new
                          </a>{" "}
                          |{" "}
                          <a style={{ color: "white" }} href="/depin/comments">
                            comments
                          </a>{" "}
                          |{" "}
                          <a style={{ color: "white" }} href="/depin/ask">
                            ask
                          </a>{" "}
                          |{" "}
                          <a style={{ color: "white" }} href="/depin/show">
                            show
                          </a>{" "}
                          |{" "}
                          <a style={{ color: "white" }} href="/depin/jobs">
                            jobs
                          </a>{" "}
                          |{" "}
                          <a
                            style={{ color: "white" }}
                            // onClick={clickSubmit}
                            href="/depin/submit"
                            rel="nofollow"
                          >
                            submit
                          </a>
                        </span>
                      </td>
                      <td
                        style={{
                          textAlign: "right",
                          paddingRight: "4px",
                          color: "white",
                        }}
                      >
                  
                        <HeaderMain />
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
                      <DePINNewItems />
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
                      <td style={{ backgroundColor: "red" }}></td>
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

export default DePINNew;
