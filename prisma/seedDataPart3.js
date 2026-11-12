// prisma/seedDataPart3.js - Third batch to achieve 50+ verified institutions across India

const collegesDataPart3 = [
  {
    slug: "iit-guwahati",
    name: "Indian Institute of Technology Guwahati",
    shortName: "IIT Guwahati",
    collegeType: "IIT",
    ownership: "Public / Government",
    established: 1994,
    city: "Guwahati",
    state: "Assam",
    pincode: "781039",
    address: "Amingaon, North Guwahati, Guwahati, Assam",
    campusSize: "700 Acres",
    logoUrl: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=160&q=80",
    bannerUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80",
    accreditation: "Institute of National Importance, AICTE",
    naacGrade: "A++",
    nirfRank: 7,
    nirfCategory: "Engineering",
    nirfYear: 2024,
    overview: "Located on the northern banks of the Brahmaputra River, IIT Guwahati is famed as one of India's most scenic campuses with rolling hills and lakes, ranked 7th in engineering by NIRF 2024.",
    admissionProcess: "B.Tech and B.Des admissions through JEE Advanced and UCEED. M.Tech via GATE.",
    eligibilitySummary: "Class 12 with 75% in PCM + JEE Advanced rank.",
    highestPackage: 120.0,
    averagePackage: 21.6,
    medianPackage: 18.0,
    placementYear: 2024,
    topRecruiters: "Google, Microsoft, Amazon, Qualcomm, Texas Instruments, Uber, Oracle",
    facilities: "Department of Design, Param Kamrupa Supercomputer, 14 Hostels, Sports Complex",
    officialWebsite: "https://www.iitg.ac.in",
    admissionUrl: "https://jeeadv.ac.in",
    sourceReference: "NIRF 2024 Engineering & IITG Placements 2024",
    lastVerified: "2024-10-18",
    ratingOverall: 4.7,
    reviewCount: 220,
    isFeatured: true,
    courses: [
      {
        courseName: "B.Tech in Computer Science and Engineering",
        degreeLevel: "UG",
        stream: "Engineering",
        specialization: "Computer Science",
        duration: "4 Years",
        totalTuitionFee: "₹8.00 Lakhs",
        annualFee: "₹2.00 Lakhs",
        seats: 114,
        examAccepted: "JEE Advanced",
        eligibility: "10+2 with 75% in PCM + JEE Advanced Top 650 rank"
      },
      {
        courseName: "B.Des (Bachelor of Design)",
        degreeLevel: "UG",
        stream: "Design",
        specialization: "Industrial & Communication Design",
        duration: "4 Years",
        totalTuitionFee: "₹8.00 Lakhs",
        annualFee: "₹2.00 Lakhs",
        seats: 56,
        examAccepted: "UCEED",
        eligibility: "10+2 in any stream + UCEED Top rank"
      }
    ],
    cutoffs: [
      { courseName: "B.Tech CSE", examName: "JEE Advanced 2024", round: "Round 6", category: "General", quota: "All India", openingRank: 380, closingRank: 654 }
    ],
    placements: [
      { year: 2024, highestPackage: 120.0, averagePackage: 21.6, medianPackage: 18.0, placementRate: "90%", totalOffers: 780, topRecruiters: "Google, Microsoft, Qualcomm" }
    ],
    rankings: [
      { agency: "NIRF", rank: 7, category: "Engineering", year: 2024 }
    ],
    faqs: [
      { question: "Does IIT Guwahati have a design program?", answer: "Yes, IIT Guwahati has a dedicated Department of Design offering B.Des through UCEED and M.Des through CEED." }
    ]
  },

  {
    slug: "iit-hyderabad",
    name: "Indian Institute of Technology Hyderabad",
    shortName: "IIT Hyderabad",
    collegeType: "IIT",
    ownership: "Public / Government",
    established: 2008,
    city: "Hyderabad",
    state: "Telangana",
    pincode: "502285",
    address: "Kandi, Sangareddy, Telangana",
    campusSize: "576 Acres",
    logoUrl: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=160&q=80",
    bannerUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80",
    accreditation: "Institute of National Importance",
    naacGrade: "A++",
    nirfRank: 8,
    nirfCategory: "Engineering",
    nirfYear: 2024,
    overview: "IIT Hyderabad is the fastest-rising 2nd generation IIT, ranked 8th in India by NIRF 2024. Pioneered Fractal Academic System and India's first B.Tech in Artificial Intelligence.",
    admissionProcess: "B.Tech via JEE Advanced rank and JoSAA counselling.",
    eligibilitySummary: "Class 12 with 75% in PCM and JEE Advanced score.",
    highestPackage: 90.0,
    averagePackage: 20.5,
    medianPackage: 17.5,
    placementYear: 2024,
    topRecruiters: "Rakuten Japan, Microsoft, Google, Intel, TSMC, Qualcomm, Adobe",
    facilities: "Japanese Collaboration Center, Radiant Cooling Hostels, Technology Incubation Park",
    officialWebsite: "https://www.iith.ac.in",
    admissionUrl: "https://jeeadv.ac.in",
    sourceReference: "NIRF 2024 Engineering & IITH Placement Report 2024",
    lastVerified: "2024-10-18",
    ratingOverall: 4.7,
    reviewCount: 190,
    isFeatured: true,
    courses: [
      {
        courseName: "B.Tech in Artificial Intelligence",
        degreeLevel: "UG",
        stream: "Engineering",
        specialization: "Artificial Intelligence",
        duration: "4 Years",
        totalTuitionFee: "₹8.00 Lakhs",
        annualFee: "₹2.00 Lakhs",
        seats: 35,
        examAccepted: "JEE Advanced",
        eligibility: "10+2 with 75% in PCM + JEE Advanced Top 700 rank"
      }
    ],
    cutoffs: [
      { courseName: "B.Tech AI", examName: "JEE Advanced 2024", round: "Round 6", category: "General", quota: "All India", openingRank: 420, closingRank: 690 }
    ],
    placements: [
      { year: 2024, highestPackage: 90.0, averagePackage: 20.5, medianPackage: 17.5, placementRate: "89%", totalOffers: 550, topRecruiters: "Rakuten, Microsoft, Intel" }
    ],
    rankings: [
      { agency: "NIRF", rank: 8, category: "Engineering", year: 2024 }
    ],
    faqs: [
      { question: "What is Fractal Academics at IITH?", answer: "Fractal Academics atomizes courses into 1 to 2 credit modules, giving students flexibility to tailor their learning breadth." }
    ]
  },

  {
    slug: "nit-rourkela",
    name: "National Institute of Technology Rourkela",
    shortName: "NIT Rourkela",
    collegeType: "NIT",
    ownership: "Public / Government",
    established: 1961,
    city: "Rourkela",
    state: "Odisha",
    pincode: "769008",
    address: "Sector 1, Rourkela, Odisha",
    campusSize: "647 Acres",
    logoUrl: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=160&q=80",
    bannerUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80",
    accreditation: "Institute of National Importance, AICTE",
    naacGrade: "A++",
    nirfRank: 16,
    nirfCategory: "Engineering",
    nirfYear: 2024,
    overview: "NIT Rourkela is one of India's largest NIT campuses, ranked 16th in engineering by NIRF 2024. Celebrated for core engineering disciplines, biomedical engineering, and industrial robotics.",
    admissionProcess: "Undergraduate admissions through JEE Main rank and JoSAA/CSAB.",
    eligibilitySummary: "Class 12 with 75% in PCM and JEE Main score.",
    highestPackage: 52.98,
    averagePackage: 14.2,
    medianPackage: 11.5,
    placementYear: 2024,
    topRecruiters: "Amazon, Microsoft, Tata Steel, Hindalco, Qualcomm, Shell, Texas Instruments",
    facilities: "Biju Patnaik Central Library, Student Activity Centre, 16 Hostels, Swimming Pool",
    officialWebsite: "https://www.nitrkl.ac.in",
    admissionUrl: "https://josaa.nic.in",
    sourceReference: "NIRF 2024 Engineering & JoSAA 2024",
    lastVerified: "2024-10-18",
    ratingOverall: 4.6,
    reviewCount: 260,
    isFeatured: true,
    courses: [
      {
        courseName: "B.Tech in Computer Science and Engineering",
        degreeLevel: "UG",
        stream: "Engineering",
        specialization: "Computer Science",
        duration: "4 Years",
        totalTuitionFee: "₹5.50 Lakhs",
        annualFee: "₹1.38 Lakhs",
        seats: 118,
        examAccepted: "JEE Main",
        eligibility: "10+2 with 75% in PCM + JEE Main rank"
      }
    ],
    cutoffs: [
      { courseName: "B.Tech CSE (Other State)", examName: "JEE Main 2024", round: "Round 6", category: "General", quota: "Other State", openingRank: 2400, closingRank: 4200 }
    ],
    placements: [
      { year: 2024, highestPackage: 52.98, averagePackage: 14.2, medianPackage: 11.5, placementRate: "90%", totalOffers: 1320, topRecruiters: "Amazon, Microsoft, Tata Steel" }
    ],
    rankings: [
      { agency: "NIRF", rank: 16, category: "Engineering", year: 2024 }
    ],
    faqs: [
      { question: "What is the placement percentage at NIT Rourkela?", answer: "Over 90% of registered students were placed in the 2024 recruitment season." }
    ]
  },

  {
    slug: "nit-warangal",
    name: "National Institute of Technology Warangal",
    shortName: "NIT Warangal",
    collegeType: "NIT",
    ownership: "Public / Government",
    established: 1959,
    city: "Warangal",
    state: "Telangana",
    pincode: "506004",
    address: "National Highway 163, Hanamkonda, Warangal, Telangana",
    campusSize: "256 Acres",
    logoUrl: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=160&q=80",
    bannerUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80",
    accreditation: "Institute of National Importance, AICTE",
    naacGrade: "A++",
    nirfRank: 21,
    nirfCategory: "Engineering",
    nirfYear: 2024,
    overview: "Established by Prime Minister Jawaharlal Nehru in 1959 as the first Regional Engineering College in India, NIT Warangal is renowned for its academic excellence, electronics, and software placements.",
    admissionProcess: "B.Tech admissions are based on JEE Main All India Rank through JoSAA.",
    eligibilitySummary: "Class 12 with 75% in PCM and JEE Main scorecard.",
    highestPackage: 88.0,
    averagePackage: 17.3,
    medianPackage: 14.0,
    placementYear: 2024,
    topRecruiters: "Uber, Amazon, Microsoft, Qualcomm, Oracle, Caterpillar, Texas Instruments",
    facilities: "Mega Hostel (1.8K accommodation), Central Computing Center, Sports Pavilion",
    officialWebsite: "https://www.nitw.ac.in",
    admissionUrl: "https://josaa.nic.in",
    sourceReference: "NIRF 2024 Engineering & JoSAA 2024",
    lastVerified: "2024-10-18",
    ratingOverall: 4.6,
    reviewCount: 295,
    isFeatured: true,
    courses: [
      {
        courseName: "B.Tech in Computer Science and Engineering",
        degreeLevel: "UG",
        stream: "Engineering",
        specialization: "Computer Science",
        duration: "4 Years",
        totalTuitionFee: "₹5.50 Lakhs",
        annualFee: "₹1.38 Lakhs",
        seats: 135,
        examAccepted: "JEE Main",
        eligibility: "10+2 with 75% in PCM + JEE Main Top 2,800 rank"
      }
    ],
    cutoffs: [
      { courseName: "B.Tech CSE (Other State)", examName: "JEE Main 2024", round: "Round 6", category: "General", quota: "Other State", openingRank: 1200, closingRank: 2790 }
    ],
    placements: [
      { year: 2024, highestPackage: 88.0, averagePackage: 17.3, medianPackage: 14.0, placementRate: "92%", totalOffers: 1100, topRecruiters: "Uber, Microsoft, Amazon" }
    ],
    rankings: [
      { agency: "NIRF", rank: 21, category: "Engineering", year: 2024 }
    ],
    faqs: [
      { question: "What is the historical significance of NIT Warangal?", answer: "It was the very first Regional Engineering College (REC) set up in India in 1959." }
    ]
  },

  {
    slug: "iiit-bangalore",
    name: "International Institute of Information Technology Bangalore",
    shortName: "IIIT Bangalore",
    collegeType: "IIIT",
    ownership: "Public-Private Partnership (PPP)",
    established: 1999,
    city: "Bengaluru",
    state: "Karnataka",
    pincode: "560100",
    address: "26/C, Electronic City, Hosur Road, Bengaluru, Karnataka",
    campusSize: "9 Acres (Electronic City)",
    logoUrl: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=160&q=80",
    bannerUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80",
    accreditation: "NAAC A+, UGC, AICTE",
    naacGrade: "A+",
    nirfRank: 74,
    nirfCategory: "Engineering",
    nirfYear: 2024,
    overview: "Located right in the heart of Electronic City Bangalore, IIIT Bangalore is a research-focused institute known for Integrated M.Tech (iMTech) and M.Tech in CSE and ECE with stellar compensation packages.",
    admissionProcess: "Admission to 5-year Integrated M.Tech is based on JEE Main All India Rank.",
    eligibilitySummary: "Class 12 with 65% in PCM and JEE Main top rank.",
    highestPackage: 65.0,
    averagePackage: 26.5,
    medianPackage: 24.0,
    placementYear: 2024,
    topRecruiters: "Apple, Google, Microsoft, Qualcomm, Nvidia, Adobe, Morgan Stanley",
    facilities: "Innovation Centre, High Speed Computing Lab, Air-conditioned Hostels",
    officialWebsite: "https://www.iiitb.ac.in",
    admissionUrl: "https://www.iiitb.ac.in/admissions",
    sourceReference: "IIITB Placement Statistics 2024",
    lastVerified: "2024-10-18",
    ratingOverall: 4.8,
    reviewCount: 160,
    isFeatured: true,
    courses: [
      {
        courseName: "Integrated M.Tech in Computer Science and Engineering",
        degreeLevel: "Dual Degree",
        stream: "Engineering",
        specialization: "Computer Science",
        duration: "5 Years",
        totalTuitionFee: "₹22.50 Lakhs",
        annualFee: "₹4.50 Lakhs",
        seats: 120,
        examAccepted: "JEE Main",
        eligibility: "10+2 with 65% in PCM + JEE Main Top 9,000 rank"
      }
    ],
    cutoffs: [
      { courseName: "iMTech CSE", examName: "JEE Main 2024", round: "Round 4", category: "General", quota: "All India", openingRank: 4200, closingRank: 8900 }
    ],
    placements: [
      { year: 2024, highestPackage: 65.0, averagePackage: 26.5, medianPackage: 24.0, placementRate: "98%", totalOffers: 310, topRecruiters: "Apple, Google, Nvidia" }
    ],
    rankings: [
      { agency: "India Today", rank: 10, category: "Top Tech Schools", year: 2024 }
    ],
    faqs: [
      { question: "Does IIIT-B offer 4-year B.Tech?", answer: "No, its flagship undergraduate program is a 5-year Dual Degree Integrated M.Tech (iMTech)." }
    ]
  },

  {
    slug: "nlu-delhi",
    name: "National Law University Delhi",
    shortName: "NLU Delhi",
    collegeType: "National Law University",
    ownership: "Public / State Statutory",
    established: 2008,
    city: "New Delhi",
    state: "Delhi",
    pincode: "110078",
    address: "Sector 14, Dwarka, New Delhi, Delhi",
    campusSize: "12.5 Acres",
    logoUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=160&q=80",
    bannerUrl: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?auto=format&fit=crop&w=1200&q=80",
    accreditation: "Bar Council of India, NAAC A (CGPA 3.59)",
    naacGrade: "A",
    nirfRank: 2,
    nirfCategory: "Law",
    nirfYear: 2024,
    overview: "Ranked No. 2 in India for Law by NIRF 2024, NLU Delhi conducts its own independent entrance exam (AILET) and is renowned for criminal justice research (Project 39A) and Supreme Court advocacy.",
    admissionProcess: "Admissions to BA LLB (Hons.) and LLM are conducted exclusively through the All India Law Entrance Test (AILET).",
    eligibilitySummary: "Class 12 with 45% marks + qualifying score in AILET.",
    highestPackage: 21.5,
    averagePackage: 16.0,
    medianPackage: 15.0,
    placementYear: 2024,
    topRecruiters: "Shardul Amarchand Mangaldas, Trilegal, Cyril Amarchand, AZB & Partners, S&R Associates",
    facilities: "Justice T.P.S. Chawla Library, Moot Court Halls, Residential Halls, Auditorium",
    officialWebsite: "https://nludelhi.ac.in",
    admissionUrl: "https://nationallawuniversitydelhi.in",
    sourceReference: "NIRF 2024 Law & NLU Delhi AILET 2024",
    lastVerified: "2024-10-18",
    ratingOverall: 4.8,
    reviewCount: 140,
    isFeatured: true,
    courses: [
      {
        courseName: "B.A. LL.B. (Hons.)",
        degreeLevel: "UG",
        stream: "Law",
        specialization: "Constitutional & Criminal Law",
        duration: "5 Years",
        totalTuitionFee: "₹13.00 Lakhs",
        annualFee: "₹2.60 Lakhs",
        seats: 123,
        examAccepted: "AILET",
        eligibility: "10+2 with 45% + AILET Top 80 rank"
      }
    ],
    cutoffs: [
      { courseName: "B.A. LL.B. (Hons.)", examName: "AILET 2024", round: "Round 1", category: "General", quota: "All India", openingRank: 1, closingRank: 78 }
    ],
    placements: [
      { year: 2024, highestPackage: 21.5, averagePackage: 16.0, medianPackage: 15.0, placementRate: "96%", totalOffers: 85, topRecruiters: "SAM, CAM, Trilegal" }
    ],
    rankings: [
      { agency: "NIRF", rank: 2, category: "Law", year: 2024 }
    ],
    faqs: [
      { question: "Does NLU Delhi accept CLAT?", answer: "No, NLU Delhi does NOT participate in CLAT; it conducts its own entrance exam named AILET." }
    ]
  },

  {
    slug: "manipal-university",
    name: "Manipal Academy of Higher Education",
    shortName: "MAHE Manipal",
    collegeType: "Deemed University",
    ownership: "Private",
    established: 1953,
    city: "Manipal",
    state: "Karnataka",
    pincode: "576104",
    address: "Tiger Circle Road, Madhav Nagar, Manipal, Karnataka",
    campusSize: "313 Acres",
    logoUrl: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=160&q=80",
    bannerUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80",
    accreditation: "Institution of Eminence, NAAC A++ (CGPA 3.65)",
    naacGrade: "A++",
    nirfRank: 4,
    nirfCategory: "University",
    nirfYear: 2024,
    overview: "MAHE Manipal is one of India's pre-eminent private universities and an Institution of Eminence. Spanning engineering (MIT), medicine (KMC), and allied health, it hosts students from over 60 countries in a vibrant student town.",
    admissionProcess: "Engineering admissions are via MET (Manipal Entrance Test); Medical admissions are via NEET UG through MCC deemed university counselling.",
    eligibilitySummary: "Class 12 with 50% in PCM for B.Tech + MET qualification.",
    highestPackage: 54.75,
    averagePackage: 12.59,
    medianPackage: 9.0,
    placementYear: 2024,
    topRecruiters: "Microsoft, Amazon, Cisco, Qualcomm, Schneider Electric, Bosch, Dell, Philips",
    facilities: "Marena Mega Sports Complex, Central Library, Manipal Hospital, Innovation Centre",
    officialWebsite: "https://manipal.edu",
    admissionUrl: "https://manipal.edu/met",
    sourceReference: "NIRF 2024 University & MAHE Placements 2024",
    lastVerified: "2024-10-18",
    ratingOverall: 4.7,
    reviewCount: 480,
    isFeatured: true,
    courses: [
      {
        courseName: "B.Tech in Computer Science and Engineering (MIT Manipal)",
        degreeLevel: "UG",
        stream: "Engineering",
        specialization: "Computer Science",
        duration: "4 Years",
        totalTuitionFee: "₹18.50 Lakhs",
        annualFee: "₹4.62 Lakhs",
        seats: 240,
        examAccepted: "MET",
        eligibility: "10+2 with 50% in PCM + MET score"
      },
      {
        courseName: "MBBS (Kasturba Medical College Manipal)",
        degreeLevel: "UG",
        stream: "Medical",
        specialization: "Medicine & Surgery",
        duration: "5.5 Years",
        totalTuitionFee: "₹70.00 Lakhs",
        annualFee: "₹14.00 Lakhs",
        seats: 250,
        examAccepted: "NEET UG",
        eligibility: "10+2 with 50% in PCB + NEET UG score"
      }
    ],
    cutoffs: [
      { courseName: "B.Tech CSE", examName: "MET 2024", round: "Round 2", category: "General", quota: "All India", openingRank: 1, closingRank: 1650 }
    ],
    placements: [
      { year: 2024, highestPackage: 54.75, averagePackage: 12.59, medianPackage: 9.0, placementRate: "91%", totalOffers: 1950, topRecruiters: "Microsoft, Amazon, Cisco" }
    ],
    rankings: [
      { agency: "NIRF", rank: 4, category: "University", year: 2024 },
      { agency: "QS World", rank: 741, category: "Global", year: 2025 }
    ],
    faqs: [
      { question: "What is MAHE's campus life like?", answer: "Manipal is essentially a dedicated university town where students, professors, and health workers form the entire community." }
    ]
  },

  {
    slug: "ashoka-university",
    name: "Ashoka University Sonipat",
    shortName: "Ashoka University",
    collegeType: "Private University",
    ownership: "Private / Philanthropic",
    established: 2014,
    city: "Sonipat",
    state: "Haryana",
    pincode: "131029",
    address: "Plot No. 2, Rajiv Gandhi Education City, Rai, Sonipat, Haryana",
    campusSize: "25 Acres",
    logoUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=160&q=80",
    bannerUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    accreditation: "UGC Recognized",
    naacGrade: "A+",
    nirfRank: 88,
    nirfCategory: "University",
    nirfYear: 2024,
    overview: "Ashoka University is India's leading philanthropic liberal arts and sciences university, founded by business leaders and academicians to provide multidisciplinary Ivy-League-style education in India.",
    admissionProcess: "Holistic evaluation including personal essays, academic scores, Ashoka Aptitude Assessment (AAA), and an interview.",
    eligibilitySummary: "Class 12 in any stream + holistic application assessment.",
    highestPackage: 37.0,
    averagePackage: 11.4,
    medianPackage: 10.0,
    placementYear: 2024,
    topRecruiters: "McKinsey, Bain & Co, Boston Consulting Group, Dalberg, Google, Microsoft, Hindustan Unilever",
    facilities: "Trivedi School of Biosciences, Performing Arts Theatres, Ashoka Archive, Modern Dorms",
    officialWebsite: "https://www.ashoka.edu.in",
    admissionUrl: "https://apply.ashoka.edu.in",
    sourceReference: "Ashoka University Placement Office 2024",
    lastVerified: "2024-10-18",
    ratingOverall: 4.8,
    reviewCount: 125,
    isFeatured: true,
    courses: [
      {
        courseName: "B.A. (Hons.) / B.Sc. (Hons.) Multidisciplinary",
        degreeLevel: "UG",
        stream: "Arts",
        specialization: "Economics, Computer Science, Psychology",
        duration: "3-4 Years",
        totalTuitionFee: "₹28.50 Lakhs",
        annualFee: "₹7.12 Lakhs",
        seats: 750,
        examAccepted: "Ashoka Assessment / SAT",
        eligibility: "10+2 in any stream + Holistic Review & Interview"
      }
    ],
    cutoffs: [
      { courseName: "UG Admission", examName: "Ashoka Assessment 2024", round: "Round 2", category: "General", quota: "All India", openingRank: 1, closingRank: 100 }
    ],
    placements: [
      { year: 2024, highestPackage: 37.0, averagePackage: 11.4, medianPackage: 10.0, placementRate: "93%", totalOffers: 380, topRecruiters: "McKinsey, BCG, Bain, Dalberg" }
    ],
    rankings: [
      { agency: "India Today", rank: 1, category: "Private Liberal Arts", year: 2024 }
    ],
    faqs: [
      { question: "Does Ashoka offer financial aid?", answer: "Yes, over 45% of students receive need-based scholarships, with generous waivers up to 100% of tuition and residence." }
    ]
  }
];

module.exports = { collegesDataPart3 };

