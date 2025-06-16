const fs = require("fs/promises");
const cloudinary = require("../config/cloudinary");
const pdfParse = require("pdf-parse");

const STOPWORDS = new Set([
  "the", "is", "and", "with", "to", "for", "in", "a", "on", "of", "at", "by", "an", "be", "this", "that",
  "from", "or", "as", "it", "are", "was", "but", "not", "have", "has", "had", "you", "your", "we", "our",
  "they", "them", "he", "she", "his", "her", "will", "can", "would", "should", "could", "test", "testing",
  "engineer", "manual", "automation", "qa"
]);

const SYNONYMS = {
  js: "javascript",
  qa: "quality assurance",
  dev: "developer",
  mgr: "manager",
  mgrs: "managers",
  "ci/cd": "continuous integration",
  "uat": "user acceptance testing"
};

const IT_KEYWORDS = new Set([
  "java", "javascript", "typescript", "python", "c++", "c#", "php", "ruby", "go", "swift", "kotlin", "scala",
  "bash", "shell", "sql", "html", "css", "xml", "json",
  "react", "angular", "vue", "jquery", "bootstrap", "material-ui",
  "node", "express", "spring", "hibernate", "django", "flask", "laravel", "asp.net",
  "mysql", "postgresql", "mongodb", "oracle", "sqlserver", "redis", "cassandra", "dynamodb",
  "docker", "kubernetes", "aws", "azure", "gcp", "jenkins", "terraform", "ansible", "continuous integration", "helm",
  "selenium", "cucumber", "jmeter", "postman", "soapui", "mocha", "jest", "chai", "pytest",
  "agile", "scrum", "kanban", "tdd", "bdd", "devops", "waterfall",
  "git", "jira", "confluence", "slack", "maven", "gradle", "npm", "yarn",
  "developer", "engineer", "tester", "quality assurance", "analyst", "architect", "manager", "lead", "intern",
  "microservices", "rest", "graphql", "api", "oop", "mvc", "ci", "cd",
  "lambda", "s3", "ec2", "ecs", "cloudformation", "cloudwatch",
  "oauth", "jwt", "ssl", "tls", "encryption", "firewall",
  "performance", "scalability", "optimization", "debugging", "monitoring", "logging"
]);

const extractKeywords = (text) => {
  if (!text || typeof text !== "string") return [];

  const words = text.toLowerCase().match(/\b[a-z]{2,}\b/g) || [];
  const expanded = words.map(word => SYNONYMS[word] || word);
  const filtered = expanded.filter(word => !STOPWORDS.has(word));
  const keywords = filtered.filter(word => IT_KEYWORDS.has(word));

  return [...new Set(keywords)];
};

const calculateATSSimilarity = (jdKeywords, resumeText) => {
  if (!jdKeywords.length) return { score: 0, matchedKeywords: [], missingKeywords: [] };

  const resumeWords = new Set(
    (resumeText.toLowerCase().match(/\b[a-z]{2,}\b/g) || [])
    .map(word => SYNONYMS[word] || word)
  );

  const matchedKeywords = jdKeywords.filter(keyword => resumeWords.has(keyword));
  const missingKeywords = jdKeywords.filter(keyword => !resumeWords.has(keyword));
  const score = Math.round((matchedKeywords.length / jdKeywords.length) * 100);

  return { score, matchedKeywords, missingKeywords };
};

const checkATSScore = async (req, res) => {
  const { job_description } = req.body;

  if (!job_description || typeof job_description !== "string") {
    return res.status(400).json({ error: "Job description text (job_description) is required and must be a string" });
  }

  if (!req.file) {
    return res.status(400).json({ error: "Resume file is required" });
  }

  try {
    const buffer = await fs.readFile(req.file.path);
    const parsed = await pdfParse(buffer);
    const resumeText = parsed.text || "";

    const jdKeywords = extractKeywords(job_description);
    const { score, matchedKeywords, missingKeywords } = calculateATSSimilarity(jdKeywords, resumeText);

    const result = await cloudinary.uploader.upload(req.file.path, {
      resource_type: "raw",
      folder: "resumes",
      public_id: `${req.file.originalname}_${Date.now()}`.replace(/\.[^/.]+$/, "") // remove extension for public_id
    });

    res.json({
      score,
      totalJDKeywords: jdKeywords.length,
      matchedKeywords,
      matchedCount: matchedKeywords.length,
      missingKeywords,
      missingCount: missingKeywords.length,
      resumeUrl: result.secure_url
    });
  } catch (err) {
    console.error("Error processing resume:", err);
    res.status(500).json({ error: "Failed to process resume" });
  } finally {
    await fs.unlink(req.file.path).catch(() => {console.log("Failed to delete temp file");});
  }
};

module.exports = { checkATSScore };
