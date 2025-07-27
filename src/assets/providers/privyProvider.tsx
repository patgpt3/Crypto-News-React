import { PrivyProvider } from "@privy-io/react-auth";
import { toSolanaWalletConnectors } from "@privy-io/react-auth/solana";
// import { useCallback } from "react";

export default function Providers({ children }: { children: React.ReactNode }) {
  const solanaConnectors = toSolanaWalletConnectors({
    shouldAutoConnect: false,
    // Add explicit Phantom connector configuration
  });

  // const handleError = useCallback((error: Error) => {
  //   console.error("Privy Authentication Error:", error);
  //   // Add any custom error handling here
  // }, []);

  const solanaChain = {
    id: 0, // Dummy value
    name: "Solana",
    nativeCurrency: {
      name: "SOL",
      symbol: "SOL",
      decimals: 9,
    },
    rpcUrls: {
      default: { http: ["https://api.mainnet-beta.solana.com"] },
      public: { http: ["https://api.mainnet-beta.solana.com"] },
    },
  };

  return (
    <PrivyProvider
      appId={import.meta.env.VITE_PRIVY_APP_ID || "cm4g4hzw102g3hlf5jgx0rxf9"}
      // onError={handleError}
      config={{
        appearance: {
          theme: "light",
          accentColor: "#676FFF",
          logo: "https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/up-arrow.png", // Use an accessible logo
          walletChainType: "ethereum-and-solana",
          showWalletLoginFirst: true, // Improves wallet connection UX
        },
        defaultChain: solanaChain,
        supportedChains: [solanaChain],
        externalWallets: {
          solana: {
            connectors: solanaConnectors,
          },
        },
        embeddedWallets: {
          createOnLogin: "users-without-wallets",
        },
        loginMethods: ["wallet", 'email', 'farcaster'],
      }}
    >
      {children}
    </PrivyProvider>
  );
}
