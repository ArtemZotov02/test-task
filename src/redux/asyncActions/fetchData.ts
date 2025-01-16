export const fetchData = <T>(url: string, dispatchFunc: (data: T) => any) => {
  return (dispatch:any) => {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();  
      })
      .then((data: T) => dispatch(dispatchFunc(data)))
      .catch((error) => {
        console.error('Error fetching products:', error);
      })
  }
}


