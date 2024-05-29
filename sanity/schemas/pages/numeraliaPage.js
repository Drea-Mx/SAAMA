export default {
    //
    name: 'numeraliaPage',
    title: 'Numeralia',
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
            name: 'image',
            title: 'Image',
            type: 'imageType'
        },
        {
            name: 'text',
            title: 'Text',
            type: 'blockModule'
        },
        
        {
            name: 'seo',
            title: 'SEO',
            type: 'seo'
        }


    ],
}