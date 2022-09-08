function objectWithoutProto() {
    const emptyObj = Object.create(null)
    console.log(emptyObj);
}

objectWithoutProto();