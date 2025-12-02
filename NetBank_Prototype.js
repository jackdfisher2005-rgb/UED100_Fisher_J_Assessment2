// Transaction records for each account type
const transactionsData = {
  smartaccess: [
    { date: "05 Nov", desc: "Woolworths", amount: "-$45.20" },
    { date: "07 Nov", desc: "Salary Deposit", amount: "+$2200.00" },
    { date: "11 Nov", desc: "Fuel", amount: "-$102.90" }
  ],
  savings: [
    { date: "03 Nov", desc: "Interest Payment", amount: "+$15.12" },
    { date: "07 Nov", desc: "Salary Savings", amount: "+$1000.00" }
  ],
  credit: [
    { date: "05 Nov", desc: "Amazon", amount: "-$120.00" },
    { date: "09 Nov", desc: "Big W", amount: "-$68.00" }
  ]
};

const panel = document.querySelector(".transactions");
const list = document.getElementById("transactionlist");
const title = document.getElementById("transactiontitle");
const back = document.getElementById("backtoaccounts");

// Add click listeners to all View Transactions buttons
document.querySelectorAll(".view-transactions").forEach(btn => {
  btn.addEventListener("click", () => loadTransactions(btn.dataset.target));
});

// Load and display transactions for selected account
// Special handling for smartaccess to display as "Smart Access Account" instead of "Smartaccess Account"
function loadTransactions(acc) {
  list.innerHTML = "";
  let accountName = acc.charAt(0).toUpperCase() + acc.slice(1) + " Account";
  if (acc === "smartaccess") {
    accountName = "Smart Access Account";
  }
  title.textContent = accountName;
  transactionsData[acc].forEach(t => {
    const li = document.createElement("li");
    li.innerHTML = `<span>${t.date} — ${t.desc}</span><strong>${t.amount}</strong>`;
    list.appendChild(li);
  });
  document.getElementById("accounts").hidden = true;
  panel.hidden = false;
}

// Hide transaction panel and show accounts list
back.addEventListener("click", () => {
  panel.hidden = true;
  document.getElementById("accounts").hidden = false;
});

// Hide transaction panel on Escape key press
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !panel.hidden) {
    panel.hidden = true;
    document.getElementById("accounts").hidden = false;
  }
});