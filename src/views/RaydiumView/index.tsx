import { FC } from "react";
import { RaydiumTokenTable } from "../../components/RaydiumTokenTable/RaydiumTokenTable";
import styles from "./index.module.css";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import Link from "next/link";
import { MAINNET_SPL_TOKENS } from "@raydium-io/raydium-sdk";

export const RaydiumView: FC = ({ }) => {
    return <div className="container mx-auto max-w-6xl p-8 2xl:px-0">
        <div className={styles.container}>
            <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box">
                <div className="flex-none">
                    <button className="btn btn-square btn-ghost">
                        <Link href="/">
                            <span className="text-4xl">🐸</span>
                        </Link>

                    </button>
                </div>
                <div className="flex-1 px-2 mx-2">
                    <div className="text-sm breadcrumbs">
                        <ul className="text-xl">
                            <li>
                                <span className="opacity-40">Hello Ray</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex-none">
                    <WalletMultiButton className="btn btn-ghost" />
                </div>
            </div>
            <div className="max-w-4xl mx-auto">
                <section className="mt-16">
                    <h1 className="mb-5 text-5xl font-bold">Raydium Mainnet Token List</h1>
                    <p>
                        This view shows how to use the SDK to access the Raydium mainnet token list, 
                        which alternatively can be viewed at https://sdk.raydium.io/token/raydium.mainnet.json.
                    </p>
                    <div className="mt-12">
                        <RaydiumTokenTable tokens={MAINNET_SPL_TOKENS}></RaydiumTokenTable>
                    </div>
                </section>
            </div>
        </div>
    </div>
};
