let items = [];
let ind = -1;

function additems(index) {
  const item = document.getElementById("grocery").value;

  if (ind < 0) {
    items.push(item);
  } else {
    items[ind] = item;
  }
  
  ind = -1;

  display();
}

function display() {
  let disp = items.map(function (value, index) {
    return `
        <div class="grocery-item">
        ${value}
        <button type="submit" class="submit-btn" onclick="editbox(${index})">edit</button>
        <button type="submit" class="submit-btn" onclick="removeitem(${index})">delete</button>
      </div>`;
  });

  document.getElementById("items").innerHTML = disp.join(" ");
}

// delete and remove button

function removeitem(index) {
  items.splice(index, 1);
  display();
}

function clearitems() {
  items.splice(0);
  display();
}

//editbox buttun

function editbox(index) {

  document.getElementById("grocery").value = items[index];
  ind = index;
}
