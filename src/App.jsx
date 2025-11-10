import { useState } from "react"

function App() {

  //array originale
  const articles = [
    {
      id: 1,
      title: 'come sopravvivere a boolean e arrivare a fine corso'
    },
    {
      id: 2,
      title: '10 motivi per mollare tutto e fuggire in Mexico'
    },
    {
      id: 3,
      title: 'le scelte.. come le scelte sbagliate ti hanno portato qua'
    },
    {
      id: 4,
      title: '5.300 motivi per finire boolean.. primo i soldi, idem per gli altri motivi'
    },
    {
      id: 5,
      title: 'come e perché gli array di oggetti sono il male fatto codice'
    },
    {
      id: 6,
      title: 'Sanità mentale? persa tempo fa, come la tua che hai letto tutti i titoli'
    }
  ]

  //importo uno state che mi permette di modificare l'array originale
  const [article, setArticle] = useState(articles)

  //creo un nuovo state che mi permetta di riscrivere l'array di partenza
  const [newTitle, setNewTitle] = useState('')

  //creo una funzione che mi permetta di aggiornare l'array
  function aggiornaTitoli(event) {
    event.preventDefault()

    if (newTitle.length > 0) {

      const nuovoTitolo = {
        id: article.length + 1,
        title: newTitle
      }

      setArticle([...article, nuovoTitolo])
      setNewTitle('')

    } else {
      alert('OCCHIO NON PUOI METTERE UN TITOLO VUOTO')
    }


  }




  return (
    <>
      <div>
        <h1>WWW.ARTICOLI-FINTI.COM</h1>
        <ul>
          {article.map((obj) => (
            <li key={obj.id}>
              {obj.title}
            </li>
          ))}
        </ul>

        <form onSubmit={aggiornaTitoli}>
          <input type="text" placeholder="inserisci il titolo del nuovo articolo" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
          <button type="submit">Nuovo articolo</button>
        </form>

      </div>


    </>
  )
}

export default App
