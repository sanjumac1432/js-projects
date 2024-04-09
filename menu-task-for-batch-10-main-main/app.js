const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "bison steak",
    category: "dinner",
    price: 22.99,
    img: "./images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];


// DISPLAY FUNCTION 
function display(menu) {
  let dis = menu.map(function (value, index) {
    return `
    
    <div class="col-xl-3 col-lg-4 col-md-6">
    <div class="wrap text-center">
      <div class="imageContainer">
        <img src="${value.img}" alt="image">
      </div>
      <h4>${value.title}</h4>
      <strong>$${value.price}</strong>
      <p> ${value.desc}</p>
      <button class="btn" data-id="all" onclick="AddtoCart(${index})">Add to Cart</button>
    </div>
  </div>`
  });

  document.getElementById('menu').innerHTML = dis.join(' ');
}
display(menu);


// DISPLAY BUTTON 
let categories = menu.reduce(function(pre,value)
{
  if(pre.includes(value.category) == false)
  {
    pre.push(value.category);
  }
  return pre;
},[]).map(function (value) {
  return ` <button type="button" class="btn" data-id="all" onclick="filterData('${value}')">${value}</button>`
})
document.getElementById('btn').innerHTML = `  

<button type="button" class="btn" data-id="all" onclick="sortDataN('price','Desc')">High to Low</button>
<button type="button" class="btn" data-id="all" onclick="sortDataN('price','Asc')">Low to High</button>
<button type="button" class="btn" data-id="all" onclick="sortDataS('title','Asc')">A to Z</button>
<button type="button" class="btn" data-id="all" onclick="sortDataS('title','Desc')">Z to A</button>` + categories.join(' ') + `<button type="button" class="btn" data-id="all" onclick="displayAll()">All</button>
`

// SEARCH FUNCTION 
function searchItem() {
  let SI = document.getElementById('searchItems').value.toLowerCase();
  let filteredData = menu.filter(function (value) {
    return value.title.toLowerCase().includes(SI);
  });

  display(filteredData);
}

function filterData(clickCategory) {
  let fD = menu.filter(function (value, index) {
    return value.category == clickCategory // || clickCategory == "All"
  });

  display(fD);
}

function displayAll() {
  display(menu);
}

// NORMAL SORTING
// function AtoZ() {
//   menu.sort(function (a, b) {
//     if (a.title > b.title){
//       return 1;
//     }
//     else{
//       return -1;
//     }
//   })
//   display(menu)
// }
// function ZtoA() {
//   menu.sort(function (a, b) {
//     if (a.title > b.title){
//       return -1;
//     }
//     else{
//       return 1;
//     }
//   })

//   display(menu)
// }



function sortDataS(props, order) {
  menu.sort(function (a, b) {
    if (order == 'Desc') {
      if (a[props] > b[props]) {
        return -1;
      }
      else {
        return 1;
      }
    }
    else {
      if (a[props] > b[props]) {
        return 1;
      }
      else {
        return -1;
      }
    }
  })
  display(menu);

}

// Sorting Methods 
function sortDataN(props, order) {
  menu.sort(function (a, b) {
    if (order == 'Desc') {
      return b[props] - a[props];
    }
    else {
      return a[props] - b[props];
    }
  })
  display(menu);

}

let cart = []
function AddtoCart(index)
{
  let selectedProduct = menu[index]
  let obj = cart.find(function(value)
  {
    return value.items.id == selectedProduct.id
  })
  if(!obj){

    cart.push({items:selectedProduct,quantity:1})
  }
  else
  {
    obj.quantity = quantity + 1;
  }

  document.getElementById('count').innerHTML = cart.length;
}

function mapCartItem() {
  // console.log(cart)
  let mapCartItem = cart.map(function (value,index) {
    return `
    <div id="productImage">
    <article class="menu-item">
      <img src="${value.items.img}" alt="menu item" class="photo" />
      <div class="item-info">
        <header>
          <h4>${value.items.title}</h4>
          <h4 class="price">${value.items.price}</h4>
        </header>
      </div>
    </article>
  </div>
  <br>
  <div id="productQuantity">
              <button class="btn btn-primary" fdprocessedid="3hp15" onclick="decQty(${index})"> – </button>
            <input type="text" class="btn btn-primary" value="${value.quantity}" fdprocessedid="pecz9" id="inp">
            <button class="btn btn-primary" fdprocessedid="7l8pfo" onclick="incQty(${index})"> + </button>
            </div><br>`
  })

  document.getElementById('totalAmount').innerHTML = mapCartItem.join(" ");
}

function incQty(index)
{
  cart[index].quantity = cart[index].quantity+1;

  mapCartItem();
}
function decQty(index)
{
  if(cart[index].quantity=0){

    cart[index].quantity = cart[index].quantity-1;
  }

  mapCartItem();
}

function totalprice() {
  let total = cart.reduce(function (pre, curr) {

    return pre + curr.items.price * curr.quantity;

  }, 0);

  document.getElementById('amt').innerHTML = '<b>Total:</b> ' + total;
}


