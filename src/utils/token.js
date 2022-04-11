export const setToken = (usertoken) => {
  let token = localStorage.setItem('TOKEN', usertoken)
}
export const getToken = () => {
  let mytoken = localStorage.getItem('TOKEN')
  return mytoken
}
export const removeToken = () => {
  localStorage.removeItem('TOKEN')
  return 'ok'
}