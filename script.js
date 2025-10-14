const getSumBtn = document.createElement("button");
getSumBtn.textContent = "Get Total Price";
document.body.appendChild(getSumBtn);

const getSum = () => {
  const pricesall = document.querySelectorAll(".price");
  let total = 0;

  pricesall.forEach(pricecell => {
    total += parseFloat(pricecell.innerText.trim()) || 0;
  });

  
  const existing = document.querySelector("#total-row");
  if (existing) existing.remove();

  // Create total row
  const totalrow = document.createElement("tr");
  totalrow.id = "total-row";

  const totalcell = document.createElement("td");
  totalcell.colSpan = 2;
  totalcell.innerText = "Total Price: Rs " + total;

  totalrow.appendChild(totalcell);

  
  const table = document.querySelector("table");
  table.appendChild(totalrow);
};

getSumBtn.addEventListener("click", getSum);
