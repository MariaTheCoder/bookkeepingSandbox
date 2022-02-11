let accountPlan = [
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

function isCreditDefault(accountInQuestion) {
  for (let i = 0; i < accountPlan.length; i++) {
    const account = accountPlan[i];
    if (account.number === accountInQuestion && account.default === "credit")
      return true;
  }
  return false;
}

console.log(isCreditDefault(1010));
console.log(isCreditDefault(2040));
console.log(isCreditDefault(6750));
