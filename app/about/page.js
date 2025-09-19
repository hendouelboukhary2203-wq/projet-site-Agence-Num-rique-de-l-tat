import Image from 'next/image';

export default function AboutPage() {
  return (
    <>
      {/* صورة رئيسية مع عنوان ونص */}
      <section style={{ position: "relative", display: "flex", justifyContent: "center", marginBottom: "2rem" }}>
        <Image 
          src="/3.jpg" 
          alt="صورة الوكالة" 
          width={900} 
          height={500} 
          style={{ borderRadius: "10px" }}
        />

        {/* العنوان والنص فوق الصورة */}
        <div style={{
          position: "absolute",
          top: "80%", // منتصف الصورة عموديًا
          left: "50%", // منتصف الصورة أفقيًا
          transform: "translate(-50%, -50%)", // لتوسيط العنصر تمامًا
          textAlign: "center",
          color: "#fff",
          backgroundColor: "rgba(0,0,0,0.4)", // خلفية شفافة لتحسين الرؤية
          padding: "1rem 2rem",
          borderRadius: "10px"
        }}>
          <h1 style={{ margin: 0, fontSize: "2rem" }}>وكالة الرقمنة للدولة</h1>
          <p style={{ margin: "0.5rem 0 0" }}>
            تعرف على رؤيتنا ومهمتنا وقيمنا في قيادة التحول الرقمي
          </p>
        </div>
      </section>

      {/* بقية الصفحة كما هي */}
      {/* القسم الثالث: مسيرتنا التاريخية */}
      <section style={{ padding: "2rem" }}>
        {/* القسم الأول: رؤيتنا ومهمتنا */}
        <div style={{ 
          display: "flex", 
          justifyContent: "space-between", 
          gap: "2rem", 
          marginBottom: "3rem",
          flexWrap: "wrap"
        }}>
          
          {/* رؤيتنا */}
          <div style={{ flex: 1, minWidth: "250px", background: "#f9f9f9", padding: "1.5rem", borderRadius: "10px" }}>
            <h2 style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span style={{ fontSize: "1.5rem" }}>🎯</span> رؤيتنا
            </h2>
            <p>
              أن نكون الرائد الإقليمي في مجال التحول الرقمي، 
              ونسعى لبناء موريتانيا رقمية متطورة توفر خدمات إلكترونية عالية الجودة.
            </p>
          </div>

          {/* مهمتنا */}
          <div style={{ flex: 1, minWidth: "250px", background: "#f9f9f9", padding: "1.5rem", borderRadius: "10px" }}>
            <h2 style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span style={{ fontSize: "1.5rem" }}>🛠️</span> مهمتنا
            </h2>
            <p>
              قيادة وتنسيق جهود التحول الرقمي في موريتانيا 
              من خلال تطوير البنية التحتية الرقمية وتعزيز القدرات البشرية في مجال التكنولوجيا.
            </p>
          </div>
        </div>

        {/* القسم الثاني: قيمنا الأساسية */}
        <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>قيمنا الأساسية</h2>
        <div style={{ 
          display: "flex", 
          justifyContent: "space-around", 
          flexWrap: "wrap", 
          gap: "1.5rem" 
        }}>
          
          <div style={{ textAlign: "center", flex: "1 1 150px" }}>
            <div style={{ fontSize: "2rem" }}>🔒</div>
            <h3>الأمان</h3>
            <p>نضمن أعلى معايير الأمن والخصوصية في جميع حلولنا الرقمية</p>
          </div>

          <div style={{ textAlign: "center", flex: "1 1 150px" }}>
            <div style={{ fontSize: "2rem" }}>⚡</div>
            <h3>الكفاءة</h3>
            <p>نلتزم بتقديم خدمات عالية الجودة بأقصى درجات الفعالية</p>
          </div>

          <div style={{ textAlign: "center", flex: "1 1 150px" }}>
            <div style={{ fontSize: "2rem" }}>🤝</div>
            <h3>التعاون</h3>
            <p>نؤمن بقوة الشراكة والعمل الجماعي لتحقيق أهدافنا المشتركة</p>
          </div>

          <div style={{ textAlign: "center", flex: "1 1 150px" }}>
            <div style={{ fontSize: "2rem" }}>💡</div>
            <h3>الابتكار</h3>
            <p>نسعى للتميز من خلال الحلول المبتكرة والتكنولوجيا المتطورة</p>
          </div>
        </div>
      </section>

      <h2 style={{ textAlign: "center", margin: "2rem 0" }}>مسيرتنا التاريخية</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1rem",
          marginTop: "1.5rem",
        }}
      >
        <div
          style={{
            backgroundColor: "#fef4f4",
            padding: "1rem 2rem",
            borderRadius: "8px",
            textAlign: "center",
            flex: "1",
            minWidth: "120px",
          }}
        >
          <h2 style={{ color: "#c0392b", margin: 0 }}>2020 - التأسيس</h2>
          <p style={{ margin: 0 }}>تأسيس الوكالة الرقمية للدولة كمؤسسة متخصصة في قيادة التحول الرقمي</p>
        </div>

        <div
          style={{
            backgroundColor: "#ecf9f1",
            padding: "1rem 2rem",
            borderRadius: "8px",
            textAlign: "center",
            flex: "1",
            minWidth: "120px",
          }}
        >
          <h2 style={{ color: "#27ae60", margin: 0 }}>2021 - البداية</h2>
          <p style={{ margin: 0 }}>إطلاق أول المشاريع الرقمية وبناء الفريق المتخصص</p>
        </div>

        <div
          style={{
            backgroundColor: "#eef5ff",
            padding: "1rem 2rem",
            borderRadius: "8px",
            textAlign: "center",
            flex: "1",
            minWidth: "120px",
          }}
        >
          <h2 style={{ color: "#2980b9", margin: 0 }}>2022-2024 - التوسع</h2>
          <p style={{ margin: 0 }}>وسيع نطاق العمل وإطلاق مشاريع كبرى في مختلف القطاعات</p>
        </div>
      </div>
    </>
  );
} 