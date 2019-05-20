import {getData } from "./index";

export function getFriendList() {
	return new Promise((resolve, reject) => {
		getData("danh-ba")
			.then(friends => {
				friends = friends['danhba'];
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

export function addFriend(email) {
	let data = { email };
	return new Promise((resolve, reject) => {
		getData("them-danh-ba", data)
			.then(result => {
				if (result['link_user'] == 'success') {
					resolve();
				} else {
					reject(result['message']);
				}
			})
	})
}