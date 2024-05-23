export const usersArray = [];

export const addUserToList = (user) => {
    usersArray.push(user)
    
}

export const getUserLogged = () => {
    console.log(usersArray)
    return usersArray;
  };