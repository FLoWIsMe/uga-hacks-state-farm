import { Config } from './capital_one.js';

export let Customer = {
    initWithKey: function (apiKey) {
        Config.setApiKey(apiKey);
        return this;
    },
    urlWithEntity: function () {
        return Config.baseUrl + "/customers";
    },
    urlWithAcctEntity: function () {
        return Config.baseUrl + "/accounts";
    },
    apiKey: function () {
        return Config.apiKey;
    },
    /**
     * @Method: getCustomers
     * @Brief: Gets all customers the API key has access to.
     * @Returns a Promise resolving to an array of JSON Objects.
     **/
    getCustomers: async function () {
        try {
            const response = await fetch(this.urlWithEntity() + '?key=' + this.apiKey());
            const customers = await response.json();
            return customers;
        } catch (error) {
            console.error('Error fetching customers:', error);
            throw error;
        }
    },
    /**
     * @Method: getCustomerById
     * @Brief: Gets the specified customer's information.
     * @Parameters: CustomerId
     * @Returns a Promise resolving to an object with the customer data.
     **/
    getCustomerById: async function (custId) {
        try {
            const response = await fetch(this.urlWithEntity() + custId + '?key=' + this.apiKey());
            const customer = await response.json();
            return customer;
        } catch (error) {
            console.error('Error fetching customer by ID:', error);
            throw error;
        }
    },
    /**
     * @Method: getCustomerByAcountId
     * @Brief: Get the customer for the given account.
     * @Parameters: AccountId
     * @Returns a Promise resolving to an object with the specified customer data.
     **/
    getCustomerByAcountId: async function (accId) {
        try {
            const response = await fetch(this.urlWithAcctEntity() + accId + '/customer?key=' + this.apiKey());
            const customer = await response.json();
            return customer;
        } catch (error) {
            console.error('Error fetching customer by account ID:', error);
            throw error;
        }
    },
    /**
     * @Method: updateCustomer
     * @Brief: Updates a customer by ID with given JSON data.
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
     * @Returns a Promise resolving to the http response code.
     **/
    updateCustomer: async function (custId, json) {
        try {
            const response = await fetch(this.urlWithEntity() + custId + '?key=' + this.apiKey(), {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(json),
            });
            const respCode = response.status;
            return respCode;
        } catch (error) {
            console.error('Error updating customer:', error);
            throw error;
        }
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
     * @Returns a Promise resolving to the http response code.
     **/
    createCustomer: async function (json) {
        try {
            console.log(this.urlWithEntity() + '?key=' + this.apiKey())
            const response = await fetch(this.urlWithEntity() + '?key=' + this.apiKey(), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(json),
            })            .then(res =>
                res.json()).then(d => {
                    console.log(d)
                });


            return response;
        } catch (error) {
            console.error('Error creating customer:', error);
            throw error;
        }
    },
};