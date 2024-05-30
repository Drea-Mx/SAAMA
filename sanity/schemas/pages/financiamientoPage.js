export default {
    //
    name: 'financiamientoPage',
    title: 'Financiamiento',
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
            type: 'textObject'
        },
        {
            name: 'items',
            title: 'Items',
            type: 'array',
            of: [
                {
                    name: 'itemText',
                    title: 'Item',
                    type: 'itemText'
                }
            ]
        },
        {
            name: 'date',
            title: 'Date',
            type: 'date',
            options: {
                dateFormat: 'MMMM, DD, YYYY',
                calendarTodayLabel: 'Today'
              }
        },

        {
            name: 'depa001',
            title: 'Depa 001',
            type: 'depa',

        },
        {
            name: 'depa002',
            title: 'Depa 002',
            type: 'depa',
        },
        {
            name: 'depa101',
            title: 'Depa 101',
            type: 'depa',
        },
        {
            name: 'depa102',
            title: 'Depa 102',
            type: 'depa',
        },
        {
            name: 'depa201',
            title: 'Depa 201',
            type: 'depa',
        },
        {
            name: 'depa202',
            title: 'Depa 202',
            type: 'depa',
        },
        {
            name: 'depa301',
            title: 'Depa 301',
            type: 'depa',
        },
        {
            name: 'depa302',
            title: 'Depa 302',
            type: 'depa',
        },
        {
            name: 'depa401',
            title: 'Depa 401',
            type: 'depa',
        },
        {
            name: 'depa402',
            title: 'Depa 402',
            type: 'depa',
        },
        {
            name: 'depa501',
            title: 'Depa 501',
            type: 'depa',
        },
        {
            name: 'depa502',
            title: 'Depa 502',
            type: 'depa',
        },
        {
            name: 'depa601',
            title: 'Depa 601',
            type: 'depa',
        },
        {
            name: 'depa602',
            title: 'Depa 602',
            type: 'depa',
        },
        {
            name: 'depa701',
            title: 'Depa 701',
            type: 'depa',
        },
        {
            name: 'depa702',
            title: 'Depa 702',
            type: 'depa',
        },
        {
            name: 'depaPHA',
            title: 'PHA',
            type: 'depaPH',
        },
        {
            name: 'depaPHB',
            title: 'PHB',
            type: 'depaPH',
        },
        {
            name: 'seo',
            title: 'SEO',
            type: 'seo'
        }


    ],
}