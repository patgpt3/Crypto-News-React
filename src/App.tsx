import "./App.css";
// import { usePrivy } from "@privy-io/react-auth";
import "../public/news.css"; // Adjust the path to your CSS file
import { Route, Routes } from "react-router-dom";
import MainCrypto from "./pages/MainCrypto";
import CommentsCrypto from "./pages/CommentsCrypto";
import CryptoNew from "./pages/cryptoNew";
import TopTopNetwork from "./pages/TopTopNetwork";
import CryptoAsk from "./pages/cryptoAsk";
import CryptoShow from "./pages/cryptoShow";
// import CryptoJobs from "./pages/cryptoJobs";
import CryptoSubmit from "./pages/cryptoSubmit";
import CryptoProfile from "./pages/cryptoProfile";
import CryptoUser from "./pages/cryptoUser";
import CryptoNewsItem from "./pages/cryptoNewsItem";
import CryptoCommentSelected from "./pages/cryptoCommentSelected";
import CryptoReplySelected from "./pages/cryptoReplySelected";
import CryptoJobSelected from "./pages/cryptoJobSelected";
import CryptoUserSubmissions from "./pages/cryptoUserSubmissions";
import CryptoUserComments from "./pages/cryptoUserComments";
import CryptoUserVotes from "./pages/cryptoUserVotes";
import CryptoProfileJobs from "./pages/cryptoProfileJobs";

function App() {
  // const { login, logout, authenticated } = usePrivy();

  // const clickSubmit = () => {
  //   // handle submit click
  // };



  return (
    <Routes>
      <Route path="/" element={<TopTopNetwork />} />
      {/* crypto */}
      <Route path="/crypto" element={<MainCrypto />} />
      <Route path="/new" element={<CryptoNew />} />
      <Route path="/crypto/comments" element={<CommentsCrypto />} />
      <Route path="/crypto/ask" element={<CryptoAsk />} />
      <Route path="/crypto/show" element={<CryptoShow />} />
      <Route path="/crypto/jobs" element={<MainCrypto />} />
      <Route path="/crypto/submit" element={<CryptoSubmit />} />

      <Route path="/profile" element={<CryptoProfile />} />
      <Route path="/crypto/profile/jobs" element={<CryptoProfileJobs />} />

      <Route path="/crypto/comments/selected" element={<CryptoCommentSelected />} />
      <Route path="/crypto/comments/reply" element={<CryptoReplySelected />} />

      <Route path="/crypto/item" element={<CryptoNewsItem />} />

      <Route path="/crypto/jobs/selected" element={<CryptoJobSelected />} />

      <Route path="/user" element={<CryptoUser />} />
      <Route path="/user/comments" element={<CryptoUserComments />} />
      <Route path="/user/submissions" element={<CryptoUserSubmissions />} />
      <Route path="/user/votes" element={<CryptoUserVotes />} />

      {/* ai */}
      <Route path="/ai" element={<MainCrypto />} />
      <Route path="/ai/new" element={<CommentsCrypto />} />
      <Route path="/ai/comments" element={<CommentsCrypto />} />
      <Route path="/ai/ask" element={<CommentsCrypto />} />
      <Route path="/ai/show" element={<CommentsCrypto />} />
      <Route path="/ai/jobs" element={<CommentsCrypto />} />
      <Route path="/ai/submit" element={<CommentsCrypto />} />

      <Route path="/ai/profile" element={<CommentsCrypto />} />
      <Route path="/ai/profile/jobs" element={<CommentsCrypto />} />

      <Route path="/ai/comments/selected" element={<CommentsCrypto />} />
      <Route path="/ai/comments/reply" element={<CommentsCrypto />} />

      <Route path="/ai/item" element={<CommentsCrypto />} />

      <Route path="/ai/jobs/selected" element={<CommentsCrypto />} />

      <Route path="/ai/user" element={<CommentsCrypto />} />
      <Route path="/ai/user/comments" element={<CommentsCrypto />} />
      <Route path="/ai/user/submissions" element={<CommentsCrypto />} />
      <Route path="/ai/user/votes" element={<CommentsCrypto />} />

      {/* memecoins */}
      <Route path="/memecoins" element={<MainCrypto />} />
      <Route path="/memecoins/new" element={<CommentsCrypto />} />
      <Route path="/memecoins/comments" element={<CommentsCrypto />} />
      <Route path="/memecoins/ask" element={<CommentsCrypto />} />
      <Route path="/memecoins/show" element={<CommentsCrypto />} />
      <Route path="/memecoins/jobs" element={<CommentsCrypto />} />
      <Route path="/memecoins/submit" element={<CommentsCrypto />} />

      <Route path="/memecoins/profile" element={<CommentsCrypto />} />
      <Route path="/memecoins/profile/jobs" element={<CommentsCrypto />} />

      <Route path="/memecoins/comments/selected" element={<CommentsCrypto />} />
      <Route path="/memecoins/comments/reply" element={<CommentsCrypto />} />

      <Route path="/memecoins/item" element={<CommentsCrypto />} />

      <Route path="/memecoins/jobs/selected" element={<CommentsCrypto />} />

      <Route path="/memecoins/user" element={<CommentsCrypto />} />
      <Route path="/memecoins/user/comments" element={<CommentsCrypto />} />
      <Route path="/memecoins/user/submissions" element={<CommentsCrypto />} />
      <Route path="/memecoins/user/votes" element={<CommentsCrypto />} />

      {/* dePIN */}
      <Route path="/depin" element={<MainCrypto />} />
      <Route path="/depin/new" element={<CommentsCrypto />} />
      <Route path="/depin/comments" element={<CommentsCrypto />} />
      <Route path="/depin/ask" element={<CommentsCrypto />} />
      <Route path="/depin/show" element={<CommentsCrypto />} />
      <Route path="/depin/jobs" element={<CommentsCrypto />} />
      <Route path="/depin/submit" element={<CommentsCrypto />} />

      <Route path="/depin/profile" element={<CommentsCrypto />} />
      <Route path="/depin/profile/jobs" element={<CommentsCrypto />} />

      <Route path="/depin/comments/selected" element={<CommentsCrypto />} />
      <Route path="/depin/comments/reply" element={<CommentsCrypto />} />

      <Route path="/depin/item" element={<CommentsCrypto />} />

      <Route path="/depin/jobs/selected" element={<CommentsCrypto />} />

      <Route path="/depin/user" element={<CommentsCrypto />} />
      <Route path="/depin/user/comments" element={<CommentsCrypto />} />
      <Route path="/depin/user/submissions" element={<CommentsCrypto />} />
      <Route path="/depin/user/votes" element={<CommentsCrypto />} />

      {/* NFT */}
      <Route path="/nft" element={<MainCrypto />} />
      <Route path="/nft/new" element={<CommentsCrypto />} />
      <Route path="/nft/comments" element={<CommentsCrypto />} />
      <Route path="/nft/ask" element={<CommentsCrypto />} />
      <Route path="/nft/show" element={<CommentsCrypto />} />
      <Route path="/nft/jobs" element={<CommentsCrypto />} />
      <Route path="/nft/submit" element={<CommentsCrypto />} />

      <Route path="/nft/profile" element={<CommentsCrypto />} />
      <Route path="/nft/profile/jobs" element={<CommentsCrypto />} />

      <Route path="/nft/comments/selected" element={<CommentsCrypto />} />
      <Route path="/nft/comments/reply" element={<CommentsCrypto />} />

      <Route path="/nft/item" element={<CommentsCrypto />} />

      <Route path="/nft/jobs/selected" element={<CommentsCrypto />} />

      <Route path="/nft/user" element={<CommentsCrypto />} />
      <Route path="/nft/user/comments" element={<CommentsCrypto />} />
      <Route path="/nft/user/submissions" element={<CommentsCrypto />} />
      <Route path="/nft/user/votes" element={<CryptoUserVotes />} />

      {/* DeSci */}
      <Route path="/desci" element={<MainCrypto />} />
      <Route path="/desci/new" element={<CommentsCrypto />} />
      <Route path="/desci/comments" element={<CommentsCrypto />} />
      <Route path="/desci/ask" element={<CommentsCrypto />} />
      <Route path="/desci/show" element={<CommentsCrypto />} />
      <Route path="/desci/jobs" element={<CommentsCrypto />} />
      <Route path="/desci/submit" element={<CommentsCrypto />} />

      <Route path="/desci/profile" element={<CommentsCrypto />} />
      <Route path="/desci/profile/jobs" element={<CommentsCrypto />} />

      <Route path="/desci/comments/selected" element={<CommentsCrypto />} />
      <Route path="/desci/comments/reply" element={<CommentsCrypto />} />

      <Route path="/desci/item" element={<CommentsCrypto />} />

      <Route path="/desci/jobs/selected" element={<CommentsCrypto />} />

      <Route path="/desci/user" element={<CommentsCrypto />} />
      <Route path="/desci/user/comments" element={<CommentsCrypto />} />
      <Route path="/desci/user/submissions" element={<CommentsCrypto />} />
      <Route path="/desci/user/votes" element={<CommentsCrypto />} />

      {/* film */}
      <Route path="/film" element={<MainCrypto />} />
      <Route path="/film/new" element={<CommentsCrypto />} />
      <Route path="/film/comments" element={<CommentsCrypto />} />
      <Route path="/film/ask" element={<CommentsCrypto />} />
      <Route path="/film/show" element={<CommentsCrypto />} />
      <Route path="/film/jobs" element={<CommentsCrypto />} />
      <Route path="/film/submit" element={<CommentsCrypto />} />

      <Route path="/film/profile" element={<CommentsCrypto />} />
      <Route path="/film/profile/jobs" element={<CommentsCrypto />} />

      <Route path="/film/comments/selected" element={<CommentsCrypto />} />
      <Route path="/film/comments/reply" element={<CommentsCrypto />} />

      <Route path="/film/item" element={<CommentsCrypto />} />

      <Route path="/film/jobs/selected" element={<CommentsCrypto />} />

      <Route path="/film/user" element={<CommentsCrypto />} />
      <Route path="/film/user/comments" element={<CommentsCrypto />} />
      <Route path="/film/user/submissions" element={<CommentsCrypto />} />
      <Route path="/film/user/votes" element={<CommentsCrypto />} />

      {/* gaming */}
      <Route path="/gaming" element={<MainCrypto />} />
      <Route path="/gaming/new" element={<CommentsCrypto />} />
      <Route path="/gaming/comments" element={<CommentsCrypto />} />
      <Route path="/gaming/ask" element={<CommentsCrypto />} />
      <Route path="/gaming/show" element={<CommentsCrypto />} />
      <Route path="/gaming/jobs" element={<CommentsCrypto />} />
      <Route path="/gaming/submit" element={<CommentsCrypto />} />

      <Route path="/gaming/profile" element={<CommentsCrypto />} />
      <Route path="/gaming/profile/jobs" element={<CommentsCrypto />} />

      <Route path="/gaming/comments/selected" element={<CommentsCrypto />} />
      <Route path="/gaming/comments/reply" element={<CommentsCrypto />} />

      <Route path="/gaming/item" element={<CommentsCrypto />} />

      <Route path="/gaming/jobs/selected" element={<CommentsCrypto />} />

      <Route path="/gaming/user" element={<CommentsCrypto />} />
      <Route path="/gaming/user/comments" element={<CommentsCrypto />} />
      <Route path="/gaming/user/submissions" element={<CommentsCrypto />} />
      <Route path="/gaming/user/votes" element={<CommentsCrypto />} />
    </Routes>
  );
}

export default App;
