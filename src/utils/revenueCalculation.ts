type Percent = number & { __brand: "Percent" };

/**
 * Uitility function to validate if a value is a percent data type
 */
export const asPercent = (value: number): Percent => {
  if (value < 0 || value > 100) throw new Error("Must be between 0 and 100");
  return value as Percent;
}

export type CommissionInput = {
  premium: number;
  commissionRate: Percent;
  commissionShare: Percent;
  confidenceLevel: Percent;
};

/**
 * Calculate new commisison
 * Formula: Premium × First-Year Commission % × Commission Share % × Confidence Level %
 */
export const CalculateNewCommission = ({premium, commissionRate, commissionShare, confidenceLevel}: CommissionInput): number => {
  return (
    (premium *
      (commissionRate / 100) *
      (commissionShare / 100) *
      (confidenceLevel / 100))
  );
}

/**
 * Calculate trailer commisiion
 * Formula: Premium × Trailer % × Commission Share % × Confidence Level %
 */
export const CalculateTrailerCommision = () => {}

