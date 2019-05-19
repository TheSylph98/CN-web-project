import {getData } from "./index";

export function getFriendList() {
	return new Promise((resolve, reject) => {
		getData("danh-ba")
			.then(friends => {
				if (friends instanceof Array) {
					resolve(friends.map(friend => ({
						username: friend["ten"],
						email: friend["email"],
						phone: friend["sodienthoai"],
						id: friend["id"],
					})));
				} else {
					reject(friends["errors"]);
				}
			})
	})
}