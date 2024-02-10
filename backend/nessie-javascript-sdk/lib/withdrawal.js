import XMLHttpRequest from 'xhr2';
import {Config} from './capital_one';

export let Withdrawal = {
    // Initialize the API key
    initWithKey: function(apiKey) {
        Config.setApiKey(apiKey);
        return this;
    },
    // Generate URL for withdrawal entity
    urlWithEntity: function() {
        return Config.baseUrl + '/withdrawals/';
    },
    // Generate URL for account entity
    urlWithAccountEntity: function() {
        return Config.baseUrl + '/accounts/'
    },
    // Retrieve the API key
    apiKey: function() {
        return Config.apiKey;
    },
    /**
     * @Method: getAllByAccountId
     * @Brief: Get all withdrawals for a specific account
     * @Parameters: AccountID
     * @Returns an array of JSON Objects containing the withdrawals for that account.
     **/
    getAllByAccountId: function(accID) {
        var withdrawals;
        var xhr = new XMLHttpRequest();
        xhr.open('GET', this.urlWithAccountEntity() + accID + '/withdrawals', false);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send('key=' + this.apiKey());

        if (xhr.status === 200) {
            withdrawals = JSON.parse(xhr.responseText);
        }
        return withdrawals;
    },
    /**
     * @Method: getWithdrawalById
     * @Brief: Get a single withdrawal for a given ID
     * @Parameters: WithdrawalId
     * @Returns a JSON Object
     **/
    getWithdrawalById: function(id) {
        var withdrawal;
        var xhr = new XMLHttpRequest();
        xhr.open('GET', this.urlWithEntity() + id, false);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send('key=' + this.apiKey());

        if (xhr.status === 200) {
            withdrawal = JSON.parse(xhr.responseText);
        }
        return withdrawal;
    },
    /**
     * @Method: createWithdrawal
     * @Brief: Creates a new withdrawal
     * @Parameters: toAccountId, Withdrawalobject
     * Withdrawalobject formatted as follows:
     * {
     *   "medium": "balance",
     *   "transaction_date": "string",
     *   "status": "pending",
     *   "amount": 0,
     *   "desciption": "string"
     * }
     * @Returns http response code
     **/
    createWithdrawal: function(toAcc, json) {
        var respCode;
        var xhr = new XMLHttpRequest();
        xhr.open('POST', this.urlWithAccountEntity() + toAcc + '/withdrawals?key=' + this.apiKey(), false);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(json));

        respCode = xhr.status;
        return respCode;
    },
    /**
     * @Method: updateWithdrawal
     * @Brief: Updates an existing withdrawal
     * @Parameters: WithdrawalId, Withdrawalobject
     * Withdrawalobject formatted as follows:
     * {
     *   "medium": "balance",
     *   "transaction_date": "string",
     *   "status": "pending",
     *   "amount": 0,
     *   "desciption": "string"
     * }
     * @Returns http response code
     **/
    updateWithdrawalById: function(id, json) {
        var respCode;
        var xhr = new XMLHttpRequest();
        xhr.open('PUT', this.urlWithEntity() + id + '/?key=' + this.apiKey(), false);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(json));

        respCode = xhr.status;
        return respCode;
    },
    /**
     * @Method: deleteWithdrawal
     * @Brief: Deletes a specified withdrawal from a specified account.
     * @Parameters: WithdrawalID
     * @Returns http response code.
     * @Note: This does not actually delete the withdrawal from the database, it only sets its status to 'cancelled'
     **/
    deleteWithdrawals: function(id) {
        var respCode;
        var xhr = new XMLHttpRequest();
        xhr.open('DELETE', this.urlWithEntity() + id, false);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send('key=' + this.apiKey());

        respCode = xhr.status;
        return respCode;
    }
};