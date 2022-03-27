function balanceOfPosts() {
  const imbalance = document.getElementById("imbalance");
  let sum = 0;

  for (let i = 0; i < storedData.length; i++) {
    const element = storedData[i].columns;

    if (!element.offsetAccount && !!element.account) {
      const amount = element.amount;
      if (element.debitCredit === "debit") {
        sum += parseFloat(amount);
      } else {
        sum -= parseFloat(amount);
      }
    }
  }

  sum === 0
    ? (imbalance.innerText = "")
    : (imbalance.innerText = `Imbalance: ${sum.toFixed(2)}`);
}
