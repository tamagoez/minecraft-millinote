import useSWR from 'swr'

export default function HeadDetail({ link }) {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR('https://api.github.com/repos/ripenote/docs-minecraft-ripenote/commits?filepath=' + link.substring(1), fetcher)
  if (error) return <p>failed to load</p>
  if (!data) return <p>loading...</p>
  return <p>{data.sha}</p>
}
