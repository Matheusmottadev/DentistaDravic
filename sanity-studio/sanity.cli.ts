import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'replace-with-project-id',
    dataset: process.env.SANITY_STUDIO_DATASET || 'production',
  },
  deployment: {
    appId: 'qa1h6oklhvcxh3cjqb68eg8d',
  },
})
