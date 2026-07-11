import { useEffect } from "react";
import "./App.css";
import { Button } from "./components/ui/button";

function App() {
  useEffect(() => {
    const root = document.documentElement;

    const style = getComputedStyle(root);
    const backgroundColor = style.getPropertyValue("--background-color");
    const meta = document.querySelector(
      'meta[name="apple-mobile-web-app-status-bar-style"]',
    );
    if (meta) {
      meta.setAttribute("content", backgroundColor);
    } else {
      const newMeta = document.createElement("meta");
      newMeta.setAttribute("name", "apple-mobile-web-app-status-bar-style");
      newMeta.setAttribute("content", backgroundColor);
      document.head.appendChild(newMeta);
    }
  }, []);
  return (
    <div className="flex justify-center items-center h-screen">
      <Button>test button</Button>
    </div>
  );
}

export default App;
