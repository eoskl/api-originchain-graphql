/*
 * @Author: XY | The Findables Company <ryanxyo>
 * @Date:   Monday, 1st October 2018 12:13:20 pm
 * @Email:  developer@xyfindables.com
 * @Filename: index.d.ts
 * @Last modified by: ryanxyo
 * @Last modified time: Thursday, 18th October 2018 1:45:29 pm
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
      'xyo-block.graphql': string,
      'xyo-keyset.graphql': string,
      'xyo-object-plain.graphql': string,
      'xyo-signature-set.graphql': string,
      'xyo-block-collection.graphql': string,
      'xyo-blocks-by-public-key.graphql': string,
      'xyo-object-interface.graphql': string,
      'xyo-payload.graphql': string,
      'xyo-about-me.graphql': string,
      'xyo-list-meta.graphql': string,
      'xyo-list.graphql': string,
      'xyo-block-list.graphql': string
    }
  }

  export function getSchema(): Promise<XyoOriginChainGraphqlSchema | XyoOriginGraphqlNodeV1>
}
