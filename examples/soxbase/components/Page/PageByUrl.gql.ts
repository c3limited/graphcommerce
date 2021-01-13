// Do not edit this file: autogenerated by graphql-code-generator
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
import * as Types from '../../generated/types'

export const PageByUrlDocument: DocumentNode<PageByUrlQuery, PageByUrlQueryVariables> = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'PageByUrl' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'url' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'pages' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'url' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'url' } },
                    },
                  ],
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'locales' },
                value: { kind: 'ListValue', values: [{ kind: 'EnumValue', value: 'en' }] },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'content' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                      {
                        kind: 'InlineFragment',
                        typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Node' } },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }],
                        },
                      },
                      {
                        kind: 'InlineFragment',
                        typeCondition: {
                          kind: 'NamedType',
                          name: { kind: 'Name', value: 'RowColumnOne' },
                        },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'colOne' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'raw' } },
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
                          name: { kind: 'Name', value: 'RowColumnTwo' },
                        },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'colOne' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'raw' } },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'colTwo' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'raw' } },
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
                          name: { kind: 'Name', value: 'RowColumnThree' },
                        },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'colOne' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'raw' } },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'colTwo' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'raw' } },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'colThree' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'raw' } },
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
                          name: { kind: 'Name', value: 'RowBlogContent' },
                        },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'content' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'raw' } },
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
                          name: { kind: 'Name', value: 'RowHeroBanner' },
                        },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'asset' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'url' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'width' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'height' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'mimeType' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'size' } },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'copy' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'raw' } },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'pageLinks' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'url' } },
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
                          name: { kind: 'Name', value: 'RowProductGrid' },
                        },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'pageLinks' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'url' } },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'magentoCategory' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'category' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'url_path' },
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
                          name: { kind: 'Name', value: 'RowSpecialBanner' },
                        },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'asset' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'url' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'width' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'height' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'mimeType' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'size' } },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'copy' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'raw' } },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'pageLinks' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'url' } },
                                ],
                              },
                            },
                            { kind: 'Field', name: { kind: 'Name', value: 'topic' } },
                          ],
                        },
                      },
                      {
                        kind: 'InlineFragment',
                        typeCondition: {
                          kind: 'NamedType',
                          name: { kind: 'Name', value: 'RowQuote' },
                        },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'quote' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'raw' } },
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
                          name: { kind: 'Name', value: 'RowProductBackstory' },
                        },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'copy' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'raw' } },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'asset' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'url' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'width' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'height' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'mimeType' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'size' } },
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
                  kind: 'Field',
                  name: { kind: 'Name', value: 'asset' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'url' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'width' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'height' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'mimeType' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'size' } },
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
export type PageByUrlQueryVariables = Types.Exact<{
  url: Types.Scalars['String']
}>

export type PageByUrlQuery = {
  pages: Array<
    Pick<Types.Page, 'title'> & {
      content: Array<
        | ({ __typename: 'RowBlogContent' } & Pick<Types.RowBlogContent, 'id'> & {
              content?: Types.Maybe<Pick<Types.RichText, 'raw'>>
            })
        | ({ __typename: 'RowButtonLinkList' } & Pick<Types.RowButtonLinkList, 'id'>)
        | ({ __typename: 'RowColumnOne' } & Pick<Types.RowColumnOne, 'id'> & {
              colOne: Pick<Types.RichText, 'raw'>
            })
        | ({ __typename: 'RowColumnThree' } & Pick<Types.RowColumnThree, 'id'> & {
              colOne: Pick<Types.RichText, 'raw'>
              colTwo: Pick<Types.RichText, 'raw'>
              colThree: Pick<Types.RichText, 'raw'>
            })
        | ({ __typename: 'RowColumnTwo' } & Pick<Types.RowColumnTwo, 'id'> & {
              colOne: Pick<Types.RichText, 'raw'>
              colTwo: Pick<Types.RichText, 'raw'>
            })
        | ({ __typename: 'RowHeroBanner' } & Pick<Types.RowHeroBanner, 'id'> & {
              asset: Pick<Types.Asset, 'url' | 'width' | 'height' | 'mimeType' | 'size'>
              copy: Pick<Types.RichText, 'raw'>
              pageLinks: Array<Pick<Types.PageLink, 'title' | 'url'>>
            })
        | ({ __typename: 'RowProductBackstory' } & Pick<Types.RowProductBackstory, 'id'> & {
              copy: Pick<Types.RichText, 'raw'>
              asset: Pick<Types.Asset, 'url' | 'width' | 'height' | 'mimeType' | 'size'>
            })
        | ({ __typename: 'RowProductGrid' } & Pick<Types.RowProductGrid, 'id' | 'title'> & {
              pageLinks: Array<Pick<Types.PageLink, 'title' | 'url'>>
              magentoCategory?: Types.Maybe<{
                category?: Types.Maybe<Pick<Types.CategoryTree, 'name' | 'url_path'>>
              }>
            })
        | ({ __typename: 'RowQuote' } & Pick<Types.RowQuote, 'id'> & {
              quote: Pick<Types.RichText, 'raw'>
            })
        | ({ __typename: 'RowServiceOptions' } & Pick<Types.RowServiceOptions, 'id'>)
        | ({ __typename: 'RowSpecialBanner' } & Pick<Types.RowSpecialBanner, 'id' | 'topic'> & {
              asset: Pick<Types.Asset, 'url' | 'width' | 'height' | 'mimeType' | 'size'>
              copy: Pick<Types.RichText, 'raw'>
              pageLinks: Array<Pick<Types.PageLink, 'title' | 'url'>>
            })
        | ({ __typename: 'RowSwipeableGrid' } & Pick<Types.RowSwipeableGrid, 'id'>)
      >
      asset?: Types.Maybe<Pick<Types.Asset, 'url' | 'width' | 'height' | 'mimeType' | 'size'>>
    }
  >
}
