// const { usePrivy } = require("@privy-io/react-auth");


// const {login} = usePrivy();
const API_URL =
  "https://crypto-api-3-6bf97d4979d1.herokuapp.com/items/main/pages";

// Example function to get data from your API
async function fetchData(pageNum) {
  try {
    const response = await fetch(API_URL, {
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
  // localStorage.setItem("pageNumber", 0);
  const pageNumberInput = localStorage.getItem("pageNumber");

  const numberInput = parseInt(pageNumberInput) || 0;

  const users = await fetchData(numberInput);

  if (users.length < 30) {
    //hide more

    const moreButton = document.getElementById("next-page");
    moreButton.style.display = "none";
  }

  if (numberInput === 0) {
    //hide back
    const moreButton = document.getElementById("back-page");
    moreButton.style.display = "none";
  }

  function stripToDomain(url) {
    if (url.includes("www.")) {
      const urlObj = new URL(url);
      const hostname = urlObj.hostname;

      // Remove 'www.' if present
      const domain = hostname.replace(/^www\./, "");

      // Split by '.' and get the last two parts
      const parts = domain.split(".");
      const domainCom = parts.slice(-2).join(".");

      return domainCom;
    }
    return "";
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
  const mappedUsers = users
    .map((user, index) => {
      if (user) {
        // if (user.author === currentUserMap) {

        //   const deleteName = 'delete?';
        //   document.getElementById(`${user._id}[`).textContent = deleteName;
        // } else {
        //   document.getElementById(`${user._id}[`).innerText = "flag?";
        // }
        return `<tr class="athing" >
     
                                  
                                 
                                  <td class="title"><span style="color: black; display:flex; gap:5px;" class="titleline" ><span style="color: black;min-width: 23px;" class="rank">${
                                    index + 1 + numberInput * 30
                                  }.</span><span style='font-size:11px; color: black;'><img  style="cursor: pointer;"id="${
          user._id
        }" class="cnUpVote"
                                                      src="./Hacker News_files/tpp.png" height="18"
                                                      style="margin-right:8px;"></span><a style="color: black;"
                                              href="${user.url}">${
          user.title
        }</a> <span
                                              class="sitebit comhead"> ${
                                                user.url
                                                  ? stripToDomain(user.url) ===
                                                    ""
                                                    ? ""
                                                    : "("
                                                  : ""
                                              }<a style="color: black;"
                                                  href="${
                                                    user.url
                                                  }"><span style="color: black;"
                                                      class="sitestr">${
                                                        user.url
                                                          ? stripToDomain(
                                                              user.url
                                                            )
                                                          : ""
                                                      }</span></a>${
          user.url ? (stripToDomain(user.url) === "" ? "" : ")") : ""
        }</span></span>
                                  </td>
                  </tr>
                  <div style="height: 3px;"></div>
                  <tr>
                      <td colspan="2">
                      <td class="subtext"><span class="subline" style="margin-left: 59px;
      font-size: 10px;">
                              <span class="score" id="score_40832214">${
                                user.points
                              } points</span> | by <a id="user${index}"
                                  class="cnUser" style="cursor: pointer;">${
                                    user.author
                                  }</a>
                              <span class="age" title="2024-06-29T17:39:16"><a >| ${timeSince(
                                new Date(user.createdAt)
                              )}</a></span> <span id="unv_40832214"></span> 
                              | <a class="cnComment" id="${
                                user._id
                              }*" style="cursor: pointer;">${
          user.comments?.length | 0
        }&nbsp;comments</a> 
        
         <a  class="flag" style="cursor: pointer;" id="${
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
                              }$" class="cnDownVote" > 
                               | unvote
                             </a>
                          </span>
                          
                      </td>
                  </tr>
                  <br>
 
                  <div style="height: 10px;"></div>
                  `;
      }
    })
    .join("");

  document.getElementById("container").innerHTML = mappedUsers;
  //---------------------------------------------------------------------------------------------------------
  // Add click listeners to .cnUser elements
  const elements = document.querySelectorAll(".cnUser");
  elements.forEach((element) => {
    element.addEventListener("click", () => {
      localStorage.setItem("SelectedUser", element.textContent);
      window.location.href = "/user";
    });
  });
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
      deleteItem(itemId);
    });
  });

  // Add click listeners to .cnUser elements
  const voteElements = document.querySelectorAll(".cnUpVote");

  await fetchCurrentUser1();

  voteElements.forEach((voteElement, index) => {
    voteElement.addEventListener("click", () => {
      voteElement.style.visibility = "hidden";
      UpVote(voteElement.id);
      const unvoteE = document.getElementById(`${voteElement.id}$`);

      unvoteE.style.visibility = "visible";
    });
  });

  const unvoteElements = document.querySelectorAll(".cnDownVote");

  unvoteElements.forEach((unvoteElement, index) => {
    unvoteElement.addEventListener("click", () => {
      const itemId = unvoteElement.id.replace("$", "");

      unvoteElement.style.visibility = "hidden";

      DownVote(itemId);

      upVoteElement = document.getElementById(itemId);

      upVoteElement.style.visibility = "visible";
    });
  });

  const commentElements = document.querySelectorAll(".cnComment");
  commentElements.forEach((commentElement, index) => {
    commentElement.addEventListener("click", () => {
      const itemId = commentElement.id.replace("*", "");
      localStorage.setItem("selectedItem", itemId);
      window.location.href = "/crypto/item";
    });
  });
  // Add event listener for the change email button
  const addEmailButtonEvent = document.getElementById("next-page");
  addEmailButtonEvent.addEventListener("click", () => {
    const page = localStorage.getItem("pageNumber");

    const num = parseInt(page);

    localStorage.setItem("pageNumber", num ? num + 1 : 1);
    window.location.href = "/crypto";
  });

  // Add event listener for the change email button
  const addbackButtonEvent = document.getElementById("back-page");
  addbackButtonEvent.addEventListener("click", () => {
    const page = localStorage.getItem("pageNumber");

    const num = parseInt(page);

    localStorage.setItem("pageNumber", num - 1);
    window.location.href = "/crypto";
  });
  // // Add click listeners to .cnUser elements
  // const elements = document.querySelectorAll(".cnUser");
  // elements.forEach((element) => {
  //   element.addEventListener("click", () => {
  //     localStorage.setItem("SelectedUser", element.textContent);
  //     window.location.href = "./user_individual.html";
  //   });
  // });
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

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();

    const voteElements = document.querySelectorAll(".cnUpVote");
    voteElements.forEach((voteElement, index) => {
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
