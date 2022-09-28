import './table.css';

export interface TablePropsI extends React.HTMLAttributes<HTMLTableElement> {
  columns?: string[]
  caption?: string
  data?: { [key: string]: string | number | boolean }[]
}

export const Table = (props:TablePropsI) => {

  const { className, children, data, columns, caption, ...attr } = props;
  const clsx = ['new-table table-auto', className]
    .filter(Boolean).join(' ');


  function getColumns() {
    if (props.columns) return columns;
    if (props.data) return Object.keys(props.data[0]);
    return undefined;
  }

  function getRow(item: { [K: string]: string | number | boolean }, index: number)  {
    let cells = Object.values(item).map(i => i.toString());
    return (
      <tr key={`table-row-${index}`}>
        {cells.map(cell => <td>{cell}</td>)}
      </tr>
    );
  }

  const Thead = () => {
    const cols = getColumns();
    if (!cols) return null;
    return (
      <thead>
        <tr>
          {cols.map(col => <th>{col}</th>)}
        </tr>
      </thead>
    );
  };

  return (
    <table className={clsx} {...attr}>
      <Thead />
      {data ? data.map(getRow) : null}
      {children}
      {caption && <caption>{caption}</caption>}
    </table>
  );
};

export const TR = ({ children, ...attr }:React.HTMLAttributes<HTMLTableRowElement>) => (
  <tr {...attr}>{children}</tr>
);
