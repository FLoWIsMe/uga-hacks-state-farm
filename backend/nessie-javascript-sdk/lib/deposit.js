import { Config } from './capital_one.js';

export let Deposit = {
    initWithKey: function (apiKey) {
        Config.setApiKey(apiKey);
        return this;
    },
    urlWithEntity: function () {
        return Config.baseUrl + '/deposits/';
    },
    urlWithAccountEntity: function () {
        return Config.baseUrl + '/accounts/';
    },
    url: function () {
        return Config.baseUrl;
    },
    apiKey: function () {
        return Config.apiKey;
    },
    /**
     * @Method: getAllByAccountId
     * @Brief: Get all deposits for a specific account
     * @Parameters: AccountID
     * @Returns a Promise resolving to an array of JSON Objects containing the deposits for that account.
     **/
    getAllByAccountId: async function (accID) {
        try {
            const response = await fetch(this.urlWithAccountEntity() + accID + '/deposits?key=' + this.apiKey());
            const deposits = await response.json();
            return deposits;
        } catch (error) {
            console.error('Error fetching deposits for account:', error);
            throw error;
        }
    },
    /**
     * @Method: getDepositById
     * @Brief: Returns a deposit for a given Deposit ID
     * @Parameters: DepositId
     * @Returns a Promise resolving to a JSON Object with the deposit data
     **/
    getDepositById: async function (id) {
        try {
            const response = await fetch(this.urlWithEntity() + id + '?key=' + this.apiKey());
            const deposit = await response.json();
            return deposit;
        } catch (error) {
            console.error('Error fetching deposit by ID:', error);
            throw error;
        }
    },
    /**
     * @Method: createDeposit
     * @Brief: Creates a new deposit.
     * @Parameters: toAccountId, Depositobject
     * @Note: Depositobject is formatted as follows:
     * {
     *   "medium": "balance",
     *   "transaction_date": "string",
     *   "status": "pending",
     *   "amount": 0,
     *   "description": "string"
     * }
     * @Returns a Promise resolving to the http response code.
     **/
    createDeposit: async function (toAcc, json) {
        try {
            const response = await fetch(this.urlWithAccountEntity() + toAcc + '/deposits?key=' + this.apiKey(), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(json),
            });
            const respCode = response.status;
            return respCode;
        } catch (error) {
            console.error('Error creating deposit:', error);
            throw error;
        }
    },
    /**
     * @Method: updateDeposit
     * @Brief: Updates an existing deposit
     * @Parameters: DepositId, Depositobject
     * @Object: Depositobject is formatted as follows:
     * {
     *   "medium": "balance",
     *   "transaction_date": "string",
     *   "status": "pending",
     *   "amount": 0,
     *   "description": "string"
     * }
     * @Returns a Promise resolving to the http response code
     **/
    updateDeposit: async function (id, json) {
        try {
            const response = await fetch(this.urlWithEntity() + id + '/?key=' + this.apiKey(), {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(json),
            });
            const respCode = response.status;
            return respCode;
        } catch (error) {
            console.error('Error updating deposit:', error);
            throw error;
        }
    },
    /**
     * @Method: deleteDeposit
     * @Brief: Deletes an existing deposit
     * @Parameters: DepositId
     * @Returns a Promise resolving to the http response code
     **/
    deleteDeposit: async function (id) {
        try {
            const response = await fetch(this.urlWithEntity() + id, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ key: this.apiKey() }),
            });
            const respCode = response.status;
            return respCode;
        } catch (error) {
            console.error('Error deleting deposit:', error);
            throw error;
        }
    },
};