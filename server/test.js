
import jwt from 'jsonwebtoken';
//TODO: Make it secure
const jwtSecretKey = 'f2dn7x8hvzBwaQUeEdNhSvHxrwQAr63z';


const token = jwt.sign(
    {
        id: '1',
        username: 'bob',
        password: 'abcd1234',
        email: 'bob@gmail.com',
        url: 'https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png'
    },
    jwtSecretKey,
);

console.log(token);