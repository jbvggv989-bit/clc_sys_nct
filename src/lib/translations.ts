import type { Translation } from "@/types";

export const translations: Record<"en" | "ar", Translation> = {
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      services: "Services",
      blog: "Blog",
      medicalTourism: "Tourism Medical Care",
      contact: "Contact Us",
      makeAppointment: "Make an Appointment",
      login: "Login",
      logout: "Logout",
      user: "User",
      customerLogin: "Patient & Customer Login",
      customerLoginDesc: "Access your appointments, profile & medical wallet",
      staffLogin: "Clinic Staff & Doctors",
      staffLoginDesc: "Admin, doctor & reception portal",
      loginDisabledNotice: "Customer login is temporarily disabled by administration",
    },
    hero: {
      slides: [
        {
          welcome: "Welcome to clc-sys Clinics",
          heading: "Comprehensive Healthcare for You & Your Family",
          description:
            "Expert medical specialists, advanced diagnostics, and compassionate outpatient care dedicated to supporting your health and vitality at every stage of life.",
          bookBtn: "Book Appointment",
          rating: "4.9",
          reviewCount: "(1000+ reviews)",
        },
        {
          welcome: "Welcome to clc-sys Clinics",
          heading: "Advanced Medical Care You Can Trust!",
          description:
            "Discover multidisciplinary healthcare spanning internal medicine, outpatient surgery, diagnostic imaging, and rehabilitation. With over 15 years of clinical excellence, we deliver precision care you can trust.",
          bookBtn: "Book Appointment",
          rating: "4.9",
          reviewCount: "(1000+ reviews)",
        },
        {
          welcome: "Welcome to clc-sys Clinics",
          heading: "Your Health & Vitality Journey Starts Here!",
          description:
            "State-of-the-art polyclinic facilities under full medical supervision offering comprehensive healthcare, preventative medicine, and specialized rehabilitation for all ages.",
          bookBtn: "Book Appointment",
          rating: "4.9",
          reviewCount: "(1000+ reviews)",
        },
      ],
    },
    about: {
      tag: "About clc-sys",
      subtitle: "Clinical excellence. Compassionate care.",
      heading: "A destination built for your health",
      description:
        "clc-sys is a modern multi-specialty healthcare center — where evidence-based medicine meets patient-centered clinical care. We integrate internal medicine, diagnostics, outpatient surgery, and rehabilitation to deliver personalized health solutions.",
      services: [
        "Internal Medicine & Specialist Care",
        "Advanced Diagnostics & Imaging",
        "Physical Therapy & Rehabilitation",
      ],
      needHelp: "Book a Consultation",
      phone: "",
      readMore: "more about us",
    },
    results: {
      tag: "Clinical Excellence",
      heading: "Real patient outcomes & inspiring recovery stories",
      stats: [
        { value: "20+", label: "Years Of Experience" },
        { value: "10K+", label: "Happy patients" },
        { value: "20+", label: "Specialty Programs" },
        { value: "50K+", label: "Consultations Given" },
      ],
    },
    services: {
      tag: "Services",
      heading:
        "Explore our comprehensive medical specialties, diagnostics, and therapy services",
      selectCategory: "Select a category to view services",
      categories: [
        { id: "dermatology", label: "Specialist Clinics", sublabel: "العيادات التخصصية" },
        { id: "gynecology", label: "Internal Medicine", sublabel: "الباطنة العامة" },
        { id: "physiotherapy", label: "Physical Therapy & Rehab", sublabel: "العلاج الطبيعي والتأهيل" },
        { id: "osteopathy", label: "Diagnostics & Wellness", sublabel: "التشخيص والعافية" },
      ],
      loadingText: "Loading our services...",
      errorText: "Unable to load services at the moment. Please try again later.",
      retryBtn: "Retry",
      freeLabel: "Free",
      ctaText: "Partnering with you for lifelong health and wellness.",
      ctaBtn: "Book Consultation",
    },
    packages: {
      tag: "Care Packages",
      heading: "Comprehensive health checkups & bundled therapy packages",
      loadingText: "Loading our packages...",
      errorText: "Unable to load packages at the moment. Please try again later.",
    },
    whatWeDo: {
      tag: "what we do",
      heading: "Comprehensive Care. Precision Healing.",
      description:
        "We specialize in multi-disciplinary medicine and clinical wellness — combining advanced diagnostic technology with experienced medical consultants tailored to your needs.",
      services: [
        "Internal Medicine & Specialized Clinics",
        "Comprehensive Diagnostics & Imaging",
        "Physical Therapy & Rehabilitation",
      ],
      learnMore: "learn more",
      yearsLabel: "Years of Excellence",
    },
    introVideo: {
      playBtn: "Play",
    },
    whyChooseUs: {
      yearsLabel: "15+ years excellence",
      tag: "why choose us",
      heading: "Where clinical expertise meets compassionate healthcare",
      description:
        "At clc-sys, every medical decision is guided by evidence and patient safety — from initial diagnostic triage to complete recovery. We deliver modern, coordinated healthcare in a welcoming and comfortable setting.",
      quote:
        '"We don\'t just treat symptoms — we care for people. Every treatment at clc-sys is designed around your unique health journey, precision diagnosis, and long-term vitality."',
      contactLabel: "Reach us:",
      phone: "",
    },
    howItWorks: {
      tag: "how it works",
      heading: "Simple steps to optimal health and recovery",
      description:
        "Discover a seamless clinical pathway designed for your health and wellbeing: expert consultation, precision diagnostics, tailored treatment plans, and continuous medical follow-up.",
      contactBtn: "contact us",
      steps: [
        {
          number: "1.",
          title: "Medical Consultation & Triage",
          description:
            "A comprehensive clinical evaluation by specialized physicians to understand your symptoms, medical history, and health goals.",
        },
        {
          number: "2.",
          title: "Precision Diagnostics",
          description:
            "Advanced imaging and laboratory assessments to accurately diagnose root causes and tailor your medical pathway.",
        },
        {
          number: "3.",
          title: "Targeted Treatment & Therapy",
          description:
            "Evidence-based medical care, surgical interventions, or therapeutic sessions delivered by board-certified specialists.",
        },
        {
          number: "4.",
          title: "Continuous Monitoring & Follow-up",
          description:
            "Structured follow-ups to track clinical recovery, adjust medications, and ensure sustainable wellness.",
        },
      ],
    },
    testimonials: {
      tag: "Our Mission",
      heading: "Dedicated to your health, recovery, and wellbeing",
      quote:
        '"Every patient who walks through our doors deserves personalized attention, clinical precision, and genuine compassion. At clc-sys, we coordinate multi-specialty expertise so you receive the highest standard of modern healthcare. Your health is our highest priority."',
      doctorName: "clc-sys Clinics",
      doctorTitle: "Multi-Specialty Medical Center",
      doctorInfo: "clc-sys Medical",
      reviews: [
        {
          text: '"The diagnostic accuracy and care I received at clc-sys were exceptional. The consultants took the time to review my history and provided a clear, effective recovery plan."',
          author: "Ahmed Hassan",
          role: "Patient",
        },
        {
          text: '"State-of-the-art facilities and very attentive staff. The rehabilitation team helped me recover mobility in half the time I expected. Truly grateful to the entire team."',
          author: "Mariam Mansour",
          role: "Patient",
        },
        {
          text: '"Very professional medical center. Scheduling was smooth, and the specialist consultation was thorough and reassuring. I highly recommend clc-sys for comprehensive care."',
          author: "Karim Fahmy",
          role: "Patient",
        },
        {
          text: '"From the reception to the doctors and modern treatment rooms, everything reflects high quality and clinical competence. Best healthcare experience in the area."',
          author: "Nour El-Din",
          role: "Patient",
        },
      ],
    },
    appointment: {
      tag: "Message Us",
      heading: "Send us a message!",
      fields: {
        firstName: "First Name",
        lastName: "Last Name",
        email: "Email",
        phone: "Phone",
        message: "Message",
      },
      sendBtn: "Send Message",
    },
    footer: {
      blogHeading: "Latest insights on medicine & health wellness",
      description:
        "Providing world-class multidisciplinary healthcare: internal medicine, outpatient surgery, advanced diagnostics, and specialized rehabilitation.",
      quickLinks: "quick link",
      links: ["Home", "About us", "services", "Contact us"],
      openHours: "Open Hours:",
      hoursLine1: "Daily: 09:00 AM – 08:00 PM",
      hoursLine2: "Open 7 Days a Week",
      contact: "Contact:",
      email: "E-mail:",
      address: "Address:",
      copyright: "Copyright © 2026 All Rights Reserved.",
      poweredBy: "Powered by Octpoii",
      serviceHours: [
        { day: "Sunday", dayAr: "الأحد", isOpen: true, openTime: "09:00", closeTime: "20:00" },
        { day: "Monday", dayAr: "الإثنين", isOpen: true, openTime: "09:00", closeTime: "20:00" },
        { day: "Tuesday", dayAr: "الثلاثاء", isOpen: true, openTime: "09:00", closeTime: "20:00" },
        { day: "Wednesday", dayAr: "الأربعاء", isOpen: true, openTime: "09:00", closeTime: "20:00" },
        { day: "Thursday", dayAr: "الخميس", isOpen: true, openTime: "09:00", closeTime: "20:00" },
        { day: "Friday", dayAr: "الجمعة", isOpen: true, openTime: "09:00", closeTime: "20:00" },
        { day: "Saturday", dayAr: "السبت", isOpen: true, openTime: "09:00", closeTime: "20:00" },
      ],
    },
    booking: {
      title: "Book Your Service",
      subtitle: "Select your preferred service, date and time",
      steps: ["Select Service", "Select Date", "Select Time", "Confirm"],
      selectDate: "Select Your Preferred Date",
      selectTime: "Select Your Preferred Time",
      confirmTitle: "Confirm Your Booking",
      notes: "Additional Notes (Optional)",
      confirmBtn: "Confirm Booking",
      successTitle: "Booking Confirmed!",
      successSubtitle: "Your appointment has been successfully scheduled.",
      closeBtn: "Close",
      backBtn: "Back",
      nextBtn: "Next",
      labels: { service: "Service", date: "Date", time: "Time", provider: "Provider" },
    },
    auth: {
      title: "Welcome to clc-sys",
      subtitle: "Enter your phone number to get started",
      phonePlaceholder: "Phone Number",
      phoneHint: "Egyptian phone number (11 digits, starts with 01)",
      otpPlaceholder: "OTP Code",
      otpHint: "Enter the 6-digit code sent to your phone",
      resendOtp: "Resend OTP",
      sendOtp: "Send OTP",
      sending: "Sending OTP...",
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email Address",
      gender: "Gender",
      female: "Female",
      male: "Male",
    },
    aboutPage: {
      pageTitle: "About Us",
      aboutTag: "About clc-sys",
      aboutHeading: "Clinical excellence. Compassionate care.",
      aboutDescription:
        "clc-sys is a premier multi-specialty healthcare center — where evidence-based medicine meets modern patient-centered care. We integrate internal medicine, diagnostics, outpatient surgery, and rehabilitation to deliver holistic healthcare for every patient.",
      aboutList: [
        "Internal Medicine & Specialist Clinics",
        "Advanced Diagnostics & Laboratory",
        "Physical Therapy & Rehabilitation",
      ],
      needHelp: "Book a Consultation",
      servicesTag: "our approach",
      servicesHeading: "Clinical excellence and personalized healthcare",
      servicesDescription:
        "We believe that exceptional medical outcomes stem from thorough diagnosis, multidisciplinary collaboration, and attentive patient communication. At clc-sys, every care plan is tailored to your unique clinical profile.",
      skinCareTitle: "Comprehensive Diagnostics & Assessment",
      skinCareDescription:
        "Accurate diagnosis is the foundation of effective treatment. Our cutting-edge diagnostic facilities and clinical evaluations ensure every symptom is thoroughly investigated.",
      hairCareTitle: "Evidence-Based Treatment & Recovery",
      hairCareDescription:
        "Our board-certified consultants apply verified medical protocols and advanced therapies to guide you smoothly through treatment, recovery, and long-term health maintenance.",
      supportLabel: "Consultation Available",
      phone: "",
      whatWeDoHeading: "Full spectrum healthcare for the entire family",
      whatWeDoDescription:
        "From preventative checkups to advanced specialist consultations and post-operative rehab, clc-sys covers every dimension of your health needs.",
      whatWeDoList: [
        "Internal Medicine & Subspecialties",
        "Comprehensive Diagnostics & Imaging",
        "Physical Therapy & Rehabilitation",
        "Outpatient Care & Wellness",
      ],
      storiesTag: "our difference",
      storiesHeading: "Why patients choose clc-sys",
      storiesList: [
        "Experienced Board-Certified Consultants",
        "Modern Diagnostic & Clinical Facilities",
        "Compassionate, Patient-Centered Approach",
        "Coordinated Multi-Specialty Care",
      ],
      journeyItems: ["Your health is our primary commitment", "Evidence-based medicine, lasting vitality"],
      faqTag: "frequently asked questions",
      faqHeading: "Questions? We have answers.",
      faqs: [
        {
          question: "1. What medical specialties and services does clc-sys offer?",
          answer:
            "clc-sys offers a comprehensive range of clinical specialties including internal medicine, diagnostic imaging and laboratory, physical therapy and rehabilitation, outpatient surgical care, and preventive health screenings.",
        },
        {
          question: "2. How do I schedule a consultation or diagnostic test?",
          answer:
            "You can book easily online via our booking portal by selecting your preferred specialty and time, or by calling our medical reception directly.",
        },
        {
          question: "3. How is my medical treatment plan developed?",
          answer:
            "Your care begins with an in-depth clinical consultation and any necessary diagnostic tests. Our specialists then formulate a personalized, coordinated treatment plan tailored to your condition and recovery goals.",
        },
        {
          question: "4. What standards of care does clc-sys maintain?",
          answer:
            "We adhere strictly to international clinical standards, rigorous hygiene and safety protocols, and continuous medical education to deliver safe, effective, and empathetic healthcare.",
        },
      ],
    },
    servicesPage: {
      pageTitle: "Our Services",
      selectCategory: "Select a category to view services",
      loadingText: "Loading services...",
      errorText: "Unable to load services at the moment. Please try again later.",
      retryBtn: "Retry",
    },
    blogPage: {
      pageTitle: "Our Blog",
      posts: [
        {
          title: "Preventative Health: Vital Screenings for Every Age Group",
          slug: "preventative-health",
          image: "/images/clinic/room.jpg",
        },
        {
          title: "Modern Physical Therapy: Faster Recovery and Joint Health",
          slug: "physical-therapy",
          image: "/images/clinic/treatment.jpg",
        },
        {
          title: "Understanding Diagnostic Lab Tests: A Patient Guide",
          slug: "diagnostic-tests",
          image: "/images/clinic/interior.jpg",
        },
      ],
    },
    contactPage: {
      pageTitle: "Contact Us",
      reachOutHeading: "Get in touch for expert medical care",
      reachOutDescription:
        "Have questions about our clinics, specialists, or diagnostic services? Contact clc-sys today to schedule your consultation or speak with our medical coordination team.",
      locationTitle: "Location",
      locationText: "",
      locationTextZayed: "",
      contactTitle: "Contact Us",
      phone: "",
      phoneZayed: "",
      emailTitle: "Email",
      email: "info@clc-sys.com",
      formHeading: "Have any questions?",
      fields: {
        firstName: "First Name",
        lastName: "Last Name",
        phone: "Phone No.",
        email: "Email Address",
        message: "Write Message...",
      },
      submitBtn: "submit now",
    },
  },

  ar: {
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      services: "الخدمات",
      blog: "المدونة",
      medicalTourism: "السياحة العلاجية",
      contact: "اتصل بنا",
      makeAppointment: "احجز موعد",
      login: "تسجيل الدخول",
      logout: "تسجيل الخروج",
      user: "المستخدم",
      customerLogin: "تسجيل دخول المرضى والعملاء",
      customerLoginDesc: "الوصول إلى مواعيدك والملف الشخصي والمحفظة",
      staffLogin: "تسجيل دخول الموظفين والأطباء",
      staffLoginDesc: "بوابة الإدارة والأطباء والاستقبال",
      loginDisabledNotice: "تسجيل دخول العملاء معطل حالياً من قبل الإدارة",
    },
    hero: {
      slides: [
        {
          welcome: "مرحباً بكم في عيادات clc-sys",
          heading: "رعاية صحية شاملة لك ولعائلتك",
          description:
            "نخبة من الاستشاريين المتخصصين والتشخيص المتقدم والرعاية الطبية الشاملة لدعم صحتك وعافيتك في كل مرحلة من مراحل حياتك.",
          bookBtn: "احجز موعدًا",
          rating: "4.9",
          reviewCount: "(1000+ تقييم)",
        },
        {
          welcome: "مرحباً بكم في عيادات clc-sys",
          heading: "رعاية طبية متطورة يمكنك الوثوق بها!",
          description:
            "اكتشف خدمات طبية متكاملة تشمل الباطنة العامة، الجراحة اليومية، الفحوصات التشخيصية، وإعادة التأهيل. مع أكثر من 15 عاماً من التميز الطبي، نقدم رعاية متناهية الدقة تثق بها.",
          bookBtn: "احجز موعدًا",
          rating: "4.9",
          reviewCount: "(1000+ تقييم)",
        },
        {
          welcome: "مرحباً بكم في عيادات clc-sys",
          heading: "رحلتك نحو الصحة والعافية تبدأ هنا!",
          description:
            "مراكز طبية متعددة التخصصات تحت إشراف نخبة من الأطباء لتقديم رعاية وقائية وعلاجية شاملة وإعادة تأهيل لجميع الأعمار.",
          bookBtn: "احجز موعدًا",
          rating: "4.9",
          reviewCount: "(1000+ تقييم)",
        },
      ],
    },
    about: {
      tag: "عن clc-sys",
      subtitle: "تميز إكلينيكي ورعاية متكاملة.",
      heading: "وجهة مصممة لصحتك وعافيتك",
      description:
        "clc-sys مجمع طبي متكامل متعدد التخصصات — يجمع بين الطب المبني على الأدلة العلمية وأعلى مستويات الرعاية الإكلينيكية. نتميز في الباطنة العامة، التشخيص الدقيق، الجراحة اليومية، والتأهيل، لنقدم رعاية صحية مخصصة لك ولعائلتك.",
      services: [
        "عيادات الباطنة والتخصصات الطبية",
        "التشخيص المتطور والأشعة",
        "العلاج الطبيعي وإعادة التأهيل",
      ],
      needHelp: "احجز استشارتك",
      phone: "",
      readMore: "اعرف أكثر",
    },
    results: {
      tag: "التميز الطبي",
      heading: "نتائج علاجية وقصص تعافٍ ملهمة لمرضانا",
      stats: [
        { value: "20+", label: "سنوات من الخبرة" },
        { value: "10K+", label: "مريض سعيد" },
        { value: "20+", label: "برنامج تخصصي" },
        { value: "50K+", label: "استشارة مقدمة" },
      ],
    },
    services: {
      tag: "الخدمات",
      heading:
        "استكشف تخصصاتنا الطبية الشاملة والخدمات التشخيصية والعلاجية",
      selectCategory: "اختر فئة لعرض الخدمات",
      categories: [
        { id: "dermatology", label: "العيادات التخصصية", sublabel: "Specialist Clinics" },
        { id: "gynecology", label: "الباطنة العامة", sublabel: "Internal Medicine" },
        { id: "physiotherapy", label: "العلاج الطبيعي والتأهيل", sublabel: "Physical Therapy" },
        { id: "osteopathy", label: "التشخيص والعافية", sublabel: "Diagnostics & Wellness" },
      ],
      loadingText: "جارٍ تحميل خدماتنا...",
      errorText: "تعذّر تحميل الخدمات في الوقت الحالي. يرجى المحاولة مرة أخرى.",
      retryBtn: "إعادة المحاولة",
      freeLabel: "مجاني",
      ctaText: "شريكك في رعاية صحية وعافية تدوم طويلاً.",
      ctaBtn: "احجز استشارة",
    },
    packages: {
      tag: "باقات الرعاية",
      heading: "فحوصات طبية شاملة وباقات تأهيل متكاملة",
      loadingText: "جارٍ تحميل الباقات...",
      errorText: "تعذّر تحميل الباقات في الوقت الحالي. يرجى المحاولة مرة أخرى.",
    },
    whatWeDo: {
      tag: "ما نقدمه",
      heading: "رعاية شاملة. شفاء دقيق وموثوق.",
      description:
        "نتخصص في الرعاية الطبية متعددة التخصصات والعافية الشاملة — نجمع بين أحدث تقنيات التشخيص واستشاريين ذوي خبرة عالية لتلبية احتياجاتك الصحية.",
      services: [
        "عيادات الباطنة والتخصصات الطبية",
        "الفحوصات الشاملة والتشخيص بالأشعة",
        "العلاج الطبيعي وإعادة التأهيل الطبي",
      ],
      learnMore: "اعرف أكثر",
      yearsLabel: "سنوات من التميز",
    },
    introVideo: {
      playBtn: "تشغيل",
    },
    whyChooseUs: {
      yearsLabel: "+15 سنة تميز",
      tag: "لماذا تختارنا",
      heading: "حيث تلتقي الخبرة الإكلينيكية بالرعاية الإنسانية المتميزة",
      description:
        "في clc-sys، كل قرار طبي مبني على الدليل العلمي وسلامة المريض — من الفحص التشخيصي الأول وحتى تمام الشفاء. نقدم رعاية صحية منسقة ومتطورة في بيئة مريحة وداعمة.",
      quote:
        '"نحن لا نعالج الأعراض فحسب — بل نعتني بالإنسان. كل خطة علاجية في clc-sys مصممة خصيصاً لدعم صحتك وعافيتك على المدى الطويل وفق أدق المعايير الطبية."',
      contactLabel: "تواصل معنا:",
      phone: "",
    },
    howItWorks: {
      tag: "كيف يعمل",
      heading: "خطوات بسيطة نحو صحة مثالية وتعافٍ كامل",
      description:
        "اكتشف مساراً علاجياً سلساً مصمماً لصحتك وعافيتك: استشارة متخصصة، تشخيص دقيق، خطط علاجية متكاملة، ومتابعة طبية مستمرة.",
      contactBtn: "تواصل معنا",
      steps: [
        {
          number: "١.",
          title: "الاستشارة الطبية والفحص الأولي",
          description:
            "تقييم إكلينيكي شامل بواسطة أطباء متخصصين لفهم التاريخ المرضي والأعراض واحتياجاتك الصحية بدقة.",
        },
        {
          number: "٢.",
          title: "التشخيص الدقيق والفحوصات",
          description:
            "فحوصات معملية وأشعة تشخيصية متطورة لتحديد الأسباب بدقة وتحديد المسار العلاجي الأمثل.",
        },
        {
          number: "٣.",
          title: "العلاج التخصصي والرعاية المتكاملة",
          description:
            "برامج علاجية وتدخلات طبية أو جلسات تأهيلية مبنية على الأدلة العلمية بأيدي استشاريين معتمدين.",
        },
        {
          number: "٤.",
          title: "المتابعة الطبية المستمرة",
          description:
            "متابعات دورية لتقييم التعافي وملاءمة الأدوية وضمان استدامة الصحة والعافية.",
        },
      ],
    },
    testimonials: {
      tag: "رسالتنا",
      heading: "ملتزمون بصحتك، تعافيك، وراحتك",
      quote:
        '"كل مريض يدخل أبوابنا يستحق عناية خاصة، دقة إكلينيكية، واهتماماً حقيقياً. في clc-sys، نجمع بين تخصصات طبية متعددة لنقدم لك أعلى معايير الرعاية الصحية الحديثة. صحتك هي أولويتنا القصوى."',
      doctorName: "عيادات clc-sys",
      doctorTitle: "مركز طبي متعدد التخصصات",
      doctorInfo: "مجمع clc-sys الطبي",
      reviews: [
        {
          text: '"دقة التشخيص والرعاية الطبية في clc-sys كانت استثنائية. استمع الاستشاريون لكل تفاصيل حالتي وقدموا لي خطة علاجية متكاملة حققت نتائج ممتازة."',
          author: "أحمد حسن",
          role: "مريض",
        },
        {
          text: '"مركز طبي راقٍ وفريق عمل شديد الاهتمام. ساعدني فريق العلاج الطبيعي والتأهيل على استعادة الحركة بسرعة تفوق توقعاتي. كل الشكر والتقدير."',
          author: "مريم منصور",
          role: "مريضة",
        },
        {
          text: '"احترافية عالية جداً وتنظيم ممتاز. الفحص كان دقيقاً والشرح وافياً ومطمئناً. أنصح بشدة بمركز clc-sys لأي شخص يبحث عن رعاية طبية متكاملة."',
          author: "كريم فهمي",
          role: "مريض",
        },
        {
          text: '"من الاستقبال إلى الأطباء والعيادات المجهزة بأحدث الأجهزة، التجربة بالكامل تعكس أعلى معايير الجودة والاهتمام بسلامة المريض."',
          author: "نور الدين",
          role: "مريض",
        },
      ],
    },
    appointment: {
      tag: "راسلنا",
      heading: "أرسل لنا رسالة!",
      fields: {
        firstName: "الاسم الأول",
        lastName: "اسم العائلة",
        email: "البريد الإلكتروني",
        phone: "رقم الهاتف",
        message: "الرسالة",
      },
      sendBtn: "إرسال الرسالة",
    },
    footer: {
      blogHeading: "أحدث المقالات في الطب والصحة العامة",
      description:
        "نقدم رعاية صحية متعددة التخصصات بمقاييس عالمية: الباطنة العامة، الجراحة اليومية، التشخيص المتطور، وإعادة التأهيل.",
      quickLinks: "روابط سريعة",
      links: ["الرئيسية", "من نحن", "الخدمات", "اتصل بنا"],
      openHours: "ساعات العمل:",
      hoursLine1: "يومياً: 09:00 ص – 08:00 م",
      hoursLine2: "مفتوح 7 أيام في الأسبوع",
      contact: "اتصل:",
      email: "البريد الإلكتروني:",
      address: "العنوان:",
      copyright: "حقوق النشر © 2026 جميع الحقوق محفوظة.",
      poweredBy: "تشغيل بواسطة Octpoii",
      serviceHours: [
        { day: "Sunday", dayAr: "الأحد", isOpen: true, openTime: "09:00", closeTime: "20:00" },
        { day: "Monday", dayAr: "الإثنين", isOpen: true, openTime: "09:00", closeTime: "20:00" },
        { day: "Tuesday", dayAr: "الثلاثاء", isOpen: true, openTime: "09:00", closeTime: "20:00" },
        { day: "Wednesday", dayAr: "الأربعاء", isOpen: true, openTime: "09:00", closeTime: "20:00" },
        { day: "Thursday", dayAr: "الخميس", isOpen: true, openTime: "09:00", closeTime: "20:00" },
        { day: "Friday", dayAr: "الجمعة", isOpen: true, openTime: "09:00", closeTime: "20:00" },
        { day: "Saturday", dayAr: "السبت", isOpen: true, openTime: "09:00", closeTime: "20:00" },
      ],
    },
    booking: {
      title: "احجز خدمتك",
      subtitle: "اختر الخدمة والتاريخ والوقت المناسبين لك",
      steps: ["اختر الخدمة", "اختر التاريخ", "اختر الوقت", "تأكيد"],
      selectDate: "اختر تاريخك المفضل",
      selectTime: "اختر وقتك المفضل",
      confirmTitle: "تأكيد حجزك",
      notes: "ملاحظات إضافية (اختياري)",
      confirmBtn: "تأكيد الحجز",
      successTitle: "تم تأكيد الحجز!",
      successSubtitle: "تم جدولة موعدك بنجاح.",
      closeBtn: "إغلاق",
      backBtn: "رجوع",
      nextBtn: "التالي",
      labels: { service: "الخدمة", date: "التاريخ", time: "الوقت", provider: "المزود" },
    },
    aboutPage: {
      pageTitle: "من نحن",
      aboutTag: "عن clc-sys",
      aboutHeading: "تميز إكلينيكي ورعاية متكاملة.",
      aboutDescription:
        "clc-sys مركز طبي متكامل متعدد التخصصات — حيث تلتقي العلوم الطبية الحديثة بالرعاية الإنسانية الشاملة. ندمج عيادات الباطنة العامة والتخصصية والتشخيص والجراحة اليومية وإعادة التأهيل لتقديم رعاية متكاملة لكل مريض.",
      aboutList: [
        "عيادات الباطنة والتخصصات الطبية",
        "التشخيص المتطور والمختبرات",
        "العلاج الطبيعي وإعادة التأهيل",
      ],
      needHelp: "احجز استشارتك",
      servicesTag: "منهجنا",
      servicesHeading: "التميز الإكلينيكي والرعاية الصحية المخصصة",
      servicesDescription:
        "نؤمن بأن أفضل النتائج العلاجية تبدأ من التشخيص الدقيق والتنسيق بين التخصصات الطبية المختلفة. في clc-sys، كل خطة علاجية مصممة خصيصاً لتناسب حالتك الصحية.",
      skinCareTitle: "فحوصات وتشخيصات شاملة",
      skinCareDescription:
        "التشخيص الدقيق هو أساس العلاج الناجح. نوفر أحدث تقنيات الفحص والتقييم الإكلينيكي لضمان فحص كل حالة بمنتهى الدقة.",
      hairCareTitle: "علاج مبني على الأدلة وتعافٍ مستدام",
      hairCareDescription:
        "يتبع استشاريونا المعتمدون أحدث البروتوكولات العلاجية العالمية لضمان سلامتك وسرعة تعافيك واستدامة صحتك.",
      supportLabel: "الاستشارة متاحة",
      phone: "",
      whatWeDoHeading: "رعاية صحية شاملة لجميع أفراد الأسرة",
      whatWeDoDescription:
        "من الفحوصات الدورية الوقائية إلى الاستشارات الطبية المتخصصة وإعادة التأهيل، يقدم clc-sys حلولاً صحية متكاملة.",
      whatWeDoList: [
        "الباطنة العامة والتخصصات الفرعية",
        "الفحوصات الشاملة والتشخيص بالأشعة",
        "العلاج الطبيعي والتأهيل الحركي",
        "الجراحة اليومية والعافية المتكاملة",
      ],
      storiesTag: "ما يميزنا",
      storiesHeading: "لماذا يختار المرضى clc-sys",
      storiesList: [
        "استشاريون معتمدون وذوو خبرة واسعة",
        "تجهيزات طبية وتشخيصية متطورة",
        "رعاية إنسانية محورها صحة وراحة المريض",
        "تنسيق متكامل بين كافة التخصصات الطبية",
      ],
      journeyItems: ["صحتك هي التزامنا الأول", "طب مبني على الدليل العلمي وعافية مستدامة"],
      faqTag: "أسئلة شائعة",
      faqHeading: "أسئلة؟ لدينا إجابات.",
      faqs: [
        {
          question: "١. ما هي التخصصات والخدمات الطبية المتاحة في clc-sys؟",
          answer:
            "يوفر clc-sys مجموعة متكاملة من التخصصات تشمل الباطنة العامة والتخصصية، الفحوصات التشخيصية والمختبرات، العلاج الطبيعي والتأهيل، الجراحة اليومية، والفحوصات الوقائية الشاملة.",
        },
        {
          question: "٢. كيف يمكنني حجز استشارة أو فحص طبي؟",
          answer:
            "يمكنك الحجز بسهولة عبر بوابة الحجز الإلكتروني باختيار التخصص والموعد المناسب، أو بالتواصل المباشر مع مكتب الاستقبال الطبي.",
        },
        {
          question: "٣. كيف يتم وضع الخطة العلاجية للمريض؟",
          answer:
            "تبدأ رحلتك باستشارة إكلينيكية مفصلة وإجراء الفحوصات الضرورية. بعدها يقوم الأطباء بوضع خطة علاجية مخصصة ومنسقة وفق احتياجاتك الصحية وأهداف التعافي.",
        },
        {
          question: "٤. ما هي معايير الرعاية المتبعة في clc-sys؟",
          answer:
            "نلتزم بأعلى المعايير الإكلينيكية الدولية وبروتوكولات التعقيم والسلامة الصارمة لضمان رعاية صحية آمنة وفعالة ومبنية على الاحترام والاهتمام.",
        },
      ],
    },
    servicesPage: {
      pageTitle: "خدماتنا",
      selectCategory: "اختر فئة لعرض الخدمات",
      loadingText: "جارٍ تحميل الخدمات...",
      errorText: "تعذّر تحميل الخدمات في الوقت الحالي. يرجى المحاولة مرة أخرى.",
      retryBtn: "إعادة المحاولة",
    },
    blogPage: {
      pageTitle: "مدونتنا",
      posts: [
        {
          title: "الرعاية الصحية الوقائية: فحوصات دورية حيوية لكل فئة عمرية",
          slug: "preventative-health",
          image: "/images/clinic/room.jpg",
        },
        {
          title: "العلاج الطبيعي الحديث: تسريع التعافي وصحة المفاصل",
          slug: "physical-therapy",
          image: "/images/clinic/treatment.jpg",
        },
        {
          title: "فهم الفحوصات والتحاليل الطبية التشخيصية: دليل المريض",
          slug: "diagnostic-tests",
          image: "/images/clinic/interior.jpg",
        },
      ],
    },
    contactPage: {
      pageTitle: "اتصل بنا",
      reachOutHeading: "تواصل معنا للحصول على أفضل رعاية طبية",
      reachOutDescription:
        "هل لديك استفسارات حول عياداتنا أو الاستشاريين أو الفحوصات؟ تواصل معنا اليوم لحجز موعدك أو التحدث مع فريق التنسيق الطبي.",
      locationTitle: "الموقع",
      locationText: "",
      locationTextZayed: "",
      contactTitle: "اتصل بنا",
      phone: "",
      phoneZayed: "",
      emailTitle: "البريد الإلكتروني",
      email: "info@clc-sys.com",
      formHeading: "هل لديك أسئلة؟",
      fields: {
        firstName: "الاسم الأول",
        lastName: "اسم العائلة",
        phone: "رقم الهاتف",
        email: "عنوان البريد الإلكتروني",
        message: "اكتب رسالتك...",
      },
      submitBtn: "إرسال الآن",
    },
    auth: {
      title: "مرحباً بك في clc-sys",
      subtitle: "أدخل رقم هاتفك للبدء",
      phonePlaceholder: "رقم الهاتف",
      phoneHint: "رقم هاتف مصري (11 رقمًا، يبدأ بـ 01)",
      otpPlaceholder: "رمز التحقق",
      otpHint: "أدخل الرمز المكون من 6 أرقام المرسل إلى هاتفك",
      resendOtp: "إعادة إرسال الرمز",
      sendOtp: "إرسال الرمز",
      sending: "جارٍ الإرسال...",
      firstName: "الاسم الأول",
      lastName: "اسم العائلة",
      email: "البريد الإلكتروني",
      gender: "الجنس",
      female: "أنثى",
      male: "ذكر",
    },
  },
};
