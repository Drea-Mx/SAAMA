export default {
    //
    name: 'contactoPage',
    title: 'Contacto',
    type: 'document',
    icon: () => '📝',
    fields: [
        {
            name: 'title',
            title: ' Site Title',
            type: 'string',
        },
        {
            name: 'backgroundImage',
            title: 'Background image',
            type: 'imageType'
        },
        {
            name: 'tel',
            title: 'Tel',
            type: 'string'
        },
        {
            name: 'mail',
            title: 'Mail',
            type: 'string'
        },
        {
            name: 'logos',
            title: 'Logos',
            type: 'gallery'
        },
        {
            name: 'seo',
            title: 'SEO',
            type: 'seo'
        }


    ],
}