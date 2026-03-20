"use client";

import { useState } from "react";

export default function LearnYourWaySelector() {
  const [selected, setSelected] = useState<"in-person" | "online">("in-person");

  return (
    <section className="bg-white py-10 border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-6">
        <p
          className="text-center text-xs font-bold uppercase tracking-widest mb-6"
          style={{ color: "#7C3AED", fontFamily: "var(--font-body)" }}
        >
          Learn Your Way
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">

          {/* In-Person card */}
          <button
            onClick={() => setSelected("in-person")}
            className="flex-1 rounded-xl p-5 text-left transition-all duration-200 cursor-pointer"
            style={{
              border: `2px solid ${selected === "in-person" ? "#7C3AED" : "rgba(0,0,0,0.1)"}`,
              boxShadow: selected === "in-person" ? "0 0 0 3px rgba(124,58,237,0.12)" : "none",
              background: selected === "in-person" ? "#F3F0FF" : "white",
            }}
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl" aria-hidden="true">🏫</span>
              <div>
                <p
                  className="font-bold text-[15px] leading-snug"
                  style={{ fontFamily: "var(--font-display)", color: "#2D1B69" }}
                >
                  In-Person
                </p>
                <p
                  className="text-xs mt-0.5"
                  style={{ color: "#6B6B6B", fontFamily: "var(--font-body)" }}
                >
                  Join a live batch in Delhi
                </p>
              </div>
            </div>
          </button>

          {/* Online card */}
          <button
            onClick={() => setSelected("online")}
            className="flex-1 rounded-xl p-5 text-left transition-all duration-200 cursor-pointer"
            style={{
              border: `2px solid ${selected === "online" ? "#7C3AED" : "rgba(0,0,0,0.1)"}`,
              boxShadow: selected === "online" ? "0 0 0 3px rgba(124,58,237,0.12)" : "none",
              background: selected === "online" ? "#F3F0FF" : "white",
            }}
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl" aria-hidden="true">💻</span>
              <div>
                <p
                  className="font-bold text-[15px] leading-snug"
                  style={{ fontFamily: "var(--font-display)", color: "#2D1B69" }}
                >
                  Online
                </p>
                <p
                  className="text-xs mt-0.5"
                  style={{ color: "#6B6B6B", fontFamily: "var(--font-body)" }}
                >
                  Join from anywhere via Zoom
                </p>
              </div>
            </div>
          </button>

        </div>
      </div>
    </section>
  );
}
