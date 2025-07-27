import React, { useEffect, useState } from "react";
import { usePopup } from "../../assets/providers/popupContext";
import { useParams } from "react-router-dom";
// import { usePrivy } from "@privy-io/react-auth";

// const SelectedItem = localStorage.getItem("selectedItem");

interface Item {
  _id: string;
  author: string;
  title: string;
  url: string;
  comments: string[];
  comment: string;
  createdAt: string;
  category: string;
  points: number;
  replies: string[];
  item: string;
  text: string;
}


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
const CryptoSelectedComment: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [users, setUsers] = useState<Item | null>(null);
  // const [currentPage, setCurrentPage] = useState<number>(0);
  // const { login, authenticated } = usePrivy();
  const { setItemComments } = usePopup();
  const { id } = useParams<{ id: string }>();
  const API_URL = `https://toptop-api-facbf95cbd23.herokuapp.com/comments/${id}`;
  const fetchData = async () => {
    try {
      const response = await fetch(API_URL, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) throw new Error(`Error: ${response.status}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };
  const handleVoteComment = async (id: string, isUpvote: boolean) => {
    const url = `https://toptop-api-facbf95cbd23.herokuapp.com/comments/${
      isUpvote ? "upVote" : "downVote"
    }/${id}`;
    try {
      const response = await fetch(url, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          currentUserName: localStorage.getItem("username"),
        }),
      });
      if (response.ok) {
        const updatedComments = await fetchData();
        setUsers(updatedComments || []);
      }
    } catch (error) {
      console.error("Error voting on comment:", error);
    }
  };
    const handleDeleteComment = async (id: string) => {
    try {
      const response = await fetch(
        `https://toptop-api-facbf95cbd23.herokuapp.com/comments/${id}`,
        { method: "DELETE", headers: { "Content-Type": "application/json" } }
      );
      if (response.ok) {
        window.location.href = `/crypto`;
      }
    } catch (error) {
      console.error("Error deleting comment:", error);
    }
  };
  const currentCommentMap = localStorage.getItem("username");

  useEffect(() => {
    const loadData = async () => {
      const usersData = await fetchData();
      await fetchCurrentUser1();
      setUsers(usersData || []);
      setItemComments(usersData?.comments);
    };
    loadData();
  }, []);
  useEffect(() => {
    fetchCurrentUser1();
  }, [users]);

  const commentElements = document.querySelectorAll(".cnContext");
  commentElements.forEach((commentElement) => {
    commentElement.addEventListener("click", () => {
      const itemId = commentElement.id.replace("%", "");
      localStorage.setItem("selectedItem", itemId);
      window.location.href = `/${users?.category}-item/${itemId}`;
    });
  });
  const userElements = document.querySelectorAll(".cnComment");
  userElements.forEach((commentElement) => {
    commentElement.addEventListener("click", () => {
      const itemId = commentElement.id.replace("*", "");
      window.location.href = `/user/${itemId}`;
    });
  });

  return (
    <div>
      <td className="default">
        <div style={{ marginTop: "2px", marginBottom: "-10px" }}>
          <span className="comhead">
            <a id="up_41790045" className="clicky">
              <span
                style={{
                  fontSize: "10px",
                  marginRight: "4px",
                  marginLeft: "4px",
                }}
              >
                <img
                  style={{ cursor: "pointer", marginRight: "8px" }}
                  id={`${users ? users._id : ""}`}
                  onClick={() =>
                    handleVoteComment(users ? users._id : "", true)
                  }
                  src="/Hacker News_files/tpp.png"
                  height="18"
                  className="cnCommentUpVote"
                />
              </span>
            </a>
            <a
              id={`${users ? users.author : ""}*`}
              className="cnComment"
              style={{ cursor: "pointer" }}
            >
              {users ? users?.author : ""}
            </a>{" "}
            <span
              className="age"
              title="2024-10-09T16:55:00.000000Z"
              style={{ pointerEvents: "none", cursor: "default" }}
            >
              <a> | {timeSince(new Date(users ? users.createdAt : ""))}</a>
            </span>{" "}
            <span style={{ pointerEvents: "none", cursor: "default" }}>
              | {users ? users?.points : ""} points
            </span>{" "}
            <span id="unv_41790045"></span>
            <span>
              <a
                className="cnContext"
                style={{ cursor: "pointer" }}
                id={`${users? users.item : ''}%`}
              >
                | context
              </a>{" "}
            </span>
            <span id="unv_41790045"></span>
            <a
              className="flags"
              style={{
                cursor: "pointer",
                visibility: currentCommentMap
                  ? currentCommentMap === "null"
                    ? "hidden"
                    : "visible"
                  : "hidden",
              }}
              id={`${users ? users._id : ""}[`}
              onClick={() => handleDeleteComment(users ? users._id : "")}
            >
              | {"flag?"}
            </a>{" "}
            <a
              style={{ visibility: "hidden", cursor: "pointer" }}
              id={`${users ? users._id : ""}$`}
              className="cnCommentDownVote"
              onClick={() => handleVoteComment(users ? users._id : "", false)}
            >
              | unvote
            </a>
          </span>
        </div>
        <br />
        <div className="comment">
          <a>
            <div className="commtext c00" style={{ marginLeft: "40px" }}>
              {users? users.comment : ''}
            </div>
          </a>
        </div>
      </td>
    </div>
  );
};

export default CryptoSelectedComment;
