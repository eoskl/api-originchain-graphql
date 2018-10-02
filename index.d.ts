/*
 * @Author: XY | The Findables Company <ryanxyo>
 * @Date:   Monday, 1st October 2018 12:13:20 pm
 * @Email:  developer@xyfindables.com
 * @Filename: index.d.ts
 * @Last modified by: ryanxyo
 * @Last modified time: Tuesday, 2nd October 2018 11:03:39 am
 * @License: All Rights Reserved
 * @Copyright: Copyright XY | The Findables Company
 */

declare module '@xyo-network/api-originchain-graphql' {
  export interface XyoOriginChainGraphqlSchema {
    schema: string;
    queries: {[s: string]: string};
    types: {[s: string]: string};
  }
  
  export interface XyoOriginGraphqlNodeV1 {
    schema: string;
    types: {
      'xyo-blocks-by-public-key.graphql': string,
      'xyo-block-collection.graphql': string,
      'xyo-block.graphql': string,
      'xyo-object-interface.graphql': string,
      'xyo-payload.graphql': string,
      'xyo-keyset.graphql': string,
      'xyo-object-plain.graphql': string,
      'xyo-signature-set.graphql': string
    }
  }

  export function getSchema(): Promise<XyoOriginChainGraphqlSchema | XyoOriginGraphqlNodeV1>
}
