import React, { useEffect, useState } from "react";
import "./Popup.css"; // Create this file for styling
import { usePrivy } from "@privy-io/react-auth";
import { usePopup } from "../assets/providers/popupContext";

// Extend the global Window interface
declare global {
  interface Window {
    submitCreateUser: () => void;
  }
}

// Define types for the fetch response
interface UserResponse {
  id: string;
  username: string;
  privyId: string;
  // Add other fields as needed based on the API response
}

async function fetchData(): Promise<void> {
  const userInput = localStorage.getItem("usernameInput") || "";
  const privyInput = localStorage.getItem("privyIdInput") || "";

  try {
    const response = await fetch('https://toptop-api-facbf95cbd23.herokuapp.com/users', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        privyId: privyInput,
        username: userInput,
      }),
    });

    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }

    const data: UserResponse = await response.json();
    console.log("API Response:", data);

    // Navigate to another page after successful response
    window.location.href = "/crypto";
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

const Popup: React.FC = () => {
  const [isLoggedOut, setIsLoggedOut] = useState(false);
  const { isPopupOpen, setPopupOpen, usernameInput, setUsernameInput } =
    usePopup();
  const { logout, user } = usePrivy();
  //   const handleOpen = () => setIsOpen(true);
  //   const handleClose = () => setIsSubmit(true);
  async function handleSubmit() {
    console.log("Submitted usernameInput:", usernameInput);
    await localStorage.setItem("usernameInput", usernameInput);
    await localStorage.setItem("privyIdInput", user ? user.id : "");
    // window.submitCreateUser();
    fetchData();
    // handleClose();
    setPopupOpen(false);
  }
  // // eslint-disable-next-line react-hooks/rules-of-hooks
  // useEffect(() => {
  //   // Dynamically load the script
  //   const script = document.createElement("script");
  //   script.src = "/public/cryptoScripts/indexPopup.js"; // Ensure this path is correct
  //   script.async = true;
  //   document.body.appendChild(script);

  //   return () => {
  //     // Cleanup the script when the component is unmounted
  //     document.body.removeChild(script);
  //   };
  // }, []);

  const handleCancel = () => {
    console.log("Submitted cancel:");
    logout();
    setIsLoggedOut(true);
    setPopupOpen(false);
    // window.location.href = "/crypto";
  };
  useEffect(() => {
    if (isLoggedOut) {
      window.location.href = "/crypto";
    }
  }, [isLoggedOut]);
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       // setLoading(true); // Start loading
  //       try {
  //         const response = await fetch(
  //           `https://crypto-api-3-6bf97d4979d1.herokuapp.com/auth/register`,
  //           {
  //             method: "POST",
  //             headers: {
  //               "Content-Type": "application/json",
  //             },
  //             body: JSON.stringify({
  //               username: usernameInput,
  //               privyId: user?.id,
  //             }),
  //           }
  //         );
  //         if (!response.ok) {
  //           throw new Error(`HTTP error! status: ${response.status}`);
  //         }
  //         const result = await response.json();
  //         console.log("api result:", result); // Set data to state
  //         console.log("api result username:", result.username); // Set data to state
  //         localStorage.setItem("username", result.username);
  //         // eslint-disable-next-line @typescript-eslint/no-explicit-any
  //       } catch (err: any) {
  //         console.log("api error:", err?.message || "Something went wrong!");
  //       } finally {
  //         // setLoading(false); // End loading
  //       }
  //     };

  //     fetchData();
  //   }, [authenticated, user?.id, isSubmit]); // Empty dependen

  return (
    <div>
      <script src="indexPopup.js"></script>
      {isPopupOpen && (
        <div className="popup-overlay">
          <div className="popup-card">
            <div
              style={{
                fontFamily: "Verdana, Geneva, sans-serif",
                color: "#828282",
                alignSelf: "center",
                paddingTop: "40px",
                fontSize: "18px",
                textAlign: "center",
                lineHeight: "normal",
              }}
            >
              Enter Username to Create Account
            </div>
            <input
              type="text"
              style={{
                fontFamily: "Verdana, Geneva, sans-serif",
                color: "#828282",
                fontSize: "14px",
              }}
              value={usernameInput}
              onChange={(e) => setUsernameInput(e.target.value)}
              placeholder="Username"
              className="popup-input"
            />
            <div className="popup-actions">
              <div
                style={{
                  fontFamily: "Verdana, Geneva, sans-serif",
                  color: "#828282",
                  fontSize: "14px",
                  cursor: "pointer",
                  textDecoration: "underline"
                }}
                onClick={handleCancel}
                // className="submit-btn"
              >
                cancel
              </div>
              <div
                style={{
                  fontFamily: "Verdana, Geneva, sans-serif",
                  color: "#828282",
                  fontSize: "14px",
                  cursor: "pointer",
                  textDecoration: "underline"
                }}
                onClick={handleSubmit}
                // disabled={usernameInput === ""}
                // className="submit-btn"
              >
                Submit
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;
