"use client";

import {useState} from "react";

const PROJECT_TYPES = ["Frontend", "Backend", "AI", "ML"];
const NO_PROJECTS_SELECTED = Array(PROJECT_TYPES.length).fill(false);

const PROJECTS = [
  {
    name: "GitHub Issue Ticket Bot",
    skills: ["Backend", "AI", "ML"],
    tools: ["Python", "LLMs"],
    summary: "",
  },
  {
    name: "Demand Forecast Model",
    skills: ["AI", "ML"],
    tools: ["Python", "TensorFlow", "ARIMAX", "Neural Network"],
    summary: "",
  },
  {
    name: "Google Developer Student Club Website",
    skills: ["Frontend"],
    tools: ["NextJS", "ReactJS", "TypeScript", "Tailwind CSS", "Figma"],
    summary: "",
  },
  {
    name: "Randomized and Auto-graded Quiz Website",
    skills: ["Frontend", "Backend"],
    tools: ["Python", "Server Logic", "PrairieLearn", "HTML"],
    summary: "",
  }
];

export default function Projects() {
  const [selectedSkills, setSelectedSkills] = useState(NO_PROJECTS_SELECTED);
  const allSelected = selectedSkills.every(selected => !selected);

  const allStyle = allSelected ? "blue" : "";
  const projectsStyle = selectedSkills.map(project => project ? "blue" : "");

  function setAll() {
    setSelectedSkills(NO_PROJECTS_SELECTED);
  }

  function toggleProject(idx: number) {
    const newProjectsSelected = [...selectedSkills];
    newProjectsSelected[idx] = !newProjectsSelected[idx];
    setSelectedSkills(newProjectsSelected);
  }

  return <div className="max-w-[112rem] mx-auto px-8 py-24">
    <h1 className="font-bold">My recent <span className="blue">projects</span></h1>
    <div className="pt-4"/>
    <div className="flex gap-4 flex-wrap">
      <button className={`${allStyle}`} onClick={setAll}><p>All</p></button>
      {
        PROJECT_TYPES.map((projectType, idx) =>
          <button key={idx} className={`${projectsStyle[idx]}`} onClick={() => toggleProject(idx)}>
            <p>{projectType}</p>
          </button>
        )
      }
    </div>
    <div className="pt-12" />
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12 mx-auto">
      <div className="bg-lightgray text-white p-4 rounded">
        1
      </div>
    </div>
  </div>;
}
