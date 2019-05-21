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
            const contentType = response.headers.get("content-type");
            if (contentType && contentType.indexOf("application/json") !== -1) {
                resolve(response.json());
            } else {
                resolve(response.text());
            }
            
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
export * from "./transaction.api";
export * from "./mobile.api";
export * from "./bill.api";
