// =============================================================
// N'UWAKAOBIRI FOUNDATION — SITE DATA
// Edit this file to update content across the entire site.
// =============================================================

export const siteConfig = {
  name: "N'Uwakaobiri Foundation",
  shortName: "NUF",
  tagline: "Rooted in Youths Empowerment.",
  description:
    "The N'Uwakaobiri Foundation is a non-profit organisation dedicated to empowering the youths through education, healthcare, and economic opportunity across Nigeria and West Africa.",
  email: "info@nuwakaobirifoundation.org",
  phone: "+234 800 000 0000",
  address: "14 Foundation Drive, Victoria Island, Lagos, Nigeria",
  founded: "2018",
  socials: {
    twitter: "https://twitter.com/NUFoundation",
    facebook: "https://facebook.com/NUFoundation",
    instagram: "https://instagram.com/NUFoundation",
    linkedin: "https://linkedin.com/company/nuwakaobiri-foundation",
    youtube: "https://youtube.com/@NUFoundation",
  },
};

// ─── NAV ───────────────────────────────────────────────────────
export const navLinks = [
  {
    label: "About",
    href: "#about",
    children: [
      { label: "Our Story", href: "#success-stories" },
      { label: "Mission & Vision", href: "#mission" },
      { label: "Our Founders", href: "#founders" },
      { label: "Leadership & Board", href: "#leadership" },
      { label: "Our Philosophy", href: "#philosophy" },
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
    label: "Get Involved",
    href: "#partners",
    children: [
      { label: "Volunteer", href: "#pillars" },
      { label: "Partner With Us", href: "#partner" },
      { label: "Apply to a Programme", href: "#apply" },
      // { label: "Mentorship", href: "/get-involved/mentor" },
    ],
  },
  {
    label: "Media",
    href: "#media",
    children: [
      { label: "News & Stories", href: "#success-stories" },
      { label: "Press Releases", href: "#media" },
      { label: "Gallery", href: "#gallery" },
      { label: "Podcasts", href: "#podcasts" },
    ],
  },
];

// ─── STATS ─────────────────────────────────────────────────────

export const stats = [
  { value: "5,400+", label: "Lives Impacted", description: "Individuals reached through our programmes" },
  { value: "₦2.1B+", label: "Funds Disbursed", description: "Grants, scholarships, and seed capital" },
  { value: "7+", label: "States Reached", description: "Active across all 36 Nigerian states" },
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
    cta: { label: "Learn More", href: "/programmes/education" },
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
    cta: { label: "Learn More", href: "/programmes/economic" },
  },
  {
    id: "women",
    icon: "Users",
    title: "Women & Youth",
    summary:
      "From leadership academies to safe spaces and seed grants, we invest in women and young people as the engines of community transformation.",
    cta: { label: "Learn More", href: "/programmes/women-youth" },
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
    name: "Chisom Okafor",
    location: "Enugu State",
    programme: "Economic Empowerment",
    headline: "From a Market Stall to a Thriving Tailoring Business",
    body: "With a ₦150,000 micro-grant and 10 weeks of business training, Chisom turned her small tailoring hobby into a 6-person workshop now supplying schools across Enugu.",
    image: "/images/stories/chisom.jpg",
    imageFallback: "CO",
  },
  {
    id: "2",
    name: "Ibrahim Musa",
    location: "Kano State",
    programme: "Education Programme",
    headline: "Scholarship Changed My Trajectory — Now I Study Engineering",
    body: "Ibrahim was about to drop out of secondary school before NUF's scholarship stepped in. He now studies Electrical Engineering at Bayero University, Kano.",
    image: "/images/stories/ibrahim.jpg",
    imageFallback: "IM",
  },
  {
    id: "3",
    name: "Adaeze Nnaji",
    location: "Imo State",
    programme: "Women & Youth",
    headline: "The Leadership Academy Gave Me a Voice I Didn't Know I Had",
    body: "Adaeze attended the NUF Women's Leadership Academy and went on to found a community savings cooperative that now serves 200 women in her village.",
    image: "/images/stories/adaeze.jpg",
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
  story:
    "N'Uwakaobiri Foundation — was founded in 2026 by Honourable Chief Chinedu Samuel Edeh with a simple conviction: that every Nigerian youth deserves the opportunity to thrive, notwithstanding their background. What began as a small empoerment, grows into a massive scheme of societal transformation in Nigeria. The organisation has grown into a multi-programme organisation reaching many vulnerable people.",
  mission:
    "To invest in people and communities across Nigeria by funding education, health, and economic opportunities that create lasting, generational change.",
  vision:
    "A Nigeria where every person — regardless of where they were born — can access the resources they need to live a dignified, prosperous life.",
  philosophy:
    "We believe in community-led development. Our programmes are co-designed with the people they serve. We are accountable, transparent, and committed to measuring real impact — not just outputs.",
};

// ─── TEAM / LEADERSHIP ─────────────────────────────────────────
export const leadership = [
  {
    name: "Dr. Emeka Obi",
    title: "Founder & Board Chairman",
    bio: "Dr. Obi is a physician and entrepreneur who has spent 25 years building institutions across healthcare and finance in Nigeria.",
    image: "/images/team/emeka.jpg",
    initials: "EO",
  },
  {
    name: "Chief (Mrs.) Ngozi Obi",
    title: "Co-Founder & Executive Director",
    bio: "A former World Bank consultant and education advocate, Ngozi leads the Foundation's strategic direction and programme delivery.",
    image: "/images/team/ngozi.jpg",
    initials: "NO",
  },
  {
    name: "Tunde Adeyemi",
    title: "Director of Programmes",
    bio: "Tunde brings 15 years of development sector experience managing grants and community programmes across sub-Saharan Africa.",
    image: "/images/team/tunde.jpg",
    initials: "TA",
  },
  {
    name: "Dr. Fatima Bello",
    title: "Head of Healthcare Initiative",
    bio: "A public health specialist and former WHO consultant, Fatima designs and oversees all NUF medical outreach and clinic programmes.",
    image: "/images/team/fatima.jpg",
    initials: "FB",
  },
];
