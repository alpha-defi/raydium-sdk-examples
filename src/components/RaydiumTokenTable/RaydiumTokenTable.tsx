import { SplTokens } from "@raydium-io/raydium-sdk";

type ProgramProps = {
    tokens: SplTokens;
    sort?: Sort
};

export enum Sort {
    Symbol
}

/**
 * Returns a table view of SplToken objects with a default sort by symbol
 */
export function RaydiumTokenTable({ tokens, sort = Sort.Symbol }: ProgramProps) {
    const sortedMap = Object.keys(tokens).map(key => {
        return tokens[key];
    })?.sort((a, b) => {
        switch(sort) {
            case Sort.Symbol:
            default:
                return a.symbol.localeCompare(b.symbol);
         }
    })

    const headers = ['Symbol', 'Name', 'Mint'].map(header => {
        return <th className="px-6 py-3">{header}</th>
    })

    const rows = sortedMap ? sortedMap.map(token => {
        const { mint, name, symbol } = token;
        return <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-600">
            <td className="px-6 py-4">{ symbol }</td>
            <td className="px-6 py-4">{ name } </td>
            <td className="px-6 py-4">{ mint } </td>

        </tr>;
    }) : <tr>No tokens specified</tr>;

    return <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-600 dark:text-gray-200">
           { headers }
        </thead>
        <tbody>
            {rows}
        </tbody>
    </table>;
}
