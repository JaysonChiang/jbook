import { useTypedSelector } from '../hooks/use-typed-selector';
import CellListItem from './cell-list-item';
const CellList: React.FC = () => {
  const cells = useTypedSelector(({ cells: { order, data } }) =>
    order.map((id) => data[id])
  );

  const renderdCells = cells.map((cell) => (
    <CellListItem key={cell.id} cell={cell}></CellListItem>
  ));
  return <div>{renderdCells}</div>;
};

export default CellList;
