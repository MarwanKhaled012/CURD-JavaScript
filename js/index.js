let ProductName = document.getElementById("ProductName");
let ProductPrice = document.getElementById("ProductPrice");
let ProductCategory = document.getElementById("ProductCategory");
let ProductDescription = document.getElementById("ProductDescription");
let contener = []; 
// localStorage.clear();
if (!(localStorage.getItem("contener") == null)) {
  contener = JSON.parse(localStorage.getItem("contener"));
  addEventListener();
}



function validationProductName(){
  regular= /^[A-Z]{1}[a-z]{3,8}$/
  if(regular.test(ProductName.value)){
    return true;
  }else{
    return false;
  }
}


function addEventListener() {
  
  var cartona = ``;
  for (i = 0; i < contener.length; i++) {
    cartona =
      cartona +
      `<tr>
      <td>${i}</td>
      <td>${contener[i].name}</td>
      <td>${contener[i].price}</td>
      <td>${contener[i].category}</td>
      <td>${contener[i].Description}</td>
      <td><button class="btn_2" onclick="Delete()">Delete</button></td>
      <td><button  class="btn_3">Update</button></td>
      </tr>
      `; 
  }
  document.getElementById("demo").innerHTML = cartona;
}



function test() {
  if(validationProductName() == true) {
    let product = {
      name: ProductName.value,
      price: ProductPrice.value,
      category: ProductCategory.value,
      Description: ProductDescription.value,
    }
    contener.push(product);
    addEventListener();
    localStorage.setItem("contener", JSON.stringify(contener));
    //   clearProduct();
  }else{
    alert("Please fill all the fields") ;
  }
}




function clearProduct() {
  ProductName.value = "";
  ProductPrice.value = "";
  ProductCategory.value = "";
  ProductDescription.value = "";
}





function Delete() {
  contener.pop();
  addEventListener();
  localStorage.setItem("contener", JSON.stringify(contener));
}


function search(term) {
    let cartona=``;
  for (i = 0; i < contener.length; i++) {
    if (contener[i].name.toLowerCase().includes(term.toLowerCase()) ===true) {
      cartona =
        cartona +
        `<tr>
        <td>${i}</td>
        <td>${contener[i].name}</td>
        <td>${contener[i].price}</td>
        <td>${contener[i].category}</td>
        <td>${contener[i].Description}</td>
        <td><button  class="btn_2" onclick="Delete()"  class="btn_2">Delete</button></td>
        <td><button class="btn_3">Update</button></td>
        </tr>
        `;
    }
  }
  document.getElementById("demo").innerHTML = cartona;
}


