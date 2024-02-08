export function fetchAllProducts() {
  return new Promise(async (resolve) =>{
    //TODO: we will not hard-code server URL here
    const response = await fetch('http://localhost:8080/products') 
    const data = await response.json()
    resolve({data})
  }
  );
}

export function fetchProductsByFilters(filter,sort,pagination) {
  // filter = {"category":"smartphone"}
  // TODO : on server we will support multi values
  let queryString = '';
  for(let key in filter){
    const categoryValues = filter[key]
    if(categoryValues.length){
      const lastCategoryValues = categoryValues[categoryValues.length-1]
      queryString += `${key}=${lastCategoryValues}&`
    }
  }

  for(let key in sort){
      queryString += `${key}=${sort[key]}&`
  }

  console.log(pagination)
  for(let key in pagination){
    queryString += `${key}=${pagination[key]}&`
}

  return new Promise(async (resolve) =>{
    const response = await fetch('http://localhost:8080/products?'+queryString) 
    const data = await response.json()
    const totalItems = 16
    resolve({data:{products:data,totalItems:+totalItems}})
  }
  );
}

export function fetchCategories() {
  return new Promise(async (resolve) =>{
    const response = await fetch('http://localhost:8080/categories') 
    const data = await response.json()
    resolve({data})
  }
  );
}

export function fetchBrands() {
  return new Promise(async (resolve) =>{
    const response = await fetch('http://localhost:8080/brands') 
    const data = await response.json()
    resolve({data})
  }
  );
}

export function fetchQuantities() {
  return new Promise(async (resolve) =>{
    const response = await fetch('http://localhost:8080/quantities') 
    const data = await response.json()
    resolve({data})
  }
  );
}

export function fetchAvailability() {
  return new Promise(async (resolve) =>{
    const response = await fetch('http://localhost:8080/availability') 
    const data = await response.json()
    resolve({data})
  }
  );
}