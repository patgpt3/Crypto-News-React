import React, { useEffect, useState } from "react";

// Helper functions for fetching data
const API_URL =
  "https://toptop-api-facbf95cbd23.herokuapp.com/jobs/jobs/newest/pages/cat";

const fetchData = async (pageNum: number) => {
  try {
    const response = await fetch(API_URL, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pageNumber: pageNum || 0, cat: "Crypto" }),
    });

    if (!response.ok) throw new Error(`Error: ${response.status}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
  }
};

const deleteItem = async (id: string) => {
  const UPVOTE_URL = `https://toptop-api-facbf95cbd23.herokuapp.com/jobs/${id}`;
  try {
    const response = await fetch(UPVOTE_URL, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    if (!response.ok) throw new Error("Network response was not ok");
    return await response.json();
  } catch (error) {
    console.error("Fetch error:", error);
  }
};

const stripToDomain = (url: string) => {
  if (url.includes("www.")) {
    const urlObj = new URL(url);
    const hostname = urlObj.hostname;
    const domain = hostname.replace(/^www\./, "");
    const parts = domain.split(".");
    return parts.slice(-2).join(".");
  }
  return "";
};

const timeSince = (date: Date) => {
  const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
  let interval = seconds / 31536000;
  if (interval > 1) return `${Math.floor(interval)} years ago`;
  interval = seconds / 2592000;
  if (interval > 1) return `${Math.floor(interval)} months ago`;
  interval = seconds / 86400;
  if (interval > 1) return `${Math.floor(interval)} days ago`;
  interval = seconds / 3600;
  if (interval > 1) return `${Math.floor(interval)} hours ago`;
  interval = seconds / 60;
  if (interval > 1) return `${Math.floor(interval)} minutes ago`;
  return `${Math.floor(seconds)} seconds ago`;
};

// Define types for the API response
interface UserProtectedData {
  username: string;
  upvotedSubmissions: string[];
  // Add other fields as needed based on the API response
}

async function fetchCurrentUser1(): Promise<UserProtectedData | void> {
  const username = localStorage.getItem("username");
  if (!username) {
    console.error("No username found in localStorage.");
    return;
  }

  const USER_URL = `https://toptop-api-facbf95cbd23.herokuapp.com/users/findProtected/${username}`;

  try {
    const response = await fetch(USER_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data: UserProtectedData = await response.json();

    // Hide vote elements that the user has already voted on
    const voteElements = document.querySelectorAll<HTMLElement>(".cnUpVote");
    voteElements.forEach((voteElement) => {
      if (data.upvotedSubmissions.includes(voteElement.id)) {
        voteElement.style.visibility = "hidden";

        const unvoteElement = document.getElementById(`${voteElement.id}$`);
        if (unvoteElement) {
          unvoteElement.style.visibility = "visible";
        }
      }
    });
    const unvoteElements =
      document.querySelectorAll<HTMLElement>(".cnDownVote");

    unvoteElements.forEach((unvoteElement) => {
      unvoteElement.addEventListener("click", () => {
        const itemId = unvoteElement.id.replace("$", "");

        unvoteElement.style.visibility = "hidden";

        const upVoteElement = document.getElementById(itemId);

        if (upVoteElement) {
          upVoteElement.style.visibility = "visible";
        }
      });
    });

    return data;
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

// React component
const CryptoJobsItems: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [users, setUsers] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);

  useEffect(() => {
    const loadData = async () => {
      const usersData = await fetchData(currentPage);
      await fetchCurrentUser1();
      setUsers(usersData || []);
    };
    loadData();
  }, [currentPage]);
  useEffect(() => {
    fetchCurrentUser1();
  }, [users]);

  const handleDelete = async (id: string) => {
    await deleteItem(id);
    // Update users data after deletion
    const updatedUsers = await fetchData(currentPage);
    setUsers(updatedUsers || []);
  };
  const elements = document.querySelectorAll(".cnUser");
  elements.forEach((element) => {
    element.addEventListener("click", () => {
      localStorage.setItem(
        "SelectedUser",
        element.textContent ? element.textContent : ""
      );
      window.location.href = "/user";
    });
  });

  const commentElements = document.querySelectorAll(".cnComment");
  commentElements.forEach((commentElement) => {
    commentElement.addEventListener("click", () => {
      const itemId = commentElement.id.replace("*", "");
      localStorage.setItem("selectedItem", itemId);
      window.location.href = "/crypto/item";
    });
  });

  return (
    <div>
      <table id="container-new">
        <tbody style={{ display: "grid" }}>
          {users.map((user, index) => (
            <React.Fragment key={user._id}>
              <tr className="athing">
                <td className="title">
                  <span
                    style={{
                      color: "black",
                      display: "flex",
                      gap: "5px",
                      marginTop: "5px",
                    }}
                    className="titleline"
                  >
                    <span
                      style={{ color: "black", minWidth: "23px" }}
                      className="rank"
                    >
                      {index + 1 + currentPage * 30}.
                    </span>
                    <span
                      style={{
                        fontSize: "11px",
                        color: "black",
                        // marginRight: "23px",
                      }}
                    ></span>
                    <a style={{ color: "black" }} href={user.url}>
                      {user.title}
                    </a>
                    <span className="sitebit comhead">
                      {user.url &&
                        stripToDomain(user.url) &&
                        `(${stripToDomain(user.url)})`}
                    </span>
                  </span>
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <span
                    className="subline"
                    style={{ marginLeft: "36px", fontSize: "10px" }}
                  >
                    <span className="age" title={user.createdAt}>
                      {timeSince(new Date(user.createdAt))}
                    </span>{" "}
                    <a
                      onClick={() => handleDelete(user._id)}
                      style={{ cursor: "pointer", visibility: "visible" }}
                    >
                      |{" "}
                      {user.author === localStorage.getItem("username")
                        ? "delete?"
                        : "flag?"}
                    </a>{" "}
                  </span>
                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: "20px",
          marginLeft: "30px",
        }}
      >
        {currentPage === 0 ? (
          <></>
        ) : (
          <div
            id="back-page"
            style={{
              // visibility:  "hidden" : "visible",
              color: "#828282",
              marginLeft: "10px",
              marginTop: "0px",
            }}
            onClick={() => setCurrentPage((prevPage) => prevPage - 1)}
          >
            Back
          </div>
        )}
        {users.length < 30 ? (
          <></>
        ) : (
          <div
            id="next-page"
            style={{
              // visibility: users.length < 30 ? "hidden" : "visible",
              color: "#828282",
              marginLeft: "10px",
              marginTop: "0px",
            }}
            onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
          >
            Next
          </div>
        )}
      </div>
    </div>
  );
};

export default CryptoJobsItems;
