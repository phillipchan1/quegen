import { observable, action, computed } from 'mobx';
import axios from 'axios';

class AuthStore {
	constructor() {
		const jwtoken = localStorage.getItem('jwtoken');

		if (jwtoken) {
			this.isAuthenticated = true;
		}
	}
	@observable
	isAuthenticated = false;

	@observable
	currentUser = {};

	@computed
	get authenticationStatus() {
		return this.isAuthenticated;
	}

	@action.bound
	logout() {
		localStorage.removeItem('jwtoken');
		this.isAuthenticated = false;
		this.currentUser = {};
	}

	@action.bound
	login(user, token) {
		(this.isAuthenticated = true), (this.currentUser = user);

		localStorage.setItem('jwtoken', token);
	}

	@action
	verifyToken() {
		const jwtoken = localStorage.getItem('jwtoken');
		let success = false;

		if (jwtoken) {
			axios
				.get(`/api/auth/verify`, {
					headers: {
						token: jwtoken,
					},
				})
				.then(res => {
					if (res.data.success) {
						success = true;
						this.login(res.data.user, jwtoken);
					} else {
						this.logout();
					}
				});

			setTimeout(() => {
				if (!success) {
					this.logout();
				}
			}, 5000);
		} else {
			this.logout();
		}
	}
}

export default AuthStore;
