/**
 * @module NormalApis
 *  Apis do not need auth - NormalApis
 */
import axios from 'axios';

export default {
    methods: {
        /**
         * Call to an GET Authenticate api for response.
         * @function
         * @param {string} url - Url to get results
         * @returns {object} A promise that will return either a success object or an error object.
         */
        getApi: (headers, url) => axios({
            method: 'GET',
            headers,
            url
        }),

        /**
       * Call to an POST api for response.
       * @function
       * @param {string} url - Url to get results
       * @param {object} data - accept objects
       * @returns {object} A promise that will return either a success object or an error object.
       */
        postApi: (headers, url, data) => axios({
            method: 'POST',
            headers,
            url,
            data,
        }),

        /**
       * Call to an POST api for response.
       * @function
       * @param {string} url - Url to get results
       * @param {object} data - accept objects
       * @returns {object} A promise that will return either a success object or an error object.
       */
        patchApi: (headers, url, data) => axios({
            method: 'PATCH',
            headers,
            url,
            data,
        }),

        /**
        * Call to an POST api for response.
        * @function
        * @param {string} url - Url to get results
        * @param {object} data - accept objects
        * @returns {object} A promise that will return either a success object or an error object.
        */
        putApi: (headers, url, data) => axios({
            method: 'PUT',
            headers,
            url,
            data,
        }),
        /**
      * Call to an POST api for response.
      * @function
      * @param {string} url - Url to get results
      * @param {object} data - accept objects
      * @returns {object} A promise that will return either a success object or an error object.
      */
        deleteApi: (headers, url, data) => axios({
            method: 'DELETE',
            headers,
            url,
            data,
        }),
    }
};