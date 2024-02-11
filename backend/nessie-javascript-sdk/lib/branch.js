import { Config } from './capital_one.js';

export let Branch = {
    initWithKey: function (apiKey) {
        Config.setApiKey(apiKey);
        return this;
    },
    urlWithEntity: function () {
        return Config.baseUrl + "/branches";
    },
    apiKey: function () {
        return Config.apiKey;
    },
    /**
     * @Method: getAll
     * @Returns a Promise resolving to an array of JSON Objects representing all Branches
     **/
    getAll: async function () {
        try {
            const response = await fetch(this.urlWithEntity() + '?key=' + this.apiKey());
            const branches = await response.json();
            return branches;
        } catch (error) {
            console.error('Error fetching all branches:', error);
            throw error;
        }
    },
    /**
     * @Method: getBranch
     * @Brief: Gets a branch for a specific branch ID
     * @Parameters: branch ID
     * @Returns a Promise resolving to an object with the branch data
     **/
    getBranch: async function (id) {
        try {
            const response = await fetch(this.urlWithEntity() + '/' + id + '?key=' + this.apiKey());
            const branch = await response.json();
            return branch;
        } catch (error) {
            console.error('Error fetching branch by ID:', error);
            throw error;
        }
    }
};