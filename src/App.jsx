// import Gallery, { Profile } from "./Gallery.jsx"

// export default function App() {
//   return (
//     <>
//       <Gallery />
//       <Profile />
//     </>
//   );
// }

const today = new Date();

function formatDate(date) {
  return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
}

export default function TodoList() {
  return <h1>To do list for {formatDate(today)}</h1>;
}
