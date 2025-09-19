"use client";

import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
import "./contact.css"; // تأكد من استيراد هذا الملف

export default function ContactPage() {
  return (
    <div className="contact-container">
      
      {/* شريط العنوان */}
      <div className="contact-header">
        <h1>اتصل بنا</h1>
        <p>نحن هنا للإجابة على استفساراتكم ومساعدتكم في رحلة التحول الرقمي</p>
      </div>

      {/* معلومات الاتصال */}
      <div className="contact-section">
        <h2>معلومات الاتصال</h2>
        <div className="cards-grid">
          <div className="card">📍 العنوان: 425C+672, Av. Moktar Ould Daddah</div>
          <div className="card">📧 البريد الإلكتروني: contact@anetat.mr</div>
          <div className="card">📞 الهاتف: +222 45 25 xx xx</div>
          <div className="card">🕒 ساعات العمل: الأحد - الخميس، 08:00 - 16:00</div>
        </div>
      </div>

      {/* وسائل التواصل الاجتماعي */}
      <div className="contact-section">
        <h2>تابعنا على وسائل التواصل الاجتماعي</h2>
        <div className="social-icons">
          <FaFacebook size={30} />
          <FaTwitter size={30} />
          <FaLinkedin size={30} />
          <FaYoutube size={30} />
        </div>
      </div>

      {/* خريطة Google Maps */}
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6052.304414455454!2d-15.9784!3d18.0895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDA1JzIxLjgiTiAxNcKwNTgnNDIuMiJX!5e0!3m2!1sar!2s!4v1696165440000!5m2!1sar!2s"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}