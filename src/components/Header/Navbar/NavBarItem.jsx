export default function NavBarItem(props) {
  return (
    <a
      href="#"
      className={`px-5 py-3 mr-4 ${
        props.active && 'border-[1.2px]'
      } rounded-3xl hover:bg-navyBlue-200`}
    >
      <i className={`fa ${props.icon} mr-2`}></i>
      <span>{props.type}</span>
    </a>
  );
}
