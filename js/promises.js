const myPromise = () => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.github.com/users/sthanleyso');
    xhr.send(null);

    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          reject('Erro na Requisição');
        }
      }
    }
  });
}

myPromise()
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.warn(error);
  });
