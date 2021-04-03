import styled from 'styled-components'

export const Title = styled.h1.attrs({ 'data-testid': 'title' })`
  color: ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;
  font-size: 24px;
  position: relative;
  margin: 20px 0;

  &::before {
    content: ' ';
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 2px;
    background: #f90;
    border-radius: 10px;
  }
`
