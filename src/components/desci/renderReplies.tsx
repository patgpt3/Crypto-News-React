import { usePrivy } from "@privy-io/react-auth";
import React, { useState, useEffect } from "react";

interface Reply {
  _id: string;
  author: string;
  createdAt: string;
  points: number;
  reply: string;
  replies?: string[]; // Array of reply IDs
}

const fetchReplies = async (replyIds: string[]) => {
  const USER_URL = `https://crypto-api-3-6bf97d4979d1.herokuapp.com/replies/replies/findbyIds`;

  try {
    const response = await fetch(USER_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ replies: replyIds }),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const datas: Reply[] = await response.json();
    return datas;
  } catch (error) {
    console.error("Fetch error:", error);
    return [];
  }
};

interface RenderRepliesProps {
  replies?: string[]; // Array of reply IDs
  depth?: number; // For nested replies
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

const RenderReplies: React.FC<RenderRepliesProps> = ({
  replies,
  depth = 0,
}) => {
  const [nestedReplies, setNestedReplies] = useState<Reply[]>([]);
  const [loading, setLoading] = useState(true);
  const voteElements = document.querySelectorAll(".cnReplyUpVote");
  const { login } = usePrivy();
  voteElements.forEach((voteElement) => {
    voteElement.addEventListener("click", () => {
      const username = localStorage.getItem("username");
      if (!username || username === "null") {
        login();
      }
    });
  });
  useEffect(() => {
    const fetchNestedReplies = async () => {
      if (replies && replies.length > 0) {
        const fetchedReplies = await fetchReplies(replies);
        setNestedReplies(fetchedReplies);
      }
      setLoading(false);
    };

    fetchNestedReplies();
  }, [replies]);

  const marginLeft = 10 + depth * 20;

  if (loading) {
    return <div style={{ marginLeft }}>Loading...</div>;
  }
  const currentCommentMap = localStorage.getItem("username");
  return (
    <>
      {nestedReplies.map((reply) => (
        <React.Fragment key={reply._id}>
          <tr className="athing" id={reply._id}>
            <div style={{ marginLeft: `${marginLeft}px` }}>
              <td className="default">
                <div style={{ marginBottom: "-10px" }}>
                  <span className="comhead">
                    <span
                      style={{
                        fontSize: "10px",
                        marginRight: "4px",
                        marginLeft: "4px",
                      }}
                    >
                      <img
                        style={{ cursor: "pointer", marginRight: "8px" }}
                        id={`${reply._id}`}
                        //   onClick={() => handleVoteComment(comment._id, true)}
                        src="/Hacker News_files/tpp.png"
                        height="18"
                        className="cnReplyUpVote"
                      />
                    </span>
                    <span className="cnUser" style={{ cursor: "pointer" }}>
                      {reply.author || ""}
                    </span>{" "}
                    <span
                      className="age"
                      title={reply.createdAt}
                      style={{ pointerEvents: "none", cursor: "default" }}
                    >
                      | {timeSince(new Date(reply?.createdAt))}
                    </span>{" "}
                    <span style={{ pointerEvents: "none", cursor: "default" }}>
                      | {reply.points} points
                    </span>{" "}
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
                      id={`${reply._id}[`}
                      //   onClick={() => handleDeleteComment(comment._id)}
                    >
                      |{" "}
                      {reply.author === currentCommentMap ? "delete?" : "flag?"}
                    </a>{" "}
                  </span>
                </div>
                <br />
                <div className="comment">
                  <div className="commtext c00" style={{ marginLeft: "40px" }}>
                    {reply.reply}
                  </div>
                  <div style={{ marginLeft: "40px" }}>
                    <p>
                      <u>
                        <a
                        //   className="reply"
                          id={`${reply._id}&`}
                          rel="nofollow"
                          
                          style={{ cursor: "pointer" }}
                        >
                          reply
                        </a>
                      </u>
                    </p>
                  </div>
                </div>
              </td>
            </div>
          </tr>
          {reply.replies && (
            <RenderReplies replies={reply.replies} depth={depth + 1} />
          )}
          <br />
        </React.Fragment>
      ))}
    </>
  );
};

export default RenderReplies;
