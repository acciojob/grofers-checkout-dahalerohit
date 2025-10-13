const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);


const getSum = () => {
//Add your code 


	let pricesall = document.querySelectorAll(".price");

let total = 0;
  pricesall.forEach(pricecell => {
    total += Number(pricecell.innerText);
  });
    

let totalrow = document.createElement("tr");

let totalcell = document.createElement("td");

totalcell.colSpan = 2;
totalcell.innerText = "Total price: Rs" + total;

totalrow.append(totalcell)

const tbody = document.querySelector("table tbody");
  tbody.append(totalrow);

  
};

getSumBtn.addEventListener("click", getSum);

