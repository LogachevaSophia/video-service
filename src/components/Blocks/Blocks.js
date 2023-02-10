import "./Blocks.css";
import { useState } from "react";

import BlockItem from "../BlockItem/BlockItem";
import ModalBlock from "../ModalBlock/ModaLBlock";

function Blocks(props) {
  const { data } = props;
  const [modalActive, setModaActive] = useState(false);
  const [activeIdBlock, setIdBlock] = useState(-1);
  const [images, setImages] = useState([]);
  const [filter, setFilter] = useState("");

  // {
  //   id: 1,
  //   link:  'https://ucarecdn.com/83e1d423-ddf3-433c-9c71-3a1e6f255984/noroot.jpg',
  //   description: "Как правильно вкладываться",
  // },
  // {
  //   id: 2,
  //   link:  'https://ucarecdn.com/83e1d423-ddf3-433c-9c71-3a1e6f255984/noroot.jpg',
  //   description: "Куда лучше вкладываться",
  // },
  // {
  //   id: 3,
  //   link:  'https://ucarecdn.com/83e1d423-ddf3-433c-9c71-3a1e6f255984/noroot.jpg',
  //   description: "Зачем вкладываться",
  // },

  const searchEmp = (data, filter) => {
    if (filter.length === 0) {
      return data;
    }

    return data.filter((elem) => {
      return elem.description.toLowerCase().indexOf(filter.toLowerCase()) >-1;
    });
  };
  const visibleData = searchEmp(data, filter);

  return (
    <div>
      <div className="filter">
        <input
          type="text"
          name="textFilter"
          onChange={(e) => {console.log(e.target.value);setFilter(e.target.value)}}
          placeholder='Поиск'
        ></input>
      </div>
      <div className="blocks">
        {visibleData.map((item) => {
          const { id, link, description } = item;
          return (
            <BlockItem
              key={id}
              link={link}
              id={id}
              // setModaActive={setModaActive}
              idBlock={setIdBlock}
              description={description}
              setImages={setImages}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Blocks;
