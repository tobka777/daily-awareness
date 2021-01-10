import { gql, useQuery } from '@apollo/client';
import React from 'react';
import { useFela } from 'react-fela';

const GET_MESSAGES = gql`
  query MyQuery {
    messages(order_by: {created_at: desc}, where: {created_at: {_gt: \"2021-01-10\"}}) {
      id
      message
      updated_at
      user_id
      created_at
    }
  }
`;

function Home() {
  document.body.style.backgroundColor = "skyblue";
  const { css } = useFela();

  const { loading, error, data } = useQuery(GET_MESSAGES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return <div className={css({
	  font: "18px Arial Black, sans-serif",
	  fontWeight: 900,
    lineHeight: "28px",
    margin: 0,
    padding: "40vh 40px 0 40px",
    color: "#fff",
    textAlign: "center",
    textTransform: "uppercase"
  })}>{data.messages[0].message}</div>;
}

export default Home;