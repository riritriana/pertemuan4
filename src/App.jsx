import { useState } from "react";

import "./index.css";
import Button from "./components/Button";
const datas = [
  {
    id: 1,
    name: "lemari",
    price: 3000000,
    photo:
      "https://tse1.mm.bing.net/th?id=OIP.-FRdbzlrB5iK8leOy7tBUwHaHa&pid=Api&P=0&h=180",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus vitae hic ad ipsum quaerat provident at sed natus, velit suscipit excepturi voluptatum alias animi quidem exercitationem voluptatibus maiores nihil obcaecati?",
  },
  {
    id: 2,
    name: "Kursi",
    price: 1000000,
    photo:
      "https://tse1.mm.bing.net/th?id=OIP.TpEZPB1l5xh398zomdTGOQHaID&pid=Api&P=0&h=180",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus vitae hic ad ipsum quaerat provident at sed natus, velit suscipit excepturi voluptatum alias animi quidem exercitationem voluptatibus maiores nihil obcaecati?",
  },
  {
    id: 3,
    name: "Meja",
    price: 2000000,
    photo:
      "https://tse3.mm.bing.net/th?id=OIP.ZAZWdK4ZIu7eKGhFbMs1QgAAAA&pid=Api&P=0&h=180",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus vitae hic ad ipsum quaerat provident at sed natus, velit suscipit excepturi voluptatum alias animi quidem exercitationem voluptatibus maiores nihil obcaecati?",
  },
];
export default function App() {
  const [count, setCount] = useState(0);
  const [like, setLike] = useState(false);
  const [show, setShow] = useState(false);
  let data = datas[count];
  function handleClik() {
    setCount((count + 1) % datas.length);
  }
  function handleLike() {
    setLike(!like);
  }
  function handleShow() {
    setShow(!show);
  }
  return (
    <div className="h-screen w-screen flex flex-col gap-8 justify-center items-center">
      <div
        className="bg-red-200 flex justify-center items-center gap-2 w-1/3  p-2"
        onClick={() => alert("ini tombol div")}
      >
        <Button onClick={() => alert("Playing !")}>play movie</Button>
        <Button onClick={() => alert("Uploading !")}>Uploading image</Button>
      </div>
      <div>
        {data && (
          <div className="flex flex-col justify-center items-center bg-white shadow-lg p-6 rounded-lg mb-4">
            <div className="mb-4">
              <img src={data.photo} alt="" />
            </div>
            <p className="text-sm text-gray-600 mb-2">
              ({count + 1} dari {datas.length})
            </p>

            <p className="text-lg font-bold text-gray-800 mb-2">{data.name}</p>
            <p className="text-md text-gray-700 mb-2">{data.price}</p>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg mb-2 hover:bg-blue-600 transition"
              onClick={handleShow}
            >
              {show ? "Sembunyikan" : "Tampilkan"} Detail
            </button>
            {show && <p>{data.description}</p>}
          </div>
        )}
        <div className="flex gap-2 justify-center items-center">
          <button className="shadow-xl bg-slate-300 p-1" onClick={handleClik}>
            Next
          </button>
          <button className="shadow-xl bg-slate-300 p-1" onClick={handleLike}>
            {like ? "Batal suka" : "suka"}
          </button>
        </div>
        {/* <p></p> */}
      </div>
    </div>
  );
}
