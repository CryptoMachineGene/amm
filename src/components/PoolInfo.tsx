import { useEffect, useState, useMemo } from "react";
import { ethers } from "ethers";
import ammAbi from "../abi/AMM.json";
import { getReadProvider } from "../lib/ethersConfig";

export default function PoolInfo() {
  const [r0, setR0] = useState<string>("");
  const [r1, setR1] = useState<string>("");
  const addr = import.meta.env.VITE_AMM_ADDRESS as string;
  const read = useMemo(() => getReadProvider(), []);
  const amm = useMemo(() => new ethers.Contract(addr, ammAbi, read), [addr, read]);

  useEffect(() => {
    (async () => {
      try {
        const [a, b] = await Promise.all([amm.reserve0(), amm.reserve1()]);
        setR0(a.toString()); setR1(b.toString());
      } catch {/* ignore */}
    })();
  }, [amm]);

  return (
    <div className="max-w-md mx-auto p-6 border rounded-2xl shadow-sm space-y-2">
      <h2 className="text-xl font-semibold">Pool Reserves</h2>
      <div className="grid grid-cols-2 gap-2 text-sm">
        <div className="p-3 rounded-xl border">Token0: {r0 || "—"}</div>
        <div className="p-3 rounded-xl border">Token1: {r1 || "—"}</div>
      </div>
    </div>
  );
}
