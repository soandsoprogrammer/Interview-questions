function MyPromise(executor) {

    function resolve(value) {

    }

    function reject(err) {

    }

    try {
        executor(resolve, reject);
    } catch (err) {
        reject(err);
    }
}