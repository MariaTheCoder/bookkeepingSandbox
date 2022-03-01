const accountPlan = [
  {
    number: 1010,
    name: "sales of goods",
    inclVAT: true,
    currentTotal: 0,
    type: "income",
    default: "credit",
  },
  {
    number: 2040,
    name: "purchase of goods",
    inclVAT: true,
    currentTotal: 0,
    type: "expense",
    default: "debit",
  },
  {
    number: 6750,
    name: "bank account",
    inclVAT: false,
    currentTotal: 0,
    type: "liability",
    default: "debit",
  },
];

/**
 * Uses optional chaining operator to check whether account number exists and its default is "credit".
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
 * @param {number} accountNumber
 */
const isCreditDefault = (accountNumber) =>
  !!(accountPlan.find((a) => a.number === accountNumber)?.default === "credit"); // ?. can return undefined, we use !! to ensure return value is boolean
