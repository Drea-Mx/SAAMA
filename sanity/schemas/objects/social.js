export default {
    name: 'social',
    title: 'Social',
    type: 'object',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'icon',
            title: 'Icon',
            type: 'imageType'
        },
        {
            name: 'url',
            title: 'URL',
            type: 'string'
        }
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'url',
            media: 'icon'
        }
    }
}