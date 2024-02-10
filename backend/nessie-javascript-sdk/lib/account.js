import { Config } from './capital_one.js';

export let Account = {
    initWithKey: function(apiKey) {
        Config.setApiKey(apiKey);
        return this;
    },
    urlWithEntity: function() {
        return Config.baseUrl + '/accounts';
    },
    urlWithCustomerEntity: function() {
        return Config.baseUrl + '/customers';
    },
    apiKey: function() {
        return Config.apiKey;
    },
    /**
     * @Method: getAllAccounts
     * @Brief: Each index in the array is the JSON object of an individual customer.
     * @Returns a Promise resolving to an array of JSON objects getting all the customers.
     **/
    getAllAccounts: async function() {
        try {
            const response = await fetch(this.urlWithEntity() + '?key=' + this.apiKey());
            const accounts = await response.json();
            return accounts;
        } catch (error) {
            console.error('Error fetching all accounts:', error);
            throw error;
        }
    },
    /**
     * @Method: getAllByType
     * @Brief: Gets all accounts of a given type.
     * @Parameters: type
     * @Note: Accepts a string of the account type. 3 possibilities: Credit Card, Savings, Checking.
     * @Returns a Promise resolving to an array of JSON objects with the accounts.
     **/
    getAllByType: async function(type) {
        try {
            const response = await fetch(this.urlWithEntity() + '?type=' + type + '&key=' + this.apiKey());
            const accounts = await response.json();
            return accounts;
        } catch (error) {
            console.error('Error fetching accounts by type:', error);
            throw error;
        }
    },
    /**
     * @Method: getAccountById
     * @Brief: Returns the account specified by its account ID.
     * @Parameters: AccountId
     * @Note: Accepts a string of the account ID.
     * @Returns a Promise resolving to a JSON object with the account info.
     **/
    getAccountById: async function(id) {
        try {
            const response = await fetch(this.urlWithEntity() + id + '?key=' + this.apiKey());
            const account = await response.json();
            return account;
        } catch (error) {
            console.error('Error fetching account by ID:', error);
            throw error;
        }
    },
    /**
     * @Method: getAllByCustomerId
     * @Parameters: CustomerId
     * @Note: Accepts a string of the customer ID
     * @Returns a Promise resolving to all accounts associated with a given customer ID as an array of JSON objects.
     **/
    getAllByCustomerId: async function(customerId) {
        try {
            const response = await fetch(this.urlWithCustomerEntity() + customerId + '/accounts?key=' + this.apiKey());
            const accounts = await response.json();
            return accounts;
        } catch (error) {
            console.error('Error fetching accounts by customer ID:', error);
            throw error;
        }
    },
    /**
     * @Method: updateAccount
     * @Brief: Updates an account's nickname.
     * @Parameters: AccountID, Accountobject
     * @Returns the http response code.
     **/
    updateAccount: async function(accountId, account) {
        try {
            const response = await fetch(this.urlWithEntity() + accountId + '?key=' + this.apiKey(), {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(account)
            });
            return response.status;
        } catch (error) {
            console.error('Error updating account:', error);
            throw error;
        }
    },
    /**
     * @Method: createAccount
     * @Brief: Creates a new account
     * @Parameters: CustomerID, accountobject
     * @Returns the http response code.
     **/
    createAccount: async function(custID, account) {
        try {
            const response = await fetch(this.urlWithCustomerEntity() + custID + '/accounts?key=' + this.apiKey(), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(account)
            });
            return response.status;
        } catch (error) {
            console.error('Error creating account:', error);
            throw error;
        }
    },
    /**
     * @Method: deleteAccount
     * @Brief: delete a given account by accountId.
     * @Parameters: AccountId.
     * @Returns the http response code.
     **/
    deleteAccount: async function(accountId) {
        try {
            const response = await fetch(this.urlWithEntity() + accountId + '?key=' + this.apiKey(), {
                method: 'DELETE'
            });
            return response.status;
        } catch (error) {
            console.error('Error deleting account:', error);
            throw error;
        }
    }
};
