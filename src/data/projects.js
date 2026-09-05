export const projects = [
  {
    id: "scamshield-ai",
    name: "ScamShield AI",
    status: "Ongoing",
    featured: true,
    description:
      "An AI-powered scam and fraud detection system designed to analyze different types of potentially fraudulent content and classify it as Safe, Suspicious, or Fraud.",
    inputs: ["SMS", "Email", "URLs", "Images", "QR Codes", "Voice Recordings"],
    classification: true,
    technologies: ["Python", "FastAPI", "React", "Machine Learning", "NLP", "OCR", "AI-based Analysis"],
    achievements: [],
    features: [],
    github: "https://github.com/SoujanyaS257/scamshield-ai", // TODO: add GitHub repository link once available
    demo: null,   // TODO: add live demo link once deployed
  },
  {
    id: "smart-dog-skin-disease-detector",
    name: "Smart Dog Skin Disease Detector",
    status: "Completed",
    featured: false,
    description:
      "An EfficientNetV2S-based deep learning model for canine skin disease detection, paired with a Streamlit application for real-time image prediction, along with chatbot and vet-locator features for easier user interaction.",
    technologies: ["Python", "EfficientNetV2S", "Deep Learning", "Computer Vision", "Streamlit"],
    achievements: ["92.5% detection accuracy", "Prediction time under 2 seconds"],
    features: ["Real-time image-based prediction", "Integrated chatbot for user interaction", "Vet-locator feature"],
    github: "https://github.com/SoujanyaS257/Dog_Skin_Disease_Detector", // TODO: add GitHub repository link
    demo: null,
  },
  {
    id: "object-detection-system",
    name: "Object Detection System",
    status: "Completed",
    featured: false,
    description:
      "A real-time object detection system built with Python and OpenCV, optimized for smooth webcam inference and enhanced with text-to-speech output to support visually impaired users.",
    technologies: ["Python", "OpenCV", "Computer Vision", "Text-to-Speech"],
    achievements: ["Detects 10+ object classes", "~90% detection accuracy", "20–25 FPS real-time inference"],
    features: ["Text-to-speech output for accessibility"],
    github: "https://github.com/SoujanyaS257/Real-Time-Object-Detection", // TODO: add GitHub repository link
    demo: null,
  },
  {
    id: "smart-cattle-monitoring",
    name: "Smart Cattle Monitoring",
    status: "Completed",
    featured: false,
    description:
      "An IoT-based cattle management system that helps farmers monitor animal identification, health, and location — replacing manual observation and record-keeping with continuous, automated tracking.",
    technologies: ["ESP32", "RFID", "DS18B20", "RF Modules", "Flask", "MongoDB", "IoT"],
    achievements: [],
    features: [
      "Alerts for abnormal body temperature",
      "Vaccination reminder alerts",
      "Estrus-related event alerts",
      "Boundary/movement monitoring alerts",
    ],
    details: {
      problem:
        "Traditional cattle monitoring relies on manual observation and record-keeping, making it difficult to continuously track animal health, vaccination status, breeding information, and location.",
      solution:
        "Uses an ESP32 as the processing core with RFID tags for animal identification, DS18B20 sensors for body-temperature monitoring, and RF modules for boundary/location monitoring. A Flask backend processes data, which is stored in MongoDB — covering animal profiles, health history, vaccination information, breeding timeline, temperature, and location.",
    },
    github: null, // TODO: add GitHub repository link
    demo: null,
  },
];