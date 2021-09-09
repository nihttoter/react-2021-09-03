import Rate from './rate';

export default function Review({ id, user, text, rating }) {
  /* {
    id: '5909796d-5030-4e36-adec-68b8f9ec2d96',
    user: 'Antony',
    text: 'Not bad',
    rating: 5,
  }, */

  return (
    <article>
      <header>{user}</header>
      <main>{text}</main>
      <footer>
        <Rate value={rating} />
      </footer>
    </article>
  );
}
