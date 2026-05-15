import { useEffect } from "react";

const UniqueBajra = () => {
  useEffect(() => {
    const target = "https://adityarajseeds.netlify.app/unique-bajra" + window.location.search + window.location.hash;
    window.location.replace(target);
  }, []);

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh", fontFamily: "sans-serif" }}>
      Redirecting…
    </div>
  );
};

export default UniqueBajra;
