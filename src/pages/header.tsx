// import "./App.css";
import { usePrivy, useLogin } from "@privy-io/react-auth";
import "../../public/news.css"; // Adjust the path to your CSS file
import { useEffect } from "react";
import { usePopup } from "../assets/providers/popupContext";
import Popup from "./usernamePopup";
// import Popup from "./usernamePopup";

function HeaderMain() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const [hasReloaded, setHasReloaded] = useState(false);
  const { logout, authenticated, user } = usePrivy();
  const { login } = useLogin({
    onComplete: () => {
      // Check if the reload has already been triggered
      if (!sessionStorage.getItem("hasReloaded")) {
        console.log("Login successful! Reloading...");
        sessionStorage.setItem("hasReloaded", "true"); // Mark reload as triggered
        window.location.reload(); // Trigger the reload
      }
    },
  });
  const { isPopupOpen, setPopupOpen } = usePopup();

  const handleLogout = async () => {
    try {
      await logout(); // Wait for logout to complete
      console.log("User successfully logged out");
      localStorage.setItem("username", "");
      // setHasReloaded(false);
      sessionStorage.removeItem("hasReloaded");
      window.location.reload();
      // Add your code here to run after logout
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };
  // const handleLogin = async () => {
  //   try {
  //     await login(); // Wait for logout to complete
  //     console.log("User successfully logged out");

  //     window.location.reload();
  //     // Add your code here to run after logout
  //   } catch (error) {
  //     console.error("Error during logout:", error);
  //   }
  // };
  // const handleLogin = () => {
  //   console.log("Submitted login:");
  //   login();
  //   localStorage.setItem("username", "");
  //   window.location.reload();
  //   // window.location.href = "/crypto";
  // };

  // const [isOpen, setIsOpen] = useState(false);
  // const [data, setData] = useState<unknown>(null);
  // const [error, setError] = useState<string | null>(null);
  // const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      // setLoading(true); // Start loading
      if (user) {
        try {
          const response = await fetch(
            `https://toptop-api-facbf95cbd23.herokuapp.com/users/find/privy/${user?.id}`
          );
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const result = await response.json();

          localStorage.setItem("username", result.username);

          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (err: any) {
          if (authenticated) {
            // setIsOpen(true);
            setPopupOpen(true);
          }
          console.log("api error:", err?.message || "Something went wrong!");
        } finally {
          // window.location.reload();
          // setLoading(false); // End loading
        }
      }
    };

    fetchData();
  }, [authenticated, setPopupOpen, user?.id]); // Empty dependency array to run once on mount
  const username = localStorage.getItem("username");
  return (
    <>
      {isPopupOpen && <Popup />}{" "}
      <a style={{ color: "white" }} href="/">
        TopTop |
      </a>{" "}
      {authenticated && user ? (
        <a style={{ color: "white" }} href="/profile">
          {username || user?.wallet?.address} |
        </a>
      ) : (
        ""
      )}{" "}
      {authenticated ? (
        <a style={{ color: "white", cursor: "pointer" }} onClick={handleLogout}>
          logout
        </a>
      ) : (
        <a style={{ color: "white", cursor: "pointer" }} onClick={login}>
          login
        </a>
      )}
    </>
  );
}

export default HeaderMain;
