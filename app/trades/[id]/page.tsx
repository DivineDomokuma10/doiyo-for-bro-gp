import Dashboard from '../../dashboard/browse';
import TradeDetails from '.';

interface Props {
  params: { id: string };
}

function Page({ params }: Props) {
  return (
    <Dashboard>
      <TradeDetails params={params} />
    </Dashboard>
  );
}

export default Page;
