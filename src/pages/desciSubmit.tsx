import React, { useEffect, useState } from "react";
import HeaderMain from "./header";
import { usePrivy } from "@privy-io/react-auth";

// Extend the global Window interface
declare global {
  interface Window {
    submitItem: () => void;
  }
}

const API_URL = "https://toptop-api-facbf95cbd23.herokuapp.com/items";

const fetchData = async (title: string, url: string, body: string) => {
  // const title = document.getElementById("title")?.value;
  // const url = document.getElementById("url").value;
  // const body = document.getElementById("body").value;
  const username = localStorage.getItem("username");

  console.log("title:", title);
  console.log("url:", url);

  console.log("body:", body);

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        url: url,
        points: 0,
        text: body || "",
        author: username,
        isFlagged: 0,
        category: "DeSci"
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

const DeSciSubmit = () => {
  const [isNarrow, setIsNarrow] = useState(window.innerWidth <= 750);
  const [titleInput, setTitleInput] = useState("");
  const [urlInput, setUrlInput] = useState("");
  const [bodyInput, setBodyInput] = useState("");
  const { login } = usePrivy();
  useEffect(() => {
    const handleResize = () => {
      setIsNarrow(window.innerWidth <= 750);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // useEffect(() => {
  //   // Dynamically load the script
  //   const script = document.createElement("script");
  //   script.src = "/public/cryptoScripts/indexSubmit.js"; // Ensure this path is correct
  //   script.async = true;
  //   document.body.appendChild(script);

  //   return () => {
  //     // Cleanup the script when the component is unmounted
  //     document.body.removeChild(script);
  //   };
  // }, []);

  // const fetchData = async (id: string) => {
  //   await deleteItem(id);
  //   // Update users data after deletion
  //   const updatedUsers = await fetchData(currentPage);
  //   setUsers(updatedUsers || []);
  // };

  const handleSubmit = async () => {
    const username = localStorage.getItem("username");
    if (!username || username === "null") {
      login();
    } else {
      await fetchData(titleInput, urlInput, bodyInput);
      window.location.href = "/desci";
    }

    // Update users data after deletion
  };

  // const handleButtonClick = () => {
  //   const username = localStorage.getItem("username");
  //   if (!username || username === "null") {
  //     login();
  //   }
  //   if (window.submitItem) {
  //     window.submitItem(); // Call the global function
  //   } else {
  //     console.error("submitItem is not defined.");
  //   }
  // };
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    const remainingChars = title.length - 80;
    console.log(remainingChars > 0 ? `${remainingChars} too long` : "");
  };

  return (
    <div style={{ margin: 0 }}>
      <script src="indexSubmit.js"></script>
      <center>
        <table
          border={0}
          cellPadding={0}
          cellSpacing={0}
          style={{
            width: isNarrow ? "100%" : "85%",
            backgroundColor: "#f5f8f8",
          }}
        >
          <tbody>
            <tr>
              <td style={{ backgroundColor: "orange" }}>
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
                              href="/desci"
                            >
                              DeSci
                            </a>{" "}
                          </b>
                          <a href="/desci/new" style={{ color: "white" }}>
                            new
                          </a>{" "}
                          |{" "}
                          <a style={{ color: "white" }} href="/desci/comments">
                            comments
                          </a>{" "}
                          |{" "}
                          <a style={{ color: "white" }} href="/desci/ask">
                            ask
                          </a>{" "}
                          |{" "}
                          <a style={{ color: "white" }} href="/desci/show">
                            show
                          </a>{" "}
                          |{" "}
                          <a style={{ color: "white" }} href="/desci/jobs">
                            jobs
                          </a>{" "}
                          |{" "}
                          <a
                            style={{ color: "white" }}
                            // onClick={clickSubmit}
                            href="/desci/submit"
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
            <tr id="pagespace" style={{ height: "10px" }} title="Submit"></tr>
            <tr>
              <td>
                <table border={0}>
                  <tbody>
                    <tr>
                      <td>title</td>
                      <td>
                        <input
                          type="text"
                          name="title"
                          id="title"
                          value={titleInput}
                          onChange={(e) => setTitleInput(e.target.value)}
                          style={{ minWidth: "314px" }}
                          onInput={handleTitleChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>url</td>
                      <td>
                        <input
                          type="url"
                          name="url"
                          value={urlInput}
                          onChange={(e) => setUrlInput(e.target.value)}
                          id="url"
                          size={50}
                          style={{ width: "90%", maxWidth: "414px" }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>text</td>
                      <td>
                        <textarea
                          name="text"
                          rows={4}
                          cols={49}
                          value={bodyInput}
                          onChange={(e) => setBodyInput(e.target.value)}
                          id="body"
                        ></textarea>
                      </td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>
                        <button onClick={handleSubmit}>Submit</button>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ height: "20px" }}></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>
                        <div style={{ marginRight: "20px" }}>
                          Leave url blank to submit a question for discussion.
                          If there is no url, text will appear at the top of the
                          thread. If there is a url, text is optional.
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>{" "}
                <br />
                <br />
                <table width="100%" cellSpacing="0" cellPadding="1">
                  <tbody>
                    <tr>
                      <td style={{ backgroundColor: "orange" }}></td>
                    </tr>
                  </tbody>
                </table>
                <br />
                <center style={{ fontSize: "8px" }}>
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
};

export default DeSciSubmit;
