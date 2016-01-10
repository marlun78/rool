(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    } else {
        root.Rool = factory();
    }
} (this, function () {
    var Rool = {};

    /**
     * @static
     * @name create
     * @description 
     * @returns {Object}
     */
    Rool.create = function (name, options) {
        var instance = {};

        Object.defineProperties(instance, {
            /**
             * @name name
             * @description The name of the store instance
             * @returns {string}
             */
            name: {
                get: function () {
                    return name;
                }
            },
            
            /**
             * @name sync
             * @description Fetches data from the remote
             * @param {number} [refresh] The time between sync
             * @param {Function} [callback]
             */
            sync: function (refresh, callback) {
                throw new Error('Not implemented');
            },
            
            /**
             * @name dump
             * @description Dumps the entire store into one JSON object 
             * @param {Function} callback
             */
            dump: function (callback) {
                throw new Error('Not implemented');
            },
            
            /**
             * @name get
             * @description Read an item from the store
             * @param {string} key
             * @param {Function} callback
             */
            get: function (key, callback) {
                throw new Error('Not implemented');
            },
            
            /**
             * @name dispose
             * @description Dispose the store and clean up any event listeners
             * @param {Function} [callback]
             */
            dispose: function (callback) {
                throw new Error('Not implemented');
            },
            
            /**
             * @name on
             * @description 
             * @param {string} event
             * @param {Function} callback
             */
            on: function (event, callback) {
                throw new Error('Not implemented');
            },
            
            /**
             * @name off
             * @description 
             * @param {string} event
             * @param {Function} callback
             */
            off: function (event, callback) {
                throw new Error('Not implemented');
            },
            
            /**
             * @name once
             * @description 
             * @param {string} event
             * @param {Function} callback
             */
            once: function (event, callback) {
                throw new Error('Not implemented');
            }
        });

        return instance;
    };

    /**
     * @static
     * @name defaults
     * @description 
     * @param {Object} options 
     */
    Rool.defaults = function (options) { };

    /**
     * @static
     * @name register
     * @description 
     * @param {string} type 
     * @param {Object} options 
     */
    Rool.register = function (type, object) { };

    return Rool;
}));
