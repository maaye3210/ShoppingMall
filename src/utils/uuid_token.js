import { v4 as uuidv4 } from 'uuid';
// 生成一个随机字符串，且每次执行不发生变化，游客身份永久储存
export const getUUID = () => {
  let uuid_token = localStorage.getItem('UUIDTOKEN')
  if (!uuid_token) {
    uuid_token = uuidv4()
    localStorage.setItem("UUIDTOKEN", uuid_token)
  }
  return uuid_token
}