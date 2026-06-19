// //import { hashPassword } from './authHelper';

// export const hashPassword =  async(password) => {
//     try{
//         const saltRounds =10;
//         const hashedPassword = await bcryptjs.hash(password,saltRounds);
//         return hashedPassword;
//     }catch(error){
//         console.log(error);
//     }
// };


// export const comparePassword =  async (password,hashedPassword) =>{ 
//     return bcryptjs.compare(password,hashedPassword);
// };

import bcryptjs from 'bcryptjs'; // ✅ Required import

export const hashPassword = async (password) => {
  try {
    const saltRounds = 10;
    const hashedPassword = await bcryptjs.hash(password, saltRounds);
    return hashedPassword;
  } catch (error) {
    console.log("Hashing Error:", error);
  }
};

export const comparePassword = async (password, hashedPassword) => {
  return bcryptjs.compare(password, hashedPassword);
};
