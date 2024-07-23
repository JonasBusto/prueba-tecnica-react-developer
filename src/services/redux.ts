export const getData = async () => {
  const res = await fetch(
    `https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json`
  );
  const data = await res.json();
  return data.entries;
};
