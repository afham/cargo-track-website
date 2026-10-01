// lib/branches-data.ts
export interface BranchInfo {
  id: "jeddah" | "riyadh" | "dammam";
  slug: string;
  nameEn: string;
  nameAr: string;
  roleEn: string;
  roleAr: string;
  badgeEn: string;
  badgeAr: string;
  buildingEn: string;
  buildingAr: string;
  addressEn: string;
  addressAr: string;
  telephones: string[];
  emails: string[];
  featuresEn: string[];
  featuresAr: string[];
  coverageEn: string;
  coverageAr: string;
}

export const BRANCHES_DATA: Record<string, BranchInfo> = {
  jeddah: {
    id: "jeddah",
    slug: "jeddah",
    nameEn: "Jeddah (Head Office)",
    nameAr: "جدة (المكتب الرئيسي)",
    roleEn: "Global Marine & Seaport Gateway",
    roleAr: "البوابة البحرية واللوجستية الدولية",
    badgeEn: "Headquarters & Western Hub",
    badgeAr: "المقر الرئيسي ومركز العمليات الغربية",
    buildingEn: "Advance Business Center, Khalid Bin Alwaleed Street",
    buildingAr: "مركز الأعمال المتقدم، شارع خالد بن الوليد",
    addressEn:
      "Khalid Bin Alwaleed Street, Door Number 213B, Jeddah 22234, Saudi Arabia",
    addressAr:
      "شارع خالد بن الوليد، مبنى رقم 213B، جدة 22234، المملكة العربية السعودية",
    telephones: ["+966596929917", "+966590967593"],
    emails: ["info@cargotrack.co", "wafa.kamil@cargotrack.co"],
    featuresEn: [
      "Direct seaport access via Jeddah Islamic Port",
      "Full container (FCL) & consolidated (LCL) ocean freight",
      "International expat packing & villa relocations",
      "Certified Saudi customs clearance & documentation",
    ],
    featuresAr: [
      "ارتباط مباشر بميناء جدة الإسلامي للشحن البحري",
      "شحن حاويات كاملة (FCL) وحاويات مجمعة (LCL)",
      "نقل وتغليف عفش الفلل والمنازل والترحيل الدولي",
      "تخليص جمركي معتمد وتوثيق فوري لجميع البضائع",
    ],
    coverageEn: "Jeddah, Makkah, Madinah, Yanbu, and Western Province",
    coverageAr: "جدة، مكة المكرمة، المدينة المنورة، ينبع، والمنطقة الغربية",
  },
  riyadh: {
    id: "riyadh",
    slug: "riyadh",
    nameEn: "Riyadh Branch & Operations",
    nameAr: "فرع وعمليات الرياض",
    roleEn: "Central Logistics & Cross-Border Hub",
    roleAr: "مركز النقل البري والجوي والترحيل المركزي",
    badgeEn: "Central Operational Hub",
    badgeAr: "مركز العمليات اللوجستية المركزية",
    buildingEn: "7027 Al-Iqdam, Al Mashael",
    buildingAr: "7027 شارع الإقدام، حي المشاعل",
    addressEn: "7027 Al-Iqdam, Al Mashael, Near Riyadh 14322, Saudi Arabia",
    addressAr:
      "7027 طريق الإقدام، حي المشاعل، الرياض 14322، المملكة العربية السعودية",
    telephones: ["+966583180756", "+966580593809", "+966591545934"],
    emails: [
      "rashif@cargotrack.co",
      "operation@cargotrack.co",
      "Pricing@cargotrack.co",
    ],
    featuresEn: [
      "Air cargo dispatch via King Khalid International Airport (RUH)",
      "Intercity domestic fleet connecting all Saudi governorates",
      "Corporate office & multinational headquarters relocations",
      "Secure short-term and long-term warehousing storage",
    ],
    featuresAr: [
      "شحن جوي سريع عبر مطار الملك خالد الدولي بالرياض",
      "أسطول نقل بري مغلق يغطي جميع مدن ومحافظات المملكة",
      "نقل وتجهيز مقرات الشركات والمؤسسات والهيئات",
      "مستودعات تخزين آمنة لمدد قصيرة وطويلة الأجل",
    ],
    coverageEn: "Riyadh Province, Al Kharj, Qassim, Hail, and Central Region",
    coverageAr: "مدينة الرياض، الخرج، القصيم، حائل، والمنطقة الوسطى",
  },
  dammam: {
    id: "dammam",
    slug: "dammam",
    nameEn: "Dammam Branch",
    nameAr: "فرع الدمام والمنطقة الشرقية",
    roleEn: "Arabian Gulf & Industrial Gateway",
    roleAr: "بوابة الخليج العربي والشحن الصناعي والتجاري",
    badgeEn: "Eastern Hub & GCC Border Crossing",
    badgeAr: "مركز المنطقة الشرقية ومنافذ دول مجلس التعاون",
    buildingEn: "Al Zoabi Tower, Prince Mohammed Bin Fahd Road",
    buildingAr: "برج الزعبي، طريق الأمير محمد بن فهد",
    addressEn:
      "5600 1st Street, Al Zoabi Tower, Prince Mohammed Bin Fahd Road, Dammam 32241, Saudi Arabia",
    addressAr:
      "5600 الشارع الأول، برج الزعبي، طريق الأمير محمد بن فهد، الدمام 32241، المملكة العربية السعودية",
    telephones: ["+966599380132", "+966597480313"],
    emails: ["Shiba@cargotrack.co", "Dmm@cargotrack.co"],
    featuresEn: [
      "King Abdulaziz Port seaport customs & transit clearances",
      "Fast GCC cross-border road trucking to Bahrain, UAE & Kuwait",
      "Industrial logistics & heavy machinery freight handling",
      "Specialized protective crating for delicate industrial assets",
    ],
    featuresAr: [
      "تخليص جمركي بحري عبر ميناء الملك عبد العزيز بالدمام",
      "نقل بري دولي سريع إلى البحرين والإمارات والكويت وقطر",
      "خدمات الشحن الصناعي ومعدات المشاريع الكبرى",
      "تغليف وصناديق خشبية مصممة للبضائع الحساسة والثقيلة",
    ],
    coverageEn: "Dammam, Khobar, Jubail, Dhahran, Al Ahsa, and GCC Borders",
    coverageAr: "الدمام، الخبر، الجبيل، الظهران، الأحساء، والمنافذ الخليجية",
  },
};
