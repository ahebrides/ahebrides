import { describe, it, expect } from "vitest";
import fs from "fs";
import path from "path";

describe("Case Study 002: Dè Tha Dol?", () => {
  const caseStudyPath = path.resolve(__dirname, "../pages/CaseStudyDeThaDol.tsx");
  const caseStudyContent = fs.readFileSync(caseStudyPath, "utf-8");

  it("contains zero em dashes in source copy", () => {
    expect(caseStudyContent).not.toContain("—");
    expect(caseStudyContent).not.toContain("\u2014");
  });

  it("references the correct brand punctuation ARTTEESHOW.", () => {
    expect(caseStudyContent).toContain("ARTTEESHOW.");
  });

  it("contains all eight required narrative sections", () => {
    expect(caseStudyContent).toContain("01 · The Origin");
    expect(caseStudyContent).toContain("02 · The Challenge");
    expect(caseStudyContent).toContain("03 · The Experiments");
    expect(caseStudyContent).toContain("04 · The Final Experience");
    expect(caseStudyContent).toContain("05 · The Motion Campaign");
    expect(caseStudyContent).toContain("06 · The Film");
    expect(caseStudyContent).toContain("07 · The Outcome");
    expect(caseStudyContent).toContain("08 · The Studio");
  });

  it("contains the core creative principle", () => {
    expect(caseStudyContent).toContain("The tools generated options.");
    expect(caseStudyContent).toContain("The creative direction turned those options into a finished experience.");
  });

  it("accurately names the three experimental environments", () => {
    expect(caseStudyContent).toContain("CLAUDE CODE");
    expect(caseStudyContent).toContain("GOOGLE ANTIGRAVITY");
    expect(caseStudyContent).toContain("LOVABLE");
  });

  it("accurately discloses the film production status as work in progress", () => {
    expect(caseStudyContent).toContain("PRODUCTION IN PROGRESS");
    expect(caseStudyContent).toContain("Transparent Creative Disclosure");
  });
});
