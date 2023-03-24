import type { VoidComponent } from "solid-js";
import { createSignal, Show } from "solid-js";
import Scanner from "~/components/Scanner";
import { CameraIcon } from "~/icons/Camera";
import { CloseIcon } from "~/icons/Close";
import { CopyIcon } from "~/icons/Copy";
import store, { addScan, clearScans } from "~/store";

const Home: VoidComponent = () => {
  const [isScanning, setIsScanning] = createSignal(false);
  const [justCopied, setJustCopied] = createSignal(false);

  return (
    <main class="flex min-h-screen flex-col items-center justify-center text-zinc-900">
      <Show when={isScanning()}>
        <Scanner
          onScan={result => {
            addScan(result);
            setIsScanning(false);
            console.log(result);
          }}
        />
      </Show>

      <Show when={!isScanning()}>
        <div class="flex items-center gap-5">
          <div
            class="inline-block rounded-full p-3 border-current w-fit h-fit bg-zinc-100 hover:bg-zinc-200 transition cursor-pointer active:scale-95"
            classList={{
              "!bg-green-500": justCopied(),
              "text-white": justCopied(),
            }}
            onClick={async () => {
              await navigator.clipboard.writeText(Object.values(store).map(e => e.data).join("\n"));

              setJustCopied(true);
              setTimeout(() => {
                setJustCopied(false);
              }, 1000)
            }}
          >
            <CopyIcon class="h-8 w-8" />
          </div>
          <h1 class="text-4xl font-bold">{Object.keys(store).length} scanned.</h1>
        </div>
        <h4
          class="text-lg hover:underline underline-offset-2 hover:text-red-600 cursor-pointer"
          onClick={() => {
            if (Object.keys(store).length == 0) return;
            const result = confirm("Are you sure you want to clear all scanned QR codes?");

            if (result) {
              clearScans();
            }
          }}
        >
          Clear all
        </h4>
      </Show>

      <div
        class="fixed bottom-5 rounded-full p-3 bg-blue-500 text-white cursor-pointer active:scale-95 transition hover:bg-blue-600"
        onClick={() => setIsScanning(!isScanning())}
      >
        <Show when={!isScanning()} fallback={<CloseIcon class="w-10 h-10" />}>
          <CameraIcon class="w-10 h-10" />
        </Show>
      </div>
    </main>
  );
};

export default Home;
