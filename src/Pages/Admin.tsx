// it was the first video that appeared on my feed
export default function Admin (): JSX.Element {
  return (
    <section className="flex flex-col items-center">
      <h1 className="text-center text-2xl">Admin</h1>
      <iframe className="mt-5" width="600" height="400" src="https://www.youtube.com/embed/tTrrU3yzBHE" title="La Guardia Costera de EE. UU. confirma la muerte de los cinco tripulantes del submarino perdido" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </section>
  )
}
