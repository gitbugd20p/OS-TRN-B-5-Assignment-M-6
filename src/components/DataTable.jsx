import React, { useState } from "react";
import DataTableHeader from "./DataTableHeader";
import DataTableBody from "./DataTableBody";
import DataTableFooter from "./DataTableFooter";

const booksData = [
  {
    id: 1,
    name: "The Lost Pages",
    description: "An ancient manuscript reveals secrets of a forgotten world.",
    author: "Emily Carter",
    status: "Available",
    price: "35.00",
    offerPrice: "28.00",
    bgColor: "white",
  },
  {
    id: 2,
    name: "Whispers in the Wind",
    description: "A poetic journey through seasons of love and loss.",
    author: "Daniel Rivers",
    status: "Available",
    price: "22.00",
    offerPrice: "18.00",
    bgColor: "bg-gray-100",
  },
  {
    id: 3,
    name: "Digital Horizon",
    description: "A futuristic thriller about AI taking over the world.",
    author: "Sophia Lane",
    status: "Available",
    price: "40.00",
    offerPrice: "32.00",
    bgColor: "white",
  },
  {
    id: 4,
    name: "Beneath the Surface",
    description: "A deep-sea expedition uncovers more than just treasure.",
    author: "Mark Gill",
    status: "Not Available",
    price: "30.00",
    offerPrice: "24.00",
    bgColor: "bg-gray-100",
  },
  {
    id: 5,
    name: "The Midnight Library",
    description:
      "A young girl finds a library that lets her explore parallel lives.",
    author: "Nora Bennett",
    status: "Available",
    price: "27.00",
    offerPrice: "20.00",
    bgColor: "white",
  },
  {
    id: 6,
    name: "Echoes of the Past",
    description: "A family mystery unfolds across generations.",
    author: "Liam Ford",
    status: "Available",
    price: "38.00",
    offerPrice: "30.00",
    bgColor: "bg-gray-100",
  },
  {
    id: 7,
    name: "Fire in the Sky",
    description: "When meteors fall, a new era begins on Earth.",
    author: "Amelia Rose",
    status: "Available",
    price: "45.00",
    offerPrice: "35.00",
    bgColor: "white",
  },
  {
    id: 8,
    name: "The Alchemist's Diary",
    description: "A medieval alchemist’s notes could change modern science.",
    author: "Oliver Grant",
    status: "Available",
    price: "33.00",
    offerPrice: "25.00",
    bgColor: "bg-gray-100",
  },
  {
    id: 9,
    name: "Voices from Mars",
    description:
      "Messages from another planet begin to influence Earth’s politics.",
    author: "Isla Montgomery",
    status: "Available",
    price: "42.00",
    offerPrice: "36.00",
    bgColor: "white",
  },
  {
    id: 10,
    name: "A Garden Called Nowhere",
    description: "A surreal novel about a place outside time and space.",
    author: "Julian Frost",
    status: "Available",
    price: "29.00",
    offerPrice: "22.00",
    bgColor: "bg-gray-100",
  },
];

const DataTable = () => {
  const [allBooks, setAllBooks] = useState(booksData);
  const [books, setBooks] = useState(booksData);
  return (
    <div className="relative min-h-screen w-full">
      <DataTableHeader setBooks={setBooks} allBooks={allBooks} />
      <DataTableBody books={books} />
      <DataTableFooter />
    </div>
  );
};

export default DataTable;
