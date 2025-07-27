import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// const SelectedUser = localStorage.getItem("SelectedUser");

interface User {
  _id: string;
  username: string;
  email?: string;
  about?: string;
  createdAt: string;
  submissions: string[];
  comments: string[];
  upvotedSubmissions: string[];
  jobs: string[];
}

const IndexSelectedUser: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const { id } = useParams<{ id: string }>();
  
  const API_URL = `https://toptop-api-facbf95cbd23.herokuapp.com/users/findProtected/${id}`;
  // const [aboutInput, setAboutInput] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL, { method: "GET" });
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchData();
  }, []);

  // const navigateTo = (path: string, data: unknown) => {
  //   localStorage.setItem("SelectedItems", JSON.stringify(data));
  //   localStorage.setItem("SelectedUser", SelectedUser || "");
  //   window.location.href = path;
  // };

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <div>
        <p>User: {user.username}</p>
        <p>Created: {new Date(user.createdAt).toLocaleDateString()}</p>
      </div>
      <div>
        <p>About:</p>
        <p>{user.about}</p>
      </div>
      <br />

      <br />
      {/* <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{ marginBottom: "4px" }}
          onClick={() => navigateTo("/user-submissions", user.submissions)}
        >
          <u>Submissions</u>
        </div>

        <div
          style={{ marginBottom: "4px" }}
          onClick={() => navigateTo("/user-comments", user.comments)}
        >
          <u>Comments</u>
        </div>

        <div
          style={{ marginBottom: "4px" }}
          onClick={() => navigateTo("/user-votes", user.upvotedSubmissions)}
        >
          <u>Votes</u>
        </div>
        <br />
      </div> */}
    </div>
  );
};

export default IndexSelectedUser;
