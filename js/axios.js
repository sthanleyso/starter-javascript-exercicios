axios.get('https://api.github.com/users/sthanleyso')
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.warn(error);
  });
