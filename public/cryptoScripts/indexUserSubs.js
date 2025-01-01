// const userss = fetch(items/main);
const SelectedComments = localStorage.getItem("SelectedItems");

const myArray = JSON.parse(SelectedComments);

console.log("SelectedComments", myArray);

// Replace with your actual Heroku API endpoint
const API_URL =
  "https://crypto-api-3-6bf97d4979d1.herokuapp.com/items/items/findbyIds";

// Example function to get data from your API
async function fetchData() {
  try {
    const response = await fetch(API_URL, {
      // mode: 'no-cors',
      method: "POST", // or 'POST', 'PUT', 'DELETE', depending on the endpoint
      headers: {
        "Content-Type": "application/json",
        // Add any required headers, like authorization, here if needed
      },
      body: JSON.stringify({
        items: myArray,
      }),
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

// An async function to access data outside fetchData
async function main() {
  const users = await fetchData();
  console.log("From outside:", users); // Here data can be used as a constant

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
  const mappedUsers = users
    .map((user, index) => {
      if (user) {
        return `<tr class="athing" >
     
                                  
                                 
        <td class="title"><span style="color: black; display:flex; gap:5px;" class="titleline" ><span style="color: black;min-width: 23px;" class="rank">${
          index + 1
        }.</span><span style='font-size:11px; color: black;'><img id="${
          user._id
        }" class="cnUpVote"
                            src="/Hacker News_files/tpp.png" height="18"
                            style="margin-right:8px;"></span><a style="color: black;"
                    href="${user.url}">${user.title}</a> <span
                    class="sitebit comhead"> ${
                      user.url ? "(" : ""
                    }<a style="color: black;"
                        href="${user.url}"><span style="color: black;"
                            class="sitestr">${
                              user.url ? stripToDomain(user.url) : ""
                            }</span></a>${user.url ? ")" : ""}</span></span>
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
        class="cnUser" >${user.author}</a>
    <span class="age" title="2024-06-29T17:39:16"><a > | ${timeSince(
      new Date(user.createdAt)
    )}</a></span> <span id="unv_40832214"></span> 
    | <a class="cnComment" id="${user._id}*">${
          user.comments?.length | 0
        }&nbsp;comments </a><a  class="flag" id="${user._id}[" style="visibility: ${
          currentUserMap
            ? currentUserMap === "null"
              ? "hidden"
              : "visible"
            : "hidden"
        }">| ${user.author === currentUserMap ? "delete?" : "flag?"}</a>
    <a style="visibility: hidden;" id="${user._id}$" class="cnDownVote"> 
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
  const elements = document.querySelectorAll(".cnUser");
  elements.forEach((element) => {
    element.addEventListener("click", () => {
      console.log(element.textContent);
      localStorage.setItem("SelectedUser", element.textContent);
      window.location.href = "/user";
    });
  });

  // Add click listeners to .cnUser elements
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

  const commentElements = document.querySelectorAll(".cnComment");
  commentElements.forEach((commentElement, index) => {
    commentElement.addEventListener("click", () => {
      const itemId = commentElement.id.replace("*", "");
      localStorage.setItem("selectedItem", itemId);
      window.location.href = "/crypto/item";
    });
  });

  // // Add click listeners to .cnUser elements
  // const elements = document.querySelectorAll(".cnUser");
  // elements.forEach((element) => {
  //   element.addEventListener("click", () => {
  //     console.log(element.textContent);
  //     localStorage.setItem("SelectedUser", element.textContent);
  //     window.location.href = "./user_individual.html";
  //   });
  // });
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

    return data;
    // Use this data as needed in your frontend
  } catch (error) {
    console.error("Fetch error:", error);
  }
}
fetchCurrentUser1();

// async function fetchData() {
//   try {
//     const response = await fetch(
//       "https://crypto-api-3-6bf97d4979d1.herokuapp.com/items",
//       { mode: "no-cors" }
//     );
//     console.log("response", response);
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     const data = await response.json();
//     console.log("datat from within:", data);
//     return data;
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     throw error; // Optionally re-throw the error for handling elsewhere
//   }
// }

// const res = console.log("FRES", res);

// // Using the function
// async function main() {
//   try {
//     const result = await fetchData();
//     return result;
//     console.log(result); // Use the fetched data
//   } catch (error) {
//     console.error("Error in main:", error);
//   }
// }

// data = main();

// console.log("data:", data);

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
