import styled from "styled-components";
import contentList from "assets/data/content-list";

function ItemList() {
  return (
    <Container>
      {contentList.map((item) => (
        <Item key={item.id}>
          <img src={item.img} alt="thumbnail" />
          <p className="title">{item.title}</p>
          <p className="description">{item.description}</p>
        </Item>
      ))}
    </Container>
  );
}

export default ItemList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  min-height: 100%;
  padding-inline: 24px;
  padding-bottom: 100px;
  box-sizing: border-box;
`;

const Item = styled.div`
  display: grid;
  grid-template-areas:
    "thumbnail title"
    "thumbnail description";
  grid-template-columns: 72px 1fr;
  column-gap: 16px;
  row-gap: 10px;
  width: 100%;
  padding: 14px;
  box-sizing: border-box;
  border-radius: 12px;
  overflow: hidden;
  background: #f6f5f5;

  img {
    width: 72px;
    height: 72px;
    object-fit: cover;
    border-radius: 6px;
    overflow: hidden;
    grid-area: thumbnail;
  }

  .title {
    width: 100%;
    height: fit-content;
    grid-area: title;
    color: #25262b;
    font-size: 16px;
    font-weight: 600;
    line-height: 155%;
    margin-top: 2px;
  }

  .description {
    grid-area: description;
    width: 100%;
    height: fit-content;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #696a6c;
    font-size: 13px;
    font-weight: 400;
    line-height: 125%;
    margin-bottom: 4px;
  }
`;
