import { ComputerDetail } from '../../components/ComputerDetail';

export default function ComputerPage(props) {
  return (
    <ComputerDetail
      name={props.computer.name}
      price={props.computer.price}
      description={props.computer.description}
    />
  )
}

export async function getStaticPaths() {
  const response = await fetch(`http://localhost:3000/computers`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const computers = await response.json();

  const paths = computers.map((computer) => ({
    params: {computerId: computer.id}
  }))

  return {paths, fallback: 'blocking'};
}

export async function getStaticProps(context) {
  const computerId = context.params.computerId;
  const response = await fetch(`http://localhost:3000/computers/${computerId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const computer = await response.json();

  return {
    props: {
      computer: {
        id: computer.id,
        name: computer.name,
        description: computer.description,
        price: computer.price,
      }
    },
    revalidate: 1
  };
}
