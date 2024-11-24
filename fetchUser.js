const url = "https://randomuser.me/api/";

const fetchUser = async () => {
  try {
    const resp = await fetch(url);
    const data = await resp.json();

    //   destructuring

    const person = data.results[0];

    const { phone, email } = person;
    const { large: image } = person.picture;
    const { password } = person.login;
    const { first, last } = person.name;
    const {
      street: { number, name },
    } = person.location;
    const {
      dob: { age },
    } = person;
    return {
      phone,
      email,
      image,
      age,
      password,
      street: `${number} ${name}`,
      name: `${first} ${last}`,
    };
  } catch (error) {
    console.error(error);
  }
};

export default fetchUser;
