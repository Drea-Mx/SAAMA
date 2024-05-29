export default {
    //
    name: 'globalPage',
    title: 'Global page',
    type: 'document',
    icon: () => `⚙️`,
    fields: [
        {
            name: 'title',
            title: ' Site Title',
            type: 'string',
        },
        {
            name: 'logo',
            title: 'Logo',
            type: 'imageType'
        },
        {
            name: 'whats',
            title: 'Whats',
            type: 'social'
        },
        {
            name: 'socialMediaLinks',
            title: 'Social Media Links',
            type: 'array',
            of: [
                {
                    name: 'social',
                    title: 'Social',
                    type: 'social'
                }
            ]
        },
        {
            name: 'brochure',
            title: 'Brochure',
            type: 'file'
        }


    ],
}