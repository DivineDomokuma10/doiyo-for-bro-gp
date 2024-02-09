import TradeAdDetails from '.';
import Dashboard from '../../dashboard/browse';

interface Props {
  params: { id: string };
}

function TradeAdDetailsPage({ params }: Props) {
  return (
    <Dashboard>
      <TradeAdDetails params={params} />
    </Dashboard>
  );
}

export default TradeAdDetailsPage;
