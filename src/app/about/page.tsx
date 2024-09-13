import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'About NextSpace',
};

export default async function Blog() {

  return (
    <div>
      <h1>About us</h1>
      <p>We are a social media company that wants to bring people together!</p>
    </div>

  );
}