export default {
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    {
      name: 'author',
      title: 'Contact Name / Role',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'organization',
      title: 'Cinema / Organization',
      type: 'string',
    },
    {
      name: 'city',
      title: 'City',
      type: 'string',
    },
    {
      name: 'country',
      title: 'Country',
      type: 'string',
    },
    {
      name: 'quote',
      title: 'Quote',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'isApproved',
      title: 'Approved by Partner & Management',
      type: 'boolean',
      description: 'Testimonial will ONLY appear on public website if toggled ON.',
      initialValue: false,
    },
    {
      name: 'internalNote',
      title: 'Internal Audit Note',
      type: 'string',
    },
  ],
};

