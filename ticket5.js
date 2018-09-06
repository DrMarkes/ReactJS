const getUser = (index) => {
  return new Promise((resolve, reject) => {
    const http = new XMLHttpRequest();
    const url = `https://jsonplaceholder.typicode.com/users/${index}`;
    http.open('GET', url);
    http.send();

    http.onreadystatechange = () => {
      if (http.readyState == 4 && http.status == 200) {
        try {
          resolve(JSON.parse(http.responseText));
        } catch (e) {
          reject(e);
        }
      }
    };
  });
};

const getUsers = (n) => {
  const promises = [];
  for (let i = 1; i <= 10; i ++) {
    promises.push(getUser(i));  
  }

  return Promise.all(promises);
};

getUsers(10).then((result) => {
  console.log(result);
});
