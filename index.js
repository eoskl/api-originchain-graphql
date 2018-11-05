/*
 * @Author: XY | The Findables Company <ryanxyo>
 * @Date:   Monday, 1st October 2018 11:53:12 am
 * @Email:  developer@xyfindables.com
 * @Filename: index.js
 * @Last modified by: ryanxyo
 * @Last modified time: Thursday, 1st November 2018 5:12:14 pm
 * @License: All Rights Reserved
 * @Copyright: Copyright XY | The Findables Company
 */

var fs = require('fs');
var promisify = require('util').promisify;
var path = require('path');
var readFile = promisify(fs.readFile);

var files = {
  'xyo-block.graphql': 'types',
  'xyo-keyset.graphql': 'types',
  'xyo-object-plain.graphql': 'types',
  'xyo-signature-set.graphql': 'types',
  'xyo-block-collection.graphql': 'types',
  'xyo-blocks-by-public-key.graphql': 'types',
  'xyo-object-interface.graphql': 'types',
  'xyo-payload.graphql': 'types',
  'xyo-about-me.graphql': 'types',
  'xyo-list-meta.graphql': 'types',
  'xyo-list.graphql': 'types',
  'xyo-block-list.graphql': 'types',
  'xyo-about-you.graphql': 'inputs',
}

module.exports = (() => {
  return {
    getSchema: () => {
      return Object.keys(files).reduce((promiseChain, fileName) => {
        return promiseChain.then(memo => {
            var fileLocation = path.resolve(__dirname, 'graphql', fileName)
            return readFile(fileLocation, 'utf8')
              .then(file => {
                memo.schema += `\n# ${fileName}\n${file}\n`;
                memo[files[fileName]][fileName] = file;
                return memo;
              })
              .catch(err => {
                console.error(`There was an error getting file ${fileName}`);
                throw err;
              })
          })
      }, Promise.resolve({schema: '', types: {}, inputs: {}}));
    }
  }
})();
