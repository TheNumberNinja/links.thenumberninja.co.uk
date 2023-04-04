import {defineConfig} from "sanity";
import {schemaTypes} from './schemas'
import {deskTool} from 'sanity/desk'
import {dashboardTool} from "@sanity/dashboard";
import {netlifyWidget} from "sanity-plugin-dashboard-widget-netlify";

export default defineConfig({
  title: "The Number Ninja Links",
  projectId: "7jhacyva",
  dataset: "links",
  plugins: [
    dashboardTool({
      widgets: [
        netlifyWidget({
          title: 'Netlify',
          sites: [
            {
              title: 'links.thenumberninja.co.uk',
              apiId: process.env.SANITY_STUDIO_NETLIFY_SITE_API_ID as string,
              buildHookId: process.env.SANITY_STUDIO_NETLIFY_SITE_BUILD_HOOK_ID as string,
              name: 'thenumberninjalinks',
            }
          ]
        })
      ]
    }),
    deskTool({
        structure: (S, context) => {
          return S.list()
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
        }
      }
    ),
  ],
  schema: {
    types: schemaTypes,
  },
});
