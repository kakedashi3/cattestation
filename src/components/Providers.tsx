import { ReactNode } from "react";

import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import { WagmiConfig, createConfig } from "wagmi";
import { sepolia } from "viem/chains";

// 1. Get projectId
const projectId = "42bc25907d305f0e5c7af2d1c734fb8b";
const config = createConfig(
  getDefaultConfig({
    // Required API Keys
    alchemyId: process.env.REACT_APP_ALCHEMY_ID,
    walletConnectProjectId: projectId,
    chains: [sepolia],

    // Required
    appName: "Cattestation",

    // Optional
    appDescription: "Pet all the cats!",
    // appUrl: "https://family.co", // your app's url
    // appIcon: "https://family.co/logo.png", // your app's icon, no bigger than 1024x1024px (max. 1MB)
  })
);

export function Providers({ children }: { children: ReactNode }) {
  return (
    <WagmiConfig config={config}>
      <ConnectKitProvider>{children}</ConnectKitProvider>
    </WagmiConfig>
  );
}
