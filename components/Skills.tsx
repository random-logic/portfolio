const skills = [
  "NextJs / React / Tailwind CSS",
  "LLMs / Deep Learning",
  "PyTorch / TensorFlow",
  "SQL Databases",
  "Docker",
  "Firebase",
  "Data Analysis",
];

export default function Skills() {
  return <div>
    <h1 className="font-bold">Skills</h1>
    <ul>
      {
        skills.map((skill, idx) =>
          <li key={idx}><h4>• {skill}</h4></li>
        )
      }
    </ul>
  </div>;
}
