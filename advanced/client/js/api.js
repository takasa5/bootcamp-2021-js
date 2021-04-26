const url = "http://localhost:3000";

async function getAPI(path) {
    try {
        const resp = await fetch(url + path, {
            method: "GET"
        });
        return await resp.json();
    } catch (err) {
        // TODO: error handling
        console.log(err);
    }
}

async function postAPI(path, data = {}) {
    try {
        const resp = await fetch(url + path, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        return await resp.json();
    } catch (err) {
        // TODO: error handling
        console.log(err);
    }
}

export {getAPI, postAPI};