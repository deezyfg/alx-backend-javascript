// Define a branded type for MajorCredits
export interface MajorCredits {
  credits: number & { __brand: 'MajorCredits.credits' };
}

// Define a branded type for MinorCredits
export interface MinorCredits {
  credits: number & { __brand: 'MinorCredits.credits' };
}

// Function to sum MajorCredits
export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return { credits: subject1.credits + subject2.credits } as MajorCredits;
}

// Function to sum MinorCredits
export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return { credits: subject1.credits + subject2.credits } as MinorCredits;
}