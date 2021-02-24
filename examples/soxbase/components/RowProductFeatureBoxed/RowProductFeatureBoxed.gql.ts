// Do not edit this file: autogenerated by graphql-code-generator
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
import * as Types from '../../generated/types'

export const RowProductFeatureBoxedFragmentDoc: DocumentNode<
  RowProductFeatureBoxedFragment,
  unknown
> = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'RowProductFeatureBoxed' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'RowProductFeatureBoxed' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'topic' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'copy' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'raw' } }],
            },
          },
        ],
      },
    },
  ],
}
export type RowProductFeatureBoxedFragment = Pick<Types.RowProductFeatureBoxed, 'topic'> & {
  copy: Pick<Types.RichText, 'raw'>
}
