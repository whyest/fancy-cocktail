import styled from 'styled-components'

const Wrapper = styled.div`
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
    .form {
      padding: 1.5rem 1.5rem;
    }
  }
  .form {
    display: grid;
    grid-template-columns: 1fr auto;
  }
  .form-input {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .btn {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`

export default Wrapper
