const SelectedItem = localStorage.getItem("selectedItem");
const API_URL = `https://crypto-api-3-6bf97d4979d1.herokuapp.com/items/${SelectedItem}`;

// Example function to get data from your API
async function fetchData() {
  try {
    const response = await fetch(API_URL, {
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
    console.log("from within:", data);
    return data;
    // Use this data as needed in your frontend
  } catch (error) {
    console.error("Fetch error:", error);
  }
}
// ----------------- Deletes --------------------------------
async function deleteItem(id) {
  const UPVOTE_URL = `https://crypto-api-3-6bf97d4979d1.herokuapp.com/items/${id}`;
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
        console.log(data);
        window.location.href = "/crypto";
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
    console.log("from within:", data);
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
        console.log(data);
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
    console.log("from within:", data);
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
        console.log(data);
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
    console.log("from within:", data);
    return data;
    // Use this data as needed in your frontend
  } catch (error) {
    console.error("Fetch error:", error);
  }
}


async function UpVote(id) {
  const username = localStorage.getItem("username");

  const UPVOTE_URL = `https://crypto-api-3-6bf97d4979d1.herokuapp.com/items/upVote/${id}`;
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
        console.log(data);
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
    console.log("from within:", data);
    return data;
    // Use this data as needed in your frontend
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

async function DownVote(id) {
  const username = localStorage.getItem("username");

  const UPVOTE_URL = `https://crypto-api-3-6bf97d4979d1.herokuapp.com/items/downVote/${id}`;
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
        console.log(data);
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
    console.log("from within:", data);
    return data;
    // Use this data as needed in your frontend
  } catch (error) {
    console.error("Fetch error:", error);
  }
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
        console.log(data);
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
    console.log("from within:", data);
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
        console.log(data);
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
    console.log("from within:", data);
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
        console.log(data);
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
    console.log("from within:", data);
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
        console.log(data);
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
    console.log("from within:", data);
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
    console.log("datas", datas);
    const currentUserMap = localStorage.getItem("username");

    // Helper function to recursively generate nested replies
    const generateReplyHTML = (data, depth = 0) => {
      console.log("data.replies", data.replies);
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
                  <a class="replyFlags" style="cursor: pointer;" id="${
                    data._id
                  }[" style="visibility: ${
        currentUserMap && currentUserMap !== "null" ? "visible" : "hidden"
      }">| ${data.author === currentUserMap ? "delete?" : "flag?"}</a>
      <a style="visibility: hidden;cursor: pointer;" id="${
        data._id
      }$" class="cnReplyDownVote" > 
                                 | unvote
                               </a>
                </span>
              </div><br>
              <div class="comment">
                <div class="commtext c00" style="margin-left:40px;">${
                  data.reply
                }</div>
       <div  style="margin-left:40px;">        <p><font size="1">
                    <u><a class="replyReply" id="${
                      data._id
                    }&" name="${data.commentId}"rel="nofollow" style="cursor: pointer;">reply</a></u>
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

        console.log(voteElement.id);
        console.log(index);

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
        console.log(element.textContent);
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
        console.log("im vlivk!!");
        if (element.textContent === "| delete? ") {
          element.textContent = "deleted";
        } else {
          element.textContent = "flagged";
        }
        const itemId = element.id.replace("[", "");

        console.log("im vlivk!! itemId", itemId);
        deleteReply(itemId);
      });
    });
    const ReplyUnVoteElements = document.querySelectorAll(".cnReplyDownVote");

    ReplyUnVoteElements.forEach((unvoteElement, index) => {
      unvoteElement.addEventListener("click", () => {
        console.log(unvoteElement.id);
        const itemId = unvoteElement.id.replace("$", "");
        console.log(itemId);

        unvoteElement.style.visibility = "hidden";

        DownVoteReply(itemId);

        upVoteElement = document.getElementById(itemId);

        upVoteElement.style.visibility = "visible";
      });

      // Add click listeners to .cnUser elements
      const elements = document.querySelectorAll(".cnUser");
      elements.forEach((element) => {
        element.addEventListener("click", () => {
          console.log(element.textContent);
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
const currentUserMap = localStorage.getItem("username");
// Recursive function to render a reply and its nested replies
function renderReply(reply) {
  console.log("repppesses:", reply);
  // Create HTML for the current reply
  if (reply) {
    let replyHtml = `
    <tr class="athing" id="reply_${reply._id}">
      <div>
        <td class="default">
          <div style="margin-bottom:-10px;">
            <span class="comhead">
              <a style="cursor: default;">
                <span style="font-size:10px; margin-right: 4px;margin-left: 4px;">
                  <img style="cursor: pointer;" id="${
                    reply._id
                  }" src="/Hacker News_files/tpp.png" height="18" class="cnReplyUpVote" style="margin-right:8px;">
                </span>
              </a>
              <a class="cnUser"style="cursor: pointer;">${reply.author || ""}</a>
              <span class="age" title="${reply.createdAt}">
                <a style="pointer-events: none; cursor: default;">| ${timeSince(
                  new Date(reply.createdAt)
                )}</a>
              </span>
              <span style="pointer-events: none; cursor: default;">| ${
                reply.points
              } points</span>
                 <a  class="flagReply" style="cursor: pointer;" id="${reply._id}[" style="visibility: ${
      currentUserMap
        ? currentUserMap === "null"
          ? "hidden"
          : "visible"
        : "hidden"
    }">| ${reply.author === currentUserMap ? "delete?" : "flag?"}</a>
              <a style="visibility: hidden;cursor: pointer;" id="${
                reply._id
              }$" class="cnReplyDownVote">| unvote</a>
            </span>
          </div><br>
          <div class="comment">
            <a>
              <div class="commtext c00" style="margin-left:40px;">${
                reply.reply
              }</div>
            </a>
          </div>
        </td>
      </div>
    </tr>
    <div style="height: 8px;"></div>
  `;

    const ReplyVoteElements = document.querySelectorAll(".cnReplyUpVote");

    fetchCurrentUser1();
    // Add click listeners to .cnUser elements
    const flags = document.querySelectorAll(".flagReply");

    flags.forEach((element) => {
      element.addEventListener("click", () => {
        if (element.textContent === "| delete?") {
          element.textContent = "| deleted";
        } else {
          element.textContent = "| flagged";
        }
        const itemId = element.id.replace("[", "");
        deleteReply(itemId);
      });
    });
    ReplyVoteElements.forEach((voteElement, index) => {
      voteElement.addEventListener("click", () => {
        console.log("im vlivk!!");
        const username = localStorage.getItem("username");
        if (!username || username === "null") {
          window.location.href = "./login.html";
        }

        console.log(voteElement.id);
        console.log(index);

        voteElement.style.visibility = "hidden";
        UpVoteReply(voteElement.id);
        const unvoteE = document.getElementById(`${voteElement.id}$`);

        unvoteE.style.visibility = "visible";
      });
    });

    const ReplyUnVoteElements = document.querySelectorAll(".cnReplyDownVote");

    ReplyUnVoteElements.forEach((unvoteElement, index) => {
      unvoteElement.addEventListener("click", () => {
        console.log(unvoteElement.id);
        const itemId = unvoteElement.id.replace("$", "");
        console.log(itemId);

        unvoteElement.style.visibility = "hidden";

        DownVoteReply(itemId);

        upVoteElement = document.getElementById(itemId);

        upVoteElement.style.visibility = "visible";
      });

      // Add click listeners to .cnUser elements
      const elements = document.querySelectorAll(".cnUser");
      elements.forEach((element) => {
        element.addEventListener("click", () => {
          console.log(element.textContent);
          localStorage.setItem("SelectedUser", element.textContent);
          window.location.href = "/user";
        });
      });
    });

    // If the reply has nested replies, recursively render them

    if (reply.replyIds && reply.replyIds.length > 0) {
      const result = reply.replyIds.map((reply) => {
        const rep = getFullReply(reply);

        return rep;
      });
      console.log(result);
      replyHtml += result
        .map((nestedReply) => renderReply(nestedReply))
        .join("");
    }

    return replyHtml;
  }
}

async function fetchComments(itemComments) {
  console.log("iran11111");
  const USER_URL = `https://crypto-api-3-6bf97d4979d1.herokuapp.com/comments/comments/findbyIds`;
  try {
    const response = await fetch(USER_URL, {
      method: "POST", // or 'POST', 'PUT', 'DELETE', depending on the endpoint
      headers: {
        "Content-Type": "application/json",
        // Add any required headers, like authorization, here if needed
      },
      body: JSON.stringify({
        comments: itemComments,
      }),
    });

    console.log(response);

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const datas = await response.json();
    console.log("from within111:", datas);
    const currentUserMap = localStorage.getItem("username");
    const mappedComments = datas
      .map((data, index) => {
        if (data?.replies.length > 0) {
          fetchReplies(data.replies, index);
        }

        if (data) {
          return `<tr class="athing" id="41790045">
        
             
            
          <div>
              <td class="default">
            
                  <div style="margin-top:2px; margin-bottom:-10px;"><span class="comhead">
                  <a id="up_41790045" style="
  cursor: default;">
                          <span
                              style='font-size:10px; margin-right: 4px;margin-left: 4px;'><img style="cursor: pointer;" id="${
                                data._id
                              }"
                              src="/Hacker News_files/tpp.png" height="18" class="cnCommentUpVote"
                              style="margin-right:8px;"></span>
                      </a>
                          <a class="cnUser" style="cursor: pointer;">${
                            data ? data?.author : ""
                          }</a> <span class="age"
                              title="2024-10-09T16:55:00.000000Z"><a style="pointer-events: none;
  cursor: default;">
                              | ${timeSince(
                                new Date(data?.createdAt)
                              )}</a></span> <span style="pointer-events: none;
  cursor: default;"> | ${data.points} points</span> 
                              <span id="unv_41790045" style="pointer-events: none;
  cursor: default;"></span><a  class="flagComment" style="cursor: pointer;"id="${
    data._id
  }[" style="visibility: ${
            currentUserMap
              ? currentUserMap === "null"
                ? "hidden"
                : "visible"
              : "hidden"
          }">| ${data.author === currentUserMap ? "delete?" : "flag?"}</a>
                               <a style="visibility: hidden;cursor: pointer;" id="${
                                 data._id
                               }$" class="cnCommentDownVote"> 
                               | unvote
                             </a>
                      </span></div><br>
                  <div class="comment">
                      <a>
                          <div class="commtext c00" style="margin-left:40px;">${
                            data?.comment
                          }</div>
                      </a>
                     
                      <div style="margin-left:40px;">        <p><font size="1">
                      <u><a class="reply" id="${
                        data._id
                      }&"style="cursor: pointer;">reply</a></u>
                  </font>
      </p></div>
                  </div>
              </td>
           </div>
          </tr>
<div style="height: 8px;"></div>
<div style="margin-left:40px;"id="replies${index}"></div>
`;
        } else {
          return "";
        }
      })
      .join("");

    document.getElementById("commentsIndex").innerHTML = mappedComments;
    // Add click listeners to .cnUser elements
    const flags = document.querySelectorAll(".flagComment");

    flags.forEach((element) => {
      element.addEventListener("click", () => {
        console.log("element.textContent:", element.textContent);
        if (element.textContent === "| delete?") {
          element.textContent = "| deleted";
        } else {
          element.textContent = "| flagged";
        }
        const itemId = element.id.replace("[", "");
        deleteComment(itemId);
      });
    });
    // Use this data as needed in your frontend
  } catch (error) {
    console.error("Fetch error:", error);
  }
}
// An async function to access data outside fetchData
async function main() {
  const Item = await fetchData();
  console.log("From outside:", Item); // Here data can be used as a constant

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

  // const response = await fetch("https://example.org/products.json").json();

  // ex = getData();
  const currentUserMap = localStorage.getItem("username");
  const ItemDisplay = `<tr class="athing" >
     
                                 
                                 
                                 <td class="title"><span style="color: black; display:flex; gap:5px;" class="titleline" ><span style='font-size:11px; color: black;'><img style="cursor: pointer;"id="${
                                   Item._id
                                 }" class="cnUpVote"
                                                      src="/Hacker News_files/tpp.png" height="18"
                                                      style="margin-right:8px;"></span><a style="color: black;"
                                              href="${Item.url}">${
    Item.title
  }</a> <span
                                              class="sitebit comhead"> ${
                                                Item.url ? "(" : ""
                                              }<a style="color: black;"
                                                  href="${
                                                    Item.url
                                                  }"><span style="color: black;"
                                                      class="sitestr">${
                                                        Item.url
                                                          ? stripToDomain(
                                                              Item.url
                                                            )
                                                          : ""
                                                      }</span></a>${
    Item.url ? ")" : ""
  }</span></span>
                                  </td>
                  </tr>
                  <div style="height: 3px;"></div>
                  <tr>
                      <td colspan="2">
                      <td class="subtext"><span class="subline" style="margin-left: 33px;
      font-size: 10px;">
                              <span class="score" id="score_40832214">${
                                Item.points
                              } points</span> | by <a id="user"
                                  class="cnUser"style="cursor: pointer;" >${Item.author}</a>
                              <span class="age" title="2024-06-29T17:39:16" style="pointer-events: none;
  cursor: default;"><a > | ${timeSince(
    new Date(Item.createdAt)
  )}</a></span> <span id="unv_40832214"></span> 
                              | <a class="cnComment" style="cursor: pointer;" id="${Item._id}*">${
    Item.comments?.length | 0
  }&nbsp;comments </a><a  class="flagItem" style="cursor: pointer;"id="${Item._id}[" style="visibility: ${
    currentUserMap
      ? currentUserMap === "null"
        ? "hidden"
        : "visible"
      : "hidden"
  }">| ${Item.author === currentUserMap ? "delete?" : "flag?"}</a>
                              <a style="visibility: hidden;cursor: pointer;" id="${
                                Item._id
                              }$" class="cnDownVote"> 
                               | unvote
                             </a>
                          </span>
                          
                      </td>
                  </tr>
                  <br>
 
                  <div style="height: 16px;"></div>
                  <div style="margin-left:32px;">${
                    Item.text ? Item.text : ""
                  }</div>
  <div style="height: 16px;"></div>
                  `;

  document.getElementById("container111").innerHTML = ItemDisplay;

  await fetchComments(Item.comments);
  //---------------------------------------------------------------------------------------------------------

  //   // Add click listeners to .cnUser elements
  //   const elements = document.querySelectorAll(".cnUser");
  //   elements.forEach((element) => {
  //     element.addEventListener("click", () => {
  //       console.log(element.textContent);
  //       localStorage.setItem("SelectedUser", element.textContent);
  //       window.location.href = "./user_individual.html";
  //     });
  //   });
  // Add click listeners to .cnUser elements
  const flags = document.querySelectorAll(".flagItem");

  flags.forEach((element) => {
    element.addEventListener("click", () => {
      if (element.textContent === "| delete?") {
        element.textContent = "| deleted";
      } else {
        element.textContent = "| flagged";
      }
      const itemId = element.id.replace("[", "");
       deleteItem(itemId);
       
    });
  });

  const voteElements = document.querySelectorAll(".cnUpVote");

  await fetchCurrentUser1();

  voteElements.forEach((voteElement, index) => {
    voteElement.addEventListener("click", () => {
      const username = localStorage.getItem("username");
      if (!username || username === "null") {
        window.location.href = "./login.html";
      }

      console.log(voteElement.id);
      console.log(index);

      voteElement.style.visibility = "hidden";
      UpVote(voteElement.id);
      const unvoteE = document.getElementById(`${voteElement.id}$`);

      unvoteE.style.visibility = "visible";
    });
  });

  const unvoteElements = document.querySelectorAll(".cnDownVote");

  unvoteElements.forEach((unvoteElement, index) => {
    unvoteElement.addEventListener("click", () => {
      console.log(unvoteElement.id);
      const itemId = unvoteElement.id.replace("$", "");
      console.log(itemId);

      unvoteElement.style.visibility = "hidden";

      DownVote(itemId);

      upVoteElement = document.getElementById(itemId);

      upVoteElement.style.visibility = "visible";
    });
  });

  //---------------------------------------------------------------------------------------------

  //---------------------------------------------------------------------------------------------

  // Add click listeners to .cnUser elements
  const elements = document.querySelectorAll(".cnUser");
  elements.forEach((element) => {
    element.addEventListener("click", () => {
      console.log(element.textContent);
      localStorage.setItem("SelectedUser", element.textContent);
      window.location.href = "/user";
    });
  });

  const repls = document.querySelectorAll(".reply");
  repls.forEach((element) => {
    element.addEventListener("click", () => {
      console.log(element.textContent);
      const commentId = element.id.replace("&", "");
      localStorage.setItem("selectedCommentIn", commentId);
      window.location.href = "/crypto/comments/selected";
    });
  });

  const commentUpVoteElements = document.querySelectorAll(".cnCommentUpVote");

  commentUpVoteElements.forEach((commentUpVoteElement, index) => {
    commentUpVoteElement.addEventListener("click", () => {
      const username = localStorage.getItem("username");
      if (!username || username === "null") {
        window.location.href = "./login.html";
      }

      console.log(commentUpVoteElement.id);
      console.log(index);

      commentUpVoteElement.style.visibility = "hidden";
      UpVoteComment(commentUpVoteElement.id);
      const unvoteE = document.getElementById(`${commentUpVoteElement.id}$`);

      unvoteE.style.visibility = "visible";
    });
  });

  const commentUnVoteElements = document.querySelectorAll(".cnCommentDownVote");

  commentUnVoteElements.forEach((commentUnVoteElement, index) => {
    commentUnVoteElement.addEventListener("click", () => {
      console.log(commentUnVoteElement.id);
      const itemId = commentUnVoteElement.id.replace("$", "");
      console.log(itemId);

      commentUnVoteElement.style.visibility = "hidden";

      DownVoteComment(itemId);

      upVoteElement = document.getElementById(itemId);

      upVoteElement.style.visibility = "visible";
    });
  });
}

async function postComment() {
  const body = document.getElementById("comment").value;
  const username = localStorage.getItem("username");
  const Item = localStorage.getItem("selectedItem");

  const COMMENTS_URL =
    "https://toptop-api-facbf95cbd23.herokuapp.com/comments";
  try {
    const response = await fetch(COMMENTS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        comment: body,
        item: Item,
        points: 0,
        author: username,
        isFlagged: 0,
        category: "Crypto",
        replies: [],
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
        console.log(data);
        window.location.href = `/crypto/item/${Item}`;
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
    console.log("from within:", data);
    return data;
    // Use this data as needed in your frontend
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

function submitComment() {
  const username = localStorage.getItem("username");

  postComment();
}

// Expose the function globally
window.submitComment = submitComment;

main(); // Call main to execute and retrieve the data

async function fetchCurrentUser1() {
  const username = localStorage.getItem("username");
  console.log("iran");
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
    console.log("from within111:", data);

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
    console.log("checkcheckcehck:", ReplyVoteElements);
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
