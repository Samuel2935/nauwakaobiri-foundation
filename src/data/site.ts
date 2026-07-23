// =============================================================
// N'UWAKAOBIRI FOUNDATION — SITE DATA
// Edit this file to update content across the entire site.
// =============================================================

import { X } from "lucide-react";

export const siteConfig = {
  name: "Nuwakobiri Foundation",
  shortName: "NUF",
  logo: "/images/nuwakaobirifdn-logo.jpeg",
  unity: "/images/nuwaphoto1.jpeg",
  power2: "/images/power2.jpg",
  power4: "/images/power4.jpg",
  power1: "/images/power1.webp",
  power3: "/images/power3.webp",
  power5: "/images/power5.jpg",
  tagline: "Rooted in Youths Empowerment.",
  domain: "nuwakobirifoundation.org",
  icon: "/images/nuwakaobirifdn-logo.jpeg",
  description:
    "The Nuwakobiri Foundation is a non-profit organisation dedicated to empowering the youths through education, healthcare, and economic opportunity across Nigeria and West Africa.",
  email: "nuwakobirifoundation@gmail.com",
  phone: "+234 703 843 3864",
  address: "C036 Sokoto Plaza, Tradefair International Complex, Lagos, Nigeria",
  founded: "2021",
  socials: {
    // twitter: "https://twitter.com/NUFoundation",
    facebook: "https://www.facebook.com/share/18pxbCDMMx/?mibextid=wwXIfr",
    instagram: "https://www.instagram.com/nuwakaobirifoundation?utm_source=qr",
    linkedin: "https://linkedin.com/company/nuwakaobiri-foundation",
    youtube: "https://www.youtube.com/@NuwakaobiriFoundation-1",
    tiktok: "https://www.tiktok.com/@nuwakaobirifoundation?_r=1&_t=ZN-97CkgDEeAh4",
    X: "https://x.com/nuwa_foundation?s=11",

  },
};

// ─── NAV ───────────────────────────────────────────────────────
export const navLinks = [
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Our Story", href: "" },
      { label: "Mission & Vision", href: "/about-us" },
      { label: "Our Founders", href: "/founders" },
      { label: "Leadership & Board", href: "/founders" },
      { label: "Our Philosophy", href: "" },
    ],
  },
  {
    label: "What We Do",
    href: "#programmes",
    children: [
      { label: "Our Impact Pillars", href: "#programmes" },
      { label: "Education Programme", href: "#programmes" },
      { label: "Healthcare Initiative", href: "#programmes" },
      { label: "Economic Empowerment", href: "#programmes" },
      { label: "Women & Youth", href: "#programmes" },
    ],
  },
  {
    label: "Impact",
    href: "#impact",
    children: [
      { label: "Impact at a Glance", href: "#impact" },
      { label: "Annual Reports", href: "#reports" },
      { label: "Success Stories", href: "#success-stories" },
      { label: "Partners", href: "#partners" },
    ],
  },
  {
    label: "volunteer",
    href: "#volunteer",
    children: [
      { label: "Volunteer", href: "/" },
      { label: "Partner With Us", href: "/" },
      { label: "Apply to a Programme", href: "/" },
      // { label: "Mentorship", href: "/get-involved/mentor" },
    ],
  },
  {
    label: "Media",
    href: "/media",
    children: [
      { label: "News & Stories", href: "/stories" },
      { label: "Press Releases", href: "/media" },
      { label: "Gallery", href: "/gallery" },
      { label: "Podcasts", href: "/podcast" },
    ],
  },
];

// ─── STATS ─────────────────────────────────────────────────────

export const stats = [
  { value: "5,400+", label: "Lives Impacted", description: "Individuals reached through our programmes" },
  { value: "₦2.1B+", label: "Funds Disbursed", description: "Grants, scholarships, and seed capital" },
  { value: "7+", label: "States Reached", description: "Active across at least 7 Nigerian states" },
  { value: "2021", label: "Year Founded", description: "five years of sustained community impact" },
];


// ─── IMPACT PILLARS ────────────────────────────────────────────
export const pillars = [
  {
    id: "education",
    icon: "BookOpen",
    title: "Education for All",
    summary:
      "We provide scholarships, school infrastructure support, and digital literacy training to ensure every child has access to quality education — regardless of background.",
    cta: { label: "Learn More", href: "/" },
  },
  {
    id: "healthcare",
    icon: "HeartPulse",
    title: "Community Healthcare",
    summary:
      "Through free medical outreaches, maternal health clinics, and rural health worker training, we bring dignified, accessible healthcare to underserved communities.",
    cta: { label: "Learn More", href: "/programmes/healthcare" },
  },
  {
    id: "economic",
    icon: "TrendingUp",
    title: "Economic Empowerment",
    summary:
      "We fund micro-enterprises, run vocational training centres, and connect young entrepreneurs with mentors, capital, and markets to build lasting livelihoods.",
    cta: { label: "Learn More", href: "/" },
  },
  {
    id: "women",
    icon: "Users",
    title: "Women & Youth",
    summary:
      "From leadership academies to safe spaces and seed grants, we invest in women and young people as the engines of community transformation.",
    cta: { label: "Learn More", href: "/" },
  },
];

// ─── PROGRAMME STEPS ───────────────────────────────────────────
export const programmeSteps = [
  {
    step: "01",
    title: "Application & Screening",
    body: "Submit a simple application online. Our team reviews every submission and selects candidates based on need, potential, and community impact.",
  },
  {
    step: "02",
    title: "Training & Capacity Building",
    body: "Selected participants undergo 8–12 weeks of skills training — ranging from business management to healthcare — delivered online and in-person.",
  },
  {
    step: "03",
    title: "Grant & Mentorship",
    body: "Beneficiaries receive financial grants or scholarships and are matched with experienced mentors from our growing network.",
  },
  {
    step: "04",
    title: "Community & Alumni Network",
    body: "Graduates join a lifelong network of changemakers, accessing continued learning, partnerships, and opportunities.",
  },
];

// ─── SUCCESS STORIES ───────────────────────────────────────────
export const stories = [
  {
    id: "1",
    name: "Chimezie Ossai",
    location: "Lisbon, Portugal",
    programme: "Youth Empowerment Programme",
    headline: "From doing a menial job to travelling the world — all thanks to a micro-grant",
    body: "Chimezie received a sponsored visa and micro-grant from NUF to start a small business in Lisbon. He now employs 5 people and has expanded to two other European countries.",
    image: "/images/smart.jpeg",
    imageFallback: "CO",
  },
  {
    id: "2",
    name: "Ayomide Balogun",
    location: "London, United Kingdom",
    programme: "Education Programme",
    headline: "Scholarship Changed My Trajectory — Now I Study Electrical Engineering at University in UK",
    body: "Ayomide was about to drop out of secondary school before NUF's scholarship stepped in. He now studies Electrical Engineering at Bayero University, Kano.",
    image: "/images/power3.webp",
    imageFallback: "IM",
  },
  {
    id: "3",
    name: "samuel Ezeh",
    location: "Texas, United States",
    programme: "Youth Leadership Academy",
    headline: "The Leadership Academy Gave Me an opportunity to achieve my dream of studying in the United States",
    body: "samuel Ezeh attended the NUF Youth Leadership Academy and went on to receive a full scholarship to study in the United States.",
    image: "/images/images1.jpg",
    imageFallback: "AN",
  },
];

// ─── NEWS ──────────────────────────────────────────────────────
export const newsItems = [
  {
    id: "1",
    date: "June 12, 2025",
    category: "Press Release",
    title: "NUF Launches 2025 Cohort of the Economic Empowerment Programme",
    excerpt:
      "Over 800 applicants from 28 states have been selected for the 2025 cohort. Training begins July 1st across six regional hubs.",
    href: "/media/news/2025-cohort-launch",
  },
  {
    id: "2",
    date: "May 3, 2025",
    category: "News",
    title: "Partnership with State Ministry Expands Free Medical Outreaches",
    excerpt:
      "A new MoU signed with the Anambra State Ministry of Health will extend our mobile clinic programme to 12 additional local government areas.",
    href: "/media/news/anambra-partnership",
  },
  {
    id: "3",
    date: "March 20, 2025",
    category: "Impact",
    title: "NUF Annual Report 2024: A Year of Milestones",
    excerpt:
      "Our 2024 annual report is now available. Read how we reached 3,200 new beneficiaries, disbursed ₦480M, and expanded into 4 new states.",
    href: "/media/news/annual-report-2024",
  },
];

// ─── PARTNERS ──────────────────────────────────────────────────
export const partners = [
  { name: "UN Development Programme", logo: "/images/partners/undp.svg" },
  { name: "Access Bank Foundation", logo: "/images/partners/access.svg" },
  { name: "Ford Foundation", logo: "/images/partners/ford.svg" },
  { name: "Federal Ministry of Education", logo: "/images/partners/fme.svg" },
  { name: "Dangote Foundation", logo: "/images/partners/dangote.svg" },
  { name: "MacArthur Foundation", logo: "/images/partners/macarthur.svg" },
];

// ─── ABOUT ─────────────────────────────────────────────────────
export const about = {
  story: `

Our foundation was established with a simple but powerful belief: every person deserves hope, dignity, and the opportunity to build a better future. We recognize that many individuals and families face challenges such as poverty, limited access to education, inadequate healthcare, and social inequality. Rather than stand by, we chose to take action.

Our mission is to serve with compassion, integrity, and accountability while creating sustainable solutions that transform lives and strengthen communities. We believe that meaningful change happens when people come together with a shared purpose to uplift those in need.

Every project we undertake is driven by a commitment to empower vulnerable individuals, support children and families, promote education, improve healthcare access, and encourage self-reliance. We are dedicated to ensuring that every contribution, partnership, and act of kindness makes a lasting impact.

I invite you to join us on this journey. Whether you choose to volunteer, donate, partner with us, or advocate for our cause, your support helps bring hope where it is needed most. Together, we can create stronger communities and a brighter future for generations to come.

Thank you for believing in our vision and for being part of this mission to change lives.
`,
  mission:
    "Our mission is to bring hope, restore dignity, and create lasting opportunities for vulnerable individuals and communities through compassion, service, and sustainable development.",
  vision:
    "A Nigeria where every person — regardless of where they were born — can access the resources they need to live a dignified, prosperous life.",
  philosophy:
    "We believe in community-led development. Our programmes are co-designed with the people they serve. We are accountable, transparent, and committed to measuring real impact — not just outputs.",
};

// ─── TEAM / LEADERSHIP ─────────────────────────────────────────
export const leadership = [
  {
    name: "Hon. Chief Chinedu Samuel Edeh a.k.a Nuwakobiri",
    title: "Founder & Board Chairman",
    bio: "Hon. Chief Chinedu Samuel Edeh is a renowned entrepreneur who has spent years building institutions that empower communities and finance in Nigeria.",
    image: "/images/chinedu1.jpeg",
    initials: "CE",
  },
  {
    name: "Chief (Mrs.) Ngozi Obi",
    title: "Co-Founder & Executive Director",
    bio: "A former World Bank consultant and education advocate, Ngozi leads the Foundation's strategic direction and programme delivery.",
    image: "/images/nuwaphoto1.jpeg",
    initials: "NO",
  },
  {
    name: "Tunde Adeyemi",
    title: "Director of Programmes",
    bio: "Tunde brings 15 years of development sector experience managing grants and community programmes across sub-Saharan Africa.",
    image: "/images/chinedu2.jpeg",
    initials: "TA",
  },
  {
    name: "Dr. Samuel Ezeh",
    title: "Media & Communications Lead",
    bio: "AN IT specialist with a passion for storytelling and digital communication.",
    image: "/images/chinedu1.jpeg",
    initials: "SE",
  },
];
