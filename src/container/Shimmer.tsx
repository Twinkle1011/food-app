// import { Image, Shimmer } from 'react-shimmer'

// function ShimmerComp() {
//   return (
//     <div>
//       <Image
//         src='https://source.unsplash.com/random/800x600'
//         fallback={<Shimmer width={800} height={600} />}
//       />
//     </div>
//   )
// }

const Shimmer = (): JSX.Element => {
  return (
    <div className="shimmer-container">
      <div className="shimmer-card"> </div>
      <div className="shimmer-card"> </div>
      <div className="shimmer-card"> </div>
      <div className="shimmer-card"> </div>
      <div className="shimmer-card"> </div>
      <div className="shimmer-card"> </div>
      <div className="shimmer-card"> </div>
      <div className="shimmer-card"> </div>
      <div className="shimmer-card"> </div>
      <div className="shimmer-card"> </div>
      <div className="shimmer-card"> </div>
    </div>
  );
};

export default Shimmer;
