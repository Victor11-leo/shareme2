import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'x9ynuj11',
  dataset: 'production',
  apiVersion: '2021-11-16',
  useCdn: true,
  token: 'skwgfwlo1zjAMgwFpwBHUHQCNk7ckwEc3cPEMrFj4peix5vjBR8IwDs1GHI4X79kcU2znLjiPrxQJ86PxXWxIwxdkXm4VJTpVBA0hXXQj6c80qJpYMYFSXm1bUCxy1HwX0gwCUzRvoItG7rcK2hb6W6bOaQgLc9vxa1YvVaqnkVg9RM081dm',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
