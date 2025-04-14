import "./App.css";
// import { usePrivy } from "@privy-io/react-auth";
import "../public/news.css"; // Adjust the path to your CSS file
import { Route, Routes } from "react-router-dom";
import MainCrypto from "./pages/MainCrypto";
import CommentsCrypto from "./pages/CommentsCrypto";
import CryptoNew from "./pages/cryptoNew";
// import TopTopNetwork from "./pages/TopTopNetwork";
import CryptoAsk from "./pages/cryptoAsk";
import CryptoShow from "./pages/cryptoShow";
// import CryptoJobs from "./pages/cryptoJobs";
import CryptoSubmit from "./pages/cryptoSubmit";
import CryptoProfile from "./pages/cryptoProfile";
import CryptoUser from "./pages/cryptoUser";
// import CryptoNewsItem from "./pages/cryptoNewsItem";
import CryptoCommentSelected from "./pages/cryptoCommentSelected";
import CryptoReplySelected from "./pages/cryptoReplySelected";
import CryptoJobSelected from "./pages/cryptoJobSelected";
import CryptoUserSubmissions from "./pages/cryptoUserSubmissions";
import CryptoUserComments from "./pages/cryptoUserComments";
import CryptoUserVotes from "./pages/cryptoUserVotes";
import CryptoProfileJobs from "./pages/cryptoProfileJobs";
import CryptoJobs from "./pages/cryptoJobs";
import MainAI from "./pages/MainAI";
import TopTopNetwork from "./pages/TopTopNetwork";
import MainMemecoin from "./pages/MainMemecoin";
import MainDePIN from "./pages/MainDePIN";
import MainNFT from "./pages/MainNFT";
import MainDeSci from "./pages/MainDeSci";
import MainFilm from "./pages/MainFilm";
import MainGaming from "./pages/MainGaming";
import CommentsAI from "./pages/CommentsAI";
import CommentsMemecoins from "./pages/CommentsMemecoins";
import CommentsDePIN from "./pages/CommentsDePIN";
import CommentsNFT from "./pages/CommentsNFT";
import CommentsDeSci from "./pages/CommentsDeSci";
import CommentsFilm from "./pages/CommentsFilm";
import CommentsGaming from "./pages/CommentsGaming";
import AINew from "./pages/aiNew";
import NFTSubmit from "./pages/nftSubmit";
import AISubmit from "./pages/aiSubmit";
import MemecoinsSubmit from "./pages/memecoinsSubmit";
import DePINSubmit from "./pages/depinSubmit";
import DeSciSubmit from "./pages/desciSubmit";
import GamingSubmit from "./pages/gamingSubmit";
import FilmSubmit from "./pages/filmSubmit";
import MemecoinsNew from "./pages/memecoinsNew";
import AIAsk from "./pages/aiAsk";
import AIShow from "./pages/aiShow";
import AIJobs from "./pages/aiJobs";
import MemecoinsAsk from "./pages/memecoinsAsk";
import MemecoinsShow from "./pages/memecoinsShow";
import MemecoinsJobs from "./pages/memecoinsJobs";
import DePINNew from "./pages/depinNew";
import DePINAsk from "./pages/depinAsk";
import DePINShow from "./pages/depinShow";
import DePINJobs from "./pages/depinJobs";
import NFTNew from "./pages/nftNew";
import NFTAsk from "./pages/nftAsk";
import NFTShow from "./pages/nftShow";
import NFTJobs from "./pages/nftJobs";
import DeSciNew from "./pages/desciNew";
import DeSciAsk from "./pages/desciAsk";
import DeSciShow from "./pages/desciShow";
import DeSciJobs from "./pages/desciJobs";
import FilmNew from "./pages/filmNew";
import FilmAsk from "./pages/filmAsk";
import FilmShow from "./pages/filmShow";
import FilmJobs from "./pages/filmJobs";
import GamingNew from "./pages/gamingNew";
import GamingAsk from "./pages/gamingAsk";
import GamingShow from "./pages/gamingShow";
import GamingJobs from "./pages/gamingJobs";
import CryptoNewsItem from "./pages/cryptoNewsItem";

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
      <Route path="/crypto-new" element={<CryptoNew />} />
      <Route path="/crypto-comments" element={<CommentsCrypto />} />
      <Route path="/crypto-ask" element={<CryptoAsk />} />
      <Route path="/crypto-show" element={<CryptoShow />} />
      <Route path="/crypto/jobs" element={<CryptoJobs />} />
      <Route path="/crypto-submit" element={<CryptoSubmit />} />

      <Route path="/profile" element={<CryptoProfile />} />
      <Route path="/crypto-profile-jobs" element={<CryptoProfileJobs />} />

      <Route
        path="/crypto-comments-selected/:id"
        element={<CryptoCommentSelected />}
      />
      <Route path="/crypto-comments-reply" element={<CryptoReplySelected />} />

      <Route path="/crypto-item/:id" element={<CryptoNewsItem />} />

      <Route path="/crypto/jobs-selected" element={<CryptoJobSelected />} />

      <Route path="/user/:id" element={<CryptoUser />} />
      <Route path="/user-comments" element={<CryptoUserComments />} />
      <Route path="/user-submissions" element={<CryptoUserSubmissions />} />
      <Route path="/user-votes" element={<CryptoUserVotes />} />

      {/* ai */}
      <Route path="/ai" element={<MainAI />} />
      <Route path="/ai/new" element={<AINew />} />
      <Route path="/ai/comments" element={<CommentsAI />} />
      <Route path="/ai/ask" element={<AIAsk />} />
      <Route path="/ai/show" element={<AIShow />} />
      <Route path="/ai/jobs" element={<AIJobs />} />
      <Route path="/ai/submit" element={<AISubmit />} />

      <Route path="/ai/comments/selected" element={<CommentsCrypto />} />
      <Route path="/ai/comments/reply" element={<CommentsCrypto />} />

      <Route path="/ai/item" element={<CommentsCrypto />} />

      <Route path="/ai/jobs/selected" element={<CommentsCrypto />} />

  
      {/* memecoins */}
      <Route path="/memecoins" element={<MainMemecoin />} />
      <Route path="/memecoins/new" element={<MemecoinsNew />} />
      <Route path="/memecoins/comments" element={<CommentsMemecoins />} />
      <Route path="/memecoins/ask" element={<MemecoinsAsk />} />
      <Route path="/memecoins/show" element={<MemecoinsShow />} />
      <Route path="/memecoins/jobs" element={<MemecoinsJobs />} />
      <Route path="/memecoins/submit" element={<MemecoinsSubmit />} />

      <Route path="/memecoins/comments/selected" element={<CommentsCrypto />} />
      <Route path="/memecoins/comments/reply" element={<CommentsCrypto />} />

      <Route path="/memecoins/item" element={<CommentsCrypto />} />

      <Route path="/memecoins/jobs/selected" element={<CommentsCrypto />} />

 
      {/* dePIN */}
      <Route path="/depin" element={<MainDePIN />} />
      <Route path="/depin/new" element={<DePINNew />} />
      <Route path="/depin/comments" element={<CommentsDePIN />} />
      <Route path="/depin/ask" element={<DePINAsk />} />
      <Route path="/depin/show" element={<DePINShow />} />
      <Route path="/depin/jobs" element={<DePINJobs />} />
      <Route path="/depin/submit" element={<DePINSubmit />} />

      <Route path="/depin/comments/selected" element={<CommentsCrypto />} />
      <Route path="/depin/comments/reply" element={<CommentsCrypto />} />

      <Route path="/depin/item" element={<CommentsCrypto />} />

      <Route path="/depin/jobs/selected" element={<CommentsCrypto />} />



      {/* NFT */}
      <Route path="/nft" element={<MainNFT />} />
      <Route path="/nft/new" element={<NFTNew />} />
      <Route path="/nft/comments" element={<CommentsNFT />} />
      <Route path="/nft/ask" element={<NFTAsk />} />
      <Route path="/nft/show" element={<NFTShow />} />
      <Route path="/nft/jobs" element={<NFTJobs />} />
      <Route path="/nft/submit" element={<NFTSubmit />} />

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
      <Route path="/desci" element={<MainDeSci />} />
      <Route path="/desci/new" element={<DeSciNew />} />
      <Route path="/desci/comments" element={<CommentsDeSci />} />
      <Route path="/desci/ask" element={<DeSciAsk />} />
      <Route path="/desci/show" element={<DeSciShow />} />
      <Route path="/desci/jobs" element={<DeSciJobs />} />
      <Route path="/desci/submit" element={<DeSciSubmit />} />

      <Route path="/desci/comments/selected" element={<CommentsCrypto />} />
      <Route path="/desci/comments/reply" element={<CommentsCrypto />} />

      <Route path="/desci/item" element={<CommentsCrypto />} />

      <Route path="/desci/jobs/selected" element={<CommentsCrypto />} />


      {/* film */}
      <Route path="/film" element={<MainFilm />} />
      <Route path="/film/new" element={<FilmNew />} />
      <Route path="/film/comments" element={<CommentsFilm />} />
      <Route path="/film/ask" element={<FilmAsk />} />
      <Route path="/film/show" element={<FilmShow />} />
      <Route path="/film/jobs" element={<FilmJobs />} />
      <Route path="/film/submit" element={<FilmSubmit />} />

      <Route path="/film/comments/selected" element={<CommentsCrypto />} />
      <Route path="/film/comments/reply" element={<CommentsCrypto />} />

      <Route path="/film/item" element={<CommentsCrypto />} />

      <Route path="/film/jobs/selected" element={<CommentsCrypto />} />

      {/* gaming */}
      <Route path="/gaming" element={<MainGaming />} />
      <Route path="/gaming/new" element={<GamingNew />} />
      <Route path="/gaming/comments" element={<CommentsGaming />} />
      <Route path="/gaming/ask" element={<GamingAsk />} />
      <Route path="/gaming/show" element={<GamingShow />} />
      <Route path="/gaming/jobs" element={<GamingJobs />} />
      <Route path="/gaming/submit" element={<GamingSubmit />} />

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
