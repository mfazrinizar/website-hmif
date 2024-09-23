export default function ProfileInfo() {
  return (
    <section
      id="profile-info"
      className="flex flex-col items-center justify-between gap-6 md:flex-row"
    >
      <img
        src="/img/big-logo-hmif.png"
        alt="logo-hmif"
        className="hidden md:block md:w-1/4"
      />
      <div className="space-y-6 md:w-3/5">
        <h4 className="text-left text-3xl font-medium text-primary">INTI</h4>
        <p className="text-left text-base md:text-xl">
          BPH Inti adalah bagian yang bertanggung jawab atas seluruh urusan
          internal dan eksternal HMIF UNSRI. BPH Inti bertanggung jawab atas
          memberi arahan, memantau, dan pembuat kebijakan tertinggi di HMIF
          UNSRI
        </p>
      </div>
    </section>
  );
}
