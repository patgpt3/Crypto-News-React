// const userss = fetch(items/main);

// Replace with your actual Heroku API endpoint
const SelectedUser = localStorage.getItem("SelectedUser");
const API_URL = `https://crypto-api-3-6bf97d4979d1.herokuapp.com/users/findProtected/${SelectedUser}`;

// Example function to get data from your API
async function fetchData() {
  try {
    const response = await fetch(API_URL, {
      // mode: 'no-cors',
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
    return data;
    // Use this data as needed in your frontend
  } catch (error) {
    console.error("Fetch error:", error);
  }
}
// An async function to access data outside fetchData
async function main() {
  const users = await fetchData();

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

  function vote(id) {
    if (users.upvoteSubmissions.find(id) === true) {
      // fetch(`downvote/${id}`)
      // content-type: application/json

      // {
      //    "currentUserName": get.localStorage(currentUser)
      // }

      return `
      <span style='font-size:11px; color: black;'><img
                                                      src="./Hacker News_files/tpp.png" height="18"
                                                      style="margin-right:8px;"></span>`;
    } else {
      // fetch(`upvote/${id}`)
      // content-type: application/json

      // {
      //    "currentUserName": get.localStorage(currentUser)
      // }

      return `
      <span style='font-size:11px; color: black;'><img
                                                      src="./Hacker News_files/tpp.png" height="18"
                                                      style="margin-right:8px; display: hidden"></span>`;
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

  const mappedUsers = `<tr class="athing" style="color:black;">
  <br>
  <br>
  <div style="color:black;">
                                    <td valign="top" style="color:black;">user: ${
                                      users.username
                                    }</td>
                                
                                </tr>
                                                                <br>
                                                                <br>

                                <tr>
                                    <td valign="top">created: ${new Date(
                                      users.createdAt
                                    ).toLocaleDateString()}</td>
                                  
                                </tr>
                               
                                <br>
                                <br>
                                <tr>
                                <td valign="top">about: ${
                                  users.about || ""
                                }</td>
                         
                                    </tr>
                                    </div>
                              </tr>
                              <br>
                              <br>
                              <br>
                              <div style="display: flex; flex-direction:column;">
                              <tr><td></td><td><a style="margin-bottom: 5px; cursor: pointer;" id="submissions"><u>submissions</u></a></td></tr>
                              <tr><td></td><td><a style="margin-bottom: 5px;cursor: pointer;" id="userComments"><u>comments</u></a></td></tr>
                              <tr><td></td><td><a style="margin-bottom: 5px;cursor: pointer;"id="votes"><u>votes</u></a></td></tr></div><br>
                  `;

  document.getElementById("container").innerHTML = mappedUsers;

  const submissions = document.getElementById("submissions");
  const userComments = document.getElementById("userComments");
  const votes = document.getElementById("votes");

  submissions.addEventListener("click", () => {
    const myArray = users.submissions;

    // Convert the array to a JSON string
    const jsonArray = JSON.stringify(myArray);

    // Store the JSON string in local storage
    localStorage.setItem("SelectedItems", jsonArray);
    window.location.href = "/user-submissions";
  });
  userComments.addEventListener("click", () => {
    const myArray = users.comments;

    // Convert the array to a JSON string
    const jsonArray = JSON.stringify(myArray);

    // Store the JSON string in local storage
    localStorage.setItem("SelectedComments", jsonArray);
    window.location.href = "/user-comments";
  });
  votes.addEventListener("click", () => {
    localStorage.setItem("SelectedItems", users.upvotedSubmissions);
    const myArray = users.upvotedSubmissions;

    // Convert the array to a JSON string
    const jsonArray = JSON.stringify(myArray);

    // Store the JSON string in local storage
    localStorage.setItem("SelectedItems", jsonArray);
    window.location.href = "/user-votes";
  });
}

main(); // Call main to execute and retrieve the data
