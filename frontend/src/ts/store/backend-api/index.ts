export function getData(url: string, body = {}) {

    let token = document.getElementById("csrf-token").getAttribute("content");

    return new Promise((resolve, reject) => {
        fetch(url, {
            method: "POST", 
            mode: "cors", 
            cache: "no-cache", 
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
                "X-CSRF-Token": token,
            },
            redirect: "follow",
            referrer: "no-referrer", 
            body: JSON.stringify(body), 
        })
        .then(response => {
           resolve(response.json());
        })
        .catch(e => {
            reject(e);
        })
    })
}

export * from "./user.api";
export * from "./bank.api";
export * from "./friend.api";
export * from "./services.api";
export * from "./notification.api";
