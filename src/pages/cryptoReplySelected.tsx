// import "./App.css";
// import { usePrivy } from "@privy-io/react-auth";
import { useEffect, useState } from "react";
import "../../public/news.css"; // Adjust the path to your CSS file
import HeaderMain from "./header";
import CryptoSelectedReply1 from "../components/crypto/cryptoSelectedReply1";
import { usePrivy } from "@privy-io/react-auth";
import { useParams } from "react-router-dom";
const API_URL = "https://toptop-api-facbf95cbd23.herokuapp.com/replies";

const fetchData = async (body: string, id: string) => {
  // const title = document.getElementById("title")?.value;
  // const url = document.getElementById("url").value;
  // const body = document.getElementById("body").value;
  const username = localStorage.getItem("username");

  // console.log("body:", body);

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        points: 0,
        reply: body || "",
        author: username,
        isFlagged: 0,
        commentId: id,
        parentReply: id,
        replies: [],
      }),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    console.log("from within:", data);
    return data;
    // Use this data as needed in your frontend
  } catch (error) {
    console.error("Fetch error:", error);
  }
};
function CryptoReplySelected() {
  const { login } = usePrivy();
  const [bodyInput, setBodyInput] = useState("");
  const [idInput, setIdInput] = useState("");
  const { id } = useParams<{ id: string }>();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    // Dynamically load the script
    const script = document.createElement("script");
    script.src = "/public/cryptoScripts/indexReplyIndividual.js"; // Ensure this path is correct
    script.async = true;
    document.body.appendChild(script);
    setIdInput(`${id}`);

    return () => {
      // Cleanup the script when the component is unmounted
      document.body.removeChild(script);
    };
  }, []);

  const handleSubmitReply = async () => {
    const username = localStorage.getItem("username");
    if (!username || username === "null") {
      login();
    } else {
      await fetchData(bodyInput, idInput);
      window.location.href = `/crypto-comments`;
    }
  };

  return (
    <div id="root">
      <script src="indexReplyIndividual.js"></script>
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
                          <a style={{ color: "white" }} href="/crypto/jobs">
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

                          <HeaderMain></HeaderMain>
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr id="pagespace" title="" style={{ height: "10px" }}></tr>
            <tr>
              <td>
                <table
                  border={0}
                  cellPadding={0}
                  cellSpacing={0}
                  style={{ marginLeft: "10px" }}
                >
                  <tbody>
                    <tr>
                      <td>
                        <table className="fatitem" border={0}>
                          <tbody>
                            <CryptoSelectedReply1 />
                            <br />
                            <tr>
                              <td>
                                <textarea
                                  id="reply"
                                  name="text"
                                  rows={8}
                                  cols={80}
                                  wrap="virtual"
                                  value={bodyInput}
                                  onChange={(e) => setBodyInput(e.target.value)}
                                ></textarea>
                                <br />
                                <br />
                                <button onClick={handleSubmitReply}>
                                  Reply
                                </button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <br />
                        <br />
                        <table border={0} className="comment-tree">
                          <tbody>
                            <div
                              id="commentsIndex"
                              style={{ marginLeft: "3vw" }}
                            ></div>
                          </tbody>
                        </table>
                        <br />
                        <br />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td>
                <img
                  src="./Hacker News_files/s.gif"
                  height={10}
                  width={0}
                  alt=""
                />
                <table width="100%" cellSpacing={0} cellPadding={1}>
                  <tbody>
                    <tr>
                      <td style={{ backgroundColor: "#053eff" }}></td>
                    </tr>
                  </tbody>
                </table>
                <br />
                <center style={{ fontSize: "8px" }}>
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

export default CryptoReplySelected;
