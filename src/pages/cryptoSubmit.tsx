import React, { useEffect, useState } from "react";
import HeaderMain from "./header";
import { usePrivy } from "@privy-io/react-auth";

// Extend the global Window interface
declare global {
    interface Window {
      submitItem: () => void;
    }
  }

const CryptoSubmit = () => {
  const [isNarrow, setIsNarrow] = useState(window.innerWidth <= 750);
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
  useEffect(() => {
    // Dynamically load the script
    const script = document.createElement("script");
    script.src = "/public/cryptoScripts/indexSubmit.js"; // Ensure this path is correct
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup the script when the component is unmounted
      document.body.removeChild(script);
    };
  }, []);


  const handleButtonClick = () => {
    const username = localStorage.getItem("username");
      if (!username || username === "null") {
        login();
      }
    if (window.submitItem) {
      window.submitItem(); // Call the global function
    } else {
      console.error("submitItem is not defined.");
    }
  };
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
              <td style={{ backgroundColor: "#053eff" }}>
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
                          <a style={{ color: "white" }} href="/crypto/ask">
                            ask
                          </a>{" "}
                          |{" "}
                          <a style={{ color: "white" }} href="/crypto/show">
                            show
                          </a>{" "}
                          |{" "}
                          <a style={{ color: "white" }} href="/crypto/jobs">
                            jobs
                          </a>{" "}
                          |{" "}
                          <a
                            style={{ color: "white" }}
                            // onClick={submitItem()}
                            href="/crypto/submit"
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
                        <a style={{ color: "white" }} href="./index.html">
                          TopTop |
                        </a>
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
                          id="body"
                        ></textarea>
                      </td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>
                        <button onClick={handleButtonClick}>Submit</button>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ height: "20px" }}></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>
                        Leave url blank to submit a question for discussion. If
                        there is no url, text will appear at the top of the
                        thread. If there is a url, text is optional.
                      </td>
                    </tr>
                  </tbody>
                </table>
                <br />
                <center style={{ fontSize: "8px" }}>
                  The MIT License (MIT)
                  <br />
                  Copyright (c) 2024 Y Combinator Hacker News
                  <br />
                  Permission is hereby granted, free of charge, to any person
                  obtaining a copy of this software and associated documentation
                  files (the "Software"), to deal in the Software without
                  restriction, including without limitation the rights to use,
                  copy, modify, merge, publish, distribute, sublicense, and/or
                  sell copies of the Software, and to permit persons to whom the
                  Software is furnished to do so, subject to the following
                  conditions:
                  <br />
                  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY
                  KIND.
                </center>
              </td>
            </tr>
          </tbody>
        </table>
      </center>
    </div>
  );
};

export default CryptoSubmit;
