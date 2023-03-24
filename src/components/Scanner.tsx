import QrScanner from "qr-scanner";
import { createSignal, onMount, type VoidComponent } from "solid-js";

interface ScannerProps {
  onScan: (result: string) => void;
}

const Scanner: VoidComponent<ScannerProps> = (props: ScannerProps) => {
  const [videoRef, setVideoRef] = createSignal<HTMLVideoElement>();

  let qrScanner: QrScanner = undefined as unknown as QrScanner;

  function decodeQRCode(result: QrScanner.ScanResult) {
    qrScanner.stop();
    props.onScan(result.data);
  }

  onMount(() => {
    const videoEl = videoRef();
    if (!videoEl) return;
    qrScanner = new QrScanner(videoEl, decodeQRCode, {
      highlightScanRegion: true,
      /* your options or returnDetailedScanResult: true if you're not specifying any other options */
    });

    qrScanner.start();
  });

  return (
    <main class="flex min-h-screen flex-col items-center justify-center">
      <video ref={setVideoRef} class="w-screen h-screen" />
    </main>
  );
};

export default Scanner;
