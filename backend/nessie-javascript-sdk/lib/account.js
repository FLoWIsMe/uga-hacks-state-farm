
 	var Config = require('capital_one');

	 export default Account = {
		initWithKey: function(apiKey) {
			Config.setApiKey(apiKey);
			return this;
		},
		urlWithEntity: function() {
			return Config.baseUrl + '/accounts/';
		},
		urlWithCustomerEntity: function() {
			return Config.baseUrl + '/customers/';
		},
		apiKey: function() {
			return Config.apiKey;
		},
		/**
		 * @Method: getAllAccounts
		 * @Brief: Each index in the array is the JSON object of an individual customer.
		 * @Returns an array of JSON objects getting all the customers.
		 **/
		getAllAccounts: function() {
			var accounts;
			var xhr = new XMLHttpRequest();
			xhr.open('GET', this.urlWithEntity() + '?key=' + this.apiKey(), false);
			xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
			xhr.send();
	
			if (xhr.status === 200) {
				accounts = JSON.parse(xhr.responseText);
			}
			return accounts;
		},
		/**
		 * @Method: getAllByType
		 * @Brief: Gets all accounts of a given type.
		 * @Parameters: type
		 * @Note: Accepts a string of the account type. 3 possibilities: Credit Card, Savings, Checking.
		 * @Returns an array of JSON objects with the accounts.
		 **/
		getAllByType: function(type) {
			var accounts;
			var xhr = new XMLHttpRequest();
			xhr.open('GET', this.urlWithEntity() + '?type=' + type + '&key=' + this.apiKey(), false);
			xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
			xhr.send();
	
			if (xhr.status === 200) {
				accounts = JSON.parse(xhr.responseText);
			}
			return accounts;
		},
		/**
		 * @Method: getAccountById
		 * @Brief: Returns the account specified by its account ID.
		 * @Parameters: AccountId
		 * @Note: Accepts a string of the account ID.
		 * @Returns a JSON object with the account info.
		 **/
		getAccountById: function(id) {
			var account;
			var xhr = new XMLHttpRequest();
			xhr.open('GET', this.urlWithEntity() + id + '?key=' + this.apiKey(), false);
			xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
			xhr.send();
	
			if (xhr.status === 200) {
				account = JSON.parse(xhr.responseText);
			}
			return account;
		},
		/**
		 * @Method: getAllByCustomerId
		 * @Parameters: CustomerId
		 * @Note: Accepts a string of the customer ID
		 * @Returns all accounts associated with a given customer ID as an array of JSON objects.
		 **/
		getAllByCustomerId: function(customerId) {
			var accounts;
			var xhr = new XMLHttpRequest();
			xhr.open('GET', this.urlWithCustomerEntity() + customerId + '/accounts?key=' + this.apiKey(), false);
			xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
			xhr.send();
	
			if (xhr.status === 200) {
				accounts = JSON.parse(xhr.responseText);
			}
			return accounts;
		},
		/**
		 * @Method: updateAccount
		 * @Brief: Updates an account's nickname.
		 * @Parameters: AccountID, Accountobject
		 * @Returns the http response code.
		 **/
		updateAccount: function(accountId, account) {
			var respCode;
			var xhr = new XMLHttpRequest();
			xhr.open('PUT', this.urlWithEntity() + accountId + '?key=' + this.apiKey(), false);
			xhr.setRequestHeader('Content-Type', 'application/json');
			xhr.send(JSON.stringify(account));
	
			respCode = xhr.status;
			return respCode;
		},
		/**
		 * @Method: createAccount
		 * @Brief: Creates a new account
		 * @Parameters: CustomerID, accountobject
		 * @Returns the http response code.
		 **/
		createAccount: function(custID, account) {
			var respCode;
			var xhr = new XMLHttpRequest();
			xhr.open('POST', this.urlWithCustomerEntity() + custID + '/accounts?key=' + this.apiKey(), false);
			xhr.setRequestHeader('Content-Type', 'application/json');
			xhr.send(JSON.stringify(account));
	
			respCode = xhr.status;
			return respCode;
		},
		/**
		 * @Method: deleteAccount
		 * @Brief: delete a given account by accountId.
		 * @Parameters: AccountId.
		 * @Returns the http response code.
		 **/
		deleteAccount: function(accountId) {
			var respCode;
			var xhr = new XMLHttpRequest();
			xhr.open('DELETE', this.urlWithEntity() + accountId + '?key=' + this.apiKey(), false);
			xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
			xhr.send();
	
			respCode = xhr.status;
			return respCode;
		}
	};