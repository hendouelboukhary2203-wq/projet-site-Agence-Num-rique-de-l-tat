// app/search/SearchPage.jsx
"use client";

import { useSearchParams } from "next/navigation";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = (searchParams.get("query") || "").trim();

  // قائمة المحتوى (عدّل المسارات حسب موقعك)
  const content = [
    { title: "الرئيسية", slug: "/" },
    { title: "الوكالة", slug: "/about" },
    { title: "الأخبار", slug: "/news" },
    { title: "خارطة الطريق", slug: "/roadmap" },
    { title: "المشاريع", slug: "/projects" },
    { title: "الفعاليات", slug: "/events" },
    { title: "التوظيف", slug: "/recrutement" },
    { title: "عن الوكالة", slug: "/about" },
    { title: "اتصل بنا", slug: "/contact" },
  ];

  const results = query
    ? content.filter((item) => item.title.includes(query))
    : [];

  return (
    <main style={{ padding: "2rem" }}>
      <h1>نتائج البحث عن: “{query}”</h1>
      {query ? (
        results.length > 0 ? (
          <ul>
            {results.map((item) => (
              <li key={item.slug}>
                <a href={item.slug}>{item.title}</a>
              </li>
            ))}
          </ul>
        ) : (
          <p>لم يتم العثور على نتائج.</p>
        )
      ) : (
        <p>اكتب كلمة للبحث…</p>
      )}
    </main>
  );
}
