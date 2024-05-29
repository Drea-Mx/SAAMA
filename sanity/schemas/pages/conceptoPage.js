export default {
    //
    name: 'conceptoPage',
    title: 'Concepto',
    type: 'document',
    icon: () => '📝',
    fields: [
        {
            name: 'title',
            title: ' Site Title',
            type: 'string',
        },
        {
            name: 'headline',
            title: 'Headline',
            type: 'imageType'
        },
        {
            name: 'text',
            title: 'Text',
            type: 'blockModule'
        },
        {
            name: 'image',
            title: 'Image',
            type: 'imageType'
        },
        {
            name: 'seo',
            title: 'SEO',
            type: 'seo'
        }


    ],
}