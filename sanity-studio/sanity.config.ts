import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './src/schemaTypes'
import {structure} from './src/structure'

export default defineConfig({
  name: 'dentistaDravic',
  title: 'DentistaDravic CMS',
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'replace-with-project-id',
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',
  plugins: [structureTool({structure}), visionTool()],
  schema: {
    types: schemaTypes,
  },
})
