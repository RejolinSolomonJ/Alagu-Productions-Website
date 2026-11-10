export default {
  name: 'partnerEnquiry',
  title: 'Partner Enquiries',
  type: 'document',
  readOnly: true,
  fields: [
    { name: 'createdAt', title: 'Submitted At', type: 'datetime' },
    { name: 'country', title: 'Country', type: 'string' },
    { name: 'city', title: 'City', type: 'string' },
    { name: 'cinemaName', title: 'Cinema / Theatre Name', type: 'string' },
    { name: 'contactName', title: 'Contact Person', type: 'string' },
    { name: 'phone', title: 'Phone Number', type: 'string' },
    { name: 'email', title: 'Email Address', type: 'string' },
    { name: 'selectedFilm', title: 'Film Interested In', type: 'string' },
    { name: 'message', title: 'Message / Screening Requirements', type: 'text' },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'New', value: 'New' },
          { title: 'In Discussion', value: 'In Discussion' },
          { title: 'Confirmed', value: 'Confirmed' },
          { title: 'Archived', value: 'Archived' },
        ],
      },
    },
  ],
};

