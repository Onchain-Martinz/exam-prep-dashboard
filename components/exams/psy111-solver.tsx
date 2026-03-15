"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  analyzePieChart,
  analyzeRawDataset,
  createGroupedDataset,
  generateFrequencyDistribution
} from "@/lib/statistics";

type Psy111SolverProps = {
  questionNumber: number;
};

const QUESTION_ONE_INTERVALS = [
  { lower: 92, upper: 96 },
  { lower: 97, upper: 101 },
  { lower: 102, upper: 106 },
  { lower: 107, upper: 111 },
  { lower: 112, upper: 116 },
  { lower: 117, upper: 121 }
];

const QUESTION_ONE_FREQUENCIES = [10, 15, 19, 24, 18, 12];

const QUESTION_THREE_VALUES = [
  { label: "Oru East", value: 5.9 },
  { label: "Mbaitoli", value: 2.3 },
  { label: "Orlu", value: 3.4 },
  { label: "Mbaise", value: 2.5 },
  { label: "Ikeduru", value: 2.7 }
];

const QUESTION_FIVE_VALUES = [
  23, 36, 40, 28, 31, 39, 27, 44, 32, 48, 37, 33, 30, 57, 38, 29, 24, 26, 24, 38, 36,
  23, 19, 42, 30, 50, 18, 22, 32, 28, 34, 38, 35, 41, 27
];

const groupedCableAnalysis = createGroupedDataset(
  QUESTION_ONE_INTERVALS,
  QUESTION_ONE_FREQUENCIES
);
const cableMode = groupedCableAnalysis.mode;
const cableMedian = groupedCableAnalysis.median;
const cablePercentile50 = groupedCableAnalysis.percentile50;
const localGovernmentPie = analyzePieChart(QUESTION_THREE_VALUES);
const scoreDatasetAnalysis = analyzeRawDataset(QUESTION_FIVE_VALUES);
const groupedScoreDistribution = generateFrequencyDistribution(QUESTION_FIVE_VALUES, {
  classCount: 6
});

const presentationStudyNotes = [
  "Textual presentation explains the figures briefly in words.",
  "Tabular presentation arranges values in rows and columns for comparison.",
  "Graphical presentation uses visuals such as bar charts, histograms, and pie charts."
];

const scaleStudyNotes = [
  "Nominal: categories or names only.",
  "Ordinal: ordered categories without equal gaps.",
  "Interval: equal intervals but no true zero.",
  "Ratio: equal intervals with a true zero, so ratios are meaningful."
];

const pieSliceColors = [
  "rgb(var(--primary) / 0.92)",
  "rgb(var(--exam-day-foreground) / 0.9)",
  "rgb(var(--accent-hover) / 0.82)",
  "rgb(var(--muted-foreground) / 0.8)",
  "rgb(var(--secondary-foreground) / 0.76)"
];

export function Psy111Solver({ questionNumber }: Psy111SolverProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-4 border-t border-border/70 pt-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="subtle">Study Utility</Badge>
          <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-muted-foreground">
            PSY 111 Question {questionNumber}
          </p>
        </div>
        <Button
          type="button"
          variant={isOpen ? "ghost" : "secondary"}
          size="sm"
          className="h-8 px-3 text-[12px]"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? "Hide Solver" : "Open Solver"}
        </Button>
      </div>

      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="mt-3"
          >
            <div className="space-y-4 rounded-[1.05rem] border border-border/70 bg-muted/20 p-3.5 sm:p-4">
              {renderSolver(questionNumber)}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

function renderSolver(questionNumber: number) {
  switch (questionNumber) {
    case 1:
      return <QuestionOneSolver />;
    case 2:
      return <QuestionTwoSolver />;
    case 3:
      return <QuestionThreeSolver />;
    case 4:
      return <QuestionFourSolver />;
    case 5:
      return <QuestionFiveSolver />;
    case 6:
      return <QuestionSixSolver />;
    default:
      return null;
  }
}

function QuestionOneSolver() {
  const thirdClass = groupedCableAnalysis.rows[2];

  return (
    <SolverLayout
      title="Question 1 Solver"
      description="Grouped statistics using the cable-load frequency table."
    >
      <DatasetCard
        title="Dataset"
        content="Load classes: 92-96, 97-101, 102-106, 107-111, 112-116, 117-121 | Frequencies: 10, 15, 19, 24, 18, 12"
      />

      <MetricGrid>
        <MetricCard label="Grouped Mean" value={formatNumber(groupedCableAnalysis.mean)} />
        <MetricCard label="Class Size" value={formatNumber(groupedCableAnalysis.classSize, 0)} />
        <MetricCard
          label="3rd Class Upper Boundary"
          value={thirdClass ? formatNumber(thirdClass.upperBoundary) : "N/A"}
        />
        <MetricCard
          label="Total Frequency"
          value={formatNumber(groupedCableAnalysis.totalFrequency, 0)}
        />
      </MetricGrid>

      <SolverTable
        caption="Grouped frequency table"
        columns={["Class interval", "f", "cf", "Midpoint", "fx"]}
        rows={groupedCableAnalysis.rows.map((row) => [
          row.label,
          formatNumber(row.frequency, 0),
          formatNumber(row.cumulativeFrequency, 0),
          formatNumber(row.midpoint),
          formatNumber(row.fx)
        ])}
      />

      <FormulaDisclosure title="How it was derived">
        <FormulaLine
          label="Cumulative frequency"
          value="10, 25, 44, 68, 86, 98"
        />
        <FormulaLine
          label="Mean formula"
          value={`Grouped mean = Σfx / Σf = ${formatNumber(groupedCableAnalysis.totalFx)} / ${formatNumber(groupedCableAnalysis.totalFrequency, 0)}`}
        />
        <FormulaLine
          label="Class width"
          value={`106.5 - 101.5 = ${formatNumber(groupedCableAnalysis.classSize, 0)}`}
        />
      </FormulaDisclosure>
    </SolverLayout>
  );
}

function QuestionTwoSolver() {
  if (!cablePercentile50 || !cableMode) {
    return null;
  }

  return (
    <SolverLayout
      title="Question 2 Solver"
      description="Reusing the grouped table from Question 1 to compute P50 and the grouped mode."
    >
      <MetricGrid>
        <MetricCard label="50th Percentile" value={formatNumber(cablePercentile50.value)} />
        <MetricCard label="Grouped Mode" value={formatNumber(cableMode.value)} />
      </MetricGrid>

      <div className="grid gap-2.5 md:grid-cols-2">
        <FormulaCard
          title="50th Percentile inputs"
          lines={[
            `N = ${formatNumber(groupedCableAnalysis.totalFrequency, 0)}`,
            `Position = 50/100 x N = ${formatNumber(cablePercentile50.position)}`,
            `Percentile class = ${cablePercentile50.classLabel}`,
            `L = ${formatNumber(cablePercentile50.lowerBoundary)}, cf before = ${formatNumber(cablePercentile50.cumulativeBefore, 0)}, f = ${formatNumber(cablePercentile50.classFrequency, 0)}, h = ${formatNumber(cablePercentile50.classSize, 0)}`
          ]}
        />
        <FormulaCard
          title="Mode inputs"
          lines={[
            `Modal class = ${cableMode.classLabel}`,
            `L = ${formatNumber(cableMode.lowerBoundary)}, h = ${formatNumber(cableMode.classSize, 0)}`,
            `f1 = ${formatNumber(cableMode.modalFrequency, 0)}, f0 = ${formatNumber(cableMode.previousFrequency, 0)}, f2 = ${formatNumber(cableMode.nextFrequency, 0)}`,
            `d1 = ${formatNumber(cableMode.deltaOne, 0)}, d2 = ${formatNumber(cableMode.deltaTwo, 0)}`
          ]}
        />
      </div>

      <FormulaDisclosure title="How it was derived">
        <FormulaLine
          label="Percentile formula"
          value={`P50 = L + [(kN/100 - cf before) / f] x h = ${formatNumber(cablePercentile50.value)}`}
        />
        <FormulaLine
          label="Mode formula"
          value={`Mode = L + [d1 / (d1 + d2)] x h = ${formatNumber(cableMode.value)}`}
        />
      </FormulaDisclosure>
    </SolverLayout>
  );
}

function QuestionThreeSolver() {
  return (
    <SolverLayout
      title="Question 3 Solver"
      description="Pie-chart preparation for the local government allocation data."
    >
      <MetricGrid>
        <MetricCard label="Total Allocation" value={`${formatNumber(localGovernmentPie.total)} bn`} />
      </MetricGrid>

      <div className="grid gap-3 md:grid-cols-[minmax(0,13rem)_minmax(0,1fr)] md:items-start">
        <PieChartCard />
        <SolverTable
          caption="Pie-chart summary"
          columns={["Local government", "Value", "%", "Angle"]}
          rows={localGovernmentPie.slices.map((slice) => [
            slice.label,
            formatNumber(slice.value),
            `${formatNumber(slice.percentage)}%`,
            `${formatNumber(slice.angle)}deg`
          ])}
          compact
        />
      </div>

      <StudyNote title="Study note: Methods of presenting statistical data" notes={presentationStudyNotes} />
    </SolverLayout>
  );
}

function QuestionFourSolver() {
  if (!cableMedian || !cableMode) {
    return null;
  }

  return (
    <SolverLayout
      title="Question 4 Solver"
      description="Using the Question 1 grouped frequency table for mode, median, and percentage conversion."
    >
      <MetricGrid>
        <MetricCard label="Grouped Mode" value={formatNumber(cableMode.value)} />
        <MetricCard label="Grouped Median" value={formatNumber(cableMedian.value)} />
        <MetricCard label="0.6428 as %" value="64.28%" />
      </MetricGrid>

      <div className="grid gap-2.5 md:grid-cols-2">
        <FormulaCard
          title="Median inputs"
          lines={[
            `Median class = ${cableMedian.classLabel}`,
            `L = ${formatNumber(cableMedian.lowerBoundary)}, cf before = ${formatNumber(cableMedian.cumulativeBefore, 0)}`,
            `f = ${formatNumber(cableMedian.classFrequency, 0)}, h = ${formatNumber(cableMedian.classSize, 0)}`,
            `N/2 = ${formatNumber(cableMedian.position)}`
          ]}
        />
        <FormulaCard
          title="Mode inputs"
          lines={[
            `Modal class = ${cableMode.classLabel}`,
            `f1 = ${formatNumber(cableMode.modalFrequency, 0)}, f0 = ${formatNumber(cableMode.previousFrequency, 0)}, f2 = ${formatNumber(cableMode.nextFrequency, 0)}`,
            `d1 = ${formatNumber(cableMode.deltaOne, 0)}, d2 = ${formatNumber(cableMode.deltaTwo, 0)}`,
            `0.6428 x 100 = 64.28%`
          ]}
        />
      </div>

      <FormulaDisclosure title="How it was derived">
        <FormulaLine
          label="Median formula"
          value={`Median = L + [(N/2 - cf before) / f] x h = ${formatNumber(cableMedian.value)}`}
        />
        <FormulaLine
          label="Mode formula"
          value={`Mode = L + [d1 / (d1 + d2)] x h = ${formatNumber(cableMode.value)}`}
        />
      </FormulaDisclosure>
    </SolverLayout>
  );
}

function QuestionFiveSolver() {
  return (
    <SolverLayout
      title="Question 5 Solver"
      description="Using the corrected complete dataset of 35 student scores."
    >
      <DatasetCard
        title="Sorted dataset"
        content={scoreDatasetAnalysis.sortedValues.join(", ")}
        monospace
      />

      <MetricGrid>
        <MetricCard label="Students" value={formatNumber(scoreDatasetAnalysis.count, 0)} />
        <MetricCard label="Min - Max" value={`${scoreDatasetAnalysis.min} - ${scoreDatasetAnalysis.max}`} />
        <MetricCard label="Class Count" value={formatNumber(groupedScoreDistribution.classCount, 0)} />
        <MetricCard label="Class Width" value={formatNumber(groupedScoreDistribution.classWidth, 0)} />
      </MetricGrid>

      <SolverTable
        caption="Grouped frequency distribution"
        columns={["Class interval", "Frequency"]}
        rows={groupedScoreDistribution.distribution.rows.map((row) => [
          row.label,
          formatNumber(row.frequency, 0)
        ])}
        compact
      />

      <StudyNote title="Study note: Scales of measurement" notes={scaleStudyNotes} />
    </SolverLayout>
  );
}

function QuestionSixSolver() {
  return (
    <SolverLayout
      title="Question 6 Solver"
      description="Raw-score analysis using the corrected Question 5 dataset."
    >
      <MetricGrid>
        <MetricCard label="Mean" value={formatNumber(scoreDatasetAnalysis.mean)} />
        <MetricCard label="Variance" value={formatNumber(scoreDatasetAnalysis.variance)} />
        <MetricCard label="Mean Deviation" value={formatNumber(scoreDatasetAnalysis.meanDeviation)} />
      </MetricGrid>

      <FormulaDisclosure title="How it was derived">
        <FormulaLine
          label="Mean"
          value={`x-bar = Σx / N = ${formatNumber(scoreDatasetAnalysis.sum)} / ${formatNumber(scoreDatasetAnalysis.count, 0)} = ${formatNumber(scoreDatasetAnalysis.mean)}`}
        />
        <FormulaLine
          label="Variance"
          value={`Variance = Σ(x - x-bar)^2 / N = ${formatNumber(scoreDatasetAnalysis.sumSquaredDeviation)} / ${formatNumber(scoreDatasetAnalysis.count, 0)} = ${formatNumber(scoreDatasetAnalysis.variance)}`}
        />
        <FormulaLine
          label="Mean deviation"
          value={`Mean deviation = Σ|x - x-bar| / N = ${formatNumber(scoreDatasetAnalysis.sumAbsoluteDeviation)} / ${formatNumber(scoreDatasetAnalysis.count, 0)} = ${formatNumber(scoreDatasetAnalysis.meanDeviation)}`}
        />
      </FormulaDisclosure>
    </SolverLayout>
  );
}

function SolverLayout({
  title,
  description,
  children
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <h4 className="text-sm font-semibold tracking-[-0.02em] text-foreground sm:text-[15px]">
          {title}
        </h4>
        <p className="text-sm leading-6 text-muted-foreground">{description}</p>
      </div>
      {children}
    </div>
  );
}

function DatasetCard({
  title,
  content,
  monospace = false
}: {
  title: string;
  content: string;
  monospace?: boolean;
}) {
  return (
    <div className="rounded-[0.95rem] border border-border/60 bg-background/80 p-3">
      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
        {title}
      </p>
      <p
        className={[
          "mt-2 break-words text-sm leading-6 text-foreground",
          monospace ? "font-mono text-[12.5px] sm:text-[13px]" : ""
        ].join(" ")}
      >
        {content}
      </p>
    </div>
  );
}

function MetricGrid({ children }: { children: React.ReactNode }) {
  return <div className="grid gap-2.5 sm:grid-cols-2 xl:grid-cols-4">{children}</div>;
}

function MetricCard({
  label,
  value
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-[0.95rem] border border-border/60 bg-background/80 p-3">
      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
        {label}
      </p>
      <p className="mt-2 text-sm font-semibold tracking-[-0.02em] text-foreground sm:text-[15px]">
        {value}
      </p>
    </div>
  );
}

function SolverTable({
  caption,
  columns,
  rows,
  compact = false
}: {
  caption: string;
  columns: string[];
  rows: string[][];
  compact?: boolean;
}) {
  return (
    <div className="space-y-2">
      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
        {caption}
      </p>
      <div className="overflow-x-auto rounded-[0.95rem] border border-border/60 bg-background/80">
        <table className={`w-full ${compact ? "min-w-[26rem]" : "min-w-[34rem]"}`}>
          <thead>
            <tr className="border-b border-border/60">
              {columns.map((column) => (
                <th
                  key={column}
                  className="px-3 py-2 text-left text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground sm:px-4"
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={`${caption}-${rowIndex}`} className="border-t border-border/40 first:border-t-0">
                {row.map((cell, cellIndex) => (
                  <td
                    key={`${caption}-${rowIndex}-${cellIndex}`}
                    className="px-3 py-2.5 text-sm leading-6 text-foreground sm:px-4"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function FormulaCard({
  title,
  lines
}: {
  title: string;
  lines: string[];
}) {
  return (
    <div className="rounded-[0.95rem] border border-border/60 bg-background/80 p-3">
      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
        {title}
      </p>
      <div className="mt-2 space-y-1.5">
        {lines.map((line) => (
          <p key={line} className="text-sm leading-6 text-foreground">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}

function FormulaDisclosure({
  title,
  children
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <details className="rounded-[0.95rem] border border-border/60 bg-background/80 p-3">
      <summary className="cursor-pointer list-none text-sm font-medium text-foreground">
        {title}
      </summary>
      <div className="mt-3 space-y-2">{children}</div>
    </details>
  );
}

function FormulaLine({
  label,
  value
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="space-y-1">
      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
        {label}
      </p>
      <p className="break-words text-sm leading-6 text-foreground">{value}</p>
    </div>
  );
}

function StudyNote({
  title,
  notes
}: {
  title: string;
  notes: string[];
}) {
  return (
    <div className="rounded-[0.95rem] border border-border/60 bg-background/80 p-3">
      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
        {title}
      </p>
      <div className="mt-2 space-y-1.5">
        {notes.map((note) => (
          <p key={note} className="text-sm leading-6 text-foreground">
            {note}
          </p>
        ))}
      </div>
    </div>
  );
}

function PieChartCard() {
  return (
    <div className="rounded-[0.95rem] border border-border/60 bg-background/80 p-3">
      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
        Generated pie chart
      </p>
      <div className="mt-3 mx-auto w-full max-w-[15rem]">
        <svg viewBox="0 0 100 100" className="h-auto w-full">
          {localGovernmentPie.slices.map((slice, index) => (
            <path
              key={slice.label}
              d={describePieSlice(50, 50, 44, slice.startAngle, slice.endAngle)}
              style={{ fill: pieSliceColors[index % pieSliceColors.length] }}
              stroke="rgb(var(--background))"
              strokeWidth="1.4"
            />
          ))}
        </svg>
      </div>

      <div className="mt-3 grid gap-1.5">
        {localGovernmentPie.slices.map((slice, index) => (
          <div key={slice.label} className="flex items-center gap-2 text-sm text-foreground">
            <span
              className="h-2.5 w-2.5 shrink-0 rounded-full"
              style={{ backgroundColor: pieSliceColors[index % pieSliceColors.length] }}
            />
            <span className="truncate">{slice.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function describePieSlice(
  centerX: number,
  centerY: number,
  radius: number,
  startAngle: number,
  endAngle: number
) {
  const start = polarToCartesian(centerX, centerY, radius, endAngle);
  const end = polarToCartesian(centerX, centerY, radius, startAngle);
  const largeArcFlag = endAngle - startAngle > 180 ? 1 : 0;

  return [
    `M ${centerX} ${centerY}`,
    `L ${start.x} ${start.y}`,
    `A ${radius} ${radius} 0 ${largeArcFlag} 0 ${end.x} ${end.y}`,
    "Z"
  ].join(" ");
}

function polarToCartesian(centerX: number, centerY: number, radius: number, angle: number) {
  const angleInRadians = (Math.PI / 180) * angle;

  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians)
  };
}

function formatNumber(value: number, maximumFractionDigits = 2) {
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits
  }).format(value);
}
