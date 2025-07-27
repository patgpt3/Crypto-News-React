import React, { useState, useEffect } from "react";
import { usePrivy } from "@privy-io/react-auth";
import RenderReplies from "./renderReplies";

interface Comment {
  _id: string;
  author: string;
  comment: string;
  createdAt: string;
  points: number;
  replies: string[];
  item: string;
}

// interface Reply {
//   _id: string;
//   author: string;
//   reply: string;
//   createdAt: string;
//   points: number;
//   replies: Reply[];
// }
// Define types for the API response
interface UserProtectedData {
  username: string;
  upvotedSubmissions: string[];
  // Add other fields as needed based on the API response
}
const FilmCommentsPage: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [pageNumber, setPageNumber] = useState(0);
  const { login } = usePrivy();
  const fetchComments = async (pageNum: number) => {
    try {
      const response = await fetch(
        "https://toptop-api-facbf95cbd23.herokuapp.com/comments/comments/newest/pages/cat",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ pageNumber: pageNum || 0, cat: "Film" }),
        }
      );
      if (!response.ok) throw new Error(`Error: ${response.status}`);
      const data = await response.json();

      return data;
      // setComments(data);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

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
      const voteElements =
        document.querySelectorAll<HTMLElement>(".cnCommentUpVote");
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
        document.querySelectorAll<HTMLElement>(".cnCommentDownVote");

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
  const commentElements = document.querySelectorAll(".cnContext");
  commentElements.forEach((commentElement) => {
    commentElement.addEventListener("click", () => {
      const itemId = commentElement.id.replace("%", "");
      localStorage.setItem("selectedItem", itemId);
      window.location.href = `/film/item/${itemId}`;
    });
  });
  const handleDeleteComment = async (id: string) => {
    try {
      const response = await fetch(
        `https://toptop-api-facbf95cbd23.herokuapp.com/comments/${id}`,
        { method: "DELETE", headers: { "Content-Type": "application/json" } }
      );
      if (response.ok) {
        setComments((prev) => prev.filter((comment) => comment._id !== id));
      }
    } catch (error) {
      console.error("Error deleting comment:", error);
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
        const updatedComments = await fetchComments(pageNumber);
        setComments(updatedComments || []);
      }
    } catch (error) {
      console.error("Error voting on comment:", error);
    }
  };
  const elements = document.querySelectorAll(".cnComment");
  elements.forEach((element) => {
    element.addEventListener("click", () => {
      localStorage.setItem(
        "SelectedUser",
        element.textContent ? element.textContent : ""
      );
      window.location.href = "/user";
    });
  });

  // const fetchReplies = async (replyIds: Reply[]) => {
  //   const USER_URL = `https://toptop-api-facbf95cbd23.herokuapp.com/replies/replies/findbyIds`;

  //   try {
  //     const response = await fetch(USER_URL, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ replies: replyIds }),
  //     });

  //     if (!response.ok) {
  //       throw new Error(`Error: ${response.status}`);
  //     }

  //     const datas: Reply[] = await response.json();
  //     return datas;
  //   } catch (error) {
  //     console.error("Fetch error:", error);
  //     return [];
  //   }
  // };

  // const renderReplies = (replies: Reply[] | undefined, depth = 0) => {
  //   // eslint-disable-next-line react-hooks/rules-of-hooks
  //   const [nestedReplies, setNestedReplies] = useState<Reply[]>([]);
  //   // eslint-disable-next-line react-hooks/rules-of-hooks
  //   const [loading, setLoading] = useState(true);

  //   // eslint-disable-next-line react-hooks/rules-of-hooks
  //   useEffect(() => {
  //     const fetchNestedReplies = async () => {
  //       if (replies && replies.length > 0) {
  //         const fetchedReplies = await fetchReplies(replies);
  //         setNestedReplies(fetchedReplies);
  //       }
  //       setLoading(false);
  //     };

  //     fetchNestedReplies();
  //   }, [replies]);

  //   const marginLeft = 10 + depth * 20;

  //   if (loading) {
  //     return <div style={{ marginLeft }}>Loading...</div>;
  //   }

  //   return (
  //     <>
  //       {nestedReplies.map((reply) => (
  //         <React.Fragment key={reply._id}>
  //           <tr className="athing" id={reply._id}>
  //             <div style={{ marginLeft: `${marginLeft}px` }}>
  //               <td className="default">
  //                 <div style={{ marginBottom: "-10px" }}>
  //                   <span className="comhead">
  //                     <button
  //                       id={`up_${reply._id}`}
  //                       onClick={() => console.log(`Upvote ${reply._id}`)}
  //                       style={{ cursor: "pointer" }}
  //                     >
  //                       Upvote
  //                     </button>
  //                     <span className="cnUser" style={{ cursor: "pointer" }}>
  //                       {reply.author || ""}
  //                     </span>
  //                     <span
  //                       className="age"
  //                       title={reply.createdAt}
  //                       style={{ pointerEvents: "none", cursor: "default" }}
  //                     >
  //                       | {new Date(reply.createdAt).toLocaleString()}
  //                     </span>
  //                     <span style={{ pointerEvents: "none", cursor: "default" }}>
  //                       | {reply.points} points
  //                     </span>
  //                   </span>
  //                 </div>
  //                 <br />
  //                 <div className="comment">
  //                   <div className="commtext c00" style={{ marginLeft: "40px" }}>
  //                     {reply.reply}
  //                   </div>
  //                 </div>
  //               </td>
  //             </div>
  //           </tr>
  //           {reply.replies && renderReplies(reply.replies, depth + 1)}
  //         </React.Fragment>
  //       ))}
  //     </>
  //   );
  // };
  const currentCommentMap = localStorage.getItem("username");
  const repls = document.querySelectorAll(".reply");
  repls.forEach((element) => {
    element.addEventListener("click", () => {
      const commentId = element.id.replace("&", "");
      localStorage.setItem("selectedCommentIn", commentId);
      window.location.href = `/film/comments-selected/${commentId}`;
    });
  });

  useEffect(() => {
    const loadData = async () => {
      const usersData = await fetchComments(pageNumber);
      await fetchCurrentUser1();
      setComments(usersData || []);
    };
    loadData();
  }, [pageNumber]);
  useEffect(() => {
    fetchCurrentUser1();
  }, [comments]);

  const voteElements = document.querySelectorAll(".cnCommentUpVote");

  voteElements.forEach((voteElement) => {
    voteElement.addEventListener("click", () => {
      const username = localStorage.getItem("username");
      if (!username || username === "null") {
        login();
      }
    });
  });

  const replyElements = document.querySelectorAll(".reply");

  replyElements.forEach((replyElement) => {
    replyElement.addEventListener("click", () => {
      const username = localStorage.getItem("username");
      if (!username || username === "null") {
        login();
      }
    });
  });

  return (
    <div>
      {comments.map((comment) => (
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
                      id={`${comment._id}`}
                      onClick={() => handleVoteComment(comment._id, true)}
                      src="/Hacker News_files/tpp.png"
                      height="18"
                      className="cnCommentUpVote"
                    />
                  </span>
                </a>
                <a
                  id={`${comment._id}*`}
                  className="cnComment"
                  style={{ cursor: "pointer" }}
                >
                  {comment ? comment?.author : ""}
                </a>{" "}
                <span
                  className="age"
                  title="2024-10-09T16:55:00.000000Z"
                  style={{ pointerEvents: "none", cursor: "default" }}
                >
                  <a> | {timeSince(new Date(comment?.createdAt))}</a>
                </span>{" "}
                <span style={{ pointerEvents: "none", cursor: "default" }}>
                  | {comment.points} points
                </span>{" "}
                <span id="unv_41790045"></span>
                <span>
                  <a
                    className="cnContext"
                    style={{ cursor: "pointer" }}
                    id={`${comment?.item}%`}
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
                  id={`${comment._id}[`}
                  onClick={() => handleDeleteComment(comment._id)}
                >
                  | {comment.author === currentCommentMap ? "delete?" : "flag?"}
                </a>{" "}
                <a
                  style={{ visibility: "hidden", cursor: "pointer" }}
                  id={`${comment._id}$`}
                  className="cnCommentDownVote"
                  onClick={() => handleVoteComment(comment._id, false)}
                >
                  | unvote
                </a>
              </span>
            </div>
            <br />
            <div className="comment">
              <a>
                <div className="commtext c00" style={{ marginLeft: "40px" }}>
                  {comment?.comment}
                </div>
              </a>
              <div style={{ marginLeft: "40px" }}>
                <p>
                  <u>
                    <a
                      className="reply"
                      id={`${comment._id}&`}
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
          <div style={{ marginLeft: "40px", marginTop: "20px" }}>
            <RenderReplies replies={comment.replies} />
          </div>
        </div>
      ))}

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: "20px",
          marginLeft: "30px",
        }}
      >
        {pageNumber === 0 ? (
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
            onClick={() => setPageNumber((prevPage) => prevPage - 1)}
          >
            Back
          </div>
        )}
        {comments.length < 30 ? (
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
            onClick={() => setPageNumber((prevPage) => prevPage + 1)}
          >
            Next
          </div>
        )}
      </div>
    </div>
  );
};

export default FilmCommentsPage;
