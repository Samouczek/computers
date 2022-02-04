import { ComputerDetail } from '../../components/ComputerDetail';

export default function ComputerPage(props) {
  const { name, description, price } = props.computer;
  return (
    <ComputerDetail
      name={name}
      price={price}
      description={description}
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
    params: { computerId: computer.id }
  }))

  return { paths, fallback: 'blocking' };
}

export async function getStaticProps(context) {
  const computerId = context.params.computerId;
  const response = await fetch(`http://localhost:3000/computers/${computerId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const { id, name, description, price } = await response.json();

  return {
    props: {
      computer: {
        id,
        name,
        description,
        price,
      }
    },
    revalidate: 10
  };
}
