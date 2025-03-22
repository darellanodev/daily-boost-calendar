import CryptoJS from 'crypto-js'
// The secret key should be stored in a secure way. For example, in a .env file. This is for demo purposes only.
const secretKey = 'your-secret-key'

export const encryptPassword = (password: string) => {
  return CryptoJS.AES.encrypt(password, secretKey).toString()
}

export const decryptPassword = (encryptedPassword: string) => {
  const bytes = CryptoJS.AES.decrypt(encryptedPassword, secretKey)
  return bytes.toString(CryptoJS.enc.Utf8)
}
