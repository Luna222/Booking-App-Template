export default function SearchForm() {
  return (
    // <form className="col-span-2">
    //   {/* control */}
    //   {/* action */}
    // </form>

    <form action="" className="space-y-3">
      {/* control */}
      <div>
        <label className="txt-label">Destination</label>
        <input
          type="text"
          className="w-full p-2 border rounded"
          placeholder="Where are you going?"
        />
      </div>
      <div>
        <label className="block text-white">Check-in Date</label>
        <input
          type="text"
          className="w-full p-2 border rounded"
          placeholder="06/24/2022 to 06/24/2022"
        />
      </div>
      <div>
        <label className="block text-white">Options</label>
        <div className="space-y-2">
          <div>
            <label className="block text-white">Min price per night</label>
            <input type="text" className="w-full p-2 border rounded" />
          </div>
          <div>
            <label className="block text-white">Max price per night</label>
            <input type="text" className="w-full p-2 border rounded" />
          </div>
          <div>
            <label className="block text-white">Adult</label>
            <input type="number" class="w-full p-2 border rounded" value="1" />
          </div>
          <div>
            <label class="block text-white">Children</label>
            <input
              type="number"
              className="w-full p-2 border rounded"
              value="0"
            />
          </div>
          <div>
            <label className="block text-white">Room</label>
            <input
              type="number"
              className="w-full p-2 border rounded"
              value="1"
            />
          </div>
        </div>
      </div>

      {/* action */}
      <button className="w-full bg-blue-700 text-white p-2 rounded">
        Search
      </button>
    </form>
  );
}
