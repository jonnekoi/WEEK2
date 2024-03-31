'use strict';

async function fetchData() {
  const response = await fetch('https://reqres.in/api/users?page=2');
  const data = await response.json();
  console.log(data);
}
fetchData();
