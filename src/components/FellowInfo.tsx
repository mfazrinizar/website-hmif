type Props = {
  qty: number;
  text: string;
};

export default function FellowInfo({ qty, text }: Props) {
  return (
    <div className="space-y-2">
      <p className="text-3xl font-medium text-primary xl:text-4xl">{qty} +</p>
      <p className="text-xl xl:text-2xl">{text}</p>
    </div>
  );
}
