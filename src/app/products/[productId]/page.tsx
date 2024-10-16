export default function ProductId({params}: {params : { productId: string}}) {
  return (
    <>
      <div>Details : {params.productId}</div>
    </>
  );
}
