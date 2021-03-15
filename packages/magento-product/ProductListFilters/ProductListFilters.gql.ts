// Do not edit this file: autogenerated by graphql-code-generator
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
import * as Types from '@reachdigital/magento-graphql'

export const ProductListFiltersFragmentDoc: DocumentNode<ProductListFiltersFragment, unknown> = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ProductListFilters' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Products' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'aggregations' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'label' } },
                { kind: 'Field', name: { kind: 'Name', value: 'count' } },
                { kind: 'Field', name: { kind: 'Name', value: 'attribute_code' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'options' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'label' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'value' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'count' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
}
export type ProductListFiltersFragment = {
  aggregations?: Types.Maybe<
    Array<
      Types.Maybe<
        Pick<Types.Aggregation, 'label' | 'count' | 'attribute_code'> & {
          options?: Types.Maybe<
            Array<Types.Maybe<Pick<Types.AggregationOption, 'label' | 'value' | 'count'>>>
          >
        }
      >
    >
  >
}
