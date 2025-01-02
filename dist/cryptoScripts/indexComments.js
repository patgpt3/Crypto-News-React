
localStorage.removeItem("selectedItem");
// Replace with your actual Heroku API endpoint
// const API_URL_COMMENTS =
//   ;

// Example function to get data from your API
async function fetchData(pageNum) {
  try {
    const response = await fetch("https://crypto-api-3-6bf97d4979d1.herokuapp.com/comments/comments/newest/pages", {
      method: "PUT", // or 'POST', 'PUT', 'DELETE', depending on the endpoint
      headers: {
        "Content-Type": "application/json",
        // Add any required headers, like authorization, here if needed
      },
      body: JSON.stringify({
        pageNumber: pageNum || 0,
      }),
    });
    console.log(response);

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    return data;
    // Use this data as needed in your frontend
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

async function deleteComment(id) {
  const UPVOTE_URL = `https://crypto-api-3-6bf97d4979d1.herokuapp.com/comments/${id}`;
  try {
    const response = await fetch(UPVOTE_URL, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Handle the API response data
      })
      .catch((error) => {
        // Handle errors
        console.error("Error:", error);
      });

    console.log(response);

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    return data;
    // Use this data as needed in your frontend
  } catch (error) {
    console.error("Fetch error:", error);
  }
}
async function deleteReply(id) {
  const UPVOTE_URL = `https://crypto-api-3-6bf97d4979d1.herokuapp.com/replies/${id}`;
  try {
    const response = await fetch(UPVOTE_URL, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Handle the API response data
      })
      .catch((error) => {
        // Handle errors
        console.error("Error:", error);
      });

    console.log(response);

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    return data;
    // Use this data as needed in your frontend
  } catch (error) {
    console.error("Fetch error:", error);
  }
}
// An async function to access data outside fetchData
async function main() {
  // localStorage.setItem("pageNumberAsk", 0);
  const pageNumberInput = localStorage.getItem("pageNumberComment");

  const numberInput = parseInt(pageNumberInput) || 0;


  const users = await fetchData(numberInput);

  if (users.length < 30) {
    //hide more

    const moreButton = document.getElementById("next-page-comment");
    moreButton.style.display = "none";
  }

  if (numberInput === 0) {
    //hide back
    const moreButton = document.getElementById("back-page-comment");
    moreButton.style.display = "none";
  }


  function stripToDomain(url) {
    const urlObj = new URL(url);
    const hostname = urlObj.hostname;

    // Remove 'www.' if present
    const domain = hostname.replace(/^www\./, "");

    // Split by '.' and get the last two parts
    const parts = domain.split(".");
    const domainCom = parts.slice(-2).join(".");

    return domainCom;
  }

  async function UpVoteComment(id) {
    const username = localStorage.getItem("username");

    const UPVOTE_URL = `https://crypto-api-3-6bf97d4979d1.herokuapp.com/comments/upVote/${id}`;
    try {
      const response = await fetch(UPVOTE_URL, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          currentUserName: username,
        }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          // Handle the API response data
        })
        .catch((error) => {
          // Handle errors
          console.error("Error:", error);
        });

      console.log(response);

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      return data;
      // Use this data as needed in your frontend
    } catch (error) {
      console.error("Fetch error:", error);
    }
  }

  async function DownVoteComment(id) {
    const username = localStorage.getItem("username");

    const UPVOTE_URL = `https://crypto-api-3-6bf97d4979d1.herokuapp.com/comments/downVote/${id}`;
    try {
      const response = await fetch(UPVOTE_URL, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          currentUserName: username,
        }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          // Handle the API response data
        })
        .catch((error) => {
          // Handle errors
          console.error("Error:", error);
        });

      console.log(response);

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      return data;
      // Use this data as needed in your frontend
    } catch (error) {
      console.error("Fetch error:", error);
    }
  }
  async function UpVoteReply(id) {
    const username = localStorage.getItem("username");

    const UPVOTE_URL = `https://crypto-api-3-6bf97d4979d1.herokuapp.com/replies/upVote/${id}`;
    try {
      const response = await fetch(UPVOTE_URL, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          currentUserName: username,
        }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          // Handle the API response data
        })
        .catch((error) => {
          // Handle errors
          console.error("Error:", error);
        });

      console.log(response);

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      return data;
      // Use this data as needed in your frontend
    } catch (error) {
      console.error("Fetch error:", error);
    }
  }

  async function DownVoteReply(id) {
    const username = localStorage.getItem("username");

    const UPVOTE_URL = `https://crypto-api-3-6bf97d4979d1.herokuapp.com/replies/downVote/${id}`;
    try {
      const response = await fetch(UPVOTE_URL, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          currentUserName: username,
        }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          // Handle the API response data
        })
        .catch((error) => {
          // Handle errors
          console.error("Error:", error);
        });

      console.log(response);

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      return data;
      // Use this data as needed in your frontend
    } catch (error) {
      console.error("Fetch error:", error);
    }
  }
  function timeSince(date) {
    var seconds = Math.floor((new Date() - date) / 1000);

    var interval = seconds / 31536000;

    if (interval > 1) {
      return Math.floor(interval) + " years ago";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + " months ago";
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + " days ago";
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + " hours ago";
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + " minutes ago";
    }
    return Math.floor(seconds) + " seconds ago";
  }
  async function fetchReplies(itemReplies, index1) {
    const USER_URL = `https://crypto-api-3-6bf97d4979d1.herokuapp.com/replies/replies/findbyIds`;
    try {
      const response = await fetch(USER_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ replies: itemReplies }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const datas = await response.json();
      const currentUserMap = localStorage.getItem("username");

      // Helper function to recursively generate nested replies
      const generateReplyHTML = (data, depth = 0) => {
        const marginLeft = 10 + depth * 20; // Increase margin for nested levels
        return `
          <tr class="athing" id="${data._id}">
            <div style="margin-left:${marginLeft}px;">
              <td class="default">
                <div style="margin-bottom:-10px;">
                  <span class="comhead">
                    <a id="up_${data._id}" style="cursor: default;">
                      <span style='font-size:10px; margin-right: 4px; margin-left: 4px;'>
                        <img style="cursor: pointer;" id="${
                          data._id
                        }" src="/Hacker News_files/tpp.png" height="18" class="cnReplyUpVote" style="margin-right:8px;">
                      </span>
                    </a>
                    <a class="cnUser" style="cursor: pointer;">${data?.author || ""}</a>
                    <span class="age" title="${data.createdAt}">
                      <a style="pointer-events: none; cursor: default;">| ${timeSince(
                        new Date(data.createdAt)
                      )}</a>
                    </span>
                    <span style="pointer-events: none; cursor: default;">| ${
                      data.points
                    } points</span>
                    <a class="replyFlags" style="cursor: pointer;"id="${
                      data._id
                    }[" style="visibility: ${
          currentUserMap && currentUserMap !== "null" ? "visible" : "hidden"
        }">| ${data.author === currentUserMap ? "delete?" : "flag?"}</a>
        <a style="visibility: hidden;" id="${
          data._id
        }$" class="cnReplyDownVote"> 
                                   | unvote
                                 </a>
                  </span>
                </div><br>
                <div class="comment">
                  <div class="commtext c00" style="margin-left:40px;">${
                    data.reply
                  }</div>
         <div  style="margin-left:40px;">        <p><font size="1">
                      <u><a class="replyReply" id="${data._id}&" name="${
          data.commentId
        }"rel="nofollow" style="cursor: pointer;">reply</a></u>
                  </font>
      </p></div>
                </div>
              </td>
            </div>
          </tr>
          <div style="height: 8px;"></div>
          ${
            data.replies
              ? data.replies
                  .map((nestedReply) =>
                    generateReplyHTML(nestedReply, depth + 1)
                  )
                  .join("")
              : ""
          }
        `;
      };

      // Generate the HTML for each top-level reply with nested replies
      const mappedReplies = datas
        .map((data) => generateReplyHTML(data))
        .join("");

      if (document.getElementById(`replies${index1}`)) {
        document.getElementById(`replies${index1}`).innerHTML = mappedReplies;
      }

      const ReplyVoteElements = document.querySelectorAll(".cnReplyUpVote");

      await fetchCurrentUser1();

      ReplyVoteElements.forEach((voteElement, index) => {
        voteElement.addEventListener("click", () => {
          const username = localStorage.getItem("username");
          if (!username || username === "null") {
            window.location.href = "./login.html";
          }


          voteElement.style.visibility = "hidden";
          UpVoteReply(voteElement.id);
          const unvoteE = document.getElementById(`${voteElement.id}$`);

          unvoteE.style.visibility = "visible";
        });
      });
      //reples of preles
      const repls = document.querySelectorAll(".replyReply");
      repls.forEach((element) => {
        element.addEventListener("click", () => {
          const replyId = element.id.replace("&", "");
          const commentId = element.name;
          localStorage.setItem("selectedCommentIn", commentId);
          localStorage.setItem("selectedReplyIn", replyId);
          window.location.href = "/crypto/comments/reply";
        });
      });

      const replyFlags = document.querySelectorAll(".replyFlags");

      replyFlags.forEach((element) => {
        element.addEventListener("click", () => {
          if (element.textContent === "| delete?") {
            element.textContent = "deleted";
          } else {
            element.textContent = "flagged";
          }
          const itemId = element.id.replace("[", "");
          deleteReply(itemId);
        });
      });
      const ReplyUnVoteElements = document.querySelectorAll(".cnReplyDownVote");

      ReplyUnVoteElements.forEach((unvoteElement, index) => {
        unvoteElement.addEventListener("click", () => {
          const itemId = unvoteElement.id.replace("$", "");

          unvoteElement.style.visibility = "hidden";

          DownVoteReply(itemId);

          upVoteElement = document.getElementById(itemId);

          upVoteElement.style.visibility = "visible";
        });

        // Add click listeners to .cnUser elements
        const elements = document.querySelectorAll(".cnUser");
        elements.forEach((element) => {
          element.addEventListener("click", () => {
            localStorage.setItem("SelectedUser", element.textContent);
            window.location.href = "/user";
          });
        });
      });

      // Use this data as needed in your frontend
    } catch (error) {
      console.error("Fetch error:", error);
    }
  }
  // const response = await fetch("https://example.org/products.json").json();

  // ex = getData();
  const currentUserMap = localStorage.getItem("username");
  const mappedUsers = users
    .map((user, index) => {
      if (user.replies.length > 0) {
        fetchReplies(user.replies, user._id);
      }

      return `<tr class="athing" id="41790045">
        
             
            
          <div>
              <td class="default">
            
                  <div style="margin-top:2px; margin-bottom:-10px;"><span class="comhead">
                  <a id="up_41790045" class="clicky">
                          <span
                              style='font-size:10px; margin-right: 4px;margin-left: 4px;'><img style="cursor: pointer;" id="${
                                user._id
                              }"
                              src="/Hacker News_files/tpp.png" height="18" class="cnCommentUpVote"
                              style="margin-right:8px;"></span>
                      </a>
                          <a id="user${index}" class="cnUser" style="cursor: pointer;">${
        user ? user?.author : ""
      }</a> <span class="age"
                              title="2024-10-09T16:55:00.000000Z" style="pointer-events: none;
  cursor: default;"><a> | 
                              ${timeSince(
                                new Date(user?.createdAt)
                              )}</a></span> <span style="pointer-events: none;
  cursor: default;"> | ${user.points} points</span> 
                              <span id="unv_41790045"></span> 
                              <span ><a class="cnContext"  style="cursor: pointer;" id="${
                                user?.item
                              }%"> | context</a></span> 
                              <span id="unv_41790045"></span> 
                               <a  class="flags" style="cursor: pointer;" id="${
                                 user._id
                               }[" style="visibility: ${
        currentUserMap
          ? currentUserMap === "null"
            ? "hidden"
            : "visible"
          : "hidden"
      }">| ${user.author === currentUserMap ? "delete?" : "flag?"}</a>
                               <a style="visibility: hidden;cursor: pointer;" id="${
                                 user._id
                               }$" class="cnCommentDownVote" > 
                               | unvote
                             </a>
                      </span></div><br>
                  <div class="comment">
                      <a>
                          <div class="commtext c00" style="margin-left:40px;">${
                            user?.comment
                          }</div>
                      </a>
                      <div  style="margin-left:40px;">        <p><font size="1">
                      <u><a class="reply" id="${
                        user._id
                      }&"rel="nofollow" style="cursor: pointer;">reply</a></u>
                  </font>
      </p></div>
                  </div>
              </td>
           </div>
          </tr>

<div style="margin-left:40px;"id="replies${user._id}"></div>
<div style="height: 8px;"></div>
                  `;
    })
    .join("");

  document.getElementById("containerComments").innerHTML = mappedUsers;
  // Add click listeners to .cnUser elements
  const elements = document.querySelectorAll(".cnUser");
  elements.forEach((element) => {
    element.addEventListener("click", () => {
      localStorage.setItem("SelectedUser", element.textContent);
      window.location.href = "/user";
    });
  });
  const flags = document.querySelectorAll(".flags");

  flags.forEach((element) => {
    element.addEventListener("click", () => {
      if (element.textContent === "| delete?") {
        element.textContent = "| deleted";
      } else {
        element.textContent = "| flagged";
      }
      const itemId = element.id.replace("[", "");
      deleteComment(itemId);
    });
  });
  const commentUpVoteElements = document.querySelectorAll(".cnCommentUpVote");

  commentUpVoteElements.forEach((commentUpVoteElement, index) => {
    commentUpVoteElement.addEventListener("click", () => {
      const username = localStorage.getItem("username");
      if (!username || username === "null") {
        window.location.href = "./login.html";
      }

  

      commentUpVoteElement.style.visibility = "hidden";
      UpVoteComment(commentUpVoteElement.id);
      const unvoteE = document.getElementById(`${commentUpVoteElement.id}$`);

      unvoteE.style.visibility = "visible";
    });
  });

  const commentUnVoteElements = document.querySelectorAll(".cnCommentDownVote");

  commentUnVoteElements.forEach((commentUnVoteElement, index) => {
    commentUnVoteElement.addEventListener("click", () => {
      const itemId = commentUnVoteElement.id.replace("$", "");

      commentUnVoteElement.style.visibility = "hidden";

      DownVoteComment(itemId);

      upVoteElement = document.getElementById(itemId);

      upVoteElement.style.visibility = "visible";
    });
  });
  const repls = document.querySelectorAll(".reply");
  repls.forEach((element) => {
    element.addEventListener("click", () => {
      const commentId = element.id.replace("&", "");
      localStorage.setItem("selectedCommentIn", commentId);
      window.location.href = "/crypto/comments/selected";
    });
  });

  const contexts = document.querySelectorAll(".cnContext");

  contexts.forEach((context) => {
    context.addEventListener("click", () => {
      const itemId = context.id.replace("%", "");

      localStorage.setItem("selectedItem", itemId);
      window.location.href = "/crypto/item";
    });
  });

  // Add event listener for the change email button
  const addNEXTButtonEvent = document.getElementById("next-page-comment");
  addNEXTButtonEvent.addEventListener("click", () => {
    const page = localStorage.getItem("pageNumberComment");

    const num = parseInt(page) === NaN ? 0 : parseInt(page);

    localStorage.setItem("pageNumberComment", num ? num + 1 : 1);
    window.location.href = "/crypto/comments";
  });

  // Add event listener for the change email button
  const addbackButtonEvent = document.getElementById("back-page-comment");
  addbackButtonEvent.addEventListener("click", () => {
    const page = localStorage.getItem("pageNumberComment");

    const num = parseInt(page);

    localStorage.setItem("pageNumberComment", num - 1);
    window.location.href = "/crypto/comments";
  });
}

main(); // Call main to execute and retrieve the data

async function fetchCurrentUser1() {
  const username = localStorage.getItem("username");
  const USER_URL = `https://crypto-api-3-6bf97d4979d1.herokuapp.com/users/findProtected/${username}`;
  try {
    const response = await fetch(USER_URL, {
      method: "GET", // or 'POST', 'PUT', 'DELETE', depending on the endpoint
      headers: {
        "Content-Type": "application/json",
        // Add any required headers, like authorization, here if needed
      },
    });

    console.log(response);

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();

    const voteElements = document.querySelectorAll(".cnUpVote");
    voteElements.forEach((voteElement) => {
      if (data.upvotedSubmissions.includes(voteElement.id)) {
        voteElement.style.visibility = "hidden";
        const unvoteE = document.getElementById(`${voteElement.id}$`);

        unvoteE.style.visibility = "visible";
      }
    });
    const commentVoteElements = document.querySelectorAll(".cnCommentUpVote");
    commentVoteElements.forEach((voteElement) => {
      if (data.upvotedSubmissions.includes(voteElement.id)) {
        voteElement.style.visibility = "hidden";
        const unvoteE = document.getElementById(`${voteElement.id}$`);

        unvoteE.style.visibility = "visible";
      }
    });
    const ReplyVoteElements = document.querySelectorAll(".cnReplyUpVote");
    ReplyVoteElements.forEach((voteElement, index) => {
      if (data.upvotedSubmissions.includes(voteElement.id)) {
        voteElement.style.visibility = "hidden";
        const unvoteE = document.getElementById(`${voteElement.id}$`);

        unvoteE.style.visibility = "visible";
      }
    });
    return data;
    // Use this data as needed in your frontend
  } catch (error) {
    console.error("Fetch error:", error);
  }
}
fetchCurrentUser1();



// data = main();


// const users = [
//   {
//     _id: "67126a83fae17be26091a245",
//     title: "11111Crypto adoption on track to hit 8% by 2025: Report",
//     url: "https://cointelegraph.com/news/global-crypto-adoption-nears-8-percent-milestone-by-2025",
//     points: 8,
//     author: "degen35",
//     isFlagged: 0,
//     createdAt: "2024-10-18T14:02:43.350Z",
//     updatedAt: "2024-10-18T18:40:02.574Z",
//     __v: 0,
//   },
//   {
//     _id: "67128ea91e46d7c991d4e184",
//     title: "AskCN: 2222Crypto adoption on track to hit 8% by 2025: Report",
//     url: "https://cointelegraph.com/news/global-crypto-adoption-nears-8-percent-milestone-by-2025",
//     points: 4,
//     author: "degen35",
//     isFlagged: 0,
//     createdAt: "2024-10-18T16:36:57.771Z",
//     updatedAt: "2024-10-18T16:36:57.771Z",
//     __v: 0,
//   },
//   {
//     _id: "6712eda4c7f3923a9320cbb1",
//     title: "AskCN: 2222Crypto adoption on track to hit 8% by 2025: Report",
//     url: "https://cointelegraph.com/news/global-crypto-adoption-nears-8-percent-milestone-by-2025",
//     points: 1,
//     author: "degen35",
//     isFlagged: 0,
//     createdAt: "2024-10-18T23:22:12.898Z",
//     updatedAt: "2024-10-18T23:22:12.898Z",
//     __v: 0,
//   },
//   {
//     _id: "6712b128cd23ddb38529f103",
//     title: "AskCN: 2222Crypto adoption on track to hit 8% by 2025: Report",
//     url: "https://cointelegraph.com/news/global-crypto-adoption-nears-8-percent-milestone-by-2025",
//     points: 1,
//     author: "degen35",
//     isFlagged: 0,
//     createdAt: "2024-10-18T19:04:08.912Z",
//     updatedAt: "2024-10-18T19:04:08.912Z",
//     __v: 0,
//   },
//   {
//     _id: "67128ed21e46d7c991d4e18b",
//     title: "AskCN: 2222Crypto adoption on track to hit 8% by 2025: Report",
//     url: "https://cointelegraph.com/news/global-crypto-adoption-nears-8-percent-milestone-by-2025",
//     points: 1,
//     author: "degen35",
//     isFlagged: 0,
//     createdAt: "2024-10-18T16:37:38.399Z",
//     updatedAt: "2024-10-18T16:37:38.399Z",
//     __v: 0,
//   },
//   {
//     _id: "671268d840564b881e9ea588",
//     title: "Crypto adoption on track to hit 8% by 2025: Report",
//     url: "https://cointelegraph.com/news/global-crypto-adoption-nears-8-percent-milestone-by-2025",
//     points: 0,
//     timestamp: "600",
//     author: "degen35",
//     isFlagged: 0,
//     createdAt: "2024-10-18T13:55:36.764Z",
//     updatedAt: "2024-10-18T13:55:36.764Z",
//     __v: 0,
//   },
//   {
//     _id: "67128c704be3ad730532e230",
//     title: "2222Crypto adoption on track to hit 8% by 2025: Report",
//     url: "https://cointelegraph.com/news/global-crypto-adoption-nears-8-percent-milestone-by-2025",
//     points: 0,
//     author: "degen35",
//     isFlagged: 0,
//     createdAt: "2024-10-18T16:27:28.498Z",
//     updatedAt: "2024-10-18T16:27:28.498Z",
//     __v: 0,
//   },
//   {
//     _id: "67128e2086f9f2f7264dae6d",
//     title: "ShowCN: 2222Crypto adoption on track to hit 8% by 2025: Report",
//     url: "https://cointelegraph.com/news/global-crypto-adoption-nears-8-percent-milestone-by-2025",
//     points: 0,
//     author: "degen35",
//     isFlagged: 0,
//     createdAt: "2024-10-18T16:34:40.895Z",
//     updatedAt: "2024-10-18T16:34:40.895Z",
//     __v: 0,
//   },
// ];
