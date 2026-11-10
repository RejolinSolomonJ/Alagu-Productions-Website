export default {
  name: 'project',
  title: 'Exhibition Project',
  type: 'document',
  fields: [
    {
      name: 'filmTitle',
      title: 'Film Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'filmTitle' },
    },
    {
      name: 'country',
      title: 'Country',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'city',
      title: 'City',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'venue',
      title: 'Venue / Circuit',
      type: 'string',
    },
    {
      name: 'year',
      title: 'Year',
      type: 'number',
    },
    {
      name: 'dateString',
      title: 'Date / Exhibition Period',
      type: 'string',
    },
    {
      name: 'approvedHighlights',
      title: 'Approved Highlights',
      type: 'text',
      description: 'Only approved highlights should be entered. Do not invent unverified stats.',
    },
    {
      name: 'status',
      title: 'Exhibition Status',
      type: 'string',
      options: {
        list: [
          { title: 'Completed', value: 'Completed' },
          { title: 'Current', value: 'Current' },
          { title: 'Scheduled', value: 'Scheduled' },
        ],
      },
    },
    {
      name: 'detailsConfirmed',
      title: 'Details Formally Confirmed',
      type: 'boolean',
      description: 'Toggle on only once partner details are verified with records.',
      initialValue: false,
    },
  ],
};

