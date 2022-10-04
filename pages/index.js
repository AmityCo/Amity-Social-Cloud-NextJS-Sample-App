import dynamic from "next/dynamic";
import { useState } from "react";

const AuthProvider = dynamic(() => import("../components/auth"), {
  ssr: false,
});
const FeedComponent = dynamic(() => import("../components/feed"), {
  ssr: false,
});
export default function Home() {
  const [isConnected, setIsConnected] = useState(false);
  function onConnected(value) {
    setIsConnected(value);
  }
  return (
    <div>
      <AuthProvider onConnected={onConnected}>
        <FeedComponent isConnected={isConnected} />
      </AuthProvider>
    </div>
  );
}
