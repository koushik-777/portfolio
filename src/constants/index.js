export const myProjects = [
  {
    id: 1,
    title: "Deepfake Detection System",
    description:
      "A real-time deepfake detection system built using PyTorch and EfficientNet-B0, capable of identifying manipulated images and videos.",
    subDescription: [
      "Achieved 89.38% validation accuracy by fine-tuning EfficientNet-B0.",
      "Implemented dual-mode inference supporting both images and video frame analysis.",
      "Developed a Streamlit web app with drag-and-drop support for images and videos.",
      "Added confidence graphs, probability visualizations, and verdict summaries for better interpretability.",
    ],
    href: "https://github.com/koushik-777/VISION-SHIELD--DEEPFAKE-DETECTION-SYSTEM",
    logo: "",
    image: "/assets/projects/df.png",
    tags: [
      { id: 1, name: "PyTorch", path: "/assets/logos/Pytorch.svg" },
      { id: 2, name: "Streamlit", path: "/assets/logos/streamlit.svg" },
      { id: 3, name: "OpenCV", path: "/assets/logos/opencv.svg" },
      
    ],
  },

  {
    id: 2,
    title: "Bug Detection & Code Fixing (Intel Unnati 2025)",
    description:
      "A multilingual bug detection and auto-code-fixing model fine-tuned using LLaMA 3.1 8B with LoRA/QLoRA.",
    subDescription: [
      "Fine-tuned LLaMA 3.1 8B on multilingual buggy/fixed code datasets (Python, Java, JS, Rust, Go).",
      "Deployed a Gradio interface on Hugging Face Spaces for real-time bug detection and fixes.",
      "Built reproducible training and deployment workflows using Jupyter notebooks.",
      "Leveraged LoRA/QLoRA for efficient instruction-tuning on consumer GPUs.",
    ],
    href: "https://github.com/koushik-777/intel-unnati-bug-detection_project",
    logo: "/assets/logos/hf.png",
    image: "/assets/projects/bugdetection.png",
    tags: [
      { id: 1, name: "LLaMA 3.1", path: "/assets/logos/meta.png" },
      { id: 2, name: "Hugging Face", path: "/assets/logos/hf.png" },
      { id: 3, name: "Gradio", path: "/assets/logos/gradio.svg" },
      
    ],
  },

  {
    id: 3,
    title: "HSN Code Validation Agent",
    description:
      "An AI agent built using Google's Agent Development Kit (ADK) that validates HSN codes against a static Excel dataset.",
    subDescription: [
      "Implemented format validation ensuring numeric HSN codes of 2–8 digits.",
      "Loaded and validated codes against a master Excel dataset using pandas and openpyxl.",
      "Built custom 'HSNValidator' Tool class for parsing, checking, and returning validated results.",
      "Supports batch inputs with comma- or space-separated codes and returns structured validation responses.",
      "Integrated a built-in web UI using `adk web`, removing the need for external deployment.",
    ],
    href: "https://github.com/koushik-777/HSN_VALIDATOR_AGENT-using-Google-Agent-Development-Kit",
    logo: "",
    image: "/assets/projects/hsn.png",
    tags: [
      { id: 1, name: "Google ADK", path: "/assets/logos/adk.png" },
      { id: 2, name: "Python", path: "/assets/logos/python.svg" },
      
      { id: 3, name: "openpyxl", path: "/assets/logos/exl.png" },
    ],
  },
];

export const experiences = [
  {
    title: "AI Intern",
    job: "Plugzmart",
    date: "Oct 2025 – Nov 2025",
    contents: [
      "Fine-tuned and deployed ML models to cloud environments for real-time EMS applications.",
      "Compared forecasting methods (ARIMA, LSTM, Prophet) to improve load prediction accuracy.",
      "Processed real-time IoT sensor data from smart meters using Pandas, NumPy, and PySpark.",
      "Evaluated model performance using SMAPE, RMSE, and R² to optimize forecasting pipelines.",
    ],
  },
  {
    title: "AI Research Intern",
    job: "Edunet Foundation",
    date: "Dec 2024 – Feb 2025",
    contents: [
      "Developed a machine learning classification model to predict user health risks.",
      "Created automated data pipelines and performed analysis using Pandas.",
      "Visualized performance metrics using Seaborn for stakeholder reports.",
      "Presented weekly demos detailing insights and improvements.",
    ],
  },
];

export const mySocials = [
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/koushik-m-14202b320/",
    icon: "/assets/socials/linkedIn.svg",

  },
   {
    name: "Github",
    href: "https://github.com/koushik-777",
    icon: "/assets/logos/github.svg",

  },
];