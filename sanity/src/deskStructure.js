import S from "@sanity/desk-tool/structure-builder";

export default () =>
    S.list()
        .title('Content')
        .items([
            S.listItem()
                .title('Links')
                .child(
                    S.editor()
                        .title('Links')
                        .schemaType('linktree')
                        .documentId('links'),
                ),
        ])
