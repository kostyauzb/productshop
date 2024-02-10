import {nanoid} from "@reduxjs/toolkit"

let x = 0
export const id = () => {
  x += 1
  return x.toString()
}

export default [
  {
    id: id(),
    uid: nanoid(),
    title: "Product 1",
    image:
      "https://images.unsplash.com/photo-1707464568815-7fb6b6ea3e2a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis totam excepturi nesciunt. Nostrum odio voluptatum ea, accusantium adipisci quibusdam tenetur! Illo, id illum neque earum facilis distinctio reiciendis, soluta rem deleniti, expedita labore error? Veritatis facilis facere ex vel officia?",
    dataCount: 0,
    dataPrice: 31,
  },
  {
    id: id(),
    uid: nanoid(),
    title: "Product 1",
    image:
      "https://images.unsplash.com/photo-1707464568815-7fb6b6ea3e2a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis totam excepturi nesciunt. Nostrum odio voluptatum ea, accusantium adipisci quibusdam tenetur! Illo, id illum neque earum facilis distinctio reiciendis, soluta rem deleniti, expedita labore error? Veritatis facilis facere ex vel officia?",
    dataCount: 0,
    dataPrice: 23,
  },
  {
    id: id(),
    uid: nanoid(),
    title: "Product 1",
    image:
      "https://images.unsplash.com/photo-1707464568815-7fb6b6ea3e2a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis totam excepturi nesciunt. Nostrum odio voluptatum ea, accusantium adipisci quibusdam tenetur! Illo, id illum neque earum facilis distinctio reiciendis, soluta rem deleniti, expedita labore error? Veritatis facilis facere ex vel officia?",
    dataCount: 0,
    dataPrice: 42,
  },
  {
    id: id(),
    uid: nanoid(),
    title: "Product 1",
    image:
      "https://images.unsplash.com/photo-1707464568815-7fb6b6ea3e2a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis totam excepturi nesciunt. Nostrum odio voluptatum ea, accusantium adipisci quibusdam tenetur! Illo, id illum neque earum facilis distinctio reiciendis, soluta rem deleniti, expedita labore error? Veritatis facilis facere ex vel officia?",
    dataCount: 0,
    dataPrice: 13,
  },
  {
    id: id(),
    uid: nanoid(),
    title: "Product 1",
    image:
      "https://images.unsplash.com/photo-1707464568815-7fb6b6ea3e2a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis totam excepturi nesciunt. Nostrum odio voluptatum ea, accusantium adipisci quibusdam tenetur! Illo, id illum neque earum facilis distinctio reiciendis, soluta rem deleniti, expedita labore error? Veritatis facilis facere ex vel officia?",
    dataCount: 0,
    dataPrice: 53,
  },
]
