type Props = {
  name: string;
};

export default function ProkerDetailItem({ name }: Props) {
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
}
