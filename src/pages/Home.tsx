import { gql, useQuery } from '@apollo/client';
import React from 'react';
import { useFela } from 'react-fela';
import Stories from 'react-insta-stories';

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
  const [width, setWidth] = React.useState(0);
  const [height, setHeight] = React.useState(0);

  React.useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  });

  const { loading, error, data } = useQuery(GET_MESSAGES, {
    variables: {},
    pollInterval: 10000,
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const stories = data.messages.map(msg => {
    return {
      content: ({ action, isPaused }) => {
        return <div className={css({
          font: "18px Arial Black, sans-serif",
          fontWeight: 900,
          lineHeight: "4vw",
          margin: 0,
          padding: "40px",
          textAlign: "center",
          //textTransform: "uppercase",
          width: '100%',
          fontSize: '4vw',
          //background: 'Aquamarine', 
          background: '#'+Math.random().toString(16).substr(-6), 
          color: '#16161d',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        })}>
           {msg.message}
        </div>
      }
    };
  });


  return <Stories
      stories={stories}
      defaultInterval={8000}
      loop={true}
      keyboardNavigation
      width={width}
      height={height}
    />;

  return <div className={css({
	  font: "18px Arial Black, sans-serif",
	  fontWeight: 900,
    lineHeight: "28px",
    margin: 0,
    padding: "40vh 40px 0 40px",
    color: "#fff",
    textAlign: "center",
    textTransform: "uppercase"
  })}>{data.messages && data.messages.length > 0 && data.messages[0].message}</div>;
}

export default Home;