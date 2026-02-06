import { gallery } from "../assets/data/galleryData"


function Extra() {
  return (
    <section className="home">
      <h1>This is the Test Page</h1>
      <p>Nothing here yet! Just an example page!</p>

      {gallery.map(item => (
        <div key={item.date + '/' + item.filename}>
          <img src={item.url} alt={item.altText} />
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}

    </section>
  )
}

export default Extra