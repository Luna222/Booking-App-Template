export default function DetailArticle(props) {
  return (
    <article>
      <div className="container-md flex flex-col space-y-6 tablet:space-y-10">
        <div className="flex flex-col space-y-2">
          <h2></h2>
          <p></p>
          <p></p>
          <p></p>

          <div className="grid grid-cols-2 tablet:grid-cols-3 items-start gap-1"></div>
        </div>

        <div className="tablet:flex tablet:justify-start tablet:items-start space-x-4 text-wrap">
          <div className="tablet:shrink desktop:grow">
            <h2></h2>
          </div>
          <div className="tablet:grow-0 tablet:shrink"></div>
        </div>
      </div>
    </article>
  );
}
