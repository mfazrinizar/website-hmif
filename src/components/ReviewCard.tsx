export default function ReviewCard() {
  return (
    <div className="space-y-4 rounded-xl bg-white p-4">
      <h5 className="text-xl font-medium text-primary">
        “Kuatkan Formasi, <br /> Wujudkan Inovasi”
      </h5>
      <p className="text-base font-normal">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
        Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
        mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
        tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non
        suscipit magna interdum eu.{" "}
      </p>
      <div className="flex items-center gap-6">
        <img
          src="/img/review-dzawil.png"
          alt="review-dzawil"
          className="size-20"
        />
        <div className="font-medium text-primary">
          <h3 className="text-lg">M Dzawil Fadhol Abidullah</h3>
          <label className="text-base">Ketua Himpunan</label>
        </div>
      </div>
    </div>
  );
}
