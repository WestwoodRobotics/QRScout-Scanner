import { createEffect } from "solid-js";
import { createStore, reconcile } from "solid-js/store";

interface ScanStore {
  [key: string]: ScanData;
}

interface ScanData {
  time: Date;
  data: string;
}

const [store, setStore] = createStore<ScanStore>(JSON.parse(localStorage.getItem("scan-store") || "{}"));

createEffect(() => {
  localStorage.setItem("scan-store", JSON.stringify(store));
});

export async function addScan(data: string) {
  const hash = await getSHA256Hash(data);

  setStore(hash, {
    time: new Date(),
    data,
  });
}

export function removeScan(hash: string) {
  setStore(hash, undefined!);
}

export function clearScans() {
  setStore(reconcile({}));
}

const getSHA256Hash = async (input: string) => {
  const textAsBuffer = new TextEncoder().encode(input);
  const hashBuffer = await window.crypto.subtle.digest("SHA-256", textAsBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hash = hashArray.map(item => item.toString(16).padStart(2, "0")).join("");
  return hash;
};

export default store;
