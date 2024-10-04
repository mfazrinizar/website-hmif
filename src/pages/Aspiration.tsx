import { FormAspiration } from "@/components/Aspiration/FormAspiration";

export default function Aspiration() {
  return (
    <section id="aspiration" className="mx-auto space-y-8 text-center md:w-3/4">
      <div className="mx-auto space-y-8 md:w-3/4">
        <h1 className="text-3xl font-bold text-primary xl:text-4xl">
          Aspiration
        </h1>
        <p className="text-center text-base xl:text-xl">
          Bagikan aspirasi, saran, dan ide Anda untuk membantu kami tumbuh dan
          berkembang. Pendapat Anda sangat berarti bagi kemajuan bersama.
        </p>
      </div>
      <div className="rounded-xl border-2 border-muted">
        <FormAspiration />
      </div>
    </section>
  );
}
