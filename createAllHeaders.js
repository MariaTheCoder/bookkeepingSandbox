function createAllHeaders() {
  // declare parent element
  const headerContainer = document.getElementById("post-header-container");
  headerContainer.innerHTML = "";

  // create headers
  createHeader(
    "documentNumber-header",
    "Document number",
    "documentNumber",
    headerContainer
  );

  createHeader("date-header", "Date", "date", headerContainer);

  createHeader("text-header", "Transaction text", "text", headerContainer);

  createHeader("account-header", "Account", "account", headerContainer);

  createHeader(
    "debitCredit-header",
    "Debit/credit",
    "debitCredit",
    headerContainer
  );

  createHeader(
    "amount-header",
    "Transaction amount",
    "amount",
    headerContainer
  );

  createHeader("currency-header", "Currency", "currency", headerContainer);

  createHeader(
    "offsetAccount-header",
    "Offset account",
    "offsetAccount",
    headerContainer
  );

  return headerContainer;
}
