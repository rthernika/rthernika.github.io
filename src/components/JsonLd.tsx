import React from 'react';

export default function JsonLd() {
  const schemaData = [
    {
      '@context': 'https://schema.org',
      '@type': ['MedicalBusiness', 'MedicalOrganization'],
      'name': 'Purnam Counselling',
      'image': 'https://rthernika.github.io/favicon_512.png',
      'url': 'https://rthernika.github.io/',
      'telephone': '+91-9750714144',
      'email': 'thernika.purnam@gmail.com',
      'priceRange': '$$',
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Coimbatore',
        'addressRegion': 'Tamil Nadu',
        'addressCountry': 'IN',
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': '11.0168',
        'longitude': '76.9558',
      },
      'sameAs': [
        'https://instagram.com/thernika.purnam',
        'https://youtube.com/@thernika.purnam',
        'https://linkedin.com/in/rthernika',
        'https://www.linkedin.com/newsletters/7430605949259751424/',
        'https://cal.id/thernika',
      ],
      'publishingPrinciples': 'https://www.linkedin.com/newsletters/7430605949259751424/',
      'medicalSpecialty': 'https://schema.org/Psychiatric',
      'knowsAbout': [
        'Psychological Services',
        'Perinatal Mental Health',
        'Student & Parent Counselling',
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Person',
      'name': 'Thernika R',
      'jobTitle': 'Psychologist & Perinatal Mental Health Counsellor',
      'worksFor': {
        '@type': 'Organization',
        'name': 'Purnam Counselling',
      },
      'alumniOf': [
        { '@type': 'EducationalOrganization', 'name': 'Bharathiar University' },
        { '@type': 'EducationalOrganization', 'name': 'Jansons School of Business' },
        { '@type': 'EducationalOrganization', 'name': 'Anna University' },
      ],
      'hasCredential': [
        {
          '@type': 'EducationalOccupationalCredential',
          'name': 'M.Sc in Applied Psychology',
        },
        {
          '@type': 'EducationalOccupationalCredential',
          'name': 'MBA in HRM',
        },
        {
          '@type': 'EducationalOccupationalCredential',
          'name': 'B.E in CSE',
        },
        {
          '@type': 'EducationalOccupationalCredential',
          'name': 'Internationally Certified Student Parent Counsellor',
        },
        {
          '@type': 'EducationalOccupationalCredential',
          'name': 'Internationally Certified Perinatal Mental Health Counsellor',
        },
      ],
      'award': 'IMA Coimbatore Award (2022) for Serving Expectant Mothers',
      'knowsLanguage': ['English', 'Tamil', 'German'],
      'knowsAbout': [
        'Psychological Services',
        'Perinatal Mental Health',
        'Student & Parent Counselling',
      ],
      'sameAs': [
        'https://instagram.com/thernika.purnam',
        'https://youtube.com/@thernika.purnam',
        'https://linkedin.com/in/rthernika',
        'https://www.linkedin.com/newsletters/7430605949259751424/',
        'https://cal.id/thernika',
      ],
      'publishingPrinciples': 'https://www.linkedin.com/newsletters/7430605949259751424/',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Periodical',
      'name': 'The Healing Corner',
      'url': 'https://www.linkedin.com/newsletters/7430605949259751424/',
      'publisher': {
        '@type': 'Organization',
        'name': 'Purnam Counselling',
        'url': 'https://rthernika.github.io/',
      },
      'author': {
        '@type': 'Person',
        'name': 'Thernika R',
      },
      'description': 'Empowering you with knowledge for a healthier mind and body.',
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
