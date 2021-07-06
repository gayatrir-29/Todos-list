let x = document.querySelector("#add");
x.addEventListener("click", (e) => {
  e.preventDefault();
  itemarr = [];
  let y1 = document.querySelector("#title1").value;
  let z1 = document.querySelector("#description1").value;

  if (localStorage.getItem("ite") == null) {
    itemarr.push([y1, z1]);
    localStorage.setItem("ite", JSON.stringify(itemarr));
  } else {
    itearrstr = localStorage.getItem("ite");
    itemarr = JSON.parse(itearrstr);
    itemarr.push([y1, z1]);
    localStorage.setItem("ite", JSON.stringify(itemarr));
  }

  str = "";
  itemarr.forEach((element) => {
    str += `<div class="card" style="width: 18rem;" id="c1">
            <div class="card-body">
              <h6 class="card-subtitle mb-2 text-muted" id="item1" >${element[0]}</h6>
              <h6 class="card-text"id="desc1">${element[1]}</h6>
                        </div>
                        </div>`;
  });
  document.querySelector(".c").innerHTML = str;
});
let x1 = document.querySelector("#car");
x1.addEventListener("click", (e) => {
  let y1 = document.querySelector("#title1");
  let z1 = document.querySelector("#description1");
  y1.value = null;
  z1.value = null;
});
