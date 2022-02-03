import { ComputerList } from '../components/ComputerList';

export default function HomePage(props) {
  return (
    <ComputerList computers={props.computers}/>
  )
}

export async function getStaticProps() {
  const response = await fetch(`http://localhost:3000/computers`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const computers = await response.json();

  return {
    props: {
      computers: computers,
    },
    revalidate: 10
  };
}
