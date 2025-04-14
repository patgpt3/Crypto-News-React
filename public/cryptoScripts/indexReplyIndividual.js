const SelectedItem = localStorage.getItem("selectedReplyIn");
// const SelectedItem = "671ecca7da8daee9a7a09249";
const API_URL = `https://crypto-api-3-6bf97d4979d1.herokuapp.com/replies/${SelectedItem}`;

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
          window.location.href = "/crypto/comments";
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

  // const response = await fetch("https://example.org/products.json").json();

  // ex = getData();
  const currentUserMap = localStorage.getItem("username");

  const ItemDisplay = `<tr class="athing" id="41790045">
        
             
            
          <div>
              <td class="default">
            
                  <div style="margin-top:2px; margin-bottom:-10px;"><span class="comhead">
                  <a id="up_41790045" style="
  cursor: default;">
                          <span
                              style='font-size:10px; margin-right: 4px;margin-left: 4px;'><img id="${
                                Item._id
                              }"
                              src="/Hacker News_files/tpp.png" height="18" class="cnCommentUpVote"
                              style="margin-right:8px;"></span>
                      </a>
                          <a class="cnUser">${
                            Item ? Item?.author : ""
                          }</a> <span class="age"
                              title="2024-10-09T16:55:00.000000Z"><a style="pointer-events: none;
  cursor: default;">
                              | ${timeSince(
                                new Date(Item?.createdAt)
                              )}</a></span> <span style="pointer-events: none;
  cursor: default;"> | ${Item.points} points</span> 
                              <span id="unv_41790045" style="pointer-events: none;
  cursor: default;"></span><span ><a  class="flag" id="${
    Item._id
  }[" style="visibility: ${
    currentUserMap
      ? currentUserMap === "null"
        ? "hidden"
        : "visible"
      : "hidden"
  }">| ${Item.author === currentUserMap ? "delete?" : "flag?"}</a></span> 
                               <a style="visibility: hidden;" id="${
                                 Item._id
                               }$" class="cnCommentDownVote"> 
                               | unvote
                             </a>
                      </span></div><br>
                  <div class="comment">
                      <a>
                          <div class="commtext c00" style="margin-left:40px;">${
                            Item?.reply
                          }</div>
                      </a>
                  </div>
              </td>
           </div>
          </tr>
<div style="height: 8px;"></div>
                  `;

  document.getElementById("container111").innerHTML = ItemDisplay;
  // Add click listeners to .cnUser elements
  const flags = document.querySelectorAll(".flag");

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
  //---------------------------------------------------------------------------------------------------------

  // // Add click listeners to .cnUser elements
  // const elements = document.querySelectorAll(".cnUser");
  // elements.forEach((element) => {
  //   element.addEventListener("click", () => {
  //     console.log(element.textContent);
  //     localStorage.setItem("SelectedUser", element.textContent);
  //     window.location.href = "./user_individual.html";
  //   });
  // });
  // const contexts = document.querySelectorAll(".cnContext");

  // contexts.forEach((context) => {
  //   context.addEventListener("click", () => {
  //     const itemId = context.id.replace("%", "");

  //     localStorage.setItem("selectedItem", itemId);
  //     window.location.href = "./news_individual.html";
  //   });
  // });

  const voteElements = document.querySelectorAll(".cnUpVote");

  //   await fetchCurrentUser1();

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
  // Add click listeners to .cnUser elements
  const elements = document.querySelectorAll(".cnUser");
  elements.forEach((element) => {
    element.addEventListener("click", () => {
      console.log(element.textContent);
      localStorage.setItem("SelectedUser", element.textContent);
      window.location.href = "/user";
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

async function postReply() {
  const body = document.getElementById("reply").value;
  const username = localStorage.getItem("username");
  const comment = localStorage.getItem("selectedCommentIn");
  const reply = localStorage.getItem("selectedReplyIn");
  //   const Item = "671ecca7da8daee9a7a09249";

  const COMMENTS_URL =
    "https://crypto-api-3-6bf97d4979d1.herokuapp.com/replies";
  try {
    const response = await fetch(COMMENTS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        reply: body,
        commentId: comment,
        parentReply: reply,
        points: 0,
        author: username,
        isFlagged: 0,
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
        console.log(
          "localStorage.getItem",
          localStorage.getItem("selectedItem")
        );
        if (localStorage.getItem("selectedItem")) {
          window.location.href = "/crypto/item";
        } else {
          window.location.href = "/crypto-comments";
        }
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

async function submitReply() {
  const username = localStorage.getItem("username");
  if (!username || username === "null") {
    window.location.href = "./login.html";
  }
  await postReply();

  // if (document.getElementById("reply").value) {
  //   // const ItemId = document.querySelector(".cnContext").id;

  //   // console.log("ItemIddddd", ItemId);

  //   // window.location.href = "./cn_comments.html";
  // }
}

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
    voteElements.forEach((voteElement, index) => {
      if (data.upvotedSubmissions.includes(voteElement.id)) {
        voteElement.style.visibility = "hidden";
        const unvoteE = document.getElementById(`${voteElement.id}$`);

        unvoteE.style.visibility = "visible";
      }
    });
    const commentVoteElements = document.querySelectorAll(".cnCommentUpVote");
    commentVoteElements.forEach((voteElement, index) => {
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
