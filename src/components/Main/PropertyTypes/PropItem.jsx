export default function PropItem(props) {
  return (
    <figure
      id="animated-property"
      className="grow shrink-0 flex flex-col justify-start items-start space-y-1 group relative m-3 first-child:ml-0 last-child:mr-0 h-64 w-64 opacity-0 transform transition-all delay-150 duration-500 ease-out animate-fade-in-up"
    >
      <img
        src={props.image}
        alt="Delightful City"
        className="w-full h-[200px] object-cover rounded-t-xl"
      />
      <div className="overlay absolute p-6 inset-0 backdrop-brightness-100 backdrop-filter transition-all duration-200 ease-in-out group-hover:bg-white/50 group-hover:backdrop-brightness-105 rounded-xl"></div>

      <div className="font-medium">
        <p className="text-xl">{props.name}</p>
        <p className="text-gray-500">{props.count}&nbsp;hotels</p>
      </div>
    </figure>
  );
}
