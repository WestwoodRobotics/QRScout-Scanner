import QrScanner from "qr-scanner";
import { createSignal, onMount, type VoidComponent } from "solid-js";

const Home: VoidComponent = () => {
  const [videoRef, setVideoRef] = createSignal<HTMLVideoElement>();

  onMount(() => {
    const videoEl = videoRef();
    if (!videoEl) return;
    const qrScanner = new QrScanner(videoEl, result => console.log("decoded qr code:", result), {
      /* your options or returnDetailedScanResult: true if you're not specifying any other options */
    });
  });

  return (
    <main class="flex min-h-screen flex-col items-center justify-center">
      <video ref={setVideoRef} />
    </main>
  );
};

export default Home;
