export const MOCK_CASES = [
  {
    id: "DR-2024-8841",
    patientRef: "P-4012",
    name: "Eleanor Vance (Anonymized)",
    age: 58,
    gender: "Female",
    modality: "45° Non-Mydriatic Digital Fundus",
    eye: "OD (Right)",
    status: "Pending Review",
    grade: "Level 2: Moderate Nonproliferative Retinopathy",
    confidence: 94.2,
    quality: "Optimal",
    timestamp: "2026-10-28 14:32 UTC",
    operator: "Sarah Jenkins",
    notes: "Microaneurysms detected in macula periphery, dot-blot hemorrhages visible.",
    imageUrl: "/retinal/fundus-1.png"
  },
  {
    id: "DR-2024-8842",
    patientRef: "P-4013",
    name: "Marcus Holloway (Anonymized)",
    age: 64,
    gender: "Male",
    modality: "50° Digital Fundus Camera",
    eye: "OS (Left)",
    status: "Confirmed",
    grade: "Level 3: Severe Nonproliferative Retinopathy",
    confidence: 96.8,
    quality: "Optimal",
    timestamp: "2026-10-28 13:15 UTC",
    operator: "Sarah Jenkins",
    notes: "Venous beading in 2+ quadrants. Immediate tertiary referral advised.",
    imageUrl: "/retinal/fundus-2.png"
  },
  {
    id: "DR-2024-8843",
    patientRef: "P-4014",
    name: "Amina Khan (Anonymized)",
    age: 49,
    gender: "Female",
    modality: "Ultra-Widefield Retinal Scan",
    eye: "OD (Right)",
    status: "Pending Review",
    grade: "Level 1: Mild Nonproliferative Retinopathy",
    confidence: 88.4,
    quality: "Suboptimal",
    timestamp: "2026-10-28 11:45 UTC",
    operator: "Dr. Chen",
    notes: "Slight media haze, repeat scan recommended if symptoms progress.",
    imageUrl: "/retinal/fundus-3.png"
  },
  {
    id: "DR-2024-8844",
    patientRef: "P-4015",
    name: "Robert Torres (Anonymized)",
    age: 71,
    gender: "Male",
    modality: "45° Non-Mydriatic Digital Fundus",
    eye: "OS (Left)",
    status: "Overridden",
    grade: "Level 0: No Apparent Retinopathy",
    confidence: 91.0,
    quality: "Optimal",
    timestamp: "2026-10-28 09:20 UTC",
    operator: "Sarah Jenkins",
    notes: "Benign choroidal nevus mistaken for hemorrhage; override applied.",
    imageUrl: "/retinal/fundus-4.png"
  },
  {
    id: "DR-2024-8845",
    patientRef: "P-4016",
    name: "Clara Oswald (Anonymized)",
    age: 53,
    gender: "Female",
    modality: "Non-Mydriatic Fundus",
    eye: "OD (Right)",
    status: "Flagged For Recapture",
    grade: "Indeterminate / Low Quality",
    confidence: 42.1,
    quality: "Artifacts Detected",
    timestamp: "2026-10-28 08:50 UTC",
    operator: "T. Bradley",
    notes: "Blink artifact obstructing foveal zone; patient requested to hold steady.",
    imageUrl: "/retinal/fundus-5.png"
  }
];

export const MOCK_USERS = [
  { id: "U-1", name: "Sarah Jenkins", email: "s.jenkins@dhristi.org", role: "Clinician / Imaging Tech", status: "Active", lastActive: "Just now", accesses: ["Review", "Export", "Override"] },
  { id: "U-2", name: "Dr. Aris Thorne", email: "a.thorne@ophthalmology.org", role: "Attending Ophthalmologist", status: "Active", lastActive: "15 min ago", accesses: ["Full Admin", "Specialist Sign-off"] },
  { id: "U-3", name: "Dr. Chen Wei", email: "chen.w@retinacenter.io", role: "Screening Lead", status: "Active", lastActive: "2 hours ago", accesses: ["Review", "Flag Recapture"] },
  { id: "U-4", name: "Elena Rostova", email: "e.rostova@auditteam.com", role: "Compliance Auditor", status: "Read-Only", lastActive: "Yesterday", accesses: ["Audit Trails", "Export Logs"] }
];

export const MOCK_AUDIT_LOGS = [
  { id: "LOG-9921", event: "Override Grade Decision", actor: "Sarah Jenkins (Tech)", timestamp: "2026-10-28 14:10 UTC", ip: "192.168.1.104", target: "Case #DR-2024-8844", details: "Changed L1 -> L0 after checking peripheral nevus" },
  { id: "LOG-9920", event: "Case Batch Ingested", actor: "DICOM Gateway 4A", timestamp: "2026-10-28 13:45 UTC", ip: "10.0.4.12", target: "Batch #B-88", details: "Ingested 14 raw TIFF fundus studies with valid checksums" },
  { id: "LOG-9919", event: "Specialist Referral Dispatched", actor: "Dr. Aris Thorne", timestamp: "2026-10-28 13:20 UTC", ip: "192.168.1.55", target: "Case #DR-2024-8842", details: "Urgent tele-ophthalmology consult requested" },
  { id: "LOG-9918", event: "Model Weight Checksum Verified", actor: "System Daemon", timestamp: "2026-10-28 12:00 UTC", ip: "localhost", target: "Model v3.8.2-dr", details: "SHA-256 integrity match: 9c01...a8f4" },
  { id: "LOG-9917", event: "Login Success", actor: "Sarah Jenkins", timestamp: "2026-10-28 08:30 UTC", ip: "192.168.1.104", target: "Auth Service", details: "MFA Token authenticated via Hardware Security Key" }
];

export const MOCK_MODELS = [
  { id: "MOD-382", name: "Dhristi-RetinaNet v3.8.2", status: "Production Primary", type: "CNN + ViT Ensemble", f1Score: 0.948, aucRoc: 0.982, sensitivity: "95.6%", specificity: "93.4%", lastValidated: "Oct 24, 2026" },
  { id: "MOD-390-RC", name: "Dhristi-RetinaNet v3.9.0-rc1", status: "Shadow Validation", type: "Vision Transformer Base", f1Score: 0.961, aucRoc: 0.989, sensitivity: "97.1%", specificity: "94.8%", lastValidated: "Oct 27, 2026" },
  { id: "MOD-375-LEG", name: "Dhristi-Legacy 3.7.5", status: "Archived / Fallback", type: "ResNet-50 Baseline", f1Score: 0.892, aucRoc: 0.924, sensitivity: "90.2%", specificity: "88.1%", lastValidated: "Aug 15, 2026" }
];

export const formatDate = (dateStr) => {
  return new Date(dateStr).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });
};
