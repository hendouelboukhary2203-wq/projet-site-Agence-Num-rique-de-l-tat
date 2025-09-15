'use client';
import { useSearchParams } from 'next/navigation';

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('query') || '';

  // هنا نضع قائمة المحتوى الذي تريد البحث فيه
  const content = [
    { title: 'الرئيسية', slug: '/' },
    { title: 'الوكاله', slug: '/about' },
    { title: 'الأخبار', slug: '/news' },
    { title: 'خارطة الطريق', slug: '/news' },
    { title: 'المشاريع', slug: '/news' },
    { title: 'الفعاليات', slug: '/news' },
    { title: 'التوظيف', slug: '/news' },
    { title: 'عن الوكالة', slug: '/news' },
    { title: 'اتصل بنا', slug: '/news' },
    // أضف باقي الروابط أو محتوى الموقع
  ];

  const results = content.filter(item =>
    item.title.includes(query)
  );

  return (
    <div style={{ padding: '2rem' }}>
      <h1>نتائج البحث عن: "{query}"</h1>
      {results.length > 0 ? (
        <ul>
          {results.map(item => (
            <li key={item.slug}>
              <a href={item.slug}>{item.title}</a>
            </li>
          ))}
        </ul>
      ) : (
        <p>لم يتم العثور على نتائج.</p>
      )}
    </div>
  );
}