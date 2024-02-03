let input = document.getElementById("input");
let ul = document.getElementById("ul");

function fun() {
  let li = document.createElement("li");
  let liText = document.createTextNode(input.value);
  ul.appendChild(li);
  li.appendChild(liText);
  input.value = " ";

  let edit = document.createElement("button");
  let editText = document.createTextNode("Edit");
  edit.appendChild(editText);
  li.appendChild(edit);
  edit.addEventListener("click", function () {
    let newText = prompt("Enter new text:");
    if (newText !== null) {
      liText.nodeValue = newText;
    }
  });

  let btn = document.createElement("button");
  let btnText = document.createTextNode("Delete");
  btn.appendChild(btnText);
  li.appendChild(btn);

  btn.addEventListener("click", function () {
    ul.removeChild(li);
  });
}
