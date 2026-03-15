export type ClassInterval = {
  lower: number;
  upper: number;
};

export type GroupedTableRow = {
  lower: number;
  upper: number;
  label: string;
  frequency: number;
  cumulativeFrequency: number;
  midpoint: number;
  fx: number;
  lowerBoundary: number;
  upperBoundary: number;
};

export type GroupedPercentileResult = {
  percentile: number;
  position: number;
  value: number;
  classLabel: string;
  classIndex: number;
  lowerBoundary: number;
  cumulativeBefore: number;
  classFrequency: number;
  classSize: number;
};

export type GroupedModeResult = {
  value: number;
  classLabel: string;
  classIndex: number;
  lowerBoundary: number;
  previousFrequency: number;
  modalFrequency: number;
  nextFrequency: number;
  classSize: number;
  deltaOne: number;
  deltaTwo: number;
};

export type GroupedDatasetAnalysis = {
  rows: GroupedTableRow[];
  totalFrequency: number;
  totalFx: number;
  classSize: number;
  mean: number;
  percentile50: GroupedPercentileResult | null;
  median: GroupedPercentileResult | null;
  mode: GroupedModeResult | null;
};

export type RawDatasetAnalysis = {
  values: number[];
  sortedValues: number[];
  count: number;
  min: number;
  max: number;
  range: number;
  sum: number;
  mean: number;
  variance: number;
  meanDeviation: number;
  sumSquaredDeviation: number;
  sumAbsoluteDeviation: number;
};

export type GeneratedFrequencyDistribution = {
  classCount: number;
  classWidth: number;
  distribution: GroupedDatasetAnalysis;
};

export type PieChartSlice = {
  label: string;
  value: number;
  percentage: number;
  angle: number;
  startAngle: number;
  endAngle: number;
};

export type PieChartAnalysis = {
  total: number;
  slices: PieChartSlice[];
};

export function createGroupedDataset(
  intervals: ClassInterval[],
  frequencies: number[]
): GroupedDatasetAnalysis {
  if (intervals.length !== frequencies.length) {
    throw new Error("Intervals and frequencies must have the same length.");
  }

  let cumulativeFrequency = 0;
  let totalFx = 0;

  const rows = intervals.map((interval, index) => {
    const frequency = frequencies[index];
    const midpoint = (interval.lower + interval.upper) / 2;
    const fx = midpoint * frequency;
    cumulativeFrequency += frequency;
    totalFx += fx;

    return {
      lower: interval.lower,
      upper: interval.upper,
      label: formatIntervalLabel(interval.lower, interval.upper),
      frequency,
      cumulativeFrequency,
      midpoint,
      fx,
      lowerBoundary: interval.lower - 0.5,
      upperBoundary: interval.upper + 0.5
    };
  });

  const totalFrequency = frequencies.reduce((sum, value) => sum + value, 0);
  const classSize = rows[0]
    ? Number((rows[0].upperBoundary - rows[0].lowerBoundary).toFixed(4))
    : 0;
  const mean = totalFrequency ? totalFx / totalFrequency : 0;
  const percentile50 = calculateGroupedPercentile(rows, totalFrequency, classSize, 50);
  const median = percentile50;
  const mode = calculateGroupedMode(rows, classSize);

  return {
    rows,
    totalFrequency,
    totalFx,
    classSize,
    mean,
    percentile50,
    median,
    mode
  };
}

export function generateFrequencyDistribution(
  values: number[],
  options?: {
    classCount?: number;
  }
): GeneratedFrequencyDistribution {
  const sortedValues = sortNumbers(values);
  const min = sortedValues[0];
  const max = sortedValues[sortedValues.length - 1];

  if (min === undefined || max === undefined) {
    return {
      classCount: 0,
      classWidth: 0,
      distribution: createGroupedDataset([], [])
    };
  }

  const classCount =
    options?.classCount ?? Math.max(1, Math.round(Math.sqrt(sortedValues.length)));
  const classWidth = Math.max(1, Math.ceil((max - min + 1) / classCount));
  const intervals: ClassInterval[] = [];

  for (let index = 0; index < classCount; index += 1) {
    const lower = min + index * classWidth;
    const upper = lower + classWidth - 1;
    intervals.push({ lower, upper });
  }

  const frequencies = intervals.map(({ lower, upper }) =>
    sortedValues.filter((value) => value >= lower && value <= upper).length
  );

  return {
    classCount,
    classWidth,
    distribution: createGroupedDataset(intervals, frequencies)
  };
}

export function analyzeRawDataset(values: number[]): RawDatasetAnalysis {
  const sortedValues = sortNumbers(values);
  const count = sortedValues.length;
  const sum = sortedValues.reduce((total, value) => total + value, 0);
  const mean = count ? sum / count : 0;
  const sumSquaredDeviation = sortedValues.reduce(
    (total, value) => total + (value - mean) ** 2,
    0
  );
  const sumAbsoluteDeviation = sortedValues.reduce(
    (total, value) => total + Math.abs(value - mean),
    0
  );

  return {
    values: [...values],
    sortedValues,
    count,
    min: count ? sortedValues[0] : 0,
    max: count ? sortedValues[count - 1] : 0,
    range: count ? sortedValues[count - 1] - sortedValues[0] : 0,
    sum,
    mean,
    variance: count ? sumSquaredDeviation / count : 0,
    meanDeviation: count ? sumAbsoluteDeviation / count : 0,
    sumSquaredDeviation,
    sumAbsoluteDeviation
  };
}

export function analyzePieChart(
  items: Array<{
    label: string;
    value: number;
  }>
): PieChartAnalysis {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  let startAngle = -90;

  const slices = items.map((item) => {
    const percentage = total ? (item.value / total) * 100 : 0;
    const angle = total ? (item.value / total) * 360 : 0;
    const slice = {
      label: item.label,
      value: item.value,
      percentage,
      angle,
      startAngle,
      endAngle: startAngle + angle
    };
    startAngle += angle;
    return slice;
  });

  return {
    total,
    slices
  };
}

function calculateGroupedPercentile(
  rows: GroupedTableRow[],
  totalFrequency: number,
  classSize: number,
  percentile: number
): GroupedPercentileResult | null {
  if (!rows.length || !totalFrequency || !classSize) {
    return null;
  }

  const position = (percentile / 100) * totalFrequency;
  const classIndex = rows.findIndex((row) => row.cumulativeFrequency >= position);
  const row = rows[classIndex];

  if (!row) {
    return null;
  }

  const cumulativeBefore = classIndex > 0 ? rows[classIndex - 1].cumulativeFrequency : 0;
  const value =
    row.lowerBoundary + ((position - cumulativeBefore) / row.frequency) * classSize;

  return {
    percentile,
    position,
    value,
    classLabel: row.label,
    classIndex,
    lowerBoundary: row.lowerBoundary,
    cumulativeBefore,
    classFrequency: row.frequency,
    classSize
  };
}

function calculateGroupedMode(
  rows: GroupedTableRow[],
  classSize: number
): GroupedModeResult | null {
  if (!rows.length || !classSize) {
    return null;
  }

  const classIndex = rows.reduce((bestIndex, row, index, allRows) => {
    if (!allRows[bestIndex] || row.frequency > allRows[bestIndex].frequency) {
      return index;
    }
    return bestIndex;
  }, 0);
  const row = rows[classIndex];

  if (!row) {
    return null;
  }

  const previousFrequency = rows[classIndex - 1]?.frequency ?? 0;
  const nextFrequency = rows[classIndex + 1]?.frequency ?? 0;
  const deltaOne = row.frequency - previousFrequency;
  const deltaTwo = row.frequency - nextFrequency;
  const denominator = deltaOne + deltaTwo;

  if (denominator === 0) {
    return null;
  }

  return {
    value: row.lowerBoundary + (deltaOne / denominator) * classSize,
    classLabel: row.label,
    classIndex,
    lowerBoundary: row.lowerBoundary,
    previousFrequency,
    modalFrequency: row.frequency,
    nextFrequency,
    classSize,
    deltaOne,
    deltaTwo
  };
}

function sortNumbers(values: number[]) {
  return [...values].sort((left, right) => left - right);
}

function formatIntervalLabel(lower: number, upper: number) {
  return `${lower}-${upper}`;
}
