export async function getServerSideProps(context) {
  console.log('Server side context', context);
  // request API Data
  return {
    props: {
      title: 'About Me',
    },
  };
}

export default function AboutMe(props) {
  console.log('This should run client side', props);

  return (
    <div>
      <h1>About Me Page!</h1>
    </div>
  );
}
