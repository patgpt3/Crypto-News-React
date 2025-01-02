import React, { useEffect, useState } from "react";

// Helper functions for fetching data
const API_URL =
  "https://crypto-api-3-6bf97d4979d1.herokuapp.com/items/main/pages";

const fetchData = async (pageNum: number) => {
  try {
    const response = await fetch(API_URL, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pageNumber: pageNum || 0 }),
    });

    if (!response.ok) throw new Error(`Error: ${response.status}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
  }
};

const deleteItem = async (id: string) => {
  const UPVOTE_URL = `https://crypto-api-3-6bf97d4979d1.herokuapp.com/items/${id}`;
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

const UpVote = async (id: string) => {
  const username = localStorage.getItem("username");
  const UPVOTE_URL = `https://crypto-api-3-6bf97d4979d1.herokuapp.com/items/upVote/${id}`;

  try {
    const response = await fetch(UPVOTE_URL, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ currentUserName: username }),
    });
    if (!response.ok) throw new Error("Network response was not ok");
    return await response.json();
  } catch (error) {
    console.error("Fetch error:", error);
  }
};

const DownVote = async (id: string) => {
  const username = localStorage.getItem("username");
  const UPVOTE_URL = `https://crypto-api-3-6bf97d4979d1.herokuapp.com/items/downVote/${id}`;

  try {
    const response = await fetch(UPVOTE_URL, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ currentUserName: username }),
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

// React component
const CryptoItems: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [users, setUsers] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);

  useEffect(() => {
    const loadData = async () => {
      const usersData = await fetchData(currentPage);
      setUsers(usersData || []);
    };
    loadData();
  }, [currentPage]);

  const handleVote = async (id: string, isUpvote: boolean) => {
    if (isUpvote) {
      await UpVote(id);
    } else {
      await DownVote(id);
    }
    // Update users data after vote
    const updatedUsers = await fetchData(currentPage);
    setUsers(updatedUsers || []);
  };

  const handleDelete = async (id: string) => {
    await deleteItem(id);
    // Update users data after deletion
    const updatedUsers = await fetchData(currentPage);
    setUsers(updatedUsers || []);
  };

  return (
    <div>
      <table id="container">
        <tbody style={{ display: "grid" }}>
          {users.map((user, index) => (
            <React.Fragment key={user._id}>
              <tr className="athing">
                <td className="title">
                  <span
                    style={{ color: "black", display: "flex", gap: "5px" }}
                    className="titleline"
                  >
                    <span
                      style={{ color: "black", minWidth: "23px" }}
                      className="rank"
                    >
                      {index + 1 + currentPage * 30}.
                    </span>
                    <span style={{ fontSize: "11px", color: "black" }}>
                      <img
                        onClick={() => handleVote(user._id, true)}
                        style={{ cursor: "pointer", marginRight: "8px" }}
                        src="./Hacker News_files/tpp.png"
                        height="18"
                        alt="Upvote"
                      />
                    </span>
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
                    style={{ marginLeft: "59px", fontSize: "10px" }}
                  >
                    <span className="score">{user.points} points</span> | by{" "}
                    <a className="cnUser" style={{ cursor: "pointer" }}>
                      {user.author}
                    </a>
                    <span className="age" title={user.createdAt}>
                      | {timeSince(new Date(user.createdAt))}
                    </span>
                    <a
                      onClick={() => handleDelete(user._id)}
                      style={{ cursor: "pointer", visibility: "visible" }}
                    >
                      |{" "}
                      {user.author === localStorage.getItem("username")
                        ? "delete?"
                        : "flag?"}
                    </a>
                    <a
                      onClick={() => handleVote(user._id, false)}
                      style={{ cursor: "pointer", visibility: "hidden" }}
                    >
                      | unvote
                    </a>
                  </span>
                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
      <button
        id="next-page"
        onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
      >
        Next
      </button>
      <button
        id="back-page"
        onClick={() => setCurrentPage((prevPage) => prevPage - 1)}
      >
        Back
      </button>
    </div>
  );
};

export default CryptoItems;
