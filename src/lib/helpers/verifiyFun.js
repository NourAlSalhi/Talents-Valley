export const onSubmit = (url) =>{
    fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        }
      })
        .then((response) => response.json())
        .catch((error) => console.log('error', error));
}