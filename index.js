/*
 * @Author: XY | The Findables Company <ryanxyo>
 * @Date:   Monday, 1st October 2018 11:53:12 am
 * @Email:  developer@xyfindables.com
 * @Filename: index.js
 * @Last modified by: ryanxyo
 * @Last modified time: Monday, 1st October 2018 1:35:14 pm
 * @License: All Rights Reserved
 * @Copyright: Copyright XY | The Findables Company
 */

var fs = require('fs');
var promisify = require('util').promisify;
var path = require('path');
var readFile = promisify(fs.readFile);

var filesByType = {
  queries: [
    'xyo-blocks-by-public-key.graphql'
  ],
  types: [
    'xyo-block-collection.graphql',
    'xyo-block.graphql',
    'xyo-object-interface.graphql',
    'xyo-payload.graphql',
    'xyo-keyset.graphql',
    'xyo-object-plain.graphql',
    'xyo-signature-set.graphql',
  ]
}

module.exports = (() => {
  return {
    getSchema: () => {
      return Object.keys(filesByType).reduce((memo, type) => {
        var files = filesByType[type];
        return files.reduce((promiseChain, fileName) => {
          return promiseChain.then(memo => {
              var fileLocation = path.resolve(__dirname, 'graphql', type, fileName)
              return readFile(fileLocation, 'utf8')
                .then(file => {
                  memo.schema += `\n# ${fileName}\n${file}\n`;
                  var isQuery = type === 'queries'
                  if (isQuery) {
                    memo.queries = memo.queries || {};
                    memo.queries[fileName] = file;
                  } else {
                    memo.types = memo.types || {};
                    memo.types[fileName] = file;
                  }
  
                  return memo;
                })
                .catch(err => {
                  console.error(`There was an error getting file ${fileName}`);
                  throw err;
                })
            })
        }, memo);

      }, Promise.resolve({schema: ''}))
    }
  }
})();
