import styles from "./jobs.module.css";

export default function JobsPage() {
  return (
    <section className={styles.jobsPage}>
      {/* الشريط العلوي */}
      <div className={styles.jobsHero}>
        <div className={styles.heroOverlay}>
          <h1>فرص التوظيف</h1>
          <p>انضم إلى فريقنا المتخصص وساهم في قيادة التحول الرقمي في موريتانيا</p>
        </div>
      </div>

      {/* لماذا تنضم إلينا */}
      <div className={styles.whyJoin}>
        <h2>لماذا تنضم إلينا؟</h2>
        <div className={styles.benefitsGrid}>
          <div className={styles.benefitCard}><span>💰</span><h3>راتب تنافسي</h3><p>رواتب مجزية تتماشى مع السوق والخبرة</p></div>
          <div className={styles.benefitCard}><span>📈</span><h3>التطوير المهني</h3><p>برامج تدريب وفرص تطوير وظيفي</p></div>
          <div className={styles.benefitCard}><span>💻</span><h3>بيئة عمل متطورة</h3><p>أحدث التقنيات وأدوات العمل</p></div>
          <div className={styles.benefitCard}><span>🏥</span><h3>التأمين الصحي</h3><p>تغطية شاملة للموظف وعائلته</p></div>
          <div className={styles.benefitCard}><span>🏠</span><h3>المرونة</h3><p>خيارات العمل المرن والعمل عن بعد</p></div>
          <div className={styles.benefitCard}><span>🌴</span><h3>الإجازات</h3><p>نظام إجازات سخي ومتوازن</p></div>
        </div>
      </div>

      {/* الوظائف */}
      <div className={styles.jobsList}>
        <h2>الوظائف المتاحة حالياً</h2>

        {/* بطاقة وظيفة */}
        <div className={styles.jobCard}>
          <h3>مطور تطبيقات الويب</h3>
          <div className={styles.jobMeta}>
            <span className={styles.tech}>القسم التقني</span>
            <span className={styles.fulltime}>دوام كامل</span>
            <span className={styles.location}>📍 نواكشوط</span>
            <span className={styles.exp}>3-5 سنوات</span>
          </div>
          <p><strong className={styles.deadline}>آخر موعد للتقديم:</strong> 2025/03/15</p>

          <div className={styles.jobDetails}>
            <div>
              <h4>المتطلبات:</h4>
              <ul>
                <li>خبرة في React.js و Node.js</li>
                <li>معرفة MySQL/PostgreSQL</li>
                <li>تصميم APIs</li>
                <li>إتقان العربية والفرنسية</li>
              </ul>
            </div>
            <div>
              <h4>المسؤوليات:</h4>
              <ul>
                <li>تطوير تطبيقات الويب الحكومية</li>
                <li>صيانة الأنظمة</li>
                <li>التعاون مع الفريق</li>
                <li>كتابة الوثائق التقنية</li>
              </ul>
            </div>
          </div>
          <div className={styles.actions}>
            <a href="#" className={styles.btnApply}>تقدم الآن</a>
            <a href="#" className={styles.btnShare}>مشاركة الوظيفة</a>
          </div>
        </div>

        {/* وظيفة ثانية */}
        <div className={styles.jobCard}>
          <h3>محلل أنظمة</h3>
          <div className={styles.jobMeta}>
            <span className={styles.pm}>إدارة المشاريع</span>
            <span className={styles.fulltime}>دوام كامل</span>
            <span className={styles.location}>📍 نواكشوط</span>
            <span className={styles.exp}>2-4 سنوات</span>
          </div>
          <p><strong className={styles.deadline}>آخر موعد للتقديم:</strong> 2025/03/20</p>

          <div className={styles.jobDetails}>
            <div>
              <h4>المتطلبات:</h4>
              <ul>
                <li>شهادة في علوم الحاسوب</li>
                <li>خبرة في تحليل الأنظمة</li>
                <li>مهارات إدارة المشاريع</li>
                <li>إتقان العربية والإنجليزية</li>
              </ul>
            </div>
            <div>
              <h4>المسؤوليات:</h4>
              <ul>
                <li>تحليل المتطلبات</li>
                <li>إعداد التوثيق التقني</li>
                <li>التنسيق مع الفرق</li>
                <li>ضمان جودة التطبيقات</li>
              </ul>
            </div>
          </div>
          <div className={styles.actions}>
            <a href="#" className={styles.btnApply}>تقدم الآن</a>
            <a href="#" className={styles.btnShare}>مشاركة الوظيفة</a>
          </div>
        </div>
      </div>

      {/* عملية التقديم */}
      <div className={styles.steps}>
        <h2>عملية التقديم</h2>
        <div className={styles.stepsGrid}>
          <div><span>1</span><p>التقديم الإلكتروني</p></div>
          <div><span>2</span><p>المراجعة الأولية</p></div>
          <div><span>3</span><p>المقابلة</p></div>
          <div><span>4</span><p>القرار النهائي</p></div>
        </div>
      </div>

      {/* التدريب */}
      <div className={styles.training}>
        <h2>برنامج التدريب والتكوين</h2>
        <p>نوفر فرص تدريب للطلاب والخريجين الجدد لاكتساب الخبرة العملية في مجال التكنولوجيا</p>
        <div className={styles.trainingCard}>
          <h3>التدريب الصيفي</h3>
          <ul>
            <li>مدة 3 أشهر</li>
            <li>للطلاب في السنوات الأخيرة</li>
            <li>مشاريع عملية</li>
          </ul>
        </div>
        <div className={styles.trainingCard}>
          <h3>برنامج الخريجين الجدد</h3>
          <ul>
            <li>مدة 6-12 شهر</li>
            <li>للخريجين الجدد</li>
            <li>فرصة للتوظيف</li>
          </ul>
        </div>
        <a href="#" className={styles.btnApply}>قدم طلب التدريب</a>
      </div>

      {/* تواصل */}
      <div className={styles.contact}>
        <h2>هل لديك أسئلة؟</h2>
        <p>تواصل مع فريق الموارد البشرية</p>
        <p>📧 hr@an-etat.gov.mr</p>
        <p>📞 (+222) 45 25 XX XX</p>
      </div>
    </section>
  );
}