import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider, chain, defaultChains } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { WalletLinkConnector } from "wagmi/connectors/walletLink";
import Header from "../components/Header";

const infuraId = process.env.NEXT_PUBLIC_INFURA_ID;

const chains = defaultChains;

type Connector =
	| InjectedConnector
	| WalletConnectConnector
	| WalletLinkConnector;

const connectors = ({ chainId }: { chainId?: number }): Connector[] => {
	const rpcUrl =
		chains.find((x) => x.id === chainId)?.rpcUrls?.[0] ??
		chain.mainnet.rpcUrls[0];
	return [
		new InjectedConnector({ chains }),
		// new WalletConnectConnector({
		//   options: {
		//     infuraId,
		//     qrcode: true,
		//   },
		// }),
	];
};

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Provider autoConnect connectors={connectors}>
			<div className="h-screen w-screen">
				<Header />
				<div className="dashboard-container">
					<Component {...pageProps} />
				</div>
			</div>
		</Provider>
	);
}
