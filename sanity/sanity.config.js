import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import deskStructure from "./deskStructure";

export default defineConfig({
  name: 'default',
  title: 'Saama',

  projectId: 'tfmxsxil',
  dataset: 'production',

  plugins: [structureTool({
    structure: deskStructure
}), visionTool()],

  schema: {
    types: schemaTypes,
  },




  document: {
    newDocumentOptions: (prev, { creationContext }) => {
      if (creationContext.type === 'global') {
        return prev.filter((templateItem) => templateItem.templateId != ['globalPage'])
      }
      return prev
    },
    actions: (prev, { schemaType }) => {
      if (schemaType === 'globalPage') {
        return prev.filter(({ action }) => !['unpublish', 'delete','duplicate'].includes(action))
      }
      if (schemaType === 'homePage') {
        return prev.filter(({ action }) => !['unpublish', 'delete','duplicate'].includes(action))
      }
      if (schemaType === 'conceptoPage') {
        return prev.filter(({ action }) => !['unpublish', 'delete','duplicate'].includes(action))
      }
      if (schemaType === 'ubicacionPage') {
        return prev.filter(({ action }) => !['unpublish', 'delete','duplicate'].includes(action))
      }
      if (schemaType === 'numeraliaPage') {
        return prev.filter(({ action }) => !['unpublish', 'delete','duplicate'].includes(action))
      }
      if (schemaType === 'amenidadesPage') {
        return prev.filter(({ action }) => !['unpublish', 'delete','duplicate'].includes(action))
      }
      if (schemaType === 'galeriaPage') {
        return prev.filter(({ action }) => !['unpublish', 'delete','duplicate'].includes(action))
      }
      if (schemaType === 'financiamientoPage') {
        return prev.filter(({ action }) => !['unpublish', 'delete','duplicate'].includes(action))
      }
      return prev
    },
  },


})
