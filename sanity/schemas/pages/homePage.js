export default {
    //
    name: 'homePage',
    title: 'Home page',
    type: 'document',
    icon: () => '🏡',
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
            name: 'text1',
            title: 'Text 1',
            type: 'string'
        },
        {
            name: 'text2',
            title: 'Text2',
            type: 'string'
        },
        {
            name: 'seo',
            title: 'SEO',
            type: 'seo'
        }


    ],
}