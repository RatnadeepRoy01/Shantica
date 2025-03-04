// utils/jwt.js
import jwt from 'jsonwebtoken';

const secretKey = 'yourSecretKey'; 

export function verifyToken(token:string) {
  try {
    
    return jwt.verify(token, secretKey);
  } catch (err) {
    return null; 
  }
}
