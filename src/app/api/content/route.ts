import { NextResponse } from 'next/server';

// Dummy data
const posts = [
  {
    title: 'Lorem Ipsum',
    slug: 'lorem-ipsum',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
  },
{
    title: 'Sample Post',
    slug: 'sample-post',
    content: 'This is a sample post.',
},
{
    title: 'Another Post',
    slug: 'another-post',
    content: 'This is another post.',
},
{
    title: 'Hello World',
    slug: 'hello-world',
    content: 'Hello, world!',
},
{
    title: 'Testing',
    slug: 'testing',
    content: 'This is a test.',
},
{
    title: 'Welcome',
    slug: 'welcome',
    content: 'Welcome to my blog.',
},
{
    title: 'New Post',
    slug: 'new-post',
    content: 'This is a new post.',
},
{
    title: 'Awesome Content',
    slug: 'awesome-content',
    content: 'Check out this awesome content.',
},
{
    title: 'Code Snippet',
    slug: 'code-snippet',
    content: 'Here is a code snippet.',
},
{
    title: 'Tutorial',
    slug: 'tutorial',
    content: 'Learn something new with this tutorial.',
},
{
    title: 'Important Announcement',
    slug: 'important-announcement',
    content: 'Read this important announcement.',
},
];

export async function GET() {
  return NextResponse.json(posts);
}