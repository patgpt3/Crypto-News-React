// const userss = fetch(items/main);

// Replace with your actual Heroku API endpoint
// localStorage.setItem("degen39", "username");
const SelectedUser = localStorage.getItem("username");
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

  // const title = document.getElementById("title").value;
  // const url = document.getElementById("url").value ;
  // const body = document.getElementById("body").value;
  // const user = get.localStorage(currentUser);
  const JOB_API_URL = "https://crypto-api-3-6bf97d4979d1.herokuapp.com/jobs";

  async function createJob() {
    const title = document.getElementById("jobTitle").value;
    const url = document.getElementById("jobUrl").value;
    const body = document.getElementById("jobBody").value;
    const username = localStorage.getItem("username");

    try {
      const response = await fetch(JOB_API_URL, {
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
          window.location.href = "/crypto/jobs";
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

  function submitJob() {
    createJob();
  }
  // const title = document.getElementById("title").value;
  // const url = document.getElementById("url").value ;
  // const body = document.getElementById("body").value;
  // const user = get.localStorage(currentUser);

  const EMAIL_API_URL = `https://crypto-api-3-6bf97d4979d1.herokuapp.com/users/${users._id}`;

  async function sendEmail() {
    const email = document.getElementById("EmailInput").value;

    try {
      const response = await fetch(EMAIL_API_URL, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
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
          window.location.href = "/profile";
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

  function submitEmail() {
    sendEmail();
  }

  // const title = document.getElementById("title").value;
  // const url = document.getElementById("url").value ;
  // const body = document.getElementById("body").value;
  // const user = get.localStorage(currentUser);
  const ABOUT_API_URL = `https://crypto-api-3-6bf97d4979d1.herokuapp.com/users/${users._id}`;

  async function createAbout() {
    const about = document.getElementById("aboutBody").value;

    try {
      const response = await fetch(ABOUT_API_URL, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          about: about,
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
          window.location.href = "/profile";
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

  function submitAbout() {
    createAbout();
  }

  let changeEmail = false;

  // Function to toggle changeEmail and re-render display
  function changeEmailClick() {
    changeEmail = !changeEmail;
    renderEmailDisplay(); // Re-render email display on toggle
  }

  // Function to return the HTML content based on changeEmail
  function displayEmail() {
    if (changeEmail) {
      document.getElementById("change1").textContent = "Cancel";
      document.getElementById("emailButton").style.display = "inline-flex";

      return `<div style="display: flex;">
                <td valign="top">email:</td>
                <td>
                  <input type="email" name="email" style="margin-right:10px; margin-left:5px;" size="30" id="EmailInput" placeholder="${users.email}">
                 
            
                </td>
              </div>`;
    } else {
      document.getElementById("change1").textContent = users.email
        ? "Change Email?"
        : "Add Email";
      document.getElementById("emailButton").style.display = "none";
      return `<div style="display: flex;">
                <td valign="top">email:</td>
                <td>
                  <div style="color: #828282; margin-right:10px;margin-left:10px;">
                    ${users.email ? users.email : ""}
                  </div>
                </td>
              </div>`;
    }
  }

  // Function to render email display area
  function renderEmailDisplay() {
    document.getElementById("emailDisplayArea").innerHTML = displayEmail();
  }

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
                                <td valign="top"><div>about:</div></td>
                                    <div style="color: #828282; margin-top:10px; margin-bottom:5px;">${
                                      users.about ? users.about : ""
                                    }</div>
                                <td style="overflow:hidden"><textarea style="margin:10px; margin-left:0px;" name="about" rows="5" cols="60" id="aboutBody"
                                        wrap="virtual"></textarea>
                                        <br>
                                        <button id="addAbout" >${
                                          users.about
                                            ? "Update About"
                                            : "Add About"
                                        }</button>
                                        </td>
                            </tr>
                            <tr>
                                <td></td>
                                <br>
                                
                            </tr>
                            <br>
                            <tr>
                           <div id="emailDisplayArea"> 
                             </div>
<br>
 <button style="margin-right:10px;" id="emailButton">Add Email</button>
                                <button id="change1">Change Email?</button>
                                </tr>
                                    </div>
                              </tr>
                              <br>
                              <td>
                                    <font size="2">Only admins see your email.</font>
                                </td>
                                <br>
                                <br>
                               <tr>
                                <td valign="top"><div style="color:black;">post job:</div></td>
                                <br>
                         
                                <td style="overflow:hidden"><tr>
             
                            <div style="display: flex: flex-direction:row;"><div style="margin-bottom:5px;">title:</div><input id="jobTitle" type="text" name="title" value="" autofocus="t" id='title' style="width: 90%; max-width: 414px; margin-bottom:10px;"
                                    oninput="tlen(this)" onfocus="tlen(this)"><span style="margin-left:10px"></span>
                            </div>
                            <div style="display: flex: flex-direction:row;"><div style="margin-bottom:5px;">url:</div><input id="jobUrl" type="text" name="title" value="" autofocus="t" id='title' style="width: 90%; max-width: 414px; margin-bottom:10px;"
                                    oninput="tlen(this)" onfocus="tlen(this)"><span style="margin-left:10px"></span>
                            </div>
                            <div style="display: flex: flex-direction:row;"><div style="margin-bottom:5px;">text (optional):</div><textarea  id="jobBody" name="text" rows="4" cols="49" id='body'style="width: 90%; max-width: 414px;" wrap="virtual"></textarea><span style="margin-left:10px"></span>
                            </div>
                        </tr>
                        <br>
                            <button style="width: fit-content;" id="submitJob">Submit Job Post</button></td>
                            
                        </tr></td>
                            </tr>
                              <br>
                              <br>
                              <br>
                              <div style="display: flex; flex-direction:column;">
                              <tr><td></td><td><a style="margin-bottom: 5px;cursor: pointer;" id="submissions"><u>submissions</u></a></td></tr>
                              <tr><td></td><td><a style="margin-bottom: 5px;cursor: pointer;" id="userComments"><u>comments</u></a></td></tr>
                              <tr><td></td><td><a style="margin-bottom: 5px;cursor: pointer;"id="votes"><u>votes</u></a></td></tr>
                               <tr><td></td><td><a style="margin-bottom: 5px;cursor: pointer;"id="jobListings"><u>job listings</u></a></td></tr></div><br>
                  `;

  // Set initial content and display email area
  document.getElementById("container").innerHTML = mappedUsers;
  renderEmailDisplay();

  // Add event listener for the change email button
  const changeButtonEvent = document.getElementById("change1");
  changeButtonEvent.addEventListener("click", () => {
    changeEmailClick();
  });
  // Add event listener for the change email button
  const addEmailButtonEvent = document.getElementById("emailButton");
  addEmailButtonEvent.addEventListener("click", () => {
    sendEmail();
  });
  // Add event listener for the change email button
  const addAboutButtonEvent = document.getElementById("addAbout");
  addAboutButtonEvent.addEventListener("click", () => {
    submitAbout();
  });
  // Add event listener for the change email button
  const addJobButtonEvent = document.getElementById("submitJob");
  addJobButtonEvent.addEventListener("click", () => {
    submitJob();
  });

  const submissions = document.getElementById("submissions");
  const userComments = document.getElementById("userComments");
  const votes = document.getElementById("votes");
  const jobListings = document.getElementById("jobListings");

  submissions.addEventListener("click", () => {
    const myArray = users.submissions;

    // Convert the array to a JSON string
    const jsonArray = JSON.stringify(myArray);

    // Store the JSON string in local storage
    localStorage.setItem("SelectedItems", jsonArray);
    const username1 = localStorage.getItem("username");
    localStorage.setItem("SelectedUser", username1);
    window.location.href = "/user/submissions";
  });
  userComments.addEventListener("click", () => {
    const myArray = users.comments;

    // Convert the array to a JSON string
    const jsonArray = JSON.stringify(myArray);

    // Store the JSON string in local storage
    localStorage.setItem("SelectedComments", jsonArray);
    const username1 = localStorage.getItem("username");
    localStorage.setItem("SelectedUser", username1);
    window.location.href = "/user/comments";
  });
  votes.addEventListener("click", () => {
    localStorage.setItem("SelectedItems", users.upvotedSubmissions);
    const username1 = localStorage.getItem("username");
    localStorage.setItem("SelectedUser", username1);
    const myArray = users.upvotedSubmissions;

    // Convert the array to a JSON string
    const jsonArray = JSON.stringify(myArray);

    // Store the JSON string in local storage
    localStorage.setItem("SelectedItems", jsonArray);
    window.location.href = "/user/votes";
  });
  jobListings.addEventListener("click", () => {
    const myArray = users.jobs;

    // Convert the array to a JSON string
    const jsonArray = JSON.stringify(myArray);

    // Store the JSON string in local storage
    localStorage.setItem("SelectedItems", jsonArray);
    window.location.href = "/crypto/profile/jobs";
  });
}

main(); // Call main to execute and retrieve the data
