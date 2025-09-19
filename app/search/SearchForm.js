// components/SearchForm.jsx
"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SearchForm() {
  const router = useRouter();
  const pathname = "/search"; // change si besoin
  const searchParams = useSearchParams();

  const [value, setValue] = useState(searchParams.get("query") || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    const q = value.trim();
    const params = new URLSearchParams(searchParams.toString());
    if (q) params.set("query", q);
    else params.delete("query");
    router.push(`${pathname}?${params.toString()}`);
  };

  // (optionnel) mise à jour live après 250ms sans soumettre:
  // useEffect(() => {
  //   const t = setTimeout(() => {
  //     const q = value.trim();
  //     const params = new URLSearchParams(searchParams.toString());
  //     if (q) params.set("query", q); else params.delete("query");
  //     router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  //   }, 250);
  //   return () => clearTimeout(t);
  // }, [value]); // + deps si besoin

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: ".5rem", marginLeft: "auto" }}>
      <input
        type="search"
        name="query"
        placeholder="ابحث…"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{ padding: ".4rem .6rem", border: "1px solid #ddd", borderRadius: ".4rem" }}
      />
      {/* <button type="submit" style={{ padding: ".4rem .6rem" }}>🔍</button> */}
    </form>
  );
}
