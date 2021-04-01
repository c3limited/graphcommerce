// Do not edit this file: autogenerated by graphql-code-generator
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
import * as Types from '@reachdigital/magento-graphql'

export const GroupedProductPageDocument: DocumentNode<
  GroupedProductPageQuery,
  GroupedProductPageQueryVariables
> = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GroupedProductPage' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'urlKey' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'typeProducts' },
            name: { kind: 'Name', value: 'products' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'url_key' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'eq' },
                            value: { kind: 'Variable', name: { kind: 'Name', value: 'urlKey' } },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'aggregations' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'attribute_code' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'count' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'label' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'options' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'count' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'label' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'value' } },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'InlineFragment',
                        typeCondition: {
                          kind: 'NamedType',
                          name: { kind: 'Name', value: 'GroupedProduct' },
                        },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'items' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'position' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'qty' } },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'product' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        { kind: 'Field', name: { kind: 'Name', value: 'uid' } },
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: '__typename' },
                                        },
                                        { kind: 'Field', name: { kind: 'Name', value: 'url_key' } },
                                        { kind: 'Field', name: { kind: 'Name', value: 'sku' } },
                                        { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'small_image' },
                                          selectionSet: {
                                            kind: 'SelectionSet',
                                            selections: [
                                              {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'url' },
                                              },
                                              {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'label' },
                                              },
                                            ],
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'price_range' },
                                          selectionSet: {
                                            kind: 'SelectionSet',
                                            selections: [
                                              {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'maximum_price' },
                                                selectionSet: {
                                                  kind: 'SelectionSet',
                                                  selections: [
                                                    {
                                                      kind: 'Field',
                                                      name: {
                                                        kind: 'Name',
                                                        value: 'regular_price',
                                                      },
                                                      selectionSet: {
                                                        kind: 'SelectionSet',
                                                        selections: [
                                                          {
                                                            kind: 'Field',
                                                            name: {
                                                              kind: 'Name',
                                                              value: 'currency',
                                                            },
                                                          },
                                                          {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'value' },
                                                          },
                                                        ],
                                                      },
                                                    },
                                                    {
                                                      kind: 'Field',
                                                      name: { kind: 'Name', value: 'discount' },
                                                      selectionSet: {
                                                        kind: 'SelectionSet',
                                                        selections: [
                                                          {
                                                            kind: 'Field',
                                                            name: {
                                                              kind: 'Name',
                                                              value: 'amount_off',
                                                            },
                                                          },
                                                          {
                                                            kind: 'Field',
                                                            name: {
                                                              kind: 'Name',
                                                              value: 'percent_off',
                                                            },
                                                          },
                                                        ],
                                                      },
                                                    },
                                                    {
                                                      kind: 'Field',
                                                      name: { kind: 'Name', value: 'final_price' },
                                                      selectionSet: {
                                                        kind: 'SelectionSet',
                                                        selections: [
                                                          {
                                                            kind: 'Field',
                                                            name: {
                                                              kind: 'Name',
                                                              value: 'currency',
                                                            },
                                                          },
                                                          {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'value' },
                                                          },
                                                        ],
                                                      },
                                                    },
                                                  ],
                                                },
                                              },
                                              {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'minimum_price' },
                                                selectionSet: {
                                                  kind: 'SelectionSet',
                                                  selections: [
                                                    {
                                                      kind: 'Field',
                                                      name: {
                                                        kind: 'Name',
                                                        value: 'regular_price',
                                                      },
                                                      selectionSet: {
                                                        kind: 'SelectionSet',
                                                        selections: [
                                                          {
                                                            kind: 'Field',
                                                            name: {
                                                              kind: 'Name',
                                                              value: 'currency',
                                                            },
                                                          },
                                                          {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'value' },
                                                          },
                                                        ],
                                                      },
                                                    },
                                                    {
                                                      kind: 'Field',
                                                      name: { kind: 'Name', value: 'discount' },
                                                      selectionSet: {
                                                        kind: 'SelectionSet',
                                                        selections: [
                                                          {
                                                            kind: 'Field',
                                                            name: {
                                                              kind: 'Name',
                                                              value: 'amount_off',
                                                            },
                                                          },
                                                          {
                                                            kind: 'Field',
                                                            name: {
                                                              kind: 'Name',
                                                              value: 'percent_off',
                                                            },
                                                          },
                                                        ],
                                                      },
                                                    },
                                                    {
                                                      kind: 'Field',
                                                      name: { kind: 'Name', value: 'final_price' },
                                                      selectionSet: {
                                                        kind: 'SelectionSet',
                                                        selections: [
                                                          {
                                                            kind: 'Field',
                                                            name: {
                                                              kind: 'Name',
                                                              value: 'currency',
                                                            },
                                                          },
                                                          {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'value' },
                                                          },
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
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'InlineFragment',
                              typeCondition: {
                                kind: 'NamedType',
                                name: { kind: 'Name', value: 'PhysicalProductInterface' },
                              },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'weight' } },
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
            },
          },
        ],
      },
    },
  ],
}
export type GroupedProductPageQueryVariables = Types.Exact<{
  urlKey?: Types.Maybe<Types.Scalars['String']>
}>

export type GroupedProductPageQuery = {
  typeProducts?: Types.Maybe<{
    aggregations?: Types.Maybe<
      Array<
        Types.Maybe<
          Pick<Types.Aggregation, 'attribute_code' | 'count' | 'label'> & {
            options?: Types.Maybe<
              Array<Types.Maybe<Pick<Types.AggregationOption, 'count' | 'label' | 'value'>>>
            >
          }
        >
      >
    >
    items?: Types.Maybe<
      Array<
        Types.Maybe<
          { __typename: 'GroupedProduct' } & Pick<Types.GroupedProduct, 'weight'> & {
              items?: Types.Maybe<
                Array<
                  Types.Maybe<
                    Pick<Types.GroupedProductItem, 'position' | 'qty'> & {
                      product?: Types.Maybe<
                        | ({ __typename: 'VirtualProduct' } & Pick<
                            Types.VirtualProduct,
                            'uid' | 'url_key' | 'sku' | 'name'
                          > & {
                              small_image?: Types.Maybe<Pick<Types.ProductImage, 'url' | 'label'>>
                              price_range: {
                                maximum_price?: Types.Maybe<{
                                  regular_price: Pick<Types.Money, 'currency' | 'value'>
                                  discount?: Types.Maybe<
                                    Pick<Types.ProductDiscount, 'amount_off' | 'percent_off'>
                                  >
                                  final_price: Pick<Types.Money, 'currency' | 'value'>
                                }>
                                minimum_price: {
                                  regular_price: Pick<Types.Money, 'currency' | 'value'>
                                  discount?: Types.Maybe<
                                    Pick<Types.ProductDiscount, 'amount_off' | 'percent_off'>
                                  >
                                  final_price: Pick<Types.Money, 'currency' | 'value'>
                                }
                              }
                            })
                        | ({ __typename: 'SimpleProduct' } & Pick<
                            Types.SimpleProduct,
                            'uid' | 'url_key' | 'sku' | 'name'
                          > & {
                              small_image?: Types.Maybe<Pick<Types.ProductImage, 'url' | 'label'>>
                              price_range: {
                                maximum_price?: Types.Maybe<{
                                  regular_price: Pick<Types.Money, 'currency' | 'value'>
                                  discount?: Types.Maybe<
                                    Pick<Types.ProductDiscount, 'amount_off' | 'percent_off'>
                                  >
                                  final_price: Pick<Types.Money, 'currency' | 'value'>
                                }>
                                minimum_price: {
                                  regular_price: Pick<Types.Money, 'currency' | 'value'>
                                  discount?: Types.Maybe<
                                    Pick<Types.ProductDiscount, 'amount_off' | 'percent_off'>
                                  >
                                  final_price: Pick<Types.Money, 'currency' | 'value'>
                                }
                              }
                            })
                        | ({ __typename: 'DownloadableProduct' } & Pick<
                            Types.DownloadableProduct,
                            'uid' | 'url_key' | 'sku' | 'name'
                          > & {
                              small_image?: Types.Maybe<Pick<Types.ProductImage, 'url' | 'label'>>
                              price_range: {
                                maximum_price?: Types.Maybe<{
                                  regular_price: Pick<Types.Money, 'currency' | 'value'>
                                  discount?: Types.Maybe<
                                    Pick<Types.ProductDiscount, 'amount_off' | 'percent_off'>
                                  >
                                  final_price: Pick<Types.Money, 'currency' | 'value'>
                                }>
                                minimum_price: {
                                  regular_price: Pick<Types.Money, 'currency' | 'value'>
                                  discount?: Types.Maybe<
                                    Pick<Types.ProductDiscount, 'amount_off' | 'percent_off'>
                                  >
                                  final_price: Pick<Types.Money, 'currency' | 'value'>
                                }
                              }
                            })
                        | ({ __typename: 'BundleProduct' } & Pick<
                            Types.BundleProduct,
                            'uid' | 'url_key' | 'sku' | 'name'
                          > & {
                              small_image?: Types.Maybe<Pick<Types.ProductImage, 'url' | 'label'>>
                              price_range: {
                                maximum_price?: Types.Maybe<{
                                  regular_price: Pick<Types.Money, 'currency' | 'value'>
                                  discount?: Types.Maybe<
                                    Pick<Types.ProductDiscount, 'amount_off' | 'percent_off'>
                                  >
                                  final_price: Pick<Types.Money, 'currency' | 'value'>
                                }>
                                minimum_price: {
                                  regular_price: Pick<Types.Money, 'currency' | 'value'>
                                  discount?: Types.Maybe<
                                    Pick<Types.ProductDiscount, 'amount_off' | 'percent_off'>
                                  >
                                  final_price: Pick<Types.Money, 'currency' | 'value'>
                                }
                              }
                            })
                        | ({ __typename: 'GroupedProduct' } & Pick<
                            Types.GroupedProduct,
                            'uid' | 'url_key' | 'sku' | 'name'
                          > & {
                              small_image?: Types.Maybe<Pick<Types.ProductImage, 'url' | 'label'>>
                              price_range: {
                                maximum_price?: Types.Maybe<{
                                  regular_price: Pick<Types.Money, 'currency' | 'value'>
                                  discount?: Types.Maybe<
                                    Pick<Types.ProductDiscount, 'amount_off' | 'percent_off'>
                                  >
                                  final_price: Pick<Types.Money, 'currency' | 'value'>
                                }>
                                minimum_price: {
                                  regular_price: Pick<Types.Money, 'currency' | 'value'>
                                  discount?: Types.Maybe<
                                    Pick<Types.ProductDiscount, 'amount_off' | 'percent_off'>
                                  >
                                  final_price: Pick<Types.Money, 'currency' | 'value'>
                                }
                              }
                            })
                        | ({ __typename: 'ConfigurableProduct' } & Pick<
                            Types.ConfigurableProduct,
                            'uid' | 'url_key' | 'sku' | 'name'
                          > & {
                              small_image?: Types.Maybe<Pick<Types.ProductImage, 'url' | 'label'>>
                              price_range: {
                                maximum_price?: Types.Maybe<{
                                  regular_price: Pick<Types.Money, 'currency' | 'value'>
                                  discount?: Types.Maybe<
                                    Pick<Types.ProductDiscount, 'amount_off' | 'percent_off'>
                                  >
                                  final_price: Pick<Types.Money, 'currency' | 'value'>
                                }>
                                minimum_price: {
                                  regular_price: Pick<Types.Money, 'currency' | 'value'>
                                  discount?: Types.Maybe<
                                    Pick<Types.ProductDiscount, 'amount_off' | 'percent_off'>
                                  >
                                  final_price: Pick<Types.Money, 'currency' | 'value'>
                                }
                              }
                            })
                      >
                    }
                  >
                >
              >
            }
        >
      >
    >
  }>
}
