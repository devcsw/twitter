import dotenv from 'dotenv';
dotenv.config();

//개발 단계에서 키들이 있는지 확인
function required(key, defaultValue = undefined){
    const value = process.env[key] || defaultValue;
    if(value == null){
        throw new Error(`key ${key} is undefiend`);
    }
}

//정의되지 않으면 defualtValue
export const config = {
    jwt: {
        secretKey: required('JWT_SECRET'),
        expireInSec: required('JWT_EXPIRES_SEC', 86400)
    },
    bcrypt: {
        saltRounds: required('BCRYPT_SALT_ROUNDS', 12)
    },
    host: {
        port: required('HOST_PORT', 8080)
    },
};