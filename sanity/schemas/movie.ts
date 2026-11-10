export default {
  name: 'movie',
  title: 'Movie',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Movie Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'status',
      title: 'Distribution Status',
      type: 'string',
      options: {
        list: [
          { title: 'Now Showing', value: 'Now Showing' },
          { title: 'Upcoming', value: 'Upcoming' },
          { title: 'Previously Distributed', value: 'Previously Distributed' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'poster',
      title: 'Official Poster Image',
      type: 'image',
      description: 'Upload official licensed poster. If left blank, cinematic gradient card will render.',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'releaseYear',
      title: 'Release Year',
      type: 'number',
    },
    {
      name: 'releaseDate',
      title: 'Release Date / Timeline',
      type: 'string',
    },
    {
      name: 'languages',
      title: 'Languages',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'genres',
      title: 'Genres',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'territories',
      title: 'Territories Licensed',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'synopsis',
      title: 'Synopsis',
      type: 'text',
    },
    {
      name: 'director',
      title: 'Director',
      type: 'string',
    },
    {
      name: 'cast',
      title: 'Key Cast',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'kdmFormat',
      title: 'KDM & Audio Delivery Format',
      type: 'string',
      description: 'e.g. DCI 4K Scope • Dolby Atmos',
    },
    {
      name: 'featured',
      title: 'Feature on Homepage Carousel',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'published',
      title: 'Published on Website',
      type: 'boolean',
      initialValue: true,
    },
  ],
};

