"use client";

import {Fragment, useState} from "react";
import useBreakpoint from "@/components/useBreakpoint";
import {mapKElements, range, zip} from "@/components/utility";

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
  const breakpoint = useBreakpoint();

  const [selectedSkills, setSelectedSkills] = useState(NO_PROJECTS_SELECTED);
  const allSelected = selectedSkills.every(selected => !selected);

  const [selectedProjectIdx, setSelectedProjectIdx] = useState(-1);

  const allStyle = allSelected ? "blue" : "";
  const skillsStyle = selectedSkills.map(project => project ? "blue" : "");

  function setAll() {
    setSelectedSkills(NO_PROJECTS_SELECTED);
  }

  function toggleSkills(idx: number) {
    const newSkillsSelected = [...selectedSkills];
    newSkillsSelected[idx] = !newSkillsSelected[idx];
    setSelectedSkills(newSkillsSelected);
  }

  function toggleProject(idx: number) {
    if (selectedProjectIdx === idx) {
      setSelectedProjectIdx(-1);
    }
    else {
      setSelectedProjectIdx(idx);
    }
  }

  function getNCols() {
    if (breakpoint == "xl") return 3;
    if (breakpoint == "md") return 2;
    return 1;
  }

  function getProjectDescriptionColSpanStyle() {
    const cols = getNCols();
    if (cols == 3) {
      return "col-span-3";
    }
    if (cols == 2) {
      return "col-span-2";
    }
  }

  return <div className="max-w-[112rem] mx-auto px-8 py-24">
    <h1 className="font-bold">My recent <span className="blue">projects</span></h1>
    <div className="pt-4"/>
    <div className="flex gap-4 flex-wrap">
      <button className={`button ${allStyle}`} onClick={setAll}><p>All</p></button>
      {
        PROJECT_TYPES.map((projectType, idx) =>
          <button key={idx} className={`button ${skillsStyle[idx]}`} onClick={() => toggleSkills(idx)}>
            <p>{projectType}</p>
          </button>
        )
      }
    </div>
    <div className="pt-12" />
    <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-12 mx-auto">
      {
        mapKElements(PROJECTS, getNCols(), (row, idx) => (
          <Fragment key={idx[0]}>
            {
              [...zip(row, idx)].map(([project, idx]) => (
                <button onClick={() => toggleProject(idx)} key={idx} className={`${selectedProjectIdx === idx ? "bg-blue" : "bg-lightgray"} p-4 rounded-[24px]`}>
                  <h4>{project.name}</h4>
                  <p>{selectedProjectIdx == idx ? "Click to Close" : "Click to View More"}</p>
                </button>
              ))
            }
            {
              idx.includes(selectedProjectIdx) && (
                <div className={`bg-lightgray p-4 rounded-[24px] ${getProjectDescriptionColSpanStyle()}`}>
                  <p>Here {selectedProjectIdx} {idx}</p>
                </div>
              )
            }
          </Fragment>
        ))
      }
    </div>
  </div>;
}
