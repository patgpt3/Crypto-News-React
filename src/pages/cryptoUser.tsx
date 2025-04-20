// import "./App.css";
// import { usePrivy } from "@privy-io/react-auth";
import { useEffect } from "react";
import "../../public/news.css"; // Adjust the path to your CSS file
import HeaderMain from "./header";
import IndexSelectedUser from "../components/crypto/userContent";

function CryptoUser() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    // Dynamically load the script
    const script = document.createElement("script");
    script.src = "/public/cryptoScripts/indexIndividual.js"; // Ensure this path is correct
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup the script when the component is unmounted
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="root">
      <script src="indexIndividual.js"></script>
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
            <td style={{ backgroundColor: "grey" }}>
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
                              href="/"
                            >
                              TopTop Network
                            </a>{" "}
                          </b>
                          <a href="/crypto" style={{ color: "white" }}>
                            Crypto
                          </a>{" "}
                          |{" "}
                          <a style={{ color: "white" }} href="/ai">
                            AI
                          </a>{" "}
                          |{" "}
                          <a style={{ color: "white" }} href="/memecoins">
                            Memecoins
                          </a>{" "}
                          |{" "}
                          <a style={{ color: "white" }} href="/depin">
                            DePIN
                          </a>{" "}
                          |{" "}
                          <a style={{ color: "white" }} href="/nft">
                            NFT
                          </a>{" "}
                          |{" "}
                          <a
                            style={{ color: "white" }}
                            // onClick={clickSubmit}
                            href="/desci"
                            rel="nofollow"
                          >
                            DeSCI
                          </a>{" "}
                          |{" "}
                          <a style={{ color: "white" }} href="/film">
                            Film
                          </a>{" "}
                          |{" "}
                          <a style={{ color: "white" }} href="/gaming">
                            Gaming
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

                          <HeaderMain></HeaderMain>
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
                    <div
                      style={{
                        paddingLeft: "20px",
                        paddingRight: "20px",
                        paddingTop: "20px",
                      }}
                    >
                      <IndexSelectedUser></IndexSelectedUser>
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
                      <td style={{ backgroundColor: "grey" }}></td>
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

                  Copyright (c) 2024 Y Combinator Hacker News

                  Permission is hereby granted, free of charge, to any person
                  obtaining a copy of this software and associated documentation
                  files (the "Software"), to deal in the Software without
                  restriction, including without limitation the rights to use,
                  copy, modify, merge, publish, distribute, sublicense, and/or
                  sell copies of the Software, and to permit persons to whom the
                  Software is furnished to do so, subject to the following
                  conditions:

                  The above copyright notice and this permission notice shall be
                  included in all copies or substantial portions of the
                  Software.

                  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY
                  KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
                  WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
                  PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
                  COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
                  OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
                  SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
                  <br />
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

export default CryptoUser;
