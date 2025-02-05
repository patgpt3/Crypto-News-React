import React, { useState, useEffect } from "react";

const SelectedUser = localStorage.getItem("username");
const API_URL = `https://crypto-api-3-6bf97d4979d1.herokuapp.com/users/findProtected/${SelectedUser}`;
const JOB_API_URL = "https://crypto-api-3-6bf97d4979d1.herokuapp.com/jobs";

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

const IndexCurrentUser: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [changeEmail, setChangeEmail] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [aboutInput, setAboutInput] = useState("");
  const [jobDetails, setJobDetails] = useState({
    title: "",
    url: "",
    body: "",
  });

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

  const toggleEmailChange = () => {
    setChangeEmail((prev) => !prev);
  };

  const updateUserField = async (field: string, value: string) => {
    if (!user) return;
    try {
      const response = await fetch(
        `https://crypto-api-3-6bf97d4979d1.herokuapp.com/users/${user._id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ [field]: value }),
        }
      );
      if (!response.ok) throw new Error(`Error: ${response.status}`);
      const updatedUser = await response.json();
      setUser(updatedUser);
      if (field === "email") toggleEmailChange();
    } catch (error) {
      console.error("Update error:", error);
    }
  };

  const createJob = async () => {
    try {
      const response = await fetch(JOB_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...jobDetails,
          author: SelectedUser,
          points: 0,
          isFlagged: 0,
        }),
      });
      if (!response.ok) throw new Error("Error posting job");
      window.location.href = "/crypto-jobs";
    } catch (error) {
      console.error("Job posting error:", error);
    }
  };

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
        <textarea
          value={aboutInput}
          onChange={(e) => setAboutInput(e.target.value)}
          rows={5}
          cols={60}
        />
        <br />
        <br />
        <button onClick={() => updateUserField("about", aboutInput)}>
          {user.about ? "Update About" : "Add About"}
        </button>
      </div>
      <br />
      <div>
        <p>Email:</p>
        {changeEmail ? (
          <div>
            <input
              type="email"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              placeholder={user.email || "Enter your email"}
            />
            <button onClick={() => updateUserField("email", emailInput)}>
              Save Email
            </button>
          </div>
        ) : (
          <p>{user.email || "No email provided"}</p>
        )}
        <button onClick={toggleEmailChange}>
          {changeEmail ? "Cancel" : "Change Email"}
        </button>
      </div>
      <br />
      <div style={{marginBottom:"10px"}}>
        <p>Post a Job:</p>
        <div>
        <div >
            <label>Title:</label>
          </div>
          <br />
          <input
            type="text"
            value={jobDetails.title}
            style={{ width: "-webkit-fill-available", marginBottom: "6px" }}
            onChange={(e) =>
              setJobDetails((prev) => ({ ...prev, title: e.target.value }))
            }
          />
        </div>
        <div>
          <div style={{marginTop:"10px"}}>
            <label>URL:</label>
          </div>
          <br />
          <input
            type="text"
            style={{ width: "-webkit-fill-available", marginBottom: "6px" }}
            value={jobDetails.url}
            onChange={(e) =>
              setJobDetails((prev) => ({ ...prev, url: e.target.value }))
            }
          />
        </div>
        <div>
        <div style={{marginTop:"10px"}}>
            <label>Body:</label>
          </div>
          <br />
          <textarea
            value={jobDetails.body}
            style={{ width: "-webkit-fill-available", marginBottom: "6px" }}
            onChange={(e) =>
              setJobDetails((prev) => ({ ...prev, body: e.target.value }))
            }
          />
        </div>
        <br />
        <button onClick={createJob}>Submit Job Post</button>
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
        <div onClick={() => navigateTo("/crypto-profile-jobs", user.jobs)}>
          <u>Job Listings</u>
        </div>
      </div> */}
    </div>
  );
};

export default IndexCurrentUser;
