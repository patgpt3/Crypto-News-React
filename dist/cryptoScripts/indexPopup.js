// const title = document.getElementById("title").value;
// const url = document.getElementById("url").value ;
// const body = document.getElementById("body").value;
// const user = get.localStorage(currentUser);

const userInput = localStorage.getItem("usernameInput");
const privyInput = localStorage.getItem("privyIdInput");

async function fetchData() {
  try {
    const response = await fetch('https://crypto-api-3-6bf97d4979d1.herokuapp.com/users', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        privyId: privyInput,
        username: userInput,
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

function submitCreateUser() {
  fetchData();
}

// Expose the function globally
window.submitCreateUser = submitCreateUser;
