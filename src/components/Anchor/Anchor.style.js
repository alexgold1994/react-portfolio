import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
`
export const Slider = styled.div`
  position: fixed;
  top: 0;
  right: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transform: translateY(-100%);
  .chain {
    transform: rotate(135deg);
  }
`

export const PreDisplay = styled.div`
  position: absolute;
  top: 0;
  right: 2rem;
`
