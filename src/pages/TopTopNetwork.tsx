import React from "react";

const TopTopNetwork = () => {
  return (
    <div
      style={{
        display: "table",
        position: "absolute",
        top: 0,
        left: 0,
        height: "100%",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "table-cell",
          verticalAlign: "middle",
        }}
      >
        <div
          style={{
            fontSize: "36px",
            marginLeft: "auto",
            marginRight: "auto",
            fontFamily: "auto",
          }}
        >
          <img
            src="/Ttn.jpg"
            // alt="Top Top Network"
            style={{
              border: "1px white solid",
              display: "block",
              width: "30vw",
              maxWidth: "1000px",
              margin: "auto",
            }}
          />

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <div style={{ color: "#053eff", margin: "5px", marginLeft: "0px" }}>
              <a style={{ color: "#053eff", margin: "5px" }} href="/crypto">
                <u>Crypto</u>
              </a>
            </div>
            <div style={{ margin: "5px", marginLeft: "0px" }}>
              <a style={{ color: "purple", margin: "5px" }} href="/ai">
                <u>AI</u>
              </a>
            </div>
            <div style={{ margin: "5px", marginLeft: "0px" }}>
              <a style={{ color: "green", margin: "5px" }} href="/memecoins">
                <u>Memecoins</u>
              </a>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <div style={{ margin: "5px", marginLeft: "0px" }}>
              <a style={{ color: "red", margin: "5px" }} href="/depin">
                <u>DePIN</u>
              </a>
            </div>
            <div style={{ margin: "5px", marginLeft: "0px" }}>
              <a style={{ color: "#d1d10a", margin: "5px" }} href="/nft">
                <u>NFT</u>
              </a>
            </div>
            <div style={{ margin: "5px", marginLeft: "0px" }}>
              <a style={{ color: "orange", margin: "5px" }} href="/desci">
                <u>DeSci</u>
              </a>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <div style={{ margin: "5px", marginLeft: "0px" }}>
              <a style={{ color: "black", margin: "5px" }} href="/film">
                <u>Film</u>
              </a>
            </div>
            <div
              style={{
                margin: "5px",
                marginLeft: "0px",
                justifyContent: "center",
                display: "flex",
                color: "brown",
              }}
            >
              <a style={{ color: "brown" }} href="/gaming">
                <u>Gaming</u>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopTopNetwork;
