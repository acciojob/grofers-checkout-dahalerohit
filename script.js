const getSumBtn = document.createElement("button");
getSumBtn.textContent = "Get Total Price";
document.body.appendChild(getSumBtn);

const getSum = () => {
  const prices = document.querySelectorAll(".price");
  let total = 0;

  prices.forEach(pricecell => {
    total += parseFloat(pricecell.textContent.trim()) || 0;
  });


  const existing = document.getElementById("total-row");
  if (existing) existing.remove();


  const totalRow = document.createElement("tr");
  totalRow.id = "total-row";

  const totalCell = document.createElement("td");
  totalCell.textContent = "Total Price: Rs " + total;

 
  totalRow.appendChild(totalCell);
  const table = document.querySelector("table");
  const tbody = table.querySelector("tbody") || table;
  tbody.appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);
