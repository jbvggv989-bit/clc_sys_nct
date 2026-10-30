"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import { Branch } from "@/types";

export function ContactPageContent() {
  const { t, isRTL, language } = useLanguage();
  const router = useRouter();
  const [branches, setBranches] = useState<Branch[]>([]);
  const [activeBranchId, setActiveBranchId] = useState<string | null>(null);
  const [form, setForm] = useState({ fname: "", lname: "", phone: "", email: "", message: "" });

  useEffect(() => {
    fetch("/api/branches")
      .then(r => r.json())
      .then((data: Branch[]) => {
        const active = Array.isArray(data) ? data.filter(b => b.status === "active") : [];
        setBranches(active);
        if (active.length > 0) setActiveBranchId(active[0].id);
      })
      .catch(() => setBranches([]));
  }, []);

  const activeBranch = branches.find(b => b.id === activeBranchId) ?? null;

  const infoItems = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      ),
      title: t.contactPage.emailTitle,
      value: t.contactPage.email,
      href: `mailto:${t.contactPage.email}`,
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
          <line x1="16" y1="2" x2="16" y2="6"/>
          <line x1="8" y1="2" x2="8" y2="6"/>
          <line x1="3" y1="10" x2="21" y2="10"/>
        </svg>
      ),
      title: isRTL ? "الحجز والاستشارات" : "Appointments & Care",
      value: isRTL ? "متاح على مدار الساعة عبر البوابة" : "Available 24/7 online",
      href: "/book",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
      ),
      title: isRTL ? "الاستفسارات والدعم" : "Patient Inquiries",
      value: isRTL ? "فريق التنسيق الطبي بخدمتكم" : "Dedicated medical support",
      href: "#contact-form",
    },
  ];

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    router.push("/book");
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "16px 20px",
    borderRadius: 12,
    border: "1px solid rgba(90, 106, 81, 0.35)",
    background: "#fff",
    fontSize: 14,
    fontFamily: "var(--font-sora), sans-serif",
    color: "var(--cr-primary)",
    outline: "none",
    transition: "border-color 0.3s ease",
  };

  return (
    <>
      {/* Info row */}
      <section className="section-padding bg-white">
        <div className="cr-container" style={{ maxWidth: "1480px" }}>
          <div
            className="contact-info-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 2.5fr",
              gap: 40,
              alignItems: "center",
              direction: isRTL ? "rtl" : "ltr",
            }}
          >
            <div style={{ textAlign: isRTL ? "right" : "left" }}>
              <h2 className="mb-4">{t.contactPage.reachOutHeading}</h2>
              <p className="text-sm leading-relaxed" style={{ color: "var(--cr-muted-foreground, var(--color-brand-secondary))" }}>
                {t.contactPage.reachOutDescription}
              </p>
            </div>

            <div
              className="contact-cards"
              style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}
            >
              {infoItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 16,
                    padding: "36px 28px",
                    borderRadius: 24,
                    background: "var(--cr-secondary)",
                    textDecoration: "none",
                    transition: "transform 0.3s ease",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; }}
                >
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 52,
                      height: 52,
                      borderRadius: "50%",
                      background: "var(--cr-primary)",
                      color: "#fff",
                    }}
                  >
                    {item.icon}
                  </span>
                  <h3 style={{
                    margin: 0,
                    fontFamily: "var(--font-marcellus), serif",
                    fontSize: 20,
                    fontWeight: 400,
                    color: "var(--cr-primary)",
                  }}>
                    {item.title}
                  </h3>
                  <p style={{
                    margin: 0,
                    fontFamily: "var(--font-sora), sans-serif",
                    fontSize: 14,
                    color: "var(--cr-primary)",
                    opacity: 0.85,
                    lineHeight: 1.5,
                    wordBreak: "break-word",
                  }}>
                    {item.value}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Form + map */}
      <section className="section-padding bg-white" style={{ paddingTop: 0 }}>
        <div className="cr-container">
          <div
            className="contact-form-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 24,
              borderRadius: 32,
              padding: 24,
              background: "var(--cr-secondary)",
              border: "1px solid rgba(90, 106, 81, 0.25)",
              boxShadow: "0 12px 40px rgba(90,61,52,0.05)",
              direction: isRTL ? "rtl" : "ltr",
            }}
          >
            {/* Form */}
            <div style={{ padding: "24px 20px", textAlign: isRTL ? "right" : "left" }}>
              <h2
                style={{
                  fontFamily: "var(--font-marcellus), serif",
                  fontSize: "36px",
                  color: "var(--cr-primary)",
                  marginBottom: "24px",
                  fontWeight: 400,
                }}
              >
                {t.contactPage.formHeading}
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="contact-form-inner" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                  <input
                    className="contact-input"
                    style={inputStyle}
                    type="text"
                    placeholder={t.contactPage.fields.firstName}
                    value={form.fname}
                    onChange={(e) => setForm({ ...form, fname: e.target.value })}
                    required
                  />
                  <input
                    className="contact-input"
                    style={inputStyle}
                    type="text"
                    placeholder={t.contactPage.fields.lastName}
                    value={form.lname}
                    onChange={(e) => setForm({ ...form, lname: e.target.value })}
                    required
                  />
                  <input
                    className="contact-input"
                    style={inputStyle}
                    type="tel"
                    placeholder={t.contactPage.fields.phone}
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    required
                  />
                  <input
                    className="contact-input"
                    style={inputStyle}
                    type="email"
                    placeholder={t.contactPage.fields.email}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                  />
                </div>
                <textarea
                  className="contact-input"
                  style={{ ...inputStyle, marginBottom: 24, resize: "vertical", minHeight: 120 }}
                  rows={4}
                  placeholder={t.contactPage.fields.message}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
                
                <button
                  type="submit"
                  style={{
                    width: "100%",
                    padding: "16px 32px",
                    borderRadius: 50,
                    backgroundColor: "var(--color-brand-primary)",
                    color: "#ffffff",
                    fontFamily: "var(--font-sora), sans-serif",
                    fontSize: 15,
                    fontWeight: 600,
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    boxShadow: "0 4px 12px rgba(65, 78, 54, 0.15)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "var(--color-brand-primary-hover)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "var(--color-brand-primary)";
                  }}
                >
                  {t.contactPage.submitBtn}
                </button>
              </form>
            </div>

            {/* Map column with branch switcher */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {/* Dynamic branch switcher pills */}
              {branches.length > 1 && (
                <div
                  className="contact-branch-switcher"
                  style={{
                    display: "flex",
                    gap: 8,
                    backgroundColor: "rgba(90, 61, 52, 0.05)",
                    padding: 6,
                    borderRadius: 50,
                    alignSelf: "center",
                    flexWrap: "wrap",
                  }}
                >
                  {branches.map((br) => (
                    <button
                      key={br.id}
                      type="button"
                      onClick={() => setActiveBranchId(br.id)}
                      style={{
                        padding: "8px 24px",
                        borderRadius: 50,
                        border: "none",
                        fontFamily: "var(--font-sora), sans-serif",
                        fontSize: 13,
                        fontWeight: 600,
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        backgroundColor: activeBranchId === br.id ? "var(--cr-primary)" : "transparent",
                        color: activeBranchId === br.id ? "#ffffff" : "var(--cr-primary)",
                      }}
                    >
                      {language === "ar" ? br.name_ar : br.name_en}
                    </button>
                  ))}
                </div>
              )}

              {/* Map embed */}
              <div
                style={{
                  borderRadius: 24,
                  overflow: "hidden",
                  position: "relative",
                  flex: 1,
                  minHeight: 440,
                  border: "1px solid rgba(90, 106, 81, 0.2)",
                }}
              >
                {activeBranch?.maps_embed ? (
                  <iframe
                    key={activeBranch.id}
                    src={activeBranch.maps_embed}
                    title={`${activeBranch.name_en} location`}
                    style={{ border: 0, width: "100%", height: "100%", minHeight: 440 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                ) : (
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                    minHeight: 440,
                    color: "var(--cr-muted-foreground)",
                    fontSize: 14,
                  }}>
                    {language === "ar" ? "لا تتوفر خريطة لهذا الفرع." : "No map available for this branch."}
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      <style>{`
        .contact-input:focus {
          border-color: var(--cr-primary) !important;
        }
        @media (max-width: 992px) {
          .contact-info-grid { grid-template-columns: 1fr !important; }
          .contact-info-grid > div:first-child { text-align: center; }
          .contact-form-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 768px) {
          .contact-cards { grid-template-columns: 1fr 1fr !important; }
          .contact-form-inner { grid-template-columns: 1fr !important; }
          .contact-branch-switcher { flex-wrap: wrap; justify-content: center; border-radius: 16px !important; }
          .contact-branch-switcher button { flex: 1; min-width: 130px; font-size: 12px !important; padding: 8px 12px !important; }
        }
        @media (max-width: 500px) {
          .contact-cards { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
