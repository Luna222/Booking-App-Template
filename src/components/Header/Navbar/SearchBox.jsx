export default function SearchBox() {
  return (
    <div className="max-w-[1100px] w-[calc(100% - 10px)] absolute left-[50%] translate-x-[-50%] translate-y-[400px] z-[1]">
      <form>
        <div className="flex flex-col tablet:flex-row space-x-2 p-1 bg-[#FFB700] rounded-[8px] shadow-sm mt-6 mb-4">
          <div className="flex rounded bg-white">
            <div></div>
          </div>
        </div>
      </form>
    </div>
  );
}
