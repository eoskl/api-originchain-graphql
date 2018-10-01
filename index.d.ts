/*
 * @Author: XY | The Findables Company <ryanxyo>
 * @Date:   Monday, 1st October 2018 12:13:20 pm
 * @Email:  developer@xyfindables.com
 * @Filename: index.d.ts
 * @Last modified by: ryanxyo
 * @Last modified time: Monday, 1st October 2018 1:36:50 pm
 * @License: All Rights Reserved
 * @Copyright: Copyright XY | The Findables Company
 */

declare module 'xyo-api-originchain-graphql' {
  export function getSchema(): Promise<XyoOriginChainGraphqlSchema | XyoOriginGraphqlNodeV1>
}

export interface XyoOriginChainGraphqlSchema {
  schema: string;
  queries: {[s: string]: string};
  types: {[s: string]: string};
}

export interface XyoOriginGraphqlNodeV1 {
  schema: string;
  queries: {
    'xyo-blocks-by-public-key.graphql': string
  };
  types: {
    'xyo-block-collection.graphql': string
    'xyo-block.graphql': string
    'xyo-object-interface.graphql': string
    'xyo-payload.graphql': string
    'xyo-keyset.graphql': string
    'xyo-object-plain.graphql': string
    'xyo-signature-set.graphql': string
    'xyo-blocks-by-public-key-query.graphql': string
  }
}