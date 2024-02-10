
import {Config} from './capital_one';
    
export default Customer = {
    initWithKey: function(apiKey) {
        Config.setApiKey(apiKey);
        return this;
    },
    urlWithEntity: function() {
        return Config.baseUrl + "/customers/";
    },
    urlWithAcctEntity: function() {
        return Config.baseUrl + "/accounts/";
    },
    apiKey: function() {
        return Config.apiKey;
    },
    /**
     * @Method: getCustomers
     * @Brief: Gets all customers the API key has access to.
     * @Returns an array of JSON Objects.
     **/
    getCustomers: function() {
        var customers;
        var xhr = new XMLHttpRequest();
        xhr.open('GET', this.urlWithEntity() + '?key=' + this.apiKey(), false);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send();

        if (xhr.status === 200) {
            customers = JSON.parse(xhr.responseText);
        }
        return customers;
    },
    /**
     * @Method: getCustomerById
     * @Brief: Gets the specified customer's information.
     * @Parameters: CustomerId
     * @Returns an object with the customer data
     **/
    getCustomerById: function(custId) {
        var customer;
        var xhr = new XMLHttpRequest();
        xhr.open('GET', this.urlWithEntity() + custId + '?key=' + this.apiKey(), false);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send();

        if (xhr.status === 200) {
            customer = JSON.parse(xhr.responseText);
        }
        return customer;
    },
    /**
     * @Method: Get the customer for the given account.
     * @Parameters: AccountId
     * @Returns an object with the specified customer data.
     **/
    getCustomerByAcountId: function(accId) {
        var customer;
        var xhr = new XMLHttpRequest();
        xhr.open('GET', this.urlWithAcctEntity() + accId + '/customer?key=' + this.apiKey(), false);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send();

        if (xhr.status === 200) {
            customer = JSON.parse(xhr.responseText);
        }
        return customer;
    },
    /**
     * @Method: updateCustomer
     * @Brief: Updates a customer by id with given JSON data.
     * @Parameters: CustomerId, Customerobject.
     * @Note: JSON is as follows:
     *  {
     *   "address": {
     *     "street_number": "",
     *     "street_name": "",
     *     "city": "",
     *     "state": "",
     *     "zip": ""
     *   }
     * }
     * @Returns http response code.
     **/
    updateCustomer: function(custId, json) {
        var respCode;
        var xhr = new XMLHttpRequest();
        xhr.open('PUT', this.urlWithEntity() + custId + '?key=' + this.apiKey(), false);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(json));

        respCode = xhr.status;
        return respCode;
    },
    /**
     * @Method: createCustomer
     * @Brief: Creates a customer with given JSON data.
     * @Parameters: Customerobject.
     * @Note: JSON is as follows:
     * {
     *  "first_name": "",
     *	 "last_name": "",
     *  {
     *   "address": {
     *     "street_number": "",
     *     "street_name": "",
     *     "city": "",
     *     "state": "",
     *     "zip": ""
     *   }
     *  }
     * }
     * @Returns http response code.
     **/
    createCustomer: function(json) {
        var respCode;
        var xhr = new XMLHttpRequest();
        xhr.open('POST', this.urlWithEntity() + '?key=' + this.apiKey(), false);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(json));

        respCode = xhr.status;
        return respCode;
    }
};