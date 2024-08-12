// utils.js

/**
 * Calculates the current age based on the provided birth year.
 * @param {number} 
 * @returns {number} 
 */
export function currentAgeForBirthYear(birthYear) {
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
  }
  