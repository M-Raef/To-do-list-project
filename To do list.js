const button = document.querySelector("button");
const container = document.getElementById("container");
const input = document.querySelector("input");
const form = document.querySelector("form");

container.addEventListener("click", (eo) => {
  // if (eo.target.className == "icon-trash icon") {
    
  //   eo.target.parentElement.parentElement.remove(); //we use two parent element to remove all of task
  // } else if (eo.target.className == "icon-sad2 icon") {
  //   //  eo.target.remove();
  //   eo.target.classList.add("dn");
  //   const heart = `<span class="icon-heart"></span>`;
  //   // eo.target.parentElement.innerHTML += heart

  //   eo.target.parentElement.parentElement
  //     .getElementsByClassName("task-text")[0]
  //     .classList.add("finish"); //getElementByClassName من خلاله يمكن استخده لل هتشمل  اليمينت او لل دكيومنت
  //   eo.target.parentElement.innerHTML += heart;
  // } else if (eo.target.className == "icon-heart") {
  //   eo.target.parentElement.parentElement
  //     .getElementsByClassName("task-text")[0]
  //     .classList.remove("finish");

  //   // eo.target.remove(); if i add this kode it will remove eo.target and later when i need add thr bottom kod it will not found eo.target
  //   eo.target.classList.add("dn");
  //   const sad = `<span class="icon-sad2 icon"></span>`;
  //   eo.target.parentElement.innerHTML += sad;
  // } else if (eo.target.className == "icon-star icon") {
  //   eo.target.classList.add("orange");
  //   container.prepend(eo.target.parentElement);
  // } else if (eo.target.className == "icon-star icon orange") {
  //   eo.target.classList.remove("orange");
  // }

  switch (eo.target.className) {
    case "icon-trash icon":
      eo.target.parentElement.parentElement.remove(); //we use two parent element to remove all of task
      break;

    case "icon-sad2 icon":
      //  eo.target.remove();
      eo.target.classList.add("dn");
      const heart = `<span class="icon-heart"></span>`;
      // eo.target.parentElement.innerHTML += heart

      eo.target.parentElement.parentElement
        .getElementsByClassName("task-text")[0]
        .classList.add("finish"); //getElementByClassName من خلاله يمكن استخده لل هتشمل  اليمينت او لل دكيومنت
      eo.target.parentElement.innerHTML += heart;
      break;

    case "icon-heart":
      eo.target.parentElement.parentElement
        .getElementsByClassName("task-text")[0]
        .classList.remove("finish");

      // eo.target.remove(); if i add this kode it will remove eo.target and later when i need add thr bottom kod it will not found eo.target
      eo.target.classList.add("dn");
      const sad = `<span class="icon-sad2 icon"></span>`;
      eo.target.parentElement.innerHTML += sad;
      break;

    case "icon-star icon":
      eo.target.classList.add("orange");
      container.prepend(eo.target.parentElement);
      break;

    case "icon-star icon orange":
      eo.target.classList.remove("orange");
      break;

    default:
      break;
  }
});

//button.addEventListener("click", (eo) => { you can right this code or right code at the bottom

form.addEventListener("submit", (eo) => {
  eo.preventDefault();
  const task = `
    <div class="task" >
            <span class="icon-star icon"></span>
            <p lang="ar" class="task-text" > ${input.value}  </p>
            <div>
                <span class="icon-trash icon"></span>
                <span class="icon-sad2 icon"></span>
            </div>
        </div>
    `;

  container.innerHTML += task;

  input.value = "";
});
