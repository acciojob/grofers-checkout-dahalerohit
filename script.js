
const getSumBtn = document.createElement("button");
getSumBtn.textContent = "Get Total Price";
document.body.appendChild(getSumBtn);

const getSum = () => {
 
  const prices = document.querySelectorAll(".price");
  let total = 0;

 
  prices.forEach(pricecell => {
 
    const value = Number(pricecell.textContent.trim());
    if (!isNaN(value)) total += value;
  });

 
  const oldAns = document.getElementById("ans");
  if (oldAns) oldAns.remove();

  
  const ans = document.createElement("p");
  ans.id = "ans";
  ans.textContent = total;


  document.body.appendChild(ans);
};


getSumBtn.addEventListener("click", getSum);
