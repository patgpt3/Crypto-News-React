// import "./App.css";
// import { usePrivy } from "@privy-io/react-auth";

import "../../public/news.css"; // Adjust the path to your CSS file
import AIAskItems from "../components/ai/aiAskItems";
import HeaderMain from "./header";

function AIAsk() {
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
            <td style={{ backgroundColor: "purple" }}>
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
                              href="/ai"
                            >
                              AI
                            </a>{" "}
                          </b>
                          <a href="/ai/new" style={{ color: "white" }}>
                            new
                          </a>{" "}
                          |{" "}
                          <a style={{ color: "white" }} href="/ai/comments">
                            comments
                          </a>{" "}
                          |{" "}
                          <a style={{ color: "white" }} href="/ai/ask">
                            ask
                          </a>{" "}
                          |{" "}
                          <a style={{ color: "white" }} href="/ai/show">
                            show
                          </a>{" "}
                          |{" "}
                          <a style={{ color: "white" }} href="/ai/jobs">
                            jobs
                          </a>{" "}
                          |{" "}
                          <a
                            style={{ color: "white" }}
                            // onClick={clickSubmit}
                            href="/ai/submit"
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
                      <AIAskItems />
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
                      <td style={{ backgroundColor: "purple" }}></td>
                    </tr>
                  </tbody>
                </table>
                <br />
                <center
                  style={{
                    fontSize: "8px",
                    paddingLeft: "8px",
                    paddingRight: "8px",
                  }}
                >
                  The MIT License (MIT)
                  <br />
                  Copyright (c) 2024 Y Combinator Hacker News
                  {/* <br />
                  Permission is hereby granted, free of charge, to any person
                  obtaining a copy of this software and associated documentation
                  files (the "Software"), to deal in the Software without
                  restriction, including without limitation the rights to use,
                  copy, modify, merge, publish, distribute, sublicense, and/or
                  sell copies of the Software, and to permit persons to whom the
                  Software is furnished to do so, subject to the following
                  conditions:
                  <br />
                  The above copyright notice and this permission notice shall be
                  included in all copies or substantial portions of the
                  Software.
                  <br />
                  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY
                  KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
                  WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
                  PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
                  COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
                  OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
                  SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. */}
                  <br />
                </center>
              </td>
            </tr>
          </tbody>
        </table>
      </center>
    </div>
  );
}

export default AIAsk;
