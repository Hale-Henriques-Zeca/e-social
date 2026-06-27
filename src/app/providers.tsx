"use client";

import React from "react";

import '@rainbow-me/rainbowkit/styles.css';
import {
  RainbowKitProvider,
  getDefaultConfig,
  darkTheme,
} from '@rainbow-me/rainbowkit';
import {
  WagmiProvider,
  http,
} from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { bscTestnet } from 'wagmi/chains'; 
import { SessionProvider } from "next-auth/react";
import { DexWalletProvider } from "@/contexts/DexWalletContext";


const config = getDefaultConfig({
  appName: 'eSocial Donation System',
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!,
  chains: [bscTestnet], // 👈 TESTNET primeiro
  transports: {
    [bscTestnet.id]: http('https://data-seed-prebsc-1-s1.binance.org:8545'),
  },
});

const queryClient = new QueryClient();

export function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider
            theme={darkTheme({
              accentColor: "#B11226",
              accentColorForeground: "#ffffff",
            })}
          >
            <DexWalletProvider>
              {children}
            </DexWalletProvider>
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </SessionProvider>
  );
}