// app/search/page.js
'use client';

import { useSearchParams } from 'next/navigation';

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q');

  return (
    <div style={{ padding: '2rem' }}>
      <h1>صفحة البحث</h1>
      {query ? (
        <p>نتائج البحث عن: <strong>{query}</strong></p>
      ) : (
        <p>أدخل استعلامًا في شريط البحث.</p>
      )}
    </div>
  );
}
