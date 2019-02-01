async function getUsersList(startsWith) {
  try {
    let response = await fetch(
      //?all=1 i think it doesn't work correctly... or i don't understand smth
      `https://api.github.com/users?since=${startsWith}` 
    ).then(response => response.json());
    return [...response]; //bcz returns pseudo-array
  } catch (error) {
    throw new Error('no response from server');
  }
}

async function getUserAvatars(n) {
  try {
    let usersList = await getUsersList(0);

    if (n > usersList.length) {
      const serverRequestsNumber = Math.ceil(n / usersList.length);

      for (let i = 1; i < serverRequestsNumber; i++) {
        usersList = [...usersList, ...(await getUsersList(n * i))];
      }
    }
    usersList.length = n;
    const userAvatars = usersList.map(({avatar_url, id, login}) => ({
      avatar: avatar_url,
      id,
      username: login
    }));

    return userAvatars;
  } catch (error) {
    console.log(error);
  }
}

(async () => {
  console.table(await getUserAvatars(37));
})();
