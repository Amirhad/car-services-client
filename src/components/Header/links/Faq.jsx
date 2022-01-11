import Scrollable from "./scrollableFolder/scrollable";
import "./linksStyles/faq.css";

const Faq = () => {

  const items = [
    {
      modal1: false,
      title: "Что такое замыкание?",
      text: "text",
    },
    {
      title: "Заголовок 2",
      text: "text",
    },
    {
      title: "Заголовок 3",
      text: "text",
    },
    {
      title: "Заголовок 4",
      text: "text",
    },
    {
      title: "Заголовок 5",
      text: "text",
    },
    {
      title: "Заголовок 6",
      text: "text",
    },
    {
      title: "Заголовок 7",
      text: "text",
    },
    {
      title: "Заголовок 8",
      text: "text",
    },
  ]

  return (
    <>
      <div className="container">
        <Scrollable _class="items">
          {items.map((item) => {
            return (
              <div className="item">
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </div>
            );
          })}
        </Scrollable>
      </div>
    </>
  );
};

export default Faq;
