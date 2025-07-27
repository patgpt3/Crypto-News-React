const SelectedItem = localStorage.getItem("SelectedJob");
const API_URL = `https://crypto-api-3-6bf97d4979d1.herokuapp.com/jobs/${SelectedItem}`;

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
  <td align="right" valign="top" class="title"></td>
 
  <td class="title"><span style="color: black;display: flex; gap:5px;" class="titleline" ><span style='font-size:11px; color: black; margin-right:11px;'></span><a style="color: black;"
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
<td class="subtext"><span class="subline" style="margin-left: 15px;
font-size: 10px;">

<span class="age" title="2024-06-29T17:39:16"><a >${timeSince(
new Date(Item.createdAt)
)}</a>   <a  class="flag" id="${Item._id}[" style="visibility: ${
currentUserMap
? currentUserMap === "null"
? "hidden"
: "visible"
: "hidden"
}">| ${Item.author === currentUserMap ? "delete?" : "flag?"}</a></span> <span id="unv_40832214"></span> 
</span>
</td>
</tr>
<br>
<div style="height: 8px;"></div>
<div style="height: 8px; color:#828282; margin:20px;">${Item.text ? Item.text : ""}</div>
`;

  document.getElementById("container111").innerHTML = ItemDisplay;

  //---------------------------------------------------------------------------------------------------------

  //   // Add click listeners to .cnUser elements
  //   const elements = document.querySelectorAll(".cnUser");
  //   elements.forEach((element) => {
  //     element.addEventListener("click", () => {
  //       localStorage.setItem("SelectedUser", element.textContent);
  //       window.location.href = "./user_individual.html";
  //     });
  //   });
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
      //  deleteJob(itemId);
     });
   });



  //---------------------------------------------------------------------------------------------

  //---------------------------------------------------------------------------------------------

  // Add click listeners to .cnUser elements
  const elements = document.querySelectorAll(".cnUser");
  elements.forEach((element) => {
    element.addEventListener("click", () => {
      localStorage.setItem("SelectedUser", element.textContent);
      window.location.href = "/user";
    });
  });

  const repls = document.querySelectorAll(".Reply");
  repls.forEach((element) => {
    element.addEventListener("click", () => {
      const commentId = element.id.replace("&", "");
      localStorage.setItem("selectedCommentIn", commentId);
      window.location.href = "/crypto/comments/selected";
    });
  });


}


main(); // Call main to execute and retrieve the data

