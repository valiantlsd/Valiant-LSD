import { Suspense, lazy, useEffect, useState } from "react";
import { AmbientBackground, SiteShell } from "./components/Shared.jsx";
import { LandingPage } from "./pages/LandingPage.jsx";

const AttentionExactApp = lazy(() => import("./attention/App.jsx"));
const VldExactApp = lazy(() => import("./vld/App.jsx"));

function normalizePath(pathname) {
  if (pathname === "/attention-mastery") return "/attention-mastery";
  if (pathname === "/vld") return "/vld";
  return "/";
}

export default function App() {
  const [path, setPath] = useState(() => normalizePath(window.location.pathname));

  useEffect(() => {
    const onPopState = () => setPath(normalizePath(window.location.pathname));
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const navigate = (nextPath) => {
    const normalized = normalizePath(nextPath);
    if (normalized === path) return;
    window.history.pushState({}, "", normalized);
    setPath(normalized);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  return (
    <>
      {path === "/" ? (
        <div className="min-h-screen overflow-x-hidden bg-[#090909] text-[#F4EFE6]">
          <AmbientBackground />
          <SiteShell>
            <LandingPage navigate={navigate} />
          </SiteShell>
        </div>
      ) : null}
      {path === "/vld" ? (
        <Suspense fallback={<div className="min-h-screen bg-[#090909]" />}>
          <VldExactApp />
        </Suspense>
      ) : null}
      {path === "/attention-mastery" ? (
        <Suspense fallback={<div className="min-h-screen bg-[#090909]" />}>
          <AttentionExactApp />
        </Suspense>
      ) : null}
    </>
  );
}
