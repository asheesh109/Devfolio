import { useEffect, useState } from "react";
import { Eye } from "lucide-react";

const VisitorCount = () => {
  const [count, setCount] = useState(null);

  useEffect(() => {
    const visited = sessionStorage.getItem("visited");

    const url = "/api/visitor";
    const options = visited ? {} : { method: "POST" };

    fetch(url, options)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`API error: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        if (data.count !== undefined) {
          setCount(data.count);
          sessionStorage.setItem("visited", "true");
        }
      })
      .catch((error) => {
        console.error("Failed to fetch visitor count:", error);
        setCount(0); // Fallback to 0 instead of showing loading state
      });
  }, []);

  return (
    <div className="flex items-center gap-2 text-white font-mono opacity-80">
      {/* Icon */}
      <Eye size={18} className="text-white/80" />

      {/* Mobile */}
      <span className="md:hidden text-sm">
        {count ?? "..."}
      </span>

      {/* Desktop */}
      <span className="hidden md:inline text-sm">
        Visitors: {count ?? "..."}
      </span>
    </div>
  );
};

export default VisitorCount;
