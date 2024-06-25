import FOOTER_DATA from '../../../../data/footer.json';

function ListItem(props) {
  return (
    <ul className="space-y-2">
      {props.values.map((item, idx) => (
        <li key={idx} className="hover:underline">
          <a href="#">{item}</a>
        </li>
      ))}
    </ul>
  );
}

export default function Info() {
  return (
    <div className="container-md grid grid-cols-3 tablet:grid-cols-5 justify-center items-start gap-6 tablet:gap-10 text-navyBlue-300 text-sm text-wrap">
      {FOOTER_DATA.map(({ col_number, col_values }) => (
        <ListItem key={col_number} values={col_values} />
      ))}
    </div>
  );
}
