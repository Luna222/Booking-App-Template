export default function NavBarItem(props) {
  return (
    <a
      href="#"
      className={`shrink-0 px-5 py-3 ${
        props.active && 'border-[1.2px] bg-navyBlue-50/30'
      } rounded-3xl hover:bg-navyBlue-50/30`}
    >
      <i className={`fa ${props.icon} mr-2`}></i>
      <span>{props.type}</span>
    </a>
  );
}
