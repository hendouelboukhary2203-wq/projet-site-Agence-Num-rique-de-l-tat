// app/search/page.js
import { Suspense } from "react";
import SearchPage from "./SearchPage";

export const metadata = { title: "البحث" };

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default function Page() {
  return (
    <>search</>
    // <Suspense fallback={<div style={{ padding: "2rem" }}>جار التحميل...</div>}>
    //   <SearchPage />
    // </Suspense>
  );
}
