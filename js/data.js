/* EverHealthy Nutrition Academy — content database (window.EH) */
(function () {
  const U = (id, w) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w || 900}&q=72`;

  const img = {
    heroFood: U("1512621776951-a57141f2eefd", 1100),
    heroLab: U("1532187863486-abf9dbad1b69", 700),
    heroBp: U("1631815588090-d4bfec5b1ccb", 700),
    heroHeart: U("1530026405186-ed1f139313f8", 900),
    labCorridor: U("1579154204601-01588f351e67", 1100),
    laptopSteth: U("1576091160550-2173dba999ef", 1000),
    doctorPhone: U("1576091160399-112ba8d25d1d", 900),
    lecture: U("1524178232363-1fb2b075b655", 1100),
    students: U("1522202176988-66273c2fd55f", 1000),
    teamWork: U("1531482615713-2afd69097998", 1000),
    workshop: U("1552664730-d307ca884978", 1000),
    consult: U("1551836022-d5d88e9218df", 1100),
    meditation: U("1506126613408-eca07ce68773", 1000),
    plates: U("1490645935967-10de6ba17061", 1000),
    vegTrays: U("1498837167922-ddd27525d352", 900),
    board: U("1466637574441-749b8f19452f", 900),
    berries: U("1494390248081-4e521a5940db", 900),
    stethBw: U("1505751172876-fa1923c5c528", 900),
  };

  const progImg = {
    foundations: U("1490645935967-10de6ba17061", 900),
    "blood-chemistry": U("1532187863486-abf9dbad1b69", 900),
    afncp: U("1631815588090-d4bfec5b1ccb", 900),
    cafnp: U("1576091160399-112ba8d25d1d", 900),
    "gut-health": U("1505576399279-565b52d4ac71", 900),
    metabolic: U("1571019613454-1cb2f99b2d8b", 900),
    thyroid: U("1573140247632-f8fd74997d5c", 900),
    "cardio-metabolic": U("1530026405186-ed1f139313f8", 900),
    menopause: U("1573497019940-1c28c88b4f3e", 900),
    reproductive: U("1555252333-9f8e92e65df9", 900),
    inflammation: U("1584036561566-baf8f5f1b144", 900),
    pcos: U("1438761681033-6461ffad8d80", 900),
    dental: U("1606811841689-23dfddce3e95", 900),
    "skin-hair": U("1570172619644-dfd03ed5d881", 900),
    maternity: U("1531983412531-1f49a365ffed", 900),
    pediatric: U("1503454537195-1dcabb73ffb9", 900),
    sports: U("1461896836934-ffe607ba8211", 900),
    "gut-transformation": U("1543362906-acfc16c67564", 900),
    "obesity-glp1": U("1476480862126-209bfaa8edc8", 900),
    "beyond-ozempic": U("1584308666744-24d5c474f2ae", 900),
    signalome: U("1576086213369-97a306d36557", 900),
    longevica: U("1544367567-0f2fcb009e0b", 900),
    humanos: U("1559757175-5700dde675bc", 900),
  };

  const condImg = {
    diabetes: U("1607532941433-304659e8198a", 900),
    thyroid: U("1573140247632-f8fd74997d5c", 900),
    ibs: U("1505576399279-565b52d4ac71", 900),
    obesity: U("1571019613454-1cb2f99b2d8b", 900),
    inflammation: U("1587854692152-cbe660dbde88", 900),
    gynaec: U("1544005313-94ddf0286df2", 900),
  };

  const EXAMS = ["Knowledge MCQ exam", "Case-study exam", "Clinical protocol design (capstone)"];

  /* ---------------- CERTIFICATIONS (6) ---------------- */
  const certs = [
    {
      id: "foundations", type: "cert", seq: 1, level: "Foundation",
      name: "Functional Nutrition Foundations",
      short: "Nutrition science, anatomy & physiology, blood report basics and life-stage nutrition — the starting point for every practitioner.",
      award: "Foundational Functional Health Practitioner",
      duration: "6-month diploma", access: "1-year access", price: 50000, emi: "6 × ₹8,500",
      startHere: true,
      overview: [
        "A 6-month diploma that builds the complete scientific base of a functional nutrition practitioner: how the body is built, how it runs, how nutrients move through it, and how to read the first signals of dysfunction.",
        "You leave able to connect nutrition science with clinical biomarkers and physiology across every life stage — ready for applied clinical training."
      ],
      curriculum: [
        { t: "Basics of Nutrition", meta: "12 modules", points: [
          "Human nutrition & wellness — goals, growth across life stages, biomarkers of wellness",
          "Nutrition science — carbohydrates, proteins, fats, vitamins, minerals, antioxidants & trace minerals",
          "Food groups, cooking methods & preserving nutrients; food pairing for health",
          "Body composition — calories, energy balance, assessment methods",
          "Digestion & absorption · metabolic processes of each macronutrient",
          "Clinical aspects — nutrition assessment, malnutrition, dietary guidelines",
          "Nutrition & lifestyle — behavioural aspects of eating",
          "Diets, labels & kitchen measurements",
          "Hospital diets & feeding strategies",
          "Mental health & nutrition · hierarchy of living organisms · nutrition specialties"
        ]},
        { t: "Anatomy & Physiology", meta: "12 chapters", points: [
          "Cells & tissues — structure, function, replication",
          "Integumentary system — skin, hair, nails",
          "Skeletal system & joints · muscular system",
          "Nervous system — CNS, PNS, neurotransmitters, the brain",
          "Endocrine system — hypothalamus, thyroid, adrenals, pancreas & hormone action",
          "Circulatory & lymphatic systems — heart, blood, immunity",
          "Respiratory & digestive systems — organ by organ",
          "Urinary & reproductive systems — kidney function, hormones in pregnancy, fetal development"
        ]},
        { t: "Blood Reports — Foundation", meta: "core panels", points: [
          "CBC and what each line means",
          "Blood glucose tests and their evaluation",
          "Renal, liver & thyroid function tests",
          "Electrolytes, protein profile, iron studies",
          "Reading a report as a pattern, not a checklist"
        ]},
        { t: "Life-Stage Functional Nutrition", meta: "3 tracks", points: [
          "Functional pediatric nutrition — infant feeding to chronic illness",
          "Holistic maternal health — preconception to postpartum",
          "Functional sports nutrition — energy systems to recovery"
        ]},
      ],
      outcomes: [
        "Understand human physiology from a functional nutrition perspective",
        "Read core blood panels and their nutritional implications",
        "Identify early metabolic dysfunction and micronutrient deficiencies",
        "Apply nutrition strategies across life stages",
        "Qualify for applied and advanced clinical programs",
        "Earn the Foundational Functional Health Practitioner credential"
      ],
    },
    {
      id: "blood-chemistry", type: "cert", seq: 2, level: "Foundation",
      name: "Blood Chemistry Analysis",
      short: "Functional interpretation of 300+ biomarkers — beyond lab cut-offs, into root cause.",
      award: "Functional Blood Chemistry Practitioner",
      duration: "3 months", access: "1-year access", price: 25000, emi: "2 × ₹12,750",
      overview: [
        "Conventional lab ranges flag disease. Functional ranges catch dysfunction years earlier. This certification teaches you to read every major panel the functional way — 26 modules across 300+ biomarkers.",
        "Pairs naturally with Foundations; it is the single most practice-changing skill our alumni report."
      ],
      curriculum: [
        { t: "Core Chemistry", meta: "modules 1–8", points: [
          "Introduction to blood chemistry & CBC analysis",
          "Blood glucose — every test type and its evaluation",
          "Renal function — BUN, creatinine, BUN:creatinine ratio, uric acid",
          "Electrolytes & acid–base balance — sodium, potassium, chloride, CO₂, anion gap",
          "Protein profile — total protein, albumin, globulin, A:G ratio",
          "Minerals & bone metabolism — calcium, phosphorus, ALP isoenzymes",
          "Liver function — SGOT, SGPT, GGTP, LDH, bilirubin fractions",
          "Iron & transferrin — ferritin, TIBC, transferrin saturation"
        ]},
        { t: "Thyroid & Autoimmunity", meta: "module 9", points: [
          "TSH, T3, T4, T3 uptake, reverse T3, FT3:FT4 ratio",
          "Autoimmune thyroid testing — TPO, TgAb, TRAb antibodies"
        ]},
        { t: "Inflammation, CBC & Immunity", meta: "modules 10–13", points: [
          "ESR, CRP, fibrinogen, homocysteine",
          "Full CBC analysis — RBC indices, MCV, RDW, reticulocytes",
          "Differential WBC — neutrophils, lymphocytes, monocytes, eosinophils, basophils",
          "Immune markers — lymphocyte subsets, immunoglobulins, complement"
        ]},
        { t: "Hormones & Nutrients", meta: "modules 14–17", points: [
          "Female health — reproductive hormones, total & free testosterone",
          "Nutrient markers — omega ratios, MMA, vitamin D, magnesium, zinc",
          "hs-CRP, autoimmunity factors",
          "Cortisol, lipoprotein fractionation, cholesterol:HDL, biological age"
        ]},
        { t: "Specialty Panels", meta: "modules 18–26", points: [
          "Lipoprotein studies · plasma renin · haemoglobin variants",
          "Pregnancy testing — qualitative & quantitative HCG",
          "Blood gas components · mold detection · diet & triglycerides",
          "Semen analysis · SIFO tests · stool microbiome analysis · karyotyping",
          "Digestive & functional testing overview"
        ]},
      ],
      outcomes: [
        "Interpret 300+ biomarkers in functional ranges",
        "Spot dysfunction patterns before diagnostic cut-offs",
        "Connect markers across panels into one clinical story",
        "Order and sequence the right follow-up tests",
        "Build biomarker-driven nutrition protocols",
        "Earn the Functional Blood Chemistry Practitioner credential"
      ],
    },
    {
      id: "afncp", type: "cert", seq: 3, level: "Applied",
      name: "Applied Functional Nutrition in Clinical Practice",
      abbr: "AFNCP",
      short: "The 40-module clinical core — systems biology, therapeutic diets and protocol design across every organ system.",
      award: "Applied Functional Nutrition Practitioner (AFNCP)",
      duration: "6 months", access: "1-year access", price: 75000, emi: "6 × ₹12,750",
      overview: [
        "The clinical heart of the academy. Forty modules take you system by system — gut, hormones, immunity, brain, detoxification — and teach you to design therapeutic diets and supplement strategies for real cases.",
        "Requires Foundations (or an equivalent science background). Every module ties back to blood chemistry and the root-cause framework."
      ],
      curriculum: [
        { t: "Foundations & the Nervous System", meta: "modules 1–3", points: [
          "Principles of functional & personalised nutrition",
          "Mental health, brain–gut connection, neurotransmitters",
          "Fatty acids — omega-3/6, inflammation and brain health"
        ]},
        { t: "Metabolic Regulation", meta: "modules 4–8", points: [
          "Musculoskeletal structure — bone & muscle nutrition",
          "Blood sugar regulation — insulin, glycemic strategies",
          "Cardiovascular system & the cardiometabolic diet",
          "Toxic exposure & load — detoxification strategies",
          "Drug–nutrient interactions and depletions"
        ]},
        { t: "Inflammation & Complex Disease", meta: "modules 9–11", points: [
          "Chronic inflammation pathways & anti-inflammatory diets",
          "Oncology, respiratory, autoimmune & neurological conditions",
          "Nutrigenomics — genes, variants and diet personalisation"
        ]},
        { t: "Gut, Microbiome & Immunity", meta: "modules 12–16", points: [
          "Gastrointestinal system & methylation",
          "Immune system nutrition · elimination diets done right",
          "Gut–immune axis — GERD, IBS and IBD strategies",
          "Microbiome & brain health — probiotics and prebiotics"
        ]},
        { t: "Hormones & Life Stages", meta: "modules 17–20", points: [
          "Adrenals, sex hormones & hormonal balance",
          "Integrative oncology & nutrition",
          "Pediatric neurology — ADHD, autism, brain development",
          "Functional approach to fertility & pregnancy"
        ]},
        { t: "Detox & Mind–Body", meta: "modules 21–24", points: [
          "Endogenous & exogenous toxins; transformation pathways",
          "Mind–body techniques and stress physiology",
          "Chronic disease, exercise & nutrition",
          "Cellular aging — women's and men's health strategies"
        ]},
        { t: "Clinical Specialties", meta: "modules 25–31", points: [
          "Autoimmune conditions — diet and functional management",
          "Men's health, metabolism & hormones",
          "Nutrition-focused physical exam",
          "Ayurvedic approaches in chronic disease",
          "ALS nutritional support · skin conditions",
          "Nutrition assessment & drug–nutrient interaction workups"
        ]},
        { t: "Practice & Coaching", meta: "modules 32–40", points: [
          "Lifestyle factors, energy & toxic load",
          "Stress & sleep nutrition",
          "Biochemical individuality & epigenetics",
          "Enterohepatic circulation · methylation influences",
          "Core nutrients & supplements",
          "Health coaching · the power of listening to the patient's voice"
        ]},
      ],
      outcomes: [
        "Work up any chronic case system by system",
        "Design therapeutic diets with clear clinical rationale",
        "Build safe, staged supplement strategies",
        "Manage gut, hormone, immune and metabolic cases",
        "Use elimination and reintroduction protocols correctly",
        "Earn the AFNCP practitioner credential"
      ],
    },
    {
      id: "cafnp", type: "cert", seq: 4, level: "Advanced",
      name: "Advanced Functional Nutrition in Clinical Practice",
      abbr: "CAFNP",
      short: "The 1-year advanced track — the full AFNCP curriculum plus live case clinics, 40+ case studies and a supervised capstone.",
      award: "Certified Advanced Functional Nutrition Practitioner (CAFNP)",
      duration: "1-year course", access: "1-year access", price: 95000, emi: "10 × ₹9,690",
      flagship: true,
      overview: [
        "Our most complete practitioner track. CAFNP wraps the entire 40-module applied curriculum inside a year of supervised clinical practice: live case clinics, blood-chemistry integration and longitudinal patient management.",
        "Graduates finish with a portfolio of worked cases and a supervised capstone protocol — ready to run a functional practice."
      ],
      curriculum: [
        { t: "Applied Curriculum — Complete", meta: "40 modules", points: [
          "Every AFNCP module, taught over the year at clinical depth",
          "Systems biology across gut, hormones, immunity, brain and metabolism"
        ]},
        { t: "Blood Chemistry Integration", meta: "clinical track", points: [
          "Functional interpretation applied to live cases",
          "Sequencing labs across a care journey",
          "Marker-driven protocol adjustment"
        ]},
        { t: "Live Case Clinics", meta: "40+ case studies", points: [
          "Weekly mentor-led case dissections",
          "Chief-complaint to protocol, using the 11-step framework",
          "Case presentations by students with faculty review"
        ]},
        { t: "Practice Systems", meta: "clinic-ready", points: [
          "Patient intake, timelines and systems review",
          "Follow-up cadence and marker monitoring",
          "Therapeutic diet & supplement protocol libraries",
          "Scope, safety and referral boundaries"
        ]},
        { t: "Capstone", meta: "supervised", points: [
          "End-to-end protocol for a real anonymised case",
          "Defended before faculty; graded on reasoning and safety"
        ]},
      ],
      outcomes: [
        "Run complete root-cause workups independently",
        "Manage patients longitudinally with marker monitoring",
        "Present and defend clinical reasoning",
        "Operate intake-to-follow-up practice systems",
        "Graduate with a worked case portfolio",
        "Earn the CAFNP advanced credential"
      ],
    },
    {
      id: "gut-health", type: "cert", seq: 5, level: "Professional",
      name: "Gut Health Practitioner Certification",
      short: "Microbiome, dysbiosis, IBS / IBD, leaky gut, SIBO — complete clinical gut protocols.",
      award: "Gut Health Practitioner",
      duration: "5 months", access: "1-year access", price: 65000, emi: "6 × ₹11,050",
      overview: [
        "The gut sits upstream of nearly every chronic complaint we teach. This certification goes organ-deep: microbiome science, functional testing, and staged repair protocols for the conditions practitioners see most.",
        "Case-led throughout — every disorder is taught through worked patient examples."
      ],
      curriculum: [
        { t: "Microbiome Foundations", meta: "block 1", points: ["Microbial ecology of the gut", "Barrier function & intestinal permeability", "Gut–brain and gut–immune axes"] },
        { t: "Dysfunction Patterns", meta: "block 2", points: ["Dysbiosis patterns and drivers", "IBS & IBD — functional differentiation", "SIBO / SIFO — testing and re-testing", "GERD and upper-GI dysfunction"] },
        { t: "Functional Testing", meta: "block 3", points: ["Stool microbiome analysis", "Breath testing", "Blood markers of gut dysfunction"] },
        { t: "Repair Protocols", meta: "block 4", points: ["The 5R framework — remove, replace, reinoculate, repair, rebalance", "Therapeutic diets — low-FODMAP, elimination, reintroduction", "Probiotic, prebiotic & botanical strategies", "Relapse prevention and maintenance"] },
      ],
      outcomes: [
        "Differentiate and work up IBS, IBD, SIBO and dysbiosis",
        "Select and interpret functional gut tests",
        "Run staged 5R repair protocols",
        "Apply therapeutic diets without over-restriction",
        "Manage gut–brain and gut–immune presentations",
        "Earn the Gut Health Practitioner credential"
      ],
    },
    {
      id: "metabolic", type: "cert", seq: 6, level: "Advanced",
      name: "Metabolic Health & Hormone Certification",
      short: "Insulin resistance, thyroid, adrenals and sex hormones — root-cause diagnostics and protocols.",
      award: "Metabolic & Hormone Specialist",
      duration: "8 months", access: "1-year access", price: 95000, emi: "10 × ₹9,690",
      overview: [
        "Metabolic and hormonal dysfunction drive the modern chronic-disease epidemic. This advanced certification teaches the full endocrine web — insulin, thyroid, adrenal and sex hormones — and how to untangle it clinically.",
        "Built for practitioners who want to specialise in diabetes, PCOS, thyroid and weight-regulation cases."
      ],
      curriculum: [
        { t: "Insulin & Glucose Regulation", meta: "block 1", points: ["Insulin resistance — mechanisms and staging", "Glucose testing beyond HbA1c", "Reversal protocols — diet, movement, timing"] },
        { t: "Thyroid Axis", meta: "block 2", points: ["Full thyroid panel in functional ranges", "Autoimmune thyroid patterns", "Nutrient cofactors — iodine, selenium, iron"] },
        { t: "Adrenals & Stress Physiology", meta: "block 3", points: ["HPA axis dysfunction", "Cortisol testing and rhythm work", "Nervous-system-informed protocols"] },
        { t: "Sex Hormones & Weight", meta: "block 4", points: ["Estrogen, progesterone, testosterone — testing and patterns", "PCOS and menopause metabolic overlays", "Obesity as endocrine dysfunction", "Lipids & cardiovascular risk in hormone cases"] },
      ],
      outcomes: [
        "Stage and reverse insulin resistance",
        "Read full thyroid and adrenal panels functionally",
        "Work up complex hormone cases across axes",
        "Design metabolic reversal protocols",
        "Manage weight cases without crash restriction",
        "Earn the Metabolic & Hormone Specialist credential"
      ],
    },
  ];

  /* ---------------- MASTERY PROGRAMS (8) ---------------- */
  const masteryCommon = {
    duration: "6 weeks", access: "6-month replay access", price: 35000, emi: "3 × ₹11,900",
    format: [
      "Weekly live case clinics with faculty",
      "Recorded deep-dive lectures",
      "Condition-specific protocol library",
      "Blood-marker interpretation drills",
      "Final case exam + verifiable badge"
    ],
    eligible: "For graduates of Foundations / AFNCP or practitioners with equivalent training."
  };
  const masteries = [
    { id: "thyroid", seq: 1, name: "Thyroid Mastery Program",
      short: "Hashimoto's, Graves', subclinical patterns — the complete functional thyroid workup.",
      focus: ["Full thyroid panel — TSH, FT3, FT4, rT3, antibodies — in functional ranges", "Hashimoto's & Graves' — root-cause drivers and staging", "Subclinical hypothyroidism — catch it before the cut-off", "Nutrient cofactors — iodine, selenium, iron, zinc", "Thyroid–gut and thyroid–adrenal connections", "Therapeutic diet & supplement protocols, case by case"] },
    { id: "cardio-metabolic", seq: 2, name: "Cardio Metabolic Mastery Program",
      short: "Insulin, lipids, blood pressure and cardiovascular risk — reversal-first protocols.",
      focus: ["Insulin resistance staging and reversal", "Advanced lipid interpretation — fractionation, ratios, ApoB", "Blood pressure as a systems signal", "Inflammation & endothelial markers", "Cardiometabolic diet design", "Exercise and circadian levers for metabolic health"] },
    { id: "menopause", seq: 3, name: "Estro Metabolic Code — Menopause Mastery",
      short: "Perimenopause to postmenopause — estrogen metabolism, bones, brain and body composition.",
      focus: ["Estrogen metabolism pathways and testing", "Perimenopause symptom mapping", "Bone, brain and cardiovascular protection", "Body-composition shifts and metabolic protocols", "Sleep, mood and vasomotor symptom strategies", "Working alongside HRT decisions — scope and safety"] },
    { id: "reproductive", seq: 4, name: "Functional Reproductive Mastery",
      short: "Fertility, cycle health and reproductive endocrinology for both partners.",
      focus: ["Cycle mapping and hormone testing windows", "Preconception nutrition — 90-day gamete window", "Male-factor nutrition — semen analysis insights", "Egg & sperm quality protocols", "Thyroid, insulin and prolactin in fertility", "Supporting assisted-reproduction journeys nutritionally"] },
    { id: "inflammation", seq: 5, name: "Inflammation Mastery Program",
      short: "Chronic inflammation and autoimmunity — measure it, find the drivers, resolve it.",
      focus: ["Inflammation markers — hs-CRP, ESR, homocysteine, ferritin patterns", "The drivers — gut, toxins, infections, food, stress", "Autoimmune spectrum — from activation to diagnosis", "Anti-inflammatory & elimination diet frameworks", "Resolution biology — omega-3s, specialised mediators", "Case protocols for joint, skin and systemic inflammation"] },
    { id: "pcos", seq: 6, name: "Advanced PCOS & Hormone Health Mastery",
      short: "PCOS phenotypes, the insulin–androgen axis and cycle restoration protocols.",
      focus: ["PCOS phenotyping — beyond one-size-fits-all", "Insulin–androgen axis workups", "Cycle restoration — nutrition, movement, timing", "Hair, skin and mood presentations", "Fertility pathways in PCOS", "Long-term metabolic protection"] },
    { id: "dental", seq: 7, name: "Functional Dental Health Mastery",
      short: "The oral microbiome and oral–systemic medicine — teeth as a window to the body.",
      focus: ["Oral microbiome ecology", "Caries & periodontal disease — nutritional drivers", "Oral–systemic links — heart, diabetes, pregnancy", "Remineralisation nutrition — fat-soluble vitamins", "Airway, breathing and craniofacial development", "Working with dentists — the referral loop"] },
    { id: "skin-hair", seq: 8, name: "Functional Skin & Hair Health Mastery",
      short: "Acne, eczema, psoriasis and hair loss — root-cause dermatology from the inside out.",
      focus: ["Gut–skin axis — the pattern behind most skin cases", "Acne — hormones, insulin and the skin biome", "Eczema & psoriasis — barrier and immune protocols", "Hair loss workups — thyroid, iron, androgens, stress", "Nutrient dermatology — zinc, vitamin A, essential fats", "Topical-plus-internal protocol design"] },
  ].map(m => Object.assign({ type: "mastery" }, masteryCommon, m));

  /* ---------------- SPECIALISATIONS (9) ---------------- */
  const specs = [
    { id: "maternity", seq: 1, name: "Functional Maternity", price: 18000, duration: "10 modules",
      short: "Preconception to postpartum — hormones, complications and nutrition for two.",
      curriculum: [
        { t: "Preconception & Prenatal Foundations", meta: "modules 1–2", points: ["Key nutrients for fertility; preparing the body for pregnancy", "Essential vitamins & minerals; trimester-wise dietary recommendations", "Metabolic adaptations, energy needs and healthy weight gain"] },
        { t: "Hormones & Thyroid in Pregnancy", meta: "modules 3–4", points: ["Progesterone, estrogen, hCG — effects on mother and baby", "Thyroid function in pregnancy; iodine & selenium support", "Managing thyroid disorders through diet"] },
        { t: "Nausea, Anemia & Complications", meta: "modules 5–7", points: ["Pregnancy nausea — causes and nutrition strategies", "Iron & folate — anemia prevention", "Hypertension, electrolytes & gestational diabetes management", "Preeclampsia — risk factors and nutritional strategies"] },
        { t: "Epigenetics & Birth", meta: "modules 8–9", points: ["Placental development; oxidative stress & antioxidants", "Mitochondria, CoQ10 and preeclampsia risk", "Childbirth methods and nutrition for recovery"] },
        { t: "Postpartum & Infant Nutrition", meta: "module 10", points: ["Breastfeeding — nutrition for lactating mothers", "First foods, allergens and infant gut health", "Postpartum physical and mental recovery"] },
      ] },
    { id: "pediatric", seq: 2, name: "Functional Pediatric", price: 18000, duration: "12 modules",
      short: "From infant feeding to chronic childhood conditions — nutrition for growing bodies.",
      curriculum: [
        { t: "Foundations & Feeding", meta: "modules 1–4", points: ["Nutritional foundations for pediatric wellness", "Infant feeding — breast, bottle, weaning", "Early nutrition and long-term health programming", "Childhood nutrition through the growth years"] },
        { t: "Conditions & Disorders", meta: "modules 5–10", points: ["Gastrointestinal & eating disorders", "Macronutrient needs by age", "Chronic illnesses & metabolic disorders", "Gastrointestinal conditions in children"] },
        { t: "Special Situations", meta: "modules 11–12", points: ["Particular life stages and their demands", "Nutrition supply in malnutrition"] },
      ] },
    { id: "sports", seq: 3, name: "Functional Sports", price: 18000, duration: "12 modules",
      short: "Energy systems, macros, hydration and recovery — performance nutrition that holds up.",
      curriculum: [
        { t: "Energy & Macros", meta: "modules 1–3", points: ["Athletic energy systems — ATP, glycogen, fat; aerobic vs anaerobic", "Carb loading, protein timing, fats for endurance", "Micronutrients for performance — B-complex, C, D, calcium, magnesium, iron, zinc"] },
        { t: "Hydration & Ergogenics", meta: "modules 4–6", points: ["Fluid needs and electrolyte management", "Creatine, caffeine, beta-alanine — evidence-based use", "Beetroot, tart cherry, adaptogens; GI health for athletes"] },
        { t: "Timing & Context", meta: "modules 7–9", points: ["Pre / intra / post-workout fueling", "Travel and altitude nutrition", "Female, male and age-specific strategies"] },
        { t: "Body Composition & Recovery", meta: "modules 10–12", points: ["DEXA & bioimpedance; safe weight management", "Sleep as a performance tool", "Personalising plans — integrative approaches"] },
      ] },
    { id: "gut-transformation", seq: 4, name: "Gut Transformation Program", price: 25000, duration: "8 weeks", featured: true,
      short: "Our flagship short program — a complete, staged gut-repair system you can run with clients.",
      curriculum: [
        { t: "Assess", meta: "weeks 1–2", points: ["Gut symptom mapping and timelines", "Functional stool & breath testing", "Blood markers of gut dysfunction"] },
        { t: "Rebuild", meta: "weeks 3–6", points: ["The 5R protocol in practice", "Therapeutic diets — elimination to reintroduction", "Probiotics, prebiotics and botanicals"] },
        { t: "Sustain", meta: "weeks 7–8", points: ["Relapse prevention", "Maintenance nutrition and lifestyle", "When to refer — red flags"] },
      ] },
    { id: "obesity-glp1", seq: 5, name: "Functional Obesity & GLP-1 Program", price: 15000, duration: "6 weeks",
      short: "Weight regulation as endocrine biology — and how to support clients on GLP-1 therapy.",
      focus: ["Obesity as hormonal & inflammatory dysfunction", "GLP-1 physiology — what the drugs actually do", "Protecting muscle during weight loss", "Nutrition protocols alongside GLP-1 therapy", "Plateaus, rebound and maintenance", "Behaviour and nervous-system supports"] },
    { id: "beyond-ozempic", seq: 6, name: "Beyond Ozempic — Functional GLP-1 Course", price: 12000, duration: "4 weeks",
      short: "Raise GLP-1 naturally — food, microbiome and lifestyle levers for satiety biology.",
      focus: ["The incretin system explained", "Foods and fibres that raise endogenous GLP-1", "Microbiome–GLP-1 connections", "Meal sequencing and timing tactics", "Coming off GLP-1 drugs — transition nutrition", "Client protocols and tracking"] },
    { id: "signalome", seq: 7, name: "Signalome — Peptide Therapy & Cellular Signaling", price: 12000, duration: "2 weeks", isNew: true,
      short: "A 2-week micro-certification on peptides and the body's cellular signaling networks.",
      focus: ["Cell-signaling fundamentals", "Peptide classes and their physiology", "Evidence, safety and scope boundaries", "Where nutrition modulates signaling", "Case discussions with faculty"] },
    { id: "longevica", seq: 8, name: "Longevica — Functional Longevity & Healthy Aging", price: 12000, duration: "2 weeks", isNew: true,
      short: "A 2-week micro-certification on the biology of aging and nutrition for healthspan.",
      focus: ["Hallmarks of aging — a practical tour", "Biological-age markers and testing", "Muscle, bone and brain preservation", "Fasting, protein and longevity nutrition debates", "Building a healthy-aging protocol"] },
    { id: "humanos", seq: 9, name: "HumanOS — Biohacking & Human Optimization", price: 12000, duration: "2 weeks", isNew: true,
      short: "A 2-week micro-certification on measured, evidence-first human optimization.",
      focus: ["Sleep, light and circadian optimisation", "Wearables and what their data means", "Cold, heat and hormetic stressors", "Cognitive nutrition and focus protocols", "Separating evidence from hype"] },
  ].map(s => Object.assign({ type: "spec", access: "6-month access" }, s));

  /* ---------------- CONDITIONS (6) ---------------- */
  const framework = [
    { t: "Identify the chief complaints", d: "Write them in bold. Capture the patient's own words first.", q: "Symptoms are the clues — not the diagnosis." },
    { t: "Timeline analysis", d: "Map events back through the years.", q: "Disease usually starts years before diagnosis." },
    { t: "Systems review", d: "Evaluate gut, metabolism, hormones, thyroid, immunity and neurological function — as one web." },
    { t: "Blood chemistry analysis", d: "Read every panel in functional ranges; look for patterns across markers." },
    { t: "Find the root causes", d: "Trace each complaint upstream to its drivers." },
    { t: "Identify the functional killers", d: "Flag the habits and exposures actively feeding the dysfunction." },
    { t: "Prioritise", d: "Don't fix everything at once. Sequence interventions by leverage." },
    { t: "Design a therapeutic diet", d: "Food first — targeted to the root causes, not the label." },
    { t: "Supplement strategy", d: "Staged, dosed and justified — never a shopping list." },
    { t: "Assess the nervous system", d: "Stress physiology decides whether any protocol works." },
    { t: "Monitor markers & decide", d: "Re-test, review, and adjust. Let the data make the decisions." },
  ];

  const conditions = [
    {
      id: "diabetes", name: "Diabetes & Blood Sugar", tagline: "Type 2 diabetes and insulin resistance, worked up as reversible metabolic dysfunction.",
      intro: "By the time fasting glucose crosses the diagnostic line, insulin has usually been struggling for a decade. We train practitioners to catch the pattern early and reverse it systematically.",
      roots: ["Insulin resistance & hyperinsulinemia", "Visceral adiposity & fatty liver", "Chronic inflammation", "Circadian disruption & poor sleep", "Sarcopenia — low muscle mass", "Chronic stress & cortisol patterns"],
      cases: [
        { who: "Ramesh, 46 · IT manager", cc: "Fatigue after meals, frequent urination, HbA1c 8.1%", clues: "Weight creeping up since his 20s; 'borderline sugar' flagged 9 years before diagnosis — never followed up.", roots: "Severe insulin resistance, fatty liver (raised SGPT), almost no muscle mass, midnight sleep.", focus: "Protein-anchored therapeutic diet, resistance training, meal sequencing; staged supplement support.", shift: "HbA1c 8.1 → 6.3 over 9 months; off one medication with physician oversight." },
        { who: "Farida, 52 · homemaker", cc: "Burning feet at night, blurry vision episodes, HbA1c 9.4%", clues: "Gestational diabetes at 31 — the earliest signal. Twenty years of high-carb vegetarian meals and afternoon fatigue.", roots: "Long-standing insulin resistance, B12 deficiency worsening neuropathy, low protein intake.", focus: "Protein-first vegetarian plan, B12 & alpha-lipoic support, walking after meals.", shift: "Neuropathy symptoms eased by month 4; HbA1c 9.4 → 7.2." },
        { who: "Vikram, 38 · founder", cc: "'Pre-diabetes', 3 am waking, belly fat despite gym", clues: "Fasting insulin never tested until intake — it was 3× optimal while glucose still looked 'normal'.", roots: "Hyperinsulinemia, cortisol-driven night waking, alcohol-heavy client dinners.", focus: "Insulin-lowering diet, alcohol protocol, sleep & stress work before any supplement.", shift: "Fasting insulin halved in 12 weeks; waist −9 cm." },
        { who: "Meenakshi, 61 · retired teacher", cc: "Diabetic 15 years, on 3 medications, still rising HbA1c", clues: "Every medication increase followed a life stressor — never addressed. Diet 'controlled' but 70% refined carbs.", roots: "Beta-cell exhaustion pattern, sarcopenia, chronic constipation hinting at gut dysfunction.", focus: "Gut restoration first, then carbohydrate redistribution and strength work; tight physician coordination.", shift: "First HbA1c drop in 5 years (8.8 → 7.6); no medication increase." },
        { who: "Arjun, 29 · delivery rider", cc: "Diagnosed type 2 at 29, shocked — 'I'm not even fat'", clues: "TOFI pattern — thin outside, fat inside. Night shifts for 6 years; meals at 2 am.", roots: "Circadian disruption driving insulin resistance, visceral fat on a lean frame, vitamin D 9 ng/mL.", focus: "Meal-timing redesign around shifts, vitamin D repletion, sleep anchoring.", shift: "HbA1c 7.9 → 6.1 in 7 months without weight-focused dieting." },
      ],
      related: { cert: "metabolic", mastery: "cardio-metabolic", spec: "obesity-glp1" },
    },
    {
      id: "thyroid", name: "Thyroid Health", tagline: "Hypothyroidism, Hashimoto's and the years of 'normal reports' that come before them.",
      intro: "Thyroid patients are the most under-served group in conventional care — told their labs are normal while symptoms pile up. We teach the full-panel, functional-range workup that finds what a lone TSH misses.",
      roots: ["Autoimmunity (Hashimoto's) — the leading driver", "Nutrient gaps — iodine, selenium, iron, zinc", "Gut dysfunction & poor T4→T3 conversion", "Chronic stress suppressing the axis", "Environmental toxin load", "Post-partum thyroid shifts"],
      cases: [
        { who: "Deepa, 34 · architect", cc: "Exhaustion, hair falling in clumps, weight gain despite dieting", clues: "TSH 'normal' at 4.1 for 6 years. Antibodies were never tested — TPO came back at 480.", roots: "Undiagnosed Hashimoto's, ferritin 11, chronic calorie restriction slowing conversion.", focus: "Autoimmune-focused diet, iron & selenium repletion, stop the crash dieting.", shift: "TPO antibodies halved in 6 months; energy back by month 3." },
        { who: "Kavitha, 41 · banker", cc: "Cold hands, constipation, brain fog by 3 pm", clues: "Symptoms began after her second delivery — classic post-partum onset, dismissed for 8 years.", roots: "Subclinical hypothyroidism (TSH 5.8, low FT3), low-carb diet worsening conversion, B12 deficiency.", focus: "Conversion-support nutrition, carbohydrate re-introduction, B12 & zinc.", shift: "FT3 into optimal range; bowel movements daily without support." },
        { who: "Sunil, 47 · professor", cc: "Fatigue, high cholesterol 'resistant' to statins, low mood", clues: "Nobody connected the LDL to the thyroid. rT3 was double the optimal — a brake on his metabolism.", roots: "High reverse T3 from chronic work stress and crash exercise; selenium & vitamin D deficits.", focus: "Stress-axis work first, nutrient repletion, exercise redesigned from punishment to stimulus.", shift: "Lipids normalised as thyroid function recovered — no diet change 'for cholesterol' needed." },
        { who: "Ritu, 28 · newlywed", cc: "Irregular cycles, difficulty conceiving, dry skin", clues: "TSH of 3.9 called 'fine' — but optimal for conception is nearer 1–2. A fertility clinic was the first to flag it.", roots: "Subclinical hypothyroidism affecting ovulation; iodine-poor diet; undereating.", focus: "Fertility-range thyroid support, food-first iodine & selenium, adequate calories.", shift: "Cycles regularised in 4 months; conceived naturally within the year." },
        { who: "Lakshmi, 56 · homemaker", cc: "On thyroxine 12 years, still tired — 'my reports are normal'", clues: "Dose-adjusted by TSH alone for a decade. FT3 had never once been measured.", roots: "Poor T4→T3 conversion — gut dysbiosis, ferritin 18, cortisol dysrhythmia.", focus: "Gut repair, iron repletion, conversion cofactors; physician-coordinated dose review.", shift: "Energy restored at the same medication dose — conversion, not dosage, was the problem." },
      ],
      related: { cert: "blood-chemistry", mastery: "thyroid", spec: "gut-transformation" },
    },
    {
      id: "ibs", name: "IBS & Gut Disorders", tagline: "Bloating, unpredictable digestion and the diagnosis that explains nothing.",
      intro: "IBS is a description, not an explanation. Behind it sit findable drivers — SIBO, dysbiosis, food reactions, gut–brain dysfunction. We train practitioners to find which one is running the show.",
      roots: ["SIBO / SIFO — bacterial & fungal overgrowth", "Dysbiosis & low microbial diversity", "Food intolerances & histamine load", "Post-infectious gut damage", "Gut–brain axis dysfunction & visceral hypersensitivity", "Low stomach acid & enzyme insufficiency"],
      cases: [
        { who: "Ananya, 26 · designer", cc: "Bloating within an hour of every meal, 'looks 6 months pregnant by evening'", clues: "Started after a bout of food poisoning in college — post-infectious IBS, never linked.", roots: "Methane-positive SIBO, slowed motility, fear-driven food restriction down to 8 'safe' foods.", focus: "SIBO protocol, prokinetic support, structured food re-expansion.", shift: "Breath test cleared; eating 40+ foods again in 5 months." },
        { who: "Joseph, 44 · chef", cc: "Alternating constipation and urgency, 15 years of antacids", clues: "Heartburn since his 20s treated with acid suppression — while his actual acid was low.", roots: "Hypochlorhydria from long-term PPIs, downstream dysbiosis, B12 and iron depletion.", focus: "Physician-coordinated PPI taper, digestive support, mineral repletion, fermented-food ladder.", shift: "Regular digestion for the first time in a decade; bloodwork deficiencies resolved." },
        { who: "Priyanka, 33 · lawyer", cc: "Diarrhea before every court appearance, cramping, exhaustion", clues: "Symptoms track stress with total precision — the gut–brain axis was the primary lesion.", roots: "Visceral hypersensitivity, cortisol spikes, caffeine on an empty stomach, no safety signals to the gut.", focus: "Nervous-system regulation first (breath work, meal rituals), then gentle microbiome rebuilding.", shift: "Court days without symptoms by month 3 — diet barely changed." },
        { who: "Imran, 51 · shopkeeper", cc: "Gas, sour belching, undigested food in stool", clues: "Symptoms worsened steadily after gallbladder removal 4 years ago — fat digestion was never supported.", roots: "Bile insufficiency, pancreatic enzyme insufficiency, fat-soluble vitamin depletion.", focus: "Bile & enzyme support, smaller fat loads more often, A/D/E/K repletion.", shift: "Stool normalised in 8 weeks; vitamin D doubled." },
        { who: "Shreya, 38 · HR head", cc: "IBS-C 'forever', skin rashes, headaches after fermented foods", clues: "The rash-plus-gut pattern pointed at histamine — confirmed by a low-histamine trial.", roots: "Histamine intolerance on top of dysbiosis; DAO insufficiency; daily kombucha making it worse.", focus: "Short low-histamine phase, DAO cofactors, targeted probiotic strains, then reintroduction.", shift: "Headaches gone, skin clear, bowels regular — and fermented foods partially back." },
      ],
      related: { cert: "gut-health", mastery: "inflammation", spec: "gut-transformation" },
    },
    {
      id: "obesity", name: "Obesity & Weight Regulation", tagline: "Weight as an endocrine signal — not a willpower score.",
      intro: "Calories count, but hormones decide where they go. We teach weight regulation as endocrinology: insulin, leptin, thyroid, cortisol and muscle mass — including modern GLP-1 support done safely.",
      roots: ["Hyperinsulinemia blocking fat release", "Leptin resistance & broken satiety signalling", "Low muscle mass & metabolic rate", "Sleep debt & circadian disruption", "Chronic dieting & metabolic adaptation", "Stress eating & reward-pathway loops"],
      cases: [
        { who: "Neha, 35 · marketing lead", cc: "Weight regain after every diet — '5 diets, 40 kilos lost, 50 regained'", clues: "Each crash diet lowered her metabolic rate further; muscle loss was never measured.", roots: "Metabolic adaptation, sarcopenia, leptin resistance, all-or-nothing eating psychology.", focus: "Reverse dieting with protein anchor, strength training, no forbidden foods.", shift: "First maintenance year of her adult life; body-fat % down with weight stable." },
        { who: "Rajiv, 48 · accountant", cc: "Central obesity, snoring, 'always hungry at night'", clues: "Untreated sleep apnea was driving night hunger — hunger hormones invert without deep sleep.", roots: "Sleep apnea (referred out), ghrelin/leptin inversion, insulin resistance, desk-bound days.", focus: "Sleep referral first, then meal timing, protein-forward dinners, walk breaks.", shift: "−11 kg in 6 months, most of it after CPAP started — sleep was the keystone." },
        { who: "Fatima, 42 · homemaker", cc: "Weight gain 20 kg since hysterectomy, joint pain, low mood", clues: "Surgical menopause at 38 changed her endocrine landscape overnight; nobody adjusted her nutrition.", roots: "Estrogen loss shifting fat central, thyroid slowdown, vitamin D & omega-3 deficits, grief.", focus: "Menopause-informed nutrition, strength work for joints, targeted repletion, counselling referral.", shift: "−8 kg, pain-free stairs, and — her words — 'myself again'." },
        { who: "Aditya, 31 · gamer", cc: "BMI 38, prediabetic, starting GLP-1 with his physician", clues: "Came for GLP-1 'side-kick' support — the drugs suppress appetite but don't teach eating.", roots: "Ultra-processed diet, zero structured meals, muscle mass in lowest decile.", focus: "Protein floors to protect muscle on GLP-1, hydration & fibre protocol, gym onboarding.", shift: "−19 kg on therapy with zero lean-mass loss on DEXA — the metric that matters." },
        { who: "Sarala, 58 · grandmother", cc: "'Eats like a bird', still gaining; cold, puffy, exhausted", clues: "The classic hypothyroid-obesity overlap — her thyroid had been 'borderline' for 15 years.", roots: "Undertreated hypothyroidism, severe undereating (900 kcal), muscle wasting.", focus: "Eat more, not less — protein-led refeeding; thyroid workup with her physician.", shift: "Energy first, then slow steady fat loss once metabolism trusted food again." },
      ],
      related: { cert: "metabolic", mastery: "cardio-metabolic", spec: "obesity-glp1" },
    },
    {
      id: "inflammation", name: "Chronic Inflammation", tagline: "The slow fire under most chronic disease — measurable, traceable, resolvable.",
      intro: "Joint pain, fatigue, brain fog, stubborn markers — chronic inflammation wears many masks. We teach practitioners to measure it properly, trace its drivers, and use nutrition's most powerful anti-inflammatory tools.",
      roots: ["Gut permeability & endotoxemia", "Visceral fat as an inflammatory organ", "Chronic low-grade infections", "Omega-6:3 imbalance & processed oils", "Poor sleep & unresolved stress", "Environmental toxin exposure"],
      cases: [
        { who: "Mohan, 54 · driver", cc: "Every joint aches by evening; hs-CRP 6.8", clues: "Pain moved around — not one joint's problem but the whole system's. Fried-food lunches daily for 20 years.", roots: "Diet-driven inflammation (omega imbalance), visceral adiposity, fatty liver.", focus: "Oil swap, omega-3 repletion, vegetable-forward therapeutic diet, gentle movement.", shift: "hs-CRP 6.8 → 1.9 in 5 months; morning stiffness gone." },
        { who: "Grace, 39 · nurse", cc: "Fatigue, recurring mouth ulcers, 'inflamed everything' — ANA borderline", clues: "Night-shift work for 11 years; the immune system never got its repair window.", roots: "Circadian immune disruption, gut permeability, vitamin D 12 ng/mL, early autoimmune activation.", focus: "Shift-worker sleep architecture, gut barrier protocol, vitamin D & omega-3s.", shift: "Ulcers stopped; ANA stable at re-test; energy for the gym again." },
        { who: "Bhavesh, 45 · trader", cc: "Chest heaviness episodes, normal angiography, hs-CRP & homocysteine both high", clues: "Cleared cardiologically — but his inflammatory markers said the fire was real and vascular.", roots: "Homocysteine 24 (B-vitamin pathway), sedentary stress, 4 hours of sleep in market season.", focus: "Methylation-support nutrition, sleep boundaries, daily walks; cardiology follow-up kept.", shift: "Homocysteine 24 → 9; episodes stopped; markers now tracked quarterly." },
        { who: "Devi, 60 · retired clerk", cc: "Diagnosed rheumatoid arthritis, wants food to help alongside treatment", clues: "Flares followed specific foods she'd noticed for years — nobody had ever asked her.", roots: "Gut dysbiosis, nightshade & gluten sensitivity (confirmed by structured elimination), low omega-3 index.", focus: "Elimination–reintroduction done properly, gut restoration, omega-3s — alongside her rheumatologist's plan.", shift: "Flare frequency halved; morning stiffness 90 → 20 minutes. Medication unchanged, life changed." },
        { who: "Karan, 36 · consultant", cc: "Brain fog, afternoon crashes, 'inflamed but nothing is wrong'", clues: "All 'normal' reports — but ferritin 380 with normal iron said inflammation, and his gut history said why.", roots: "SIBO-driven endotoxemia, ultra-processed travel diet, zero resistance training.", focus: "Gut protocol first, travel-proof food system, strength training as anti-inflammatory medicine.", shift: "Ferritin settled to 120; head clear by month 4." },
      ],
      related: { cert: "afncp", mastery: "inflammation", spec: "gut-transformation" },
    },
    {
      id: "gynaec", name: "Gynaec & Hormone Health", tagline: "PCOS, endometriosis, cycle disorders and menopause — the hormone web, untangled.",
      intro: "Women's hormone cases are systems cases: insulin, thyroid, stress and gut all speak through the cycle. We train practitioners to read that conversation and restore it — from PCOS through menopause.",
      roots: ["Insulin resistance driving androgen excess", "Estrogen–progesterone imbalance", "Thyroid involvement in cycle disorders", "Chronic stress & hypothalamic suppression", "Gut–estrogen (estrobolome) dysfunction", "Nutrient depletion — iron, B6, magnesium, zinc"],
      cases: [
        { who: "Sneha, 24 · student", cc: "No period for 7 months, acne, weight gain — diagnosed PCOS", clues: "Symptoms exploded during exam year — stress plus 2 am snacking plus zero movement.", roots: "Insulin-driven PCOS phenotype, disrupted circadian eating, vitamin D deficiency.", focus: "Blood-sugar-stabilising diet, movement she enjoys, sleep anchoring, targeted inositol support.", shift: "Cycles returned by month 4; skin cleared by month 6." },
        { who: "Rekha, 37 · manager", cc: "Painful heavy periods, bloating, fatigue — endometriosis suspected", clues: "Pain escalating for 10 years, managed only with painkillers; inflammation never addressed.", roots: "High inflammatory load, estrogen dominance pattern, constipation impairing estrogen clearance.", focus: "Anti-inflammatory therapeutic diet, fibre & estrobolome support, omega-3s; gynaecologist care continued.", shift: "Pain scores down from 9 to 4; two fewer sick days per cycle." },
        { who: "Anita, 49 · principal", cc: "Hot flashes hourly, insomnia, anxiety 'out of nowhere'", clues: "Perimenopause hit alongside a caffeine-and-skipped-lunch work pattern that amplified every symptom.", roots: "Estrogen fluctuation + blood-sugar swings + cortisol chaos — three waves stacking.", focus: "Blood-sugar steadiness first, phytoestrogen-rich foods, magnesium, evening wind-down protocol.", shift: "Flashes down to 2–3 daily; sleeping 7 hours by month 3." },
        { who: "Pooja, 31 · pharmacist", cc: "Trying to conceive 2 years; 'all tests normal'", clues: "Luteal phase only 8 days — visible in her cycle data, invisible in one-off labs.", roots: "Low progesterone from chronic undereating and over-exercise; subclinical thyroid slowdown.", focus: "Fuel first — calories up, training rebalanced; seed-to-full-fat dairy nutrition; thyroid support.", shift: "Luteal phase lengthened to 12 days; conceived in month 7." },
        { who: "Vasudha, 44 · caterer", cc: "Flooding periods, exhaustion, hair loss — ferritin 6", clues: "Years of heavy bleeding dismissed as 'normal for her' had drained her iron to the floor.", roots: "Fibroid-driven bleeding (gynaecologist managing), iron-deficiency spiral, thyroid strain.", focus: "Aggressive nutritional iron repletion with cofactors, thyroid support; specialist care coordinated.", shift: "Ferritin 6 → 48; climbing stairs without stopping — first time in 3 years." },
      ],
      related: { cert: "metabolic", mastery: "pcos", spec: "maternity" },
    },
  ];

  /* ---------------- PEOPLE ---------------- */
  const leaders = [
    { name: "Sana Fathima", role: "Founder & Educational Director", tone: "clay",
      bio: "Sana founded EverHealthy to close the gap between nutrition science and clinical practice in India. She leads the curriculum, teaches the core clinical modules, and personally reviews every capstone protocol." },
    { name: "Md. Rauf", role: "Director", tone: "forest",
      bio: "Rauf directs academy operations and partnerships — cohort logistics, practitioner placements and the standards that keep certifications rigorous." },
  ];
  const mentors = [
    { name: "Sana Fathima", role: "Functional Nutrition · Founder", tone: "clay" },
    { name: "Dr. Prajna", role: "Clinical Mentor", tone: "forest" },
    { name: "Ramya", role: "Nutrition Mentor", tone: "berry" },
    { name: "Dr. Sandip", role: "Clinical Mentor", tone: "forest" },
    { name: "Dr. Khyati", role: "Pediatrician", tone: "clay" },
    { name: "Dr. Yogita", role: "Clinical Mentor", tone: "berry" },
    { name: "Dr. Vasuki", role: "Clinical Mentor", tone: "forest" },
  ];
  const team = [
    { name: "Zinath", role: "Management Head", tone: "forest" },
    { name: "Shweta", role: "Nutritionist", tone: "clay" },
    { name: "Dr. Poornima Bhat", role: "Clinical Team", tone: "berry" },
    { name: "Akhila", role: "Yoga Trainer", tone: "moss" },
    { name: "Janaki", role: "Breathwork & Meditation", tone: "sand" },
    { name: "Nikita", role: "Pranic Healer", tone: "moss" },
  ];

  /* ---------------- TESTIMONIALS & FAQ ---------------- */
  const testimonials = [
    { name: "Dr. Priya Menon", role: "Nutritionist · Kochi", img: U("1580489944761-15a19d654956", 300),
      quote: "The blood chemistry module alone transformed my practice. I now read patient panels in functional ranges and catch things conventional labs miss." },
    { name: "Aman Verma", role: "Physician · Delhi", img: U("1507003211169-0a1dd7228f2d", 300),
      quote: "Three exams. Real protocols. The capstone forced me to think clinically about nutrition for the first time in my 12-year career." },
    { name: "Lakshmi Iyer", role: "Wellness Coach · Singapore", img: U("1534528741775-53994a69daeb", 300),
      quote: "Joined the alumni network after certifying. The case discussions and mentor office hours are worth the program by themselves." },
  ];

  const faqs = [
    { q: "Do I need a medical or nutrition background?", a: "Foundations is open to anyone with a science background or strong self-study discipline. Applied (AFNCP), Advanced (CAFNP) and Mastery programs require Foundations or equivalent training." },
    { q: "How are the exams structured?", a: "Each certification is gated by three exams — a timed knowledge MCQ, a case-study exam where you interpret real anonymised patient cases, and a capstone clinical protocol design reviewed by faculty." },
    { q: "Are sessions live or self-paced?", a: "Hybrid. Twice-weekly live sessions (all recorded), daily mentor office hours, and on-demand modules you can take at your own pace within your access window." },
    { q: "Is the credential recognised internationally?", a: "Our digital badges are publicly verifiable and used by alumni in 46 countries. They are continuing-education credentials and do not replace local licensure requirements." },
    { q: "What is the EMI and refund policy?", a: "Every program can be paid in instalments (shown on each course page). A full refund is available within 7 days of cohort start if you've completed less than one module." },
    { q: "What if I miss live sessions?", a: "Everything is recorded and indexed within 24 hours. Your cohort group stays open for your full access period, and mentors run recap office hours weekly." },
  ];

  const healing = [
    "Autoimmune Conditions", "Digestive & Gut Disorders", "Cardiovascular & Metabolic Health",
    "Musculoskeletal Disorders", "Detoxification & Liver Support", "Environmental & Lifestyle-Related Conditions",
    "Women's & Reproductive Health", "Pediatric Conditions", "Men's Health",
    "Immune & Allergy-Related Conditions", "Skin Conditions", "Miscellaneous Conditions",
  ];

  const fmtPrice = (n) => "₹" + n.toLocaleString("en-IN");

  window.EH = {
    img, progImg, condImg, certs, masteries, specs, conditions, framework,
    leaders, mentors, team, testimonials, faqs, healing, EXAMS, fmtPrice,
    allPrograms: [].concat(certs, masteries, specs),
    program(id) { return this.allPrograms.find(p => p.id === id); },
    condition(id) { return conditions.find(c => c.id === id); },
  };
})();
