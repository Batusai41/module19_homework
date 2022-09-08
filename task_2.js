function ifThereIs(a, obj) {
    console.log(a in obj);
}

const obj = {
    name: 'Oliver',
    surname: 'Stone'
};

ifThereIs('name', obj);