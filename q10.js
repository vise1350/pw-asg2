function filterByCategory(products, category) {
    const filterProducts = () => {
      return products.filter((product) => {
        return product.category === category;
      });
    };
  
    return filterProducts;
  }
  
  const products = [
    {
      name: "Product 1",
      category: "Electronics",
    },
    {
      name: "Product 2",
      category: "Clothing",
    },
    {
      name: "Product 3",
      category: "Electronics",
    },
  ];
  
  const filteredProducts = filterByCategory(products, "Electronics");
  console.log(filteredProducts); // [
  //   {
  //     name: "Product 1",
  //     category: "Electronics",
  //   },
  //   {
  //     name: "Product 3",
  //     category: "Electronics",
  //   },
  // ]
  