
// DOES NOT support tree shaking
import { get, nth } from 'lodash';
// DOES support tree shaking
// import { get, nth } from 'lodash-es';

import axios from 'axios';

async function getYesOrNo() {
    const yesNo = await axios.get('https://yesno.wtf/api/');
    return get(yesNo, 'answer', 'neither');
}

const letters = ['a', 'b', 'c', 'd', 'e', 'f'];
const numbers = {
    1: {
        2: {
            3: {
                4: 5,
            },
        },
    },
};

console.log(
    'Letter:',
    nth(letters, 3),
);

console.log(
    'Number:',
    get(numbers, '1.2.3.4'),
);

console.log(getYesOrNo());
