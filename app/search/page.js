// app/search/page.js
export const metadata = { title: "البحث" };
export const dynamic = "force-dynamic";
export const revalidate = 0;

import { Suspense } from "react";
import SearchClient from "./SearchClient";

export default function Page() {
  return (
    <Suspense fallback={<div style={{ padding: "2rem" }}>جار التحميل...</div>}>
      <SearchClient />
    </Suspense>
  );
}
