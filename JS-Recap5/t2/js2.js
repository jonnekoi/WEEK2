'use strict';

async function postData() {
  const url = 'https://reqres.in/api/users';
  const userInfo = {
    name: 'Jonne',
    job: 'Työtön',
  };

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userInfo),
  });

  const data = await response.json();
  console.log(data);
}

postData();
