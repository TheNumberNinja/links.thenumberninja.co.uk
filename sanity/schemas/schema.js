// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
    // We name our schema
    name: 'the-number-ninja-links',
    // Then proceed to concatenate our document type
    // to the ones provided by any plugins that are installed
    types: schemaTypes.concat([
        {
            title: "Linktree",
            name: "linktree",
            type: "document",
            fields: [
                {
                    name: "links",
                    type: "array",
                    of: [
                        {type: "linktree-link"},
                    ],
                },
            ],
        },
        {
            title: "Linktree link",
            name: "linktree-link",
            type: "document",
            fields: [
                {
                    title: "Title",
                    name: "title",
                    type: "string",
                },
                {
                    title: "URL",
                    name: "url",
                    type: "url",
                },
            ],
            preview: {
                select: {
                    title: "title",
                    subtitle: "url"
                }
            }
        },
    ]),
})
