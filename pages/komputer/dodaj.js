import { useRouter } from 'next/router';

import { NewComputerForm } from '../../components/NewComputerForm';

export default function NewComputerPage() {
  const router = useRouter();

  async function handleAddComputer(enteredComputerData) {
    const response = await fetch(`http://localhost:3000/computers`, {
      method: 'POST',
      body: JSON.stringify(enteredComputerData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();

    router.push('/');
  }

  return (
    <NewComputerForm onAddComputer={handleAddComputer}/>
  )
}
