import './globals.css';
import SearchForm from './search/SearchForm';
import Link from 'next/link';
import Image from 'next/image'; // ✅ استيراد مكوّن الصور

export const metadata = {
  title: 'موقعي',
  description: 'هذا الموقع تم إنشاؤه بـ Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body style={{ color: 'black' }}>
        <nav style={{
          color: 'black',
          background: '#003366',
          padding: '1rem',
          display: 'flex',
          alignItems: 'center'
        }}>
          {/* ✅ إضافة اللوغو */}
          <Link href="/" style={{ marginRight: '1rem', display: 'flex', alignItems: 'center' }}>
            <Image 
              src="/4.jpg" // ضع اسم صورة اللوغو هنا
              alt="شعار الوكالة"
              width={40}   // تعدّل الحجم حسب الحاجة
              height={40}
              style={{ objectFit: 'cover' }} // اختياري (يجعل الصورة دائرية)
            />
          </Link>

          {/* ✅ روابط التنقّل */}
          <Link href="/" style={{ marginRight: '1rem' }}>الرئيسية</Link>
          <Link href="/about" style={{ marginRight: '1rem' }}>الوكالة</Link>
          
          <Link href="/roadmap" style={{ marginRight: '1rem' }}>خارطة الطريق</Link>
          <Link href="/projects" style={{ marginRight: '1rem' }}>المشاريع</Link>
          <Link href="/events" style={{ marginRight: '1rem' }}>الفعاليات</Link>
          <Link href="/about/jobs" style={{ marginRight: '1rem' }}>التوظيف</Link>
          
          <Link href="/contact" style={{ marginRight: '1rem' }}>اتصل بنا</Link>

          {/* ✅ نموذج البحث */}
          <SearchForm />
        </nav>

        <main style={{ minHeight: '80vh', padding: '2rem' }}>
          {children}
        </main>

  
    <footer style={{ background: '#003366', textAlign: 'center', padding: '1rem', color: 'white' }}>
      
      <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
      
        {/* القسم 1: الشعار والنص */}
        <div style={{ flex: "1", minWidth: "200px", marginBottom: "1rem" }}>
          <Image 
            src="/4.jpg" 
            alt="Logo Agence Numérique" 
            width={45}  // تصغير اللوغو
            height={45} // تصغير اللوغو
          />
          <h3 style={{ color: 'white' }}>الوكالة الرقمية للدولة</h3>
          <p style={{ color: 'white' }}>AN-ETAT</p>
          <p style={{ color: 'white' }}>
            نقود التحول الرقمي في موريتانيا من خلال تطوير حلول تقنية مبتكرة 
            وتقديم خدمات رقمية عالية الجودة.
          </p>
        </div>

        {/* القسم 2: التواصل الاجتماعي */}
        <div style={{ flex: "1", minWidth: "200px", marginBottom: "1rem" }}>
          <h3 style={{ color: 'white' }}>تابعنا</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Facebook</a></li>
            <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Twitter</a></li>
            <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>LinkedIn</a></li>
          </ul>
        </div>

        {/* القسم 3: روابط سريعة */}
        <div style={{ flex: "1", minWidth: "200px", marginBottom: "1rem" }}>
          <h3 style={{ color: 'white' }}>روابط سريعة</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li><a href="#" style={{ color: 'white' }}>من نحن</a></li>
            <li><a href="#" style={{ color: 'white' }}>المشاريع</a></li>
            <li><a href="#" style={{ color: 'white' }}>التوظيف</a></li>
            <li><a href="#" style={{ color: 'white' }}>تواصل معنا</a></li>
          </ul>
        </div>

        {/* القسم 4: معلومات الاتصال */}
        <div style={{ flex: "1", minWidth: "200px", marginBottom: "1rem" }}>
          <h3 style={{ color: 'white' }}>معلومات الاتصال</h3>
          <p>📍 نواكشوط، موريتانيا</p>
          <p>📧 contact@anetat.mr</p>
          <p>📞 +222 45 25 XX XX</p>
        </div>
      </div>

      {/* الشريط السفلي */}
      <div style={{ textAlign: "center", marginTop: "2rem", borderTop: "1px solid #ccc", paddingTop: "1rem" }}>
       ©️ {new Date().getFullYear()} الوكالة الرقمية
      </div>
    </footer>

      </body>
    </html>
  );
}