import { PrivyProvider } from "@privy-io/react-auth";
import { toSolanaWalletConnectors } from "@privy-io/react-auth/solana";

export default function Providers({ children }: { children: React.ReactNode }) {
  const solanaConnectors = toSolanaWalletConnectors({
    // By default, shouldAutoConnect is enabled
    shouldAutoConnect: true,
  });

  console.log("Solana Connectors:", solanaConnectors);

  return (
    <PrivyProvider
      appId="cm4hbsgjh005b112nhfjml9kw"
      config={{
        // Customize Privy's appearance in your app

        appearance: {
          theme: "light",
          accentColor: "#676FFF",
          logo: "https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/up-arrow.png",
          walletChainType: "ethereum-only",
        },
        externalWallets: {
          solana: {
            connectors: solanaConnectors,
          },
        },
        // Create embedded wallets for users who don't have a wallet
        embeddedWallets: {
          createOnLogin: "users-without-wallets",
        },
      }}
    >
      {children}
    </PrivyProvider>
  );
}
