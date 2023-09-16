document.addEventListener("DOMContentLoaded", function () {
    const fetchBooksButton = document.getElementById("fetchProducts");
  
    fetchBooksButton.addEventListener("click", function () {
      fetch(`https://raw.githubusercontent.com/jagratijain/225_lab7_wsd/main/producr.json`)
        //   .then((response) =>
        //     response.json().then((res) => {
        //       console.log(res);
        //     })
        //   )
  
        .then((response) => {
          // console.log(response);
          response.json().then((res) => {
            res.forEach((products) => {
              console.log(products);
              const productItem = document.getElementById("productList");
  
              productItem.innerHTML += `<tr style="border: 1px solid black" >
                      <td>${products.name}</td>
                      <td>${products.description}</td>
                      <td>${products.price}</td>
                      <td><a href="${products.image_url}">${products.image_url}</a></td>
                      </tr>`;
            });
          });
        })
  
        .catch((error) => {
          console.error("Error fetching products data:", error);
        });
    });
  });
  