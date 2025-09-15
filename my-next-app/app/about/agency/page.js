export default function DigitalPlan() {
  return (
    <section style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      {/* العنوان الرئيسي */}
      <h1 style={{ textAlign: "center", marginBottom: "2rem", fontSize: "2rem", color: "#2c3e50" }}>
        الخطة الزمنية لتنفيذ التحول الرقمي في موريتانيا 2024-2026
      </h1>

      {/* المراحل التنفيذية */}
      <h2 style={{ textAlign: "center", marginBottom: "1.5rem", color: "#34495e" }}>
        المراحل التنفيذية
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        {/* 2024 */}
        <div style={{ background: "#fef4f4", padding: "1.5rem", borderRadius: "10px" }}>
          <h3 style={{ color: "#c0392b" }}>📌 2024 - المرحلة الأولى</h3>
          <p><strong>الوضع:</strong> في التنفيذ</p>
          <ul style={{ margin: "0.5rem 0 1rem 1.2rem" }}>
            <li>إطلاق البوابة الوطنية الموحدة للخدمات الحكومية</li>
            <li>تطوير منصة الهوية الرقمية الموحدة</li>
            <li>رقمنة 15 خدمة حكومية أساسية</li>
            <li>تدريب 500 موظف حكومي على استخدام الأنظمة الرقمية</li>
          </ul>
          <p><strong>نسبة الإنجاز:</strong> 65%</p>
        </div>

        {/* 2025 */}
        <div style={{ background: "#ecf9f1", padding: "1.5rem", borderRadius: "10px" }}>
          <h3 style={{ color: "#27ae60" }}>📌 2025 - المرحلة الثانية</h3>
          <p><strong>الوضع:</strong> مخطط</p>
          <ul style={{ margin: "0.5rem 0 1rem 1.2rem" }}>
            <li>ربط جميع الوزارات بالشبكة الحكومية الموحدة</li>
            <li>إطلاق تطبيق موحد للخدمات الحكومية الذكية</li>
            <li>تطوير نظام الدفع الإلكتروني الحكومي</li>
            <li>إنشاء مراكز خدمة رقمية في جميع الولايات</li>
          </ul>
          <p><strong>نسبة الإنجاز:</strong> 15%</p>
        </div>

        {/* 2026 */}
        <div style={{ background: "#eef5ff", padding: "1.5rem", borderRadius: "10px" }}>
          <h3 style={{ color: "#2980b9" }}>📌 2026 - المرحلة الثالثة</h3>
          <p><strong>الوضع:</strong> مستقبلي</p>
          <ul style={{ margin: "0.5rem 0 1rem 1.2rem" }}>
            <li>تنفيذ نظام الذكاء الاصطناعي في اتخاذ القرارات</li>
            <li>إطلاق منصة البيانات المفتوحة الحكومية</li>
            <li>تطبيق تقنيات البلوك تشين في المعاملات الرسمية</li>
            <li>تحقيق التكامل الكامل بين جميع الأنظمة الحكومية</li>
          </ul>
          <p><strong>نسبة الإنجاز:</strong> 5%</p>
        </div>
      </div>

      {/* الأهداف الاستراتيجية */}
      <h2 style={{ textAlign: "center", margin: "3rem 0 2rem", color: "#34495e" }}>
        الأهداف الاستراتيجية
      </h2>

      <div style={{ 
        display: "flex", 
        justifyContent: "space-around", 
        flexWrap: "wrap", 
        gap: "1.5rem" 
      }}>
        <div style={{ 
          background: "#fff", 
          border: "2px solid #f1c40f", 
          borderRadius: "10px", 
          padding: "1.5rem", 
          flex: "1 1 200px", 
          textAlign: "center" 
        }}>
          <div style={{ fontSize: "2rem" }}>🏛️</div>
          <h3>الحكومة الرقمية</h3>
          <p>تحويل جميع الخدمات الحكومية إلى رقمية بحلول 2026</p>
          <strong>🎯 100% رقمنة</strong>
        </div>

        <div style={{ 
          background: "#fff", 
          border: "2px solid #3498db", 
          borderRadius: "10px", 
          padding: "1.5rem", 
          flex: "1 1 200px", 
          textAlign: "center" 
        }}>
          <div style={{ fontSize: "2rem" }}>👥</div>
          <h3>رضا المواطنين</h3>
          <p>تحسين تجربة المستخدم للخدمات الحكومية الرقمية</p>
          <strong>😊 90% رضا</strong>
        </div>

        <div style={{ 
          background: "#fff", 
          border: "2px solid #2ecc71", 
          borderRadius: "10px", 
          padding: "1.5rem", 
          flex: "1 1 200px", 
          textAlign: "center" 
        }}>
          <div style={{ fontSize: "2rem" }}>⚡</div>
          <h3>الكفاءة التشغيلية</h3>
          <p>تقليل وقت معالجة المعاملات الحكومية بنسبة 70%</p>
          <strong>⏱️ 70% توفير وقت</strong>
        </div>
      </div>
    </section>
  );
}