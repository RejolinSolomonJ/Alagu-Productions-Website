export default {
  name: 'siteSettings',
  title: 'Site & Brand Settings',
  type: 'document',
  fields: [
    { name: 'companyName', title: 'Company Name', type: 'string', initialValue: 'Alagu Production' },
    { name: 'tagline', title: 'Tagline', type: 'string' },
    { name: 'phone', title: 'Phone Number', type: 'string', initialValue: '+995 504 88 79 72' },
    { name: 'whatsappNumber', title: 'WhatsApp Number (no spaces)', type: 'string', initialValue: '995504887972' },
    { name: 'email', title: 'Primary Email', type: 'string', initialValue: 'alaguproduction@gmail.com' },
    {
      name: 'projectsCountClaim',
      title: 'Projects Count Claim',
      type: 'string',
      initialValue: '16+ Projects',
      description: "Internal note: Confirm '16+ projects' claim with company records before publishing.",
    },
    {
      name: 'projectsCountConfirmed',
      title: 'Projects Claim Confirmed by Records',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'socialLinks',
      title: 'Official Social Media Profiles',
      type: 'object',
      fields: [
        { name: 'instagram', title: 'Instagram URL', type: 'url' },
        { name: 'facebook', title: 'Facebook URL', type: 'url' },
        { name: 'twitter', title: 'X (Twitter) URL', type: 'url' },
        { name: 'youtube', title: 'YouTube URL', type: 'url' },
        { name: 'linkedin', title: 'LinkedIn URL', type: 'url' },
      ],
    },
  ],
};

