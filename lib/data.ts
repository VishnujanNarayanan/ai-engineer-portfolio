export interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  technologies: string[]
  githubUrl: string
  liveUrl?: string
  imageUrl?: string
  features: string[]
  metrics?: string[]
}

export interface Experience {
  id: number
  title: string
  company: string
  location: string
  period: string
  description: string[]
  technologies: string[]
  certificateUrl?: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Real-time Stock Intelligence Pipeline',
    description: 'Engineered pipeline scraping 1M+ rows from 10+ financial sources with real-time signal processing',
    longDescription: 'Built a comprehensive financial data pipeline that aggregates and processes real-time market data from multiple sources including Yahoo Finance, NSE, and social media. Implemented automated feature engineering for predictive modeling.',
    technologies: ['Python', 'PyTorch', 'Selenium', 'Playwright', 'PostgreSQL', 'FastAPI'],
    githubUrl: 'https://github.com/yourusername/stock-intelligence',
    features: [
      'Real-time data scraping from 10+ sources',
      'Automated feature engineering pipeline',
      'CNN-based price prediction model',
      'Daily & historical data updates',
      'Signal aggregation (insider trades, sentiment, indicators)'
    ],
    metrics: ['66% precision on buy signals', '1M+ rows processed daily', '10+ data sources integrated']
  },
  {
    id: 2,
    title: 'Sentiment Analysis Platform',
    description: 'Real-time sentiment analysis on YouTube comments with 82% F1-score and automated dashboard',
    longDescription: 'Developed an end-to-end sentiment analysis system that processes YouTube comments in real-time. Built web interface for content teams to monitor sentiment and integrated with Tableau for business intelligence.',
    technologies: ['Python', 'Scikit-learn', 'FastAPI', 'Tableau', 'YouTube API', 'HDFS'],
    githubUrl: 'https://github.com/yourusername/sentiment-analysis',
    features: [
      'Real-time comment processing',
      'SVM-based classification',
      'Automated data pipeline',
      'Interactive dashboards',
      'Business intelligence integration'
    ],
    metrics: ['82% F1-score', '70% reduction in manual processing', '10K+ comments analyzed']
  },
  {
    id: 3,
    title: 'AI-Powered Education App',
    description: 'React Native app with RAG-based NCERT mapping using YouTube transcripts',
    longDescription: 'Created an AI-powered education application that maps YouTube educational content to NCERT curriculum using Retrieval-Augmented Generation. Includes concept classification and personalized learning paths.',
    technologies: ['React Native', 'Python', 'RAG', 'Hugging Face', 'Firebase', 'OpenAI API'],
    githubUrl: 'https://github.com/yourusername/ai-education-app',
    liveUrl: 'https://ai-education-app.example.com',
    features: [
      'RAG-based content mapping',
      'Concept classification',
      'Personalized learning paths',
      'YouTube transcript processing',
      'Offline learning support'
    ]
  },
  {
    id: 4,
    title: 'Semantic Quote Search Engine',
    description: 'RAG-powered quote retrieval system with semantic search using sentence embeddings',
    longDescription: 'Built a semantic search engine for quotes using RAG architecture. Implemented cosine similarity with sentence embeddings and deployed as a Streamlit application with intuitive interface.',
    technologies: ['Python', 'Streamlit', 'Hugging Face', 'FAISS', 'Sentence Transformers', 'Docker'],
    githubUrl: 'https://github.com/yourusername/quote-search',
    features: [
      'Semantic search with embeddings',
      'RAG architecture',
      'Cosine similarity matching',
      'Streamlit deployment',
      'Docker containerization'
    ]
  },
  {
    id: 5,
    title: 'Feature Selection Optimization',
    description: 'Applied Social Group Optimization for optimal feature selection in ticket classification',
    longDescription: 'Implemented Spider Monkey Optimization algorithm for feature selection in customer support ticket classification. Integrated TF-IDF, chi-square filtering, and logistic regression for optimal feature subset selection.',
    technologies: ['Python', 'NumPy', 'Scikit-learn', 'NLP', 'Optimization Algorithms'],
    githubUrl: 'https://github.com/yourusername/feature-selection',
    features: [
      'SGO algorithm implementation',
      'TF-IDF vectorization',
      'Chi-square feature filtering',
      'NLP preprocessing pipeline',
      'Classification model integration'
    ]
  },
  {
    id: 6,
    title: 'Customer Analytics Dashboard',
    description: 'Automated CRM analytics with 11.6% churn reduction and 70% report time reduction',
    longDescription: 'Developed comprehensive customer analytics system that processes CRM and support ticket data. Identified drop-off points in customer onboarding and automated KPI tracking dashboards.',
    technologies: ['Python', 'SQL', 'Excel', 'Tableau', 'CRM Analytics'],
    githubUrl: 'https://github.com/yourusername/customer-analytics',
    features: [
      'Automated data processing',
      'Churn prediction models',
      'Excel dashboard automation',
      'A/B testing framework',
      'KPI tracking system'
    ],
    metrics: ['11.6% churn reduction', '70% report time reduction', '19.2% response rate increase']
  }
]

export const experiences: Experience[] = [
  {
    id: 1,
    title: 'AI Quant Analyst',
    company: 'CiteSert',
    location: 'Remote, Mumbai',
    period: 'June 2025 - Present',
    description: [
      'Engineered real-time stock intelligence pipeline scraping 1M+ rows from 10+ financial sources',
      'Orchestrated daily and 5+ years historical data updates with structured signal processing',
      'Trained CNN-based deep learning model achieving 66% precision on buy signals'
    ],
    technologies: ['Python', 'PyTorch', 'Selenium', 'Playwright', 'PostgreSQL', 'Financial APIs'],
  },
  {
    id: 2,
    title: 'Data Science Intern',
    company: 'Xebia',
    location: 'Bengaluru',
    period: 'May 2024 - Aug 2024',
    description: [
      'Developed sentiment analysis system on 10K+ YouTube comments with 82% F1-score',
      'Systematized end-to-end data pipeline from YouTube API to HDFS and dashboards',
      'Created Tableau interactive dashboards reducing manual edits by 100%'
    ],
    technologies: ['Python', 'Scikit-learn', 'Tableau', 'HDFS', 'FastAPI', 'SVM'],
    certificateUrl: 'https://drive.google.com/file/d/1-imQ11-0cE1GXQz1LzBZKIAe8H5zrSHe/view'
  },
  {
    id: 3,
    title: 'Data Analyst Intern',
    company: 'iLAB',
    location: 'Kozhikode',
    period: 'May 2022 - Aug 2022',
    description: [
      'Cleaned and analyzed CRM data to identify drop-off points, reducing churn by 11.6%',
      'Built automated Excel dashboards cutting report prep time by 70%',
      'Ran A/B tests boosting response rates by 19.2%'
    ],
    technologies: ['Python', 'SQL', 'Excel', 'CRM Analytics', 'A/B Testing'],
    certificateUrl: 'https://drive.google.com/file/d/1Fk_Qtj1-vfskXvTwHsEi-Ll8MKb_c0WL/view'
  }
]

export const skills = {
  programming: ['Python', 'SQL', 'Git', 'Docker', 'JavaScript'],
  ml: ['PyTorch', 'Scikit-learn', 'Feature Engineering', 'Predictive Modeling', 'Time Series'],
  tools: ['Tableau', 'BigQuery', 'MongoDB', 'Excel', 'FastAPI'],
  methodologies: ['Probability & Statistics', 'CI/CD', 'MLOps', 'A/B Testing']
}

export const certificates = [
  {
    name: 'Google Advanced Data Science Certificate',
    url: 'https://drive.google.com/file/d/1lSTOJFX3dS884-AK96JALHv2TAjAn5lN/view'
  },
  {
    name: 'Google Data Analytics Certificate',
    url: 'https://drive.google.com/file/d/1RojoW3A0gcVpnCdzVSn6IDS7ZmWDoa3Q/view'
  },
  {
    name: 'Microsoft Azure AI Fundamentals',
    url: 'https://drive.google.com/file/d/1FqPXYZwPgKwc7EhH_0DcrN2gWPNTTBxG/view'
  }
]