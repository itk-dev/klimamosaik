import styled from 'styled-components'
import Icon from '../Icons/Icons';
import { VARIANTS } from "../../constants";


const GridItem = ({ variant, title, description, image }) => {

  return (
    <Item className={variant}>
      <h1>{title}</h1>
      <p>{description}</p>
      <img src={image} alt=""/>
      <img src={Icon[variant]} alt=""/>
    </Item>
  );
}

const Item = styled.div`
  color: white;
  border-style: solid;
  border-width: 2px;
  border-color: transparent;
  width: 25vw;
  height: 25vh;

  &.one {
    --one-color: ${VARIANTS.one.color};
    background: var(--one-color);
    border-color: var(--one-color);
  }

  &.two {
    --two-color: ${VARIANTS.two.color};
    background: var(--two-color);
    border-color: var(--two-color);
  }

  &.tree {
    --tree-color: ${VARIANTS.tree.color};
    background: var(--tree-color);
    border-color: var(--tree-color);
  }

  &.four {
    --four-color: ${VARIANTS.four.color};
    background: var(--four-color);
    border-color: var(--four-color);
  }

  &.five {
    --five-color: ${VARIANTS.five.color};
    background: var(--five-color);
    border-color: var(--five-color);
  }

  &.six {
    --six-color: ${VARIANTS.six.color};
    background: var(--six-color);
    border-color: var(--six-color);
  }

  &.seven {
    --seven-color: ${VARIANTS.seven.color};
    background: var(--seven-color);
    border-color: var(--seven-color);
  }

  &.eight {
    --eight-color: ${VARIANTS.eight.color};
    background: var(--eight-color);
    border-color: var(--eight-color);
  }

  &.nine {
    --nine-color: ${VARIANTS.nine.color};
    background: var(--nine-color);
    border-color: var(--nine-color);
  }

  &.ten {
    --ten-color: ${VARIANTS.ten.color};
    background: var(--ten-color);
    border-color: var(--ten-color);
  }

  &.eleven {
    --eleven-color: ${VARIANTS.eleven.color};
    background: var(--eleven-color);
    border-color: var(--eleven-color);
  }

  &.twelve {
    --twelve-color: ${VARIANTS.twelve.color};
    background: var(--twelve-color);
    border-color: var(--twelve-color);
  }

  &.thirteen {
    --thirteen-color: ${VARIANTS.thirteen.color};
    background: var(--thirteen-color);
    border-color: var(--thirteen-color);
  }

  &.fourteen {
    --fourteen-color: ${VARIANTS.fourteen.color};
    background: var(--fourteen-color);
    border-color: var(--fourteen-color);
  }

  &.fifthteen {
    --fifthteen-color: ${VARIANTS.fifthteen.color};
    background: var(--fifthteen-color);
    border-color: var(--fifthteen-color);
  }

  &.sixteen {
    --sixteen-color: ${VARIANTS.sixteen.color};
    background: var(--sixteen-color);
    border-color: var(--sixteen-color);
  }

`

export default GridItem;
