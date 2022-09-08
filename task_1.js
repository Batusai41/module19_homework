function all(obj) {
    for (let key in obj) {
        console.log(key);
        console.log(obj[key]);
    }
}

const obj = {
    name: 'Oliver',
    surname: 'Stone'
};

all(obj);